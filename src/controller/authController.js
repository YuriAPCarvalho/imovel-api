const { login, authenticateGoogle } = require("../models/usuario");

const authController = {
  async login(req, res) {
    try {
      const errors = [];
      if (!req.body.email) {
        errors.push("Email Obrigatório");
      }

      if (!req.body.senha) {
        errors.push("Senha é obrigatória");
      }

      if (errors.length > 0) {
        return res.status(400).send({ errors });
      }
      const user = await login(req.body);
      return res.status(200).send(user);
    } catch (error) {
      console.log(`[ERRO - Post /login] : ${error.message}`);
      res.status(error.status).json({
        message: "Erro ao realizar login",
      });
    }
  },

  async authenticateGoogle(req, res) {
    try {
      let formatted_user = {
        code: req.user.id,
        name: req.user.displayName,
        email: req.user.emails[0].value,
        active: true,
      };
      const user = await authenticateGoogle(formatted_user);
      const query = qs.stringify(user);
      return res.redirect("http://localhost:3000/#/inquilino?" + query);
    } catch (error) {
      console.log(`[ERRO - GET /google/callback] : ${error.message}`);
      res.status(500).json({
        message: "Erro ao autenticar usuário",
      });
    }
  },
};

module.exports = authController;
