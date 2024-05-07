/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gii1h9fbdr7es1e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sck39tx0",
    "name": "mail",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "28pccerz",
    "name": "moderator",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkni9kcn",
    "name": "profilePicture",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gii1h9fbdr7es1e")

  // remove
  collection.schema.removeField("sck39tx0")

  // remove
  collection.schema.removeField("28pccerz")

  // remove
  collection.schema.removeField("gkni9kcn")

  return dao.saveCollection(collection)
})
