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

export async function GetAll(req, res) {
  
  await client.connect();

  try {
    const listAllMenu = "SELECT * FROM cardapio;";

    const menu = await client.query(listAllMenu);

    
    if (
      menu.rows.length == 0
      )
      return res.json({ message: "Não existe nenhum correspondente" });
      
      await client.end();
      return res.json({ Menu: menu.rows });
    } catch (error) {
      return res.json({ message: "Não existe nenhum correspondente" });
    }
  
}

export async function GetById(req, res) {
  
  await client.connect();
  try {
    const { id } = req.params;

    const listMenu = "SELECT * FROM cardapio WHERE id = $1;";

    const menu = await client.query(listMenu, [id]);
    await client.end();

    if (
      menu.rows.length == 0
    )
    return res.json({ message: "Não existe nenhum correspondente" });


    return res.json({ Menu: menu.rows });
  } catch (error) {
    return res.json({ message: "Não existe nenhum correspondente" });
  }
}
