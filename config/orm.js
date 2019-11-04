// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var connection = require("./connection.js");

var orm = {
    selectColumn: function(columnName,tableName) {
        const query = 'SELECT ?? FROM ??'
    connection.query(query, [columnName,tableName], (error, result) => {
        if (error) throw error;
        console.log(result);
    })
  },

  selectAll: function(tableName) {
    var queryString = "SELECT * FROM burgers WHERE id = 1 OR id = 2 OR id=3";
    console.log(queryString);
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
      console.log(result[0].burger_name);
      console.log(result[1].burger_name);
      console.log(result[2].burger_name);
    });
  },
};

insertOne: function(tableName,columns,values,data)
{var queryString = "INSERT INTO" + tableName;
}

updateOne: function(tableName, columns,values,data){
  var queryString = "UPDATE" + tableName;
}    
   
module.exports = orm;