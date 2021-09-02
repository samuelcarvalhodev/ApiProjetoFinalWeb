import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { username, password, cro, registration, sex, course, typeUser } =
    req.body;

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

  const UserRegister = await client.query(registerUser, [
    username,
    password,
    cro,
    registration,
    sex,
    course,
    typeUser,
  ]);

  return res.status(200).json({message: "Cadastrado com sucesso" });
}

export async function GetAll(req, res) {
  try {
    const listAllUsuario = "SELECT * FROM usuario;";

    const usuario = await client.query(listAllUsuario);
    
    if (
      usuario.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
      
      
    return res.json({ Usuario: usuario.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  } 
}

export async function GetById(req, res) {
  try {
    const { id } = req.params;

    const listUsuario = "SELECT * FROM usuario WHERE id = $1;";

    const usuario = await client.query(listUsuario, [id]);
    
    if (
      usuario.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });     

    return res.json({ Usuario: usuario.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}

export async function Dell(req, res){
  try {
    const { id } = req.params;

    const deleteUsuario = "DELETE FROM usuario WHERE id = $1;";

    const usuario = await client.query(deleteUsuario, [id]);

    if(usuario.rowCount == 0){
      return res.json({message: "Não existe nenhum usuario correspondente"});
    } else{
      return res.json({message: "Deletado com sucesso"})
    }
  } catch (error) {
    return res.json({message: "Não existe nenhum correspondente"});
  }
}

export async function Edit(req, res){
  try {
    const { id } = req.params;
    const { username, password, cro, registration, sex, course, typeUser } =
    req.body;

    const updateUsuario = `UPDATE usuario SET 
    username = $1, password = $2, cro = $3, registration = $4, sex = $5, course = $6, 
    typeuser = $7 WHERE id = $8`;

    const usuario = await client.query(updateUsuario, [
      username, 
      password, 
      cro, 
      registration, 
      sex, 
      course, 
      typeUser, 
      id
    ])
    
    if(usuario.rowCount == 0){
      return res.json({message: "Não existe nenhum usuario correspondente"});
    } else{
      return res.json({message: "Usuario atualizado com sucesso"})
    }
  } catch (error) {
    return res.json({message: "Não existe nenhum correspondente"});
  }
}

export async function Quantidade(req, res){
  try {
    const {quantidade} = req.params;

    const listQuantidade = `SELECT * FROM usuario LIMIT $1`;

    const usuario = await client.query(listQuantidade, [quantidade]);

    if (
      usuario.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
        
    return res.json({ usuario: usuario.rows });
  } catch (error) {
    return res.json({messge: "Nao existe nenhum correspondente"});
  }
}