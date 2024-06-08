/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y0bpivtk",
    "name": "partage",
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
  collection.schema.removeField("y0bpivtk")

  return dao.saveCollection(collection)
})
