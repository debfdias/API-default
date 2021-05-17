require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    url: process.env.DB_URL,

    define: {
      timestamps: true, // garante que será criado um atributo: created_at e updated_at na tabela do banco de dados.
      underscored: true, // permite o ORM criar nome de tabelas como products_item
      underscoredAll: true, // permite o ORM criar nome dos atributos com caixa baixa e _ em vez de camelCase, pois esse é a convenção de escrita no banco de dados
    },
  };
