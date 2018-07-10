DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NULL,
department_name VARCHAR(25) NULL,
price DECIMAL(5,2) NULL,
stock_quantity INT(5) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES 
("Plantains", "Produce",.89, 15),
("Lebron XV", "Shoes",250.00, 1),
("ASUS Laptop", "Electronics",999.99, 6),
("Nike Flip-Flops", "Shoes",29.99, 5),
("Bag of Onions", "Produce",6.49, 9),
("Straw Hat", "Apparel", 15.00, 3),
("iPhone 7", "Electronics", 289.99, 35),
("Cat Food", "Pets", .59, 150),
("Dog Food", "Pets", 1.75, 83),
("Reebok Socks", "Apparel", 12.79, 11)

