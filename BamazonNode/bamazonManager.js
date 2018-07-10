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
    managerTasks();
});

function managerTasks() {
    inquirer.prompt({
        name: "task",
        type: "list",
        message: "Which manager task would you like to execute? ",
        choices: [
            "View Products For Sale",
            "View Low Inventory",
            "Replenish Inventory",
            "Add New Item"
        ]
    }).then(function (answer) {
        switch (answer.task) {
            case "View Products For Sale":
                ViewProductsForSale();
                connection.end()

                break;

            case "View Low Inventory":
                ViewLowInventory();

                break;

            case "Replenish Inventory":
                replenishInventory();
                break;

            case "Add New Item":
                addNewItem();
                break;
        }
    });
}

function ViewProductsForSale() {
    var query = "SELECT * FROM products";
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
    })
}

function ViewLowInventory() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        var table = new Table({
            head: ["ID", "Product", "Dept.", "Price ", "In Stock"],
            colWidth: [100, 200]
        });
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity < 5) {
                table.push(
                    [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
                )
            };
        }
        console.log("\n" + "Low Invetory" + "\n" + table.toString() + "\n");
    })
    connection.end()
}

function replenishInventory() {
    ViewProductsForSale();
    inquirer.prompt([
        {
            name: "selection",
            type: "input",
            message: "Enter the ID of the product you wish to replenish:",

        }, {
            name: "quantity",
            type: "input",
            message: "How many would you like to add?",
        }, {

            name: "another",
            type: "confirm",
            message: "Exit?"

        }]).then(function (answer) {
            if (answer.another === true) {
                var query = "SELECT * FROM products"
                connection.query(query, function (err, res) {
                    if (err) throw err;

                    var price = JSON.stringify(res[answer.selection - 1].price)
                    var prod = JSON.stringify(res[answer.selection - 1].product_name);
                    var stock_qty = parseInt(JSON.stringify(res[answer.selection - 1].stock_quantity));
                    var qty = parseInt(answer.quantity);
                    var newStock = (stock_qty + qty)

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
                            ViewProductsForSale();
                            connection.end();
                        })
                })
            } else {
                var query = "SELECT * FROM products"
                connection.query(query, function (err, res) {
                    if (err) throw err;

                    var price = JSON.stringify(res[answer.selection - 1].price)
                    var prod = JSON.stringify(res[answer.selection - 1].product_name);
                    var stock_qty = parseInt(JSON.stringify(res[answer.selection - 1].stock_quantity));
                    var qty = parseInt(answer.quantity);
                    var newStock = (stock_qty + qty)

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
                            replenishInventory()
                        })
                })
            }
        })
}
function addNewItem() {
    

        inquirer.prompt([{

            name: "product",
            type: "input",
            message: "Enter new product name: "
        }, {
                name: "dept",
                type: "input",
                message: "Enter department name: "
            }, {
                name: "price",
                type: "input",
                message: "Enter price: "
            }, {
                name: "stock",
                type: "input",
                message: "Enter beginning stock quantity: "
        }]).then(function (answer) {
                connection.query(
                    "INSERT INTO products SET ?",
                    {
                        product_name: answer.product,
                        department_name: answer.dept,
                        price: answer.price,
                        stock_quantity: answer.stock
                    }, function (err) {
                        if (err) throw err;
                        ViewProductsForSale();
                        connection.end()
                    }

                )
            })
    
}