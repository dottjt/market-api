import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products_productOptions', function(table) {
    table.uuid('id').primary();
    table.uuid('productId').references('id').inTable('products');
    table.uuid('productOptionId').references('id').inTable('productOptions');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products_productOptions');
}
