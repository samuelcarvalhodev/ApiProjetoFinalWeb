import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { type_option, option_name, date_menu, option_id, image_food } =
    req.body;

  await client.connect();

  const registerMenu =
    "INSERT INTO cardapio(type_option, option_name, date_menu, option_id, image_food)	VALUES ($1,$2,$3,$4,$5);";

  await client.query(registerMenu, [
    type_option,
    option_name,
    date_menu,
    option_id,
    image_food,
  ]);

  await client.end();

  res.json({ message: "Cadastro efetuado com sucesso!" });
}


