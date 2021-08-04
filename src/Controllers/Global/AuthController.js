import client from "../../../db_config";
const pg = require('pg')
const pool = new pg.Pool();



export async function Login(req, res) {
  const { username, password, cro } = req.body;
  let User = null;
  await client.connect();
  //Verificando existencia
  const userNameValidate = "SELECT username FROM usuario WHERE username = $1";
  const userNameResponse = await client.query(userNameValidate, [username]);
  if (
    userNameResponse.rowCount < 1 ||
    userNameResponse == undefined ||
    userNameResponse == null ||
    userNameResponse.rowCount == null
  ) {
    await client.end();
    res.json({ message: "Usuário não existe" });
  } else {
    //Validando credencial
    const loginValidate =
      "SELECT username, password, cro, registration, sex, course, typeuser FROM usuario WHERE username = $1 and (password = $2 or cro = $3);";
    User = await client.query(loginValidate, [username, password, cro]);
    if (User.rowCount == 0 || User == undefined || User == null) {
        await client.end();
      res.json({ message: "Login incorreto" });
    } else {
        await client.end();
      res.json({ user: User.rows, message: "Login efetuado com sucesso!" });
    }
  }

  
}
