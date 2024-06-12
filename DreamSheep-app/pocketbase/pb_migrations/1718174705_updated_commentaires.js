/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rwoaliek23e4zk5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yul4zmlk",
    "name": "Message",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rwoaliek23e4zk5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yul4zmlk",
    "name": "Message",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
