/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wr2jz87x001z2rl",
    "created": "2024-06-06 09:27:24.396Z",
    "updated": "2024-06-06 09:27:24.396Z",
    "name": "dreams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k89l0iia",
        "name": "title",
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
        "id": "6egnxqbi",
        "name": "description",
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
            "horreur)"
          ]
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "5cj2o7hd",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vscgxxyx",
        "name": "recurrent",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("wr2jz87x001z2rl");

  return dao.deleteCollection(collection);
})
