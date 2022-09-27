// const { response, request } = require("express");
// const bcryptjs = require("bcryptjs");

const User = require("../models/user");

const usersGet = async (req, res) => {
  res.json({ msg: "usuariosGet" });
};

const usersPost = async (req, res) => {
  res.json({ msg: "usuariosPost" });
};

const usersPut = async (req, res) => {
  res.json({ msg: "usuariosPut" });
};

const usersDelete = async (req, res) => {
  res.json({ msg: "usuariosDelete" });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
