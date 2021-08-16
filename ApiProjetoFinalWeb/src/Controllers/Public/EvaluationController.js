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

  res.json({message: "Cadastro efetuado com sucesso!" });
}

export async function GetAll(req, res) {
  try {
    const listAllAvaliacao = "SELECT * FROM avaliacao;";

    const avaliacao = await client.query(listAllAvaliacao);
   
    if (
      avaliacao.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
          
    return res.json({ Avaliacao: avaliacao.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetById(req, res) {
  try {
    const { id } = req.params;

    const listAvaliacao = "SELECT * FROM avaliacao WHERE id = $1;";

    const avaliacao = await client.query(listAvaliacao, [id]);
    
    if (
      avaliacao.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
      
    return res.json({ Avaliacao: avaliacao.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}