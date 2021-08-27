import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { type_option, option_name, date_menu, option_id, image_food } = req.body;

  const registerMenu =
    "INSERT INTO cardapio(type_option, option_name, date_menu, option_id, image_food)	VALUES ($1,$2,$3,$4,$5);";

  await client.query(registerMenu, [
    type_option,
    option_name,
    date_menu,
    option_id,
    image_food,
  ]);
  
  res.json({ message: "Cadastro efetuado com sucesso!" });
}

export async function GetAll(req, res) {
  try {
    const listAllMenu = "SELECT * FROM cardapio;";

    const menu = await client.query(listAllMenu);
    
    if (
      menu.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
        
    return res.json({ Menu: menu.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  } 
}

export async function GetById(req, res) {  
  try {
    const { id } = req.params;

    const listMenu = "SELECT * FROM cardapio WHERE id = $1;";

    const menu = await client.query(listMenu, [id]);

    if (
      menu.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });


    return res.json({ Menu: menu.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}

export async function Dell(req, res){
  try {
    const { id } = req.params;

    const deleteMenu = "DELETE FROM cardapio WHERE id = $1;";
  
    const menu = await client.query(deleteMenu, [id]);
  
    if(menu.rowCount == 0){
      return res.json({message: "Não existe nenhum menu correspondente"});
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
    const { 
      type_option,
      option_name,
      date_menu,
      option_id,
      image_food } = req.body;

    const updateMenu = `UPDATE menu SET 
    type_option = $1,
    option_name = $2,
    date_menu = $3,
    option_id = $4,
    image_food = $5 WHERE id = $6`;

    const menu = await client.query(updateMenu, [
      type_option,
      option_name,
      date_menu,
      option_id,
      image_food,
      id
    ])
    
    if(menu.rowCount == 0){
      return res.json({message: "Não existe nenhum menu correspondente"});
    } else{
      return res.json({message: "menu atualizado com sucesso"})
    }
  } catch (error) {
    return res.json({message: "Não existe nenhum correspondente"});
  }
}

export async function Quantidade(req, res){
  try {
    const {quantidade} = req.params;

    const listQuantidade = `SELECT * FROM cardapio LIMIT $1`;

    const menu = await client.query(listQuantidade, [quantidade]);

    if (
      menu.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });
        
    return res.json({ Menu: menu.rows });
  } catch (error) {
    return res.json({messge: "Nao existe nenhum correspondente"});
  }
}