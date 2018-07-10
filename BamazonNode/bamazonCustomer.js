var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    viewDatabase()
});

function viewDatabase() {
    var query = "SELECT * FROM  products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        var table = new Table({
            head: ["ID", "Product", "Dept.", "Price ", "In Stock"],
            colWidth: [100, 200]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log("\n" + table.toString() + "\n");
        buySomething();
    })
    // connection.end()
}

function buySomething() {

    inquirer.prompt([
        {
            name: "selection",
            type: "input",
            message: "Please enter the ID of the product you wish to buy: "
        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like?"
        }]).then(function (answer) {

            var query = "SELECT * FROM products"
            connection.query(query, function (err, res) {
                if (err) throw err;

                var price = JSON.stringify(res[answer.selection - 1].price)
                var prod = JSON.stringify(res[answer.selection - 1].product_name);
                var stock_qty = parseInt(JSON.stringify(res[answer.selection - 1].stock_quantity));
                var qty = parseInt(answer.quantity);
                var newStock = (stock_qty - qty)

                if (qty <= stock_qty){

                    console.log("\n" + "BAMAZON" + "\n" + "===============================" + "\n" + prod + " (" + qty + ") " + " @ " + price + " each" + "\n" + "Total: " + "$" + qty * price)
                    // console.log(stock_qty)
                    // console.log(qty)
                    // console.log("new stock qty: " + newStock)

                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newStock
                            },
                            {
                                item_id: answer.selection
                            }
                        ],
                        function (err) {
                            if (err) throw err;

                        })
                    // viewDatabase()
                    connection.end();
                } else {
                    console.log("BAMAZON"+"\n" + "====================" + "\n"+"Cannot fulfill your order, please make another selection"+"\n");
                    buySomething();
                }
            })
        })
}