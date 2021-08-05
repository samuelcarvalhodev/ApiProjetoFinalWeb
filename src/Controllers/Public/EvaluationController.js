import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const {
    evaluation_type,
    evaluation_grade,
    menu_items_id,
    commentary,
    evaluation_date,
    user_id,
  } = req.body;

  await client.connect();

  const registerEvaluation =
    "INSERT INTO avaliacao (evaluation_type , evaluation_grade , menu_items_id, commentary , evaluation_date , user_id) VALUES ($1,$2,$3,$4,$5,$6)";

  await client.query(registerEvaluation, [
    evaluation_type,
    evaluation_grade,
    menu_items_id,
    commentary,
    evaluation_date,
    user_id,
  ]);

  await client.end();

  res.json({message: "Cadastro efetuado com sucesso!" });
}



