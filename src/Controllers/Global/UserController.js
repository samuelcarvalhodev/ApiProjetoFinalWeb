import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { username, password, cro, registration, sex, course, typeUser } =
    req.body;

  await client.connect();

  if (cro) {
    const croValidate = "SELECT cro FROM usuario WHERE cro = $1";
    const croResponse = await client.query(croValidate, [cro]);
    if (croResponse.rowCount > 0) {
      await client.end();
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
      await client.end();
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

  return res.send("sucess");
}



export async function GetAll(req, res) {
  
  await client.connect();

  try {
    const listAllUsuario = "SELECT * FROM usuario;";

    const usuario = await client.query(listAllUsuario);

    
    if (
      usuario.rows.length == 0
      )
      return res.json({ message: "Não existe nenhum correspondente" });
      
      await client.end();
      return res.json({ Usuario: usuario.rows });
    } catch (error) {
      return res.json({ message: "Não existe nenhum correspondente" });
    }
  
}

export async function GetById(req, res) {
  
  await client.connect();
  try {
    const { id } = req.params;

    const listUsuario = "SELECT * FROM usuario WHERE id = $1;";

    const usuario = await client.query(listUsuario, [id]);
    
    if (
      usuario.rows.length == 0
      )
      return res.json({ message: "Não existe nenhum correspondente" });
      
      await client.end();

    return res.json({ Usuario: usuario.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}
