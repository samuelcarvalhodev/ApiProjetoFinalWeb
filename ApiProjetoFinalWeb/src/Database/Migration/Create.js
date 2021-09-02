import client from "../../../db_config";

async function createTables() {
  await client.connect();

  await client.query("CREATE TYPE TypeUser AS ENUM('Nutricionista', 'Aluno')");
  await client.query(
    "CREATE TYPE SexUser AS ENUM('Masculino', 'Feminino', 'Outro')"
  );

  await client.query(
    "CREATE TYPE TypeAvaliacao AS ENUM('ELOGIO', 'RECLAMAÇÃO')"
  );

  await client.query(
    "CREATE TYPE EvaluationGradeAvaliacao AS ENUM('OTIMO', 'BOM', 'RAZOÁVEL', 'RUIM', 'MUITO RUIM')"
  );

  await client.query(
    "CREATE TYPE CommentaryAvaliacao AS ENUM('BOM TEMPERO', 'PONTO CERTO', 'TEMPERO RUIM', 'PASSOU DO PONTO', 'MAL CHEIRO', 'OUTRO')"
  );

  await client.query(
    "CREATE TYPE TypeOption AS ENUM('PROTEINA', 'CARBOIDRATO', 'PROTEINA VEGETARIANA', 'FRUTA')"
  );
  

  await client.query(
    "CREATE TYPE CourseUser AS ENUM('CC', 'SI', 'Eng.Minas', 'Eng.Civil', 'Eng.Ambiental')"
  );
  await client.query(
    "CREATE TABLE usuario( id serial PRIMARY KEY UNIQUE NOT NULL, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL, cro VARCHAR(50) NULL, registration VARCHAR(50) NULL, sex SexUser NULL, course CourseUser NULL, typeUser TypeUser NOT NULL)"
  );

  await client.query(
    "CREATE TABLE avaliacao( id serial PRIMARY KEY UNIQUE NOT NULL, evaluation_type TypeAvaliacao NULL, evaluation_grade EvaluationGradeAvaliacao NULL, menu_items_id INT NULL, commentary CommentaryAvaliacao NULL, evaluation_date TIMESTAMP NULL, user_id INT NULL)"
  );

  await client.query(
    "CREATE TABLE opcao( id serial PRIMARY KEY UNIQUE NOT NULL, option_name VARCHAR(50) NULL, description VARCHAR(50) NULL, energetic_value VARCHAR(50) NULL, carbohydrate VARCHAR(50) NULL, protein VARCHAR(50) NULL, total_fat VARCHAR(50) NULL, image_food VARCHAR(100) NULL, type_option TypeOption NULL)"
  );

  await client.query(
    "CREATE TABLE cardapio( id serial PRIMARY KEY UNIQUE NOT NULL, type_option TypeOption NULL, option_name VARCHAR(50) NULL, date_menu TIMESTAMP NULL, option_id INT NULL, image_food VARCHAR(500) NULL)"
  )
  
  
  await client.end();
  console.log("Tabela usuario, opcao, avaliacao, cardapio e types relacionados Criados!");
}

createTables();



