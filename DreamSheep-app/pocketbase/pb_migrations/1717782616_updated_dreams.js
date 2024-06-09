/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "su0ybcfx",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // remove
  collection.schema.removeField("su0ybcfx")

  return dao.saveCollection(collection)
})
