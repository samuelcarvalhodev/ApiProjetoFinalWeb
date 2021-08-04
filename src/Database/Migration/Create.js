import client from "../../../db_config";

async function createTables() {
  await client.connect();

  await client.query(
    "CREATE TYPE TypeUser AS ENUM('Nutricionista', 'Aluno')"
  )
  await client.query(
    "CREATE TYPE SexUser AS ENUM('Masculino', 'Feminino', 'Outro')"
  )

  await client.query(
    "CREATE TYPE CourseUser AS ENUM('CC', 'SI', 'Eng.Minas', 'Eng.Civil', 'Eng.Ambiental')"
  )
  await client.query(
    "CREATE TABLE usuario( id serial PRIMARY KEY UNIQUE NOT NULL, username VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL, cro VARCHAR(50) NULL, registration VARCHAR(50) NULL, sex SexUser NULL, course CourseUser NULL, typeUser TypeUser NOT NULL)"
  )

  

  
  await client.end()
  console.log("Tabela user Criada!");
}

createTables();
