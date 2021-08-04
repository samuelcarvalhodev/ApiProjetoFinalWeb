import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { username, password, cro, registration, sex, course, typeUser } =
    req.body;

  await client.connect();

  const userNameValidate = "SELECT username FROM usuario WHERE username = $1";
  const userNameResponse = await client.query(userNameValidate, [username]);
  if (userNameResponse.rowCount > 0) {
    return res.status(400).json({ message: "Username já existe" });
  }

  if (cro) {
    const croValidate = "SELECT cro FROM usuario WHERE cro = $1";
    const croResponse = await client.query(croValidate, [cro]);
    if (croResponse.rowCount > 0) {
      return res.status(400).json({ message: "cro já existe" });
    }
  }

  if (registration) {
    const registrationValidate =
      "SELECT registration FROM usuario WHERE registration = $1";
    const registrationResponse = await client.query(registrationValidate, [
      registration,
    ]);
    if (registrationResponse.rowCount > 0) {
      return res.status(400).json({ message: "Matrícula já existe" });
    }
  }

  const registerUser =
    "INSERT INTO usuario (username, password, cro, registration, sex, course, typeuser) VALUES ($1,$2,$3,$4,$5,$6, $7)";

  await client.query(registerUser, [
    username,
    password,
    cro,
    registration,
    sex,
    course,
    typeUser,
  ]);

  await client.end();

  res.send("sucess");
}
