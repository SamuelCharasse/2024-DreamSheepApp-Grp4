/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfsnrpbpx4uvknr")

  collection.name = "report"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cfsnrpbpx4uvknr")

  collection.name = "warn"

  return dao.saveCollection(collection)
})
