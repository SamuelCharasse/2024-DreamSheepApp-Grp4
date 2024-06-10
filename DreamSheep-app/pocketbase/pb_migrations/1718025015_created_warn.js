/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cfsnrpbpx4uvknr",
    "created": "2024-06-10 13:10:15.676Z",
    "updated": "2024-06-10 13:10:15.676Z",
    "name": "warn",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ecwgxf46",
        "name": "nature",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Non respect des CGU",
            "Autre"
          ]
        }
      },
      {
        "system": false,
        "id": "sfcinhdh",
        "name": "message",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cfsnrpbpx4uvknr");

  return dao.deleteCollection(collection);
})
