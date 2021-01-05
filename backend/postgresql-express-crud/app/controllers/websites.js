const db = require('../db/connection');
const config = require('../config/config.json')[process.env.NODE_ENV || 'dev'];

const url = config.url;
const firstKey = config.firstKey;
const limitMax = config.limitMax;
const limitDefault = config.limitDefault;
const webSite = config.webSite;
const queryMax = config.queryMax;
const offsetMax = config.offsetMax;

function getItemsCount(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM website' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (result) {
      res.status(200)
        .json({ "count": result.count });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next) {
  let q = req.query['q'];
  if (q != undefined) { q = q.toUpperCase().substring(0, queryMax); }

  let limit = parseInt(req.query['limit']);
  let offset = parseInt(req.query['offset']);

  if (isNaN(limit)) { limit = limitDefault; }
  if (isNaN(offset)) { offset = 0; }
  if (limit > limitMax) { limit = limitMax; }
  if (offset > offsetMax) { offset = 0; }

  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',website_id' +
    ',description as "description"' +
    ',url' +
    ' FROM website' +
    ' WHERE (id >= ' + firstKey + ')';
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql + ' ORDER BY name ASC';
  sql = sql + ' LIMIT ' + limit + ' OFFSET ' + offset;

  db.any(sql)
    .then(records => {
      const results = [];
      records.map((row, index, record) => {
        const area = parseInt(record[index].area);
        const population = parseInt(record[index].population);
        results.push(
          {
            "id": record[index].id,
            "name": record[index].name,
            "description": record[index].description,
            "website_id": record[index].website_id,
            "url": record[index].url,
          });
      })
      res.status(200)
        .json(results);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next) {
  let id = parseInt(req.params.id);
  if (isNaN(id)) { id = 0; }
  let sql =
    'SELECT' +
    ' t1.id' +
    ',t1.name' +
    ',t1.description as "description"' +
    ',t1.website_id as "website_id"' +
    ',t1.url as "url"' +
    ' FROM website t1' +
    ' WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (record) {
      let area = parseInt(record.area);
      let population = parseInt(record.population);
      res.status(200)
        .json({
          "id": record.id,
          "name": record.name,
          "description": record.description,
          "website_id": record.website_id,
          "url": record.url,
        });
    })
    .catch(function (err) {
      res.status(404)
        .json({
          message: "Not Found",
          documentationUrl: webSite
        });
    });
}

function createItem(req, res, next) {
  let item = {
    code: req.body.code,
    name: req.body.name,
    url: req.body.url,
    website_id: req.body.website_id,
    description: req.body.description,
  }
  let sql =
    'INSERT INTO website' +
    ' (' +
    ' name' +
    ',description' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${description}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',description as "description"';
  db.one(sql, item)
    .then(function (result) {
      res.status(200)
        .json(result);
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next) {
  let item = {
    id: req.params.id,
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
  }
  console.log('0004:updateItem:' + JSON.stringify(item));
  let sql =
    'UPDATE website SET' +
    ' name=${name}' +
    ',url=${url}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',url as "wikipediaLink"';
  db.one(sql, item).then(function (result) {
    res.status(200)
      .json(result);
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next) {
  const id = parseInt(req.params.id);
  db.result('DELETE FROM website WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} website`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
};
