import express from "express";
import client from "../../../db_config";

export async function Post(req, res) {
  const { type_option, option_name, date_menu, option_id, image_food } =
    req.body;

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