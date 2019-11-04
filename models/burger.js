var orm = require("../config/orm.js");


var burger = {
    selectAll: function(data){
        orm.selectAll("burgers",function(res){
            data(res);
        });
    },
    insertOne: function(colums,values,data) {
        orm.insertOne("burgers", columns, values, function(res){
            data(res);
    })}};

    console.log(burger);
 