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

  await client.connect();

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

  await client.end();

  res.json({message: "Cadastro efetuado com sucesso!" });
}


