/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ifcwpm9",
    "name": "commentaires",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ifcwpm9",
    "name": "comments",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
