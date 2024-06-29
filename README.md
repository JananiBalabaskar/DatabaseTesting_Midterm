
# Online Bookstore Database  
 The online bookstore sells physical books, e-books, and audiobooks which need database management to support operations to  browse the catalog, make purchases, and leave reviews.

## Duties of the individual members

Janani – Identifying tables for an online bookstore and SQL queries for creating a sample database with the tables and attributes. 

Adithya– Writing DDL/DML for one table with CRUD operations.

Jaspher – SQL queries for five requirements. 

Adithya, Jaspher, Janani- Creating a Typescript interface that will allow modification to a table.

## Identification of tables, attributes, and attribute types for Online Bookstore Database Design 

Authors: To save author details. 

Publishers: To save publisher details. 

Books: To save book details. 

Customers: To save customer information. 

Genre: To categorize books. 

BookGenres: To manage the relationship between books and categories. 

Purchase: To save the order information. 

BookOrder: To save the information of each order. 

Orderhistory: To keep track of purchase history. 

Inventory: To handle the book count of physical books. 

Reviews: To save customer reviews. 

Wishlists: To save customer wishlists. 

WishlistItems: To manage the relationship between wishlists and books. 

PaymentMethods: To save the customer payment method information. 

ShippingDetails: To save shipping details for orders. 

Cart: To save the items that were added to the cart. 

Coupon: To store the coupon used while purchasing.

## Tables and Attributes 

### Authors 
| Attributes  | Type        | Constraints     |
|------------|-------------|-----------------|
| AuthorID   | SERIAL      | PRIMARY KEY     |
| FirstName  | VARCHAR(50) |                 |
| LastName   | VARCHAR(50) |                 |

### Publishers
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PublisherID     | SERIAL      | PRIMARY KEY     |
| PublisherName   | VARCHAR(100)|                 |
| PhoneNumber     | VARCHAR(20) |                 |

### Books
| Attributes       | Type           | Constraints                          |
|-----------------|----------------|--------------------------------------|
| BookID          | SERIAL         | PRIMARY KEY                          |
| Title           | VARCHAR(255)   |                                      |
| AuthorID        | INTEGER        | REFERENCES Authors (FOREIGN KEY)        |
| PublisherID     | INTEGER        | REFERENCES Publishers (FOREIGN KEY)   |
| PublishedDate   | DATE           |                                      |
| Edition         | VARCHAR(50)    |                                      |
| Language        | VARCHAR(50)    |                                      |
| Price           | DECIMAL(10, 2) |                                      |
| CopiesCount     | INTEGER        |                                      |
| TotalSold       | INTEGER        |                                      |
| ISBN            | VARCHAR(20)    |                                      |
| Format          | VARCHAR(50)    |                                      |
| FileURL         | VARCHAR(255)   |                                      |

### Customers
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CustomerID      | SERIAL      | PRIMARY KEY     |
| FirstName       | VARCHAR(50) |                 |
| LastName        | VARCHAR(50) |                 |
| UserName        | VARCHAR(50) |                 |
| Password        | VARCHAR(255)|                 |
| Address         | VARCHAR(255)|                 |
| Country         | VARCHAR(50) |                 |
| PhoneNumber     | VARCHAR(20) |                 |
| EmailId         | VARCHAR(100)|                 |
| CartID          | INTEGER     |                 |

### Genre
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| GenreID         | SERIAL      | PRIMARY KEY     |
| GenreName       | VARCHAR(100)|                 |

### BookGenre
| Attributes       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| BookID          | INTEGER     | REFERENCES Books (FOREIGN KEY)|
| GenreID         | INTEGER     | REFERENCES Genre (FOREIGN KEY)|

### Purchase
| Attributes       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| PurchaseID      | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers (FOREIGN KEY) |
| PurchaseDate    | DATE           |                 |
| TotalAmount     | DECIMAL(10, 2) |                 |
| PaymentMethodID | INTEGER        |                 |
| PaymentStatus   | VARCHAR(50)    |                 |
| ShippingID      | INTEGER        |                 |

### Reviews
| Attributes       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| ReviewID        | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers(FOREIGN KEY) |
| BookID          | INTEGER        | REFERENCES Books (FOREIGN KEY)|
| Rating          | DECIMAL(3, 2)  |                 |
| Comment         | TEXT           |                 |
| ReviewDate      | DATE           |                 |

### Wishlist
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| WishlistID      | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers (FOREIGN KEY) |
| CreationDate    | DATE        |                 |

### WishlistBooks
| Attributes       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| BookID          | INTEGER     | REFERENCES Books (FOREIGN KEY)|
| WishlistID      | INTEGER     | REFERENCES Wishlist (FOREIGN KEY) |

### Payment
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentID       | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase (FOREIGN KEY) |
| CouponID        | INTEGER     |                 |

### PaymentMethod
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentMethodID | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers(FOREIGN KEY) |
| CardNumber      | VARCHAR(20) |                 |
| CardType        | VARCHAR(20) |                 |
| ExpirationDate  | DATE        |                 |
| BillingAddress  | VARCHAR(255)|                 |

### Shipping
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| ShippingID      | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase (FOREIGN KEY) |
| ShippingAddress | VARCHAR(255)|                 |
| ShippingDate    | DATE        |                 |
| TrackingNumber  | VARCHAR(50) |                 |
| DeliveryDate    | DATE        |                 |

### Cart
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CartID          | SERIAL      | PRIMARY KEY     |
| CartListID      | INTEGER     |                 |

### CartList
| Attributes       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| CartListID      | SERIAL      | PRIMARY KEY                          |
| BookID          | INTEGER     | REFERENCES Books(FOREIGN KEY)             |
| Quantity        | INTEGER     |                                      |

### Coupon
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CouponID        | SERIAL      | PRIMARY KEY     |
| ExpiryDate      | DATE        |                 |
| Function        | VARCHAR(50) |                 |

## Steps to create database
1. Open `virtual box` and Run `KALI`.
2. open terminal.
3. Give command `cd Downloads`.
4. Give command `cd postgres-with-pgadmin-master`.
5. Connect to `docker`.


## To connect with docker 
```
docker-compose up -d –build
```
## To connect with postgres using docker 
```
docker exec -it postgres-with-pgadmin-master-db-1 psql -U postgres 
```
This will allow you to log in to the Postgres and look like the following once connected.

`
postgres~#
`
## PostgreSQL Query to Create Database
```
CREATE DATABASE Online_Bookstore;
```
## To connect with the database created
```
\c online_bookstore;
```
This will connect to the Database created and look like the following.
`
postgres=# \c online_bookstore;
You are now connected to database "online_bookstore" as user "postgres".
online_bookstore=# 
`
  ## PostgreSQL Queries to Create Tables
  ### To create a table for authors

```
CREATE TABLE Authors (AuthorID SERIAL PRIMARY KEY, FirstName VARCHAR(50), LastName VARCHAR(50));
```
  ### To create a table for Publishers
  ```
CREATE TABLE Publishers (PublisherID SERIAL PRIMARY KEY, PublisherName VARCHAR(100), PhoneNumber VARCHAR(20));
```
 ### To create a table for Books
 ```
CREATE TABLE Books (BookID SERIAL PRIMARY KEY, Title VARCHAR(255), AuthorID INTEGER REFERENCES Authors(AuthorID), PublisherID INTEGER REFERENCES Publishers(PublisherID), PublishedDate DATE, Edition VARCHAR(50), Language VARCHAR(50), Price DECIMAL(10, 2), CopiesCount INTEGER, TotalSold INTEGER, ISBN VARCHAR(20), Format VARCHAR(50), FileURL VARCHAR(255));
```
 ### To create a table for Customers
 ```
CREATE TABLE Customers ( CustomerID SERIAL PRIMARY KEY, FirstName VARCHAR(50), LastName VARCHAR(50), UserName VARCHAR(50), Password VARCHAR(255), Address VARCHAR(255), Country VARCHAR(50), PhoneNumber VARCHAR(20), EmailId VARCHAR(100), CartID INTEGER);
 ```
 ### To create a table for Genre
```
CREATE TABLE Genre ( GenreID SERIAL PRIMARY KEY, GenreName VARCHAR(100));
 ```
 ### To create a table for BookGenre
  ```
CREATE TABLE BookGenre ( BookID INTEGER REFERENCES Books(BookID), GenreID INTEGER REFERENCES Genre(GenreID), PRIMARY KEY (BookID, GenreID));
```
 ### To create a table for Purchase 
 ```
CREATE TABLE Purchase ( PurchaseID SERIAL PRIMARY KEY, CustomerID INTEGER REFERENCES Customers(CustomerID), PurchaseDate DATE, TotalAmount DECIMAL(10, 2), PaymentMethodID INTEGER, PaymentStatus VARCHAR(50), ShippingID INTEGER);
```
 ### To create a table for Reviews
 ```
CREATE TABLE Reviews (ReviewID SERIAL PRIMARY KEY, CustomerID INTEGER REFERENCES Customers(CustomerID), BookID INTEGER REFERENCES Books(BookID), Rating DECIMAL(3, 2), Comment TEXT, ReviewDate DATE);
```
### To create a table for Wishlist
 ```
CREATE TABLE Wishlist (
    WishlistID SERIAL PRIMARY KEY,
    CustomerID INTEGER REFERENCES Customers(CustomerID),
    CreationDate DATE
);
```
### To create a table for WishlistBooks
 ```
CREATE TABLE WishlistBooks (BookID INTEGER REFERENCES Books(BookID), WishlistID INTEGER REFERENCES Wishlist(WishlistID), PRIMARY KEY (BookID, WishlistID));

```
### To create a table for Payment
 ```
CREATE TABLE Payment ( PaymentID SERIAL PRIMARY KEY, PurchaseID INTEGER REFERENCES Purchase(PurchaseID), CouponID INTEGER);

```
### To create a table for PaymentMethod
 ```
CREATE TABLE PaymentMethod ( PaymentMethodID SERIAL PRIMARY KEY, CustomerID INTEGER REFERENCES Customers(CustomerID), CardNumber VARCHAR(20), CardType VARCHAR(20), ExpirationDate DATE  BillingAddress VARCHAR(255));

```
### To create a table for Shipping
 ```
CREATE TABLE Shipping ( ShippingID SERIAL PRIMARY KEY, PurchaseID INTEGER REFERENCES Purchase(PurchaseID), ShippingAddress VARCHAR(255), ShippingDate DATE, TrackingNumber VARCHAR(50), DeliveryDate DATE);

```
### To create a table for Cart
 ```
CREATE TABLE Cart (CartID SERIAL PRIMARY KEY, CartListID INTEGER);

```
### To create a table for CartList
 ```
CREATE TABLE CartList (CartListID SERIAL PRIMARY KEY, BookID INTEGER REFERENCES Books(BookID), Quantity INTEGER);

```
### To create a table for Coupon
 ```
CREATE TABLE Coupon (CouponID SERIAL PRIMARY KEY, ExpiryDate DATE, Function VARCHAR(50));
```
### To view a tables in the terminal
```
\dt


```
### To Insert values into Authors table
 ```
INSERT INTO Authors (FirstName, LastName) VALUES 
('Jane', 'Austen'), 
('Albert', 'Camus'), 
('Franz', 'Kafka');

```
### To Insert values into Publishers table
 ```
INSERT INTO Publishers (PublisherName, PhoneNumber) VALUES 
('Seven Stories Press', '346-555-1234'), 
('Wiley', '765-555-5678'), 
('DAW Books', '657-555-9101');

```
### To Insert values into Books table
 ```
INSERT INTO Books (Title, AuthorID, PublisherID, PublishedDate, Edition, Language, Price, CopiesCount, TotalSold, ISBN, Format, FileURL) VALUES 
('Pride and Prejudice', 1, 1, '2023-01-28', 'First Edition', 'English', 29.99, 100, 50, '978-3-1765-6546-0', 'Hardcover', 'https://books.com/ PrideandPrejudice'),
('The Stranger',1,2,'2023-05-23', 'Second Edition', 'French', 39.99, 200, 100, '978-1-2345-7644-1', 'Paperback', 'https://books.com/ TheStranger'),
('The Trial', 2,3,'1967-03-01', 'First Edition', 'English', 49.99, 300, 150, '978-1-2345-7337-2', 'Ebook', 'https://books.com/ TheTrial'),
('The Cat', 3,3,'2000-05-11', 'First Edition', 'English', 34.00, 400, 250, '456-1-6547-3356-2', 'Hardcover', 'https://books.com/ TheCat'),
('Justice', 1, 1, '2023-01-28', 'First Edition', 'English', 49.99, 100, 50, '975-3-1775-6554-0', 'Hardcover', 'https://books.com/Justice'),
('Jake', 1, 1, '2023-05-28', 'First Edition', 'English', 49.99, 100, 50, '966-3-1775-6554-0', 'Hardcover', 'https://books.com/Jake'),
('Sir', 1, 1, '2023-07-20', 'First Edition', 'English', 49.99, 100, 50, '967-3-1775-6654-0', 'Hardcover', 'https://books.com/Sir'),
('Fast', 1, 1, '2023-04-28', 'First Edition', 'English', 29.99, 100, 50, '978-3-1735-6576-0', 'Hardcover', 'https://books.com/Fast');

```
### To Insert values into Customers table
 ```
INSERT INTO Customers (FirstName, LastName, UserName, Password, Address, Country, PhoneNumber, EmailId,CartID) VALUES 
('Jared', 'Don', 'jareddon123', 'password123', '156 cake St, Cambridge, Canada', 'Canada', '657-765-1234', 'jareddon@gmail.com',1),
('Hailey', 'Smith', 'haileysmith456', 'password_hailey', '456 Oak St, Kitchener, Canada', 'Canada', '768-643-5678', 'haileysmith@gmail.com',2),
('Rachael', 'Gladdings', 'rachaelgladdings', 'passwordRachael', '789 Pine St, Waterloo, Canada', 'Canada', '759-565-9101', 'rachael@gmail.com',3);

```
### To Insert values into Genre table
 ```
INSERT INTO Genre (GenreName) VALUES 
('Fiction'), 
('Non-Fiction'), 
('Science Fiction');

```
### To Insert values into Genre table
 ```
INSERT INTO BookGenre (BookID, GenreID) VALUES 
(1, 1), 
(2, 2), 
(3, 3),
(4, 1), 
(5, 2), 
(6, 1),
(7,3),
(8,1);

```
### To Insert values into Purchase table
 ```
INSERT INTO Purchase (CustomerID,PurchaseDate, TotalAmount, PaymentMethodID, PaymentStatus, ShippingID) VALUES 
(1,'2023-04-01', 59.98, 1, 'Paid',1),
(2,'2023-04-01', 79.98, 2, 'Paid',2),
(3,'2023-06-01', 99.98, 3, 'Paid',3),
(1,'2023-09-05', 509.98, 4, 'Paid',4),
(3,'2023-02-20', 709.98, 5, 'Paid',5);

```
### To Insert values into Reviews table
 ```
INSERT INTO Reviews ( CustomerID, BookID, Rating, Comment, ReviewDate) VALUES 
(1, 1, 4.5, 'Great book!', '2023-04-10'),
(2, 2, 4.0, 'Very informative.', '2022-05-15'),
(3, 3, 5.0, 'Loved it!', '2023-05-20');


```
### To Insert values into Wishlist table
 ```
INSERT INTO Wishlist (CustomerID, CreationDate) VALUES 
(1, '2022-04-15'), 
(2, '2022-04-15'), 
(3, '2023-04-15');

```
### To Insert values into WishlistBooks table
 ```
INSERT INTO WishlistBooks (BookID, WishlistID) VALUES 
(1, 1), 
(2, 2), 
(3, 3);

```
### To Insert values into Payment table
 ```
INSERT INTO Payment (PurchaseID, CouponID) VALUES 
(1, 1), 
(2, 2), 
(3, 3);

```
### To Insert values into Payment table
 ```
INSERT INTO PaymentMethod (CustomerID, CardNumber, CardType, ExpirationDate, BillingAddress) VALUES 
(1,'4111111111111111', 'Visa', '2025-01-01', '156 cake St, Cambridge, Canada'),
(2, '4222222222222222', 'MasterCard', '2025-02-01', '456 Oak St, Kitchener, Canada'),
(3, '4333333333333333', 'American Express', '2025-03-01', '789 Pine St, Waterloo, Canada');

```
### To Insert values into Shipping table
 ```
INSERT INTO Shipping (PurchaseID, ShippingAddress, ShippingDate, TrackingNumber, DeliveryDate) VALUES 
(1, '156 cake St, Cambridge, Canada', '2023-04-01', 'TRACK123', '2023-04-05'),
(2, '456 Oak St, Kitchener, Canada', '2023-04-01', 'TRACK456', '2023-04-05'),
(3, '789 Pine St, Waterloo, Canada', '2023-06-01', 'TRACK789', '2023-06-05');

```
### To Insert values into Cart table
 ```
INSERT INTO Cart (CartID, CartListID) VALUES 
(1, 1), 
(2, 2), 
(3, 3);

```
### To Insert values into CartList table
 ```
INSERT INTO CartList (BookID, Quantity) VALUES 
(1, 2), 
(2, 3), 
(3, 1);

```
### To Insert values into Cart table
 ```
INSERT INTO Coupon (ExpiryDate, Function) VALUES 
('2024-12-31', 'DISCOUNT10'), 
('2024-11-30', 'DISCOUNT20'), 
('2024-10-31', 'DISCOUNT30');

```
## SQL Queries for the following requirements
### To display authors who have published more than 2 books in the same genre within the last 2 years.
 ```
SELECT 
    a.AuthorID, 
    a.FirstName, 
    a.LastName, 
    g.GenreName,
    COUNT(b.BookID) AS BookCount
FROM 
    Authors a
JOIN 
    Books b ON a.AuthorID = b.AuthorID
JOIN 
    BookGenre bg ON b.BookID = bg.BookID
JOIN 
    Genre g ON bg.GenreID = g.GenreID
WHERE 
    b.PublishedDate >= NOW() - INTERVAL '2 years'
GROUP BY 
    a.AuthorID, a.FirstName, a.LastName, g.GenreName
HAVING 
    COUNT(b.BookID) > 2;

```
### To display loyal customers who have spent more than X dollars in the last year.
 ```
SELECT 
    c.CustomerID, 
    c.FirstName, 
    c.LastName, 
    SUM(p.TotalAmount) AS TotalSpent
FROM 
    Customers c
JOIN 
    Purchase p ON c.CustomerID = p.CustomerID
WHERE 
    p.PurchaseDate >= NOW() - INTERVAL '1 year'
GROUP BY 
    c.CustomerID, c.FirstName, c.LastName
HAVING 
    SUM(p.TotalAmount) > 60;

```
### To display books that have better user ratings than average.
 ```
SELECT 
    b.BookID, 
    b.Title, 
    r.Rating
FROM 
    Books b
JOIN 
    Reviews r ON b.BookID = r.BookID
WHERE 
    r.Rating > (SELECT AVG(Rating) FROM Reviews);

```
### To display the most popular genre by sales.
 ```
SELECT 
    g.GenreName,
    SUM(b.CopiesCount) AS TotalCopiesSold
FROM 
    Books b
JOIN 
    BookGenre bg ON b.BookID = bg.BookID
JOIN 
    Genre g ON bg.GenreID = g.GenreID
GROUP BY 
    g.GenreName
ORDER BY 
    TotalCopiesSold DESC
LIMIT 1;


```
### To display the 10 most recent reviews posted by customers.
 ```
SELECT 
    r.ReviewID,
    r.CustomerID,
    r.BookID,
    r.Rating,
    r.Comment,
    r.ReviewDate,
    c.FirstName,
    c.LastName,
    b.Title
FROM 
    Reviews r
JOIN 
    Customers c ON r.CustomerID = c.CustomerID
JOIN 
    Books b ON r.BookID = b.BookID
ORDER BY 
    r.ReviewDate DESC
LIMIT 10;


 ``` 
## References
>Format used from [Markdown Live Preview](https://markdownlivepreview.com/).
>>Idea for Sample Bookstore Database [Database Star](https://www.databasestar.com/sample-bookstore-database/).

