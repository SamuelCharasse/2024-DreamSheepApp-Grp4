/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfsnrpbpx4uvknr")

  // remove
  collection.schema.removeField("wgnglrec")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "seudqp4n",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wr2jz87x001z2rl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfsnrpbpx4uvknr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wgnglrec",
    "name": "cible",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("seudqp4n")

  return dao.saveCollection(collection)
})
