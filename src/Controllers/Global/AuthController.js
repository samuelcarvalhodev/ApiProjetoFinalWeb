import client from "../../../db_config";
const pg = require("pg");
const pool = new pg.Pool();

export async function Login(req, res) {
  const { registration, password, cro } = req.body;
  let User = null;
  await client.connect();

  const registrationValidate =
    "SELECT registration FROM usuario WHERE registration = $1";
  const registrationResponse = await client.query(registrationValidate, [
    registration,
  ]);

  const croValidate = "SELECT cro FROM usuario WHERE cro = $1";
  const croResponse = await client.query(croValidate, [cro]);

  if (registrationResponse.rowCount < 1 && croResponse.rowCount < 1) {
    await client.end();
    return res.json({ message: "Usuário não existe" });
  } else {
    //Validando credencial
    const loginValidate =
      "SELECT username, password, cro, registration, sex, course, typeuser FROM usuario WHERE password = $1 and (registration = $2 or cro = $3);";
    User = await client.query(loginValidate, [password, registration, cro]);
    if (User.rowCount == 0 || User == undefined || User == null) {
      await client.end();
      return res.json({ message: "Login incorreto" });
    } else {
      await client.end();
      return res.json({ user: User.rows, message: "Login efetuado com sucesso!" });
    }
  }
}
