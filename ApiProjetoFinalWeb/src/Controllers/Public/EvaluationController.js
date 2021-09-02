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

  res.status(200).json({message: "Cadastro efetuado com sucesso!" });
}

export async function GetAll(req, res) {
  try {
    const listAllAvaliacao = "SELECT * FROM avaliacao;";

    const avaliacao = await client.query(listAllAvaliacao);
   
    if (
      avaliacao.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
          
    return res.status(200).json({ Avaliacao: avaliacao.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
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
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
      
    return res.status(200).json({ Avaliacao: avaliacao.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetByQuantity(req, res){
  try {
    const {quantidade} = req.params;

    const listQuantidade = `SELECT * FROM avaliacao LIMIT $1`;

    const avaliacao = await client.query(listQuantidade, [quantidade]);

    if (
      avaliacao.rows.length == 0
    )
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
        
    return res.status(200).json({ avaliacao: avaliacao.rows });
  } catch (error) {
    return res.status(400).json({messge: "Nao existe nenhum correspondente"});
  }
}


export async function GetByEvaluationType(req, res){
  try {
    const {type} = req.params;

    const listByEvaluationType = `SELECT * FROM avaliacao WHERE evaluation_type=$1`;

    const avaliacao = await client.query(listByEvaluationType, [type]);

    if (avaliacao.rows.length == 0){
    return res.status(404).json({ message: "Não existe nenhum correspondente" });
    }
    return res.status(200).json({ Avaliacao: avaliacao.rows });
  } catch (error) {
    return res.status(400).json({messge: "Nao existe nenhum correspondente"});
  }
}


export async function Edit(req, res){
  try {
    const { id } = req.params;
    const { 
      evaluation_type,
      evaluation_grade,
      menu_items_id,
      commentary,
      evaluation_date,
      user_id } = req.body;
      
      const updateAvaliacao = `UPDATE avaliacao SET 
      evaluation_type = $1,
      evaluation_grade = $2,
      menu_items_id = $3,
      commentary = $4,
      evaluation_date = $5,
      user_id = $6 WHERE id = $7`;
      
      const avaliacao = await client.query(updateAvaliacao, [
        evaluation_type,
        evaluation_grade,
        menu_items_id,
        commentary,
        evaluation_date,
        user_id,
        id
      ]);
      
      console.log(avaliacao)
      
      if(avaliacao.rowCount == 0){
        return res.status(404).json({message: "Não existe nenhuma avaliação correspondente"});
      } else{
        return res.status(200).json({message: "Avaliação atualizado com sucesso"})
      }
    } catch (error) {
      return res.status(400).json({message: "Não existe nenhum correspondente"});
    }
  }
  
  
  export async function Delete(req, res){
    try {
      const { id } = req.params;
  
      const deleteAvaliacao = "DELETE FROM avaliacao WHERE id = $1;";
  
      const avaliacao = await client.query(deleteAvaliacao, [id]);
  
      if(avaliacao.rowCount == 0){
        return res.status(404).json({message: "Não existe nenhuma avaliação correspondente"});
      } else{
        return res.status(200).json({message: "Deletado com sucesso"})
      }
    } catch (error) {
      return res.status(400).json({message: "Não existe nenhum correspondente"});
    }
  }