/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tkkckkvtk18v6i7",
    "created": "2024-05-07 07:31:53.543Z",
    "updated": "2024-05-07 07:31:53.543Z",
    "name": "password",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i0cxmfs2",
        "name": "userPassword",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pemfwuca",
        "name": "idUser",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "gii1h9fbdr7es1e",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tkkckkvtk18v6i7");

  return dao.deleteCollection(collection);
})
