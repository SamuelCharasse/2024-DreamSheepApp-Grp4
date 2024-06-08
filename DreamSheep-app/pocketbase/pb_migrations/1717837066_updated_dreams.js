/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwsybhft",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "humour",
        "amour",
        "drôle",
        "étrange",
        "joyeux",
        "peur",
        "horreur"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2aufd3zo",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Rêve",
        "Cauchemar"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwsybhft",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Choices (humour",
        "amour",
        "drôle",
        "étrange",
        "joyeux",
        "peur",
        "horreur"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2aufd3zo",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Choices (Rêve",
        "Cauchemar)"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
