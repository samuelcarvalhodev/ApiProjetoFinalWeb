import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const {
    option_name,
    description,
    energetic_value,
    carbohydrate,
    protein,
    total_fat,
    image_food,
    type_option
  } = req.body;

  const registerOption =
    "INSERT INTO opcao (option_name, description, energetic_value, carbohydrate, protein, total_fat, image_food, type_option) VALUES ($1,$2,$3,$4,$5,$6, $7, $8)";

  await client.query(registerOption, [
    option_name,
    description,
    energetic_value,
    carbohydrate,
    protein,
    total_fat,
    image_food,
    type_option
  ]);

  res.json({message: "Cadastro efetuado com sucesso!" });
}

export async function GetAll(req, res) { 
  try {
    const listAllOpcao = "SELECT * FROM opcao;";

    const opcao = await client.query(listAllOpcao);
    
    if (
      opcao.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
      
    return res.json({ Option: opcao.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetById(req, res) {
  try {
    const { id } = req.params;

    const listOpcao = "SELECT * FROM opcao WHERE id = $1;";

    const opcao = await client.query(listOpcao, [id]);
    
    if (
      opcao.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
  

    return res.json({ Option: opcao.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}