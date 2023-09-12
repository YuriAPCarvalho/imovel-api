const { decodeAuthToken } = require("../helpers/TokenHelper");
const asyncHandler = require("express-async-handler");

class AuthMiddleware {
  static apply(roles = []) {
    return (req, res, next) => {
      try {
        const authHeader = req.headers.authorization;
        
        // Verifique se o cabeçalho de autorização começa com "Bearer"
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).send("Not Authorized");
        }

        const [, tokenAuthorization] = authHeader.split(" ");

        if (!tokenAuthorization) {
          return res.status(401).send("Not Authorized");
        }

        const decodedToken = decodeAuthToken(tokenAuthorization);

        if (roles.includes(decodedToken.perfil)) {
          req.user = decodedToken;
          return next();
        }

        return res.status(401).send("Not Authorized");
      } catch (e) {
        return res.status(401).send("Not Authorized");
      }
    };
  }
}

const isAdmin = asyncHandler((req, res, next) => {
  if (req.user.perfil !== 'ADMINISTRADOR') {
    return res.status(401).json({ message: 'Você não é um administrador' });
  }

  next();
});

const isOperator = asyncHandler((req, res, next) => {
  if (req.user.perfil !== 'OPERADOR') {
    return res.status(401).json({ message: 'Você não é um operador' });
  }

  next();
});


module.exports = { AuthMiddleware, isAdmin, isOperator };


