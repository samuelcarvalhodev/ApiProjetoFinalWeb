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

  res.status(200).json({message: "Cadastro efetuado com sucesso!" });
}

export async function GetAll(req, res) { 
  try {
    const listAllOpcao = "SELECT * FROM opcao;";

    const opcao = await client.query(listAllOpcao);
    
    if (
      opcao.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
      
    return res.status(200).json({ Option: opcao.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
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
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
  

    return res.status(200).json({ Option: opcao.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function Delete(req, res){
  try {
    const { id } = req.params;

    const deleteOpcao = "DELETE FROM opcao WHERE id = $1;";

    const opcao = await client.query(deleteOpcao, [id]);

    if(opcao.rowCount == 0){
      return res.status(404).json({message: "Não existe nenhuma opcao correspondente"});
    } else{
      return res.status(200).json({message: "Deletado com sucesso"})
    }
  } catch (error) {
    return res.status(400).json({message: "Não existe nenhum correspondente"});
  }
}

export async function Edit(req, res){
  try {
    const { id } = req.params;
    const { 
      option_name,
      description,
      energetic_value,
      carbohydrate,
      protein,
      total_fat,
      image_food,
      type_option } = req.body;

    const updateOpcao = `UPDATE opcao SET 
    option_name = $1,
    description = $2,
    energetic_value = $3,
    carbohydrate = $4,
    protein = $5,
    total_fat = $6,
    image_food = $7,
    type_option = $8 WHERE id = $9`;

    const opcao = await client.query(updateOpcao, [
      option_name,
      description,
      energetic_value,
      carbohydrate,
      protein,
      total_fat,
      image_food,
      type_option, 
      id
    ])
    
    if(opcao.rowCount == 0){
      return res.status(404).json({message: "Não existe nenhuma opcao correspondente"});
    } else{
      return res.status(200).json({message: "Opcao atualizado com sucesso"})
    }
  } catch (error) {
    return res.status(400).json({message: "Não existe nenhum correspondente"});
  }
}

export async function GetByQuantity(req, res){
  try {
    const {quantidade} = req.params;

    const listQuantidade = `SELECT * FROM opcao LIMIT $1`;

    const opcao = await client.query(listQuantidade, [quantidade]);

    if (
      opcao.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
        
    return res.status(200).json({ opcao: opcao.rows });
  } catch (error) {
    return res.status(400).json({messge: "Nao existe nenhum correspondente"});
  }
}



export async function GetByOptionName(req, res){
  try {
    const {type} = req.params;

    const listByOptionName = `SELECT * FROM public.opcao WHERE option_name LIKE '%${type}%'`;

    const opcao = await client.query(listByOptionName);

    if (opcao.rows.length == 0){
    return res.status(404).json({ message: "Não existe nenhum correspondente, verifique o nome e tente novamente!" });
    }
    return res.status(200).json({ Opcao: opcao.rows });
  } catch (error) {
    return res.status(400).json({error: "Nao existe nenhum correspondente"});
  }
}