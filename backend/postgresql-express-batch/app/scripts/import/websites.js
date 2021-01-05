async function createItem(db, param, item, index) {
  try {
    let value = {
      name: item.name,
      website_id: item.website_id,
      url: item.url,
      description: item.description,
      id: index
    };
    let sql =
      'INSERT INTO websites' +
      ' (' +
      'id' +
      ',name' +
      ',website_id' +
      ',url' +
      ',description' +
      ' ) VALUES' +
      ' (' +
      ' ${id}' +
      ',${name}' +
      ',${website_id}' +
      ',${url}' +
      ',${description}' +
      ' )';
    await db.none(sql, value)
    return true;
  }
  catch (err) {
    console.log('- Error on Execute createItem ' + ' -> ' + '{ ' + item[param.name] + ' } : ' + err);
    return false;
  }
};

module.exports = {
  createItem: createItem,
};