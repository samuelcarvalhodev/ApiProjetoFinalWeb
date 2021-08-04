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
    "CREATE TYPE TypeAvaliacao AS ENUM('ELOGIO', 'RECLAMAÇÂO')"
  )

  await client.query(
    "CREATE TYPE EvaluationGradeAvaliacao AS ENUM('OTIMO', 'BOM', 'RAZOÁVEL', 'RUIM', 'MUITO RUIM')"
  )

  await client.query(
    "CREATE TYPE CommentaryAvaliacao AS ENUM('BOM TEMPERO', 'PONTO CERTO', 'TEMPERO RUIM', 'PASSOU DO PONTO', 'MAL CHEIRO', 'OUTRO')"
  )



  await client.query(
    "CREATE TYPE CourseUser AS ENUM('CC', 'SI', 'Eng.Minas', 'Eng.Civil', 'Eng.Ambiental')"
  )
  await client.query(
    "CREATE TABLE usuario( id serial PRIMARY KEY UNIQUE NOT NULL, username VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL, cro VARCHAR(50) NULL, registration VARCHAR(50) NULL, sex SexUser NULL, course CourseUser NULL, typeUser TypeUser NOT NULL)"
  )

  await client.query(
    "CREATE TABLE avaliacao( id serial PRIMARY KEY UNIQUE NOT NULL, evaluation_type TypeAvaliacao NULL, evaluation_grade EvaluationGradeAvaliacao NULL, menu_items_id INT NULL, commentary CommentaryAvaliacao NULL, evaluation_date TIMESTAMP NULL, user_id INT NULL)"
  )

  
  await client.end()
  console.log("Tabela user Criada!");
}

createTables();
