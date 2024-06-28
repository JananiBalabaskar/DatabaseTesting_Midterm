
# Online Bookstore Database  
 Online bookstore, needs database management to support operations.

## Duties of the individual members

Janani – Identifying tables for an online bookstore and SQL queries for creating a sample database with the tables and attributes 

Adithya– Writing DDL/DML for one table with CRUD operations 

Jaspher – SQL queries for five requirements 

Adithya, Jaspher, Janani- Creating a Typescript interface that will allow modification to a table 

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

Cart: To save the items added to the cart. 

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
| AuthorID        | INTEGER        | REFERENCES Authors(AuthorID)         |
| PublisherID     | INTEGER        | REFERENCES Publishers(PublisherID)   |
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
| BookID          | INTEGER     | REFERENCES Books(BookID), PRIMARY KEY(BookID, GenreID) |
| GenreID         | INTEGER     | REFERENCES Genre(GenreID), PRIMARY KEY(BookID, GenreID) |

### Purchase
| Attributes       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| PurchaseID      | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers(CustomerID) |
| PurchaseDate    | DATE           |                 |
| TotalAmount     | DECIMAL(10, 2) |                 |
| PaymentMethodID | INTEGER        |                 |
| PaymentStatus   | VARCHAR(50)    |                 |
| ShippingID      | INTEGER        |                 |

### Reviews
| Attributes       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| ReviewID        | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers(CustomerID) |
| BookID          | INTEGER        | REFERENCES Books(BookID) |
| Rating          | DECIMAL(3, 2)  |                 |
| Comment         | TEXT           |                 |
| ReviewDate      | DATE           |                 |

### Wishlist
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| WishlistID      | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers(CustomerID) |
| CreationDate    | DATE        |                 |

### WishlistBooks
| Attributes       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| BookID          | INTEGER     | REFERENCES Books(BookID), PRIMARY KEY(BookID, WishlistID) |
| WishlistID      | INTEGER     | REFERENCES Wishlist(WishlistID), PRIMARY KEY(BookID, WishlistID) |

### Payment
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentID       | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase(PurchaseID) |
| CouponID        | INTEGER     |                 |

### PaymentMethod
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentMethodID | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers(CustomerID) |
| CardNumber      | VARCHAR(20) |                 |
| CardType        | VARCHAR(20) |                 |
| ExpirationDate  | DATE        |                 |
| BillingAddress  | VARCHAR(255)|                 |

### Shipping
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| ShippingID      | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase(PurchaseID) |
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
| BookID          | INTEGER     | REFERENCES Books(BookID)             |
| Quantity        | INTEGER     |                                      |

### Coupon
| Attributes       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CouponID        | SERIAL      | PRIMARY KEY     |
| ExpiryDate      | DATE        |                 |
| Function        | VARCHAR(50) |                 |

## To connect with docker 
```
docker-compose up -d –build
```
## To connect with postgres using docker 
```
docker exec -it postgres-with-pgadmin-master-db-1 psql -U postgres 
```
This will allow you to log in to the Postgres.

```
postgres~#
```

  ## PostgreSQL Queries to Create Tables
  ### To create a table for authors

```
CREATE TABLE Authors (
    AuthorID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
```
  ### To create a table for Publishers
  ```
CREATE TABLE Publishers (
    PublisherID SERIAL PRIMARY KEY,
    PublisherName VARCHAR(100),
    PhoneNumber VARCHAR(20)
);
```
 ### To create a table for Books
 ```
CREATE TABLE Books (
    BookID SERIAL PRIMARY KEY,
    Title VARCHAR(255),
    AuthorID INTEGER REFERENCES Authors(AuthorID),
    PublisherID INTEGER REFERENCES Publishers(PublisherID),
    PublishedDate DATE,
    Edition VARCHAR(50),
    Language VARCHAR(50),
    Price DECIMAL(10, 2),
    CopiesCount INTEGER,
    TotalSold INTEGER,
    ISBN VARCHAR(20),
    Format VARCHAR(50),
    FileURL VARCHAR(255)
);
```
 ### To create a table for Customers
 ```
CREATE TABLE Customers (
    CustomerID SERIAL PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    UserName VARCHAR(50),
    Password VARCHAR(255),
    Address VARCHAR(255),
    Country VARCHAR(50),
    PhoneNumber VARCHAR(20),
    EmailId VARCHAR(100),
    CartID INTEGER
);
 ```
 ### To create a table for Genre
```
CREATE TABLE Genre (
    GenreID SERIAL PRIMARY KEY,
    GenreName VARCHAR(100)
);
 ```
 ### To create a table for BookGenre
  ```
CREATE TABLE BookGenre (
    BookID INTEGER REFERENCES Books(BookID),
    GenreID INTEGER REFERENCES Genre(GenreID),
    PRIMARY KEY (BookID, GenreID)
);
```
 ### To create a table for Purchase 
 ```
CREATE TABLE Purchase (
    PurchaseID SERIAL PRIMARY KEY,
    CustomerID INTEGER REFERENCES Customers(CustomerID),
    PurchaseDate DATE,
    TotalAmount DECIMAL(10, 2),
    PaymentMethodID INTEGER,
    PaymentStatus VARCHAR(50),
    ShippingID INTEGER
);
```
 ### To create a table for Reviews
 ```
CREATE TABLE Reviews (
    ReviewID SERIAL PRIMARY KEY,
    CustomerID INTEGER REFERENCES Customers(CustomerID),
    BookID INTEGER REFERENCES Books(BookID),
    Rating DECIMAL(3, 2),
    Comment TEXT,
    ReviewDate DATE
);
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
CREATE TABLE WishlistBooks (
    BookID INTEGER REFERENCES Books(BookID),
    WishlistID INTEGER REFERENCES Wishlist(WishlistID),
    PRIMARY KEY (BookID, WishlistID)
);

```
### To create a table for Payment
 ```
CREATE TABLE Payment (
    PaymentID SERIAL PRIMARY KEY,
    PurchaseID INTEGER REFERENCES Purchase(PurchaseID),
    CouponID INTEGER
);

```
### To create a table for PaymentMethod
 ```
CREATE TABLE PaymentMethod (
    PaymentMethodID SERIAL PRIMARY KEY,
    CustomerID INTEGER REFERENCES Customers(CustomerID),
    CardNumber VARCHAR(20),
    CardType VARCHAR(20),
    ExpirationDate DATE,
    BillingAddress VARCHAR(255)
);

```
### To create a table for Shipping
 ```
CREATE TABLE Shipping (
    ShippingID SERIAL PRIMARY KEY,
    PurchaseID INTEGER REFERENCES Purchase(PurchaseID),
    ShippingAddress VARCHAR(255),
    ShippingDate DATE,
    TrackingNumber VARCHAR(50),
    DeliveryDate DATE
);

```
### To create a table for Cart
 ```
CREATE TABLE Cart (
    CartID SERIAL PRIMARY KEY,
    CartListID INTEGER
);

```
### To create a table for CartList
 ```
CREATE TABLE CartList (
    CartListID SERIAL PRIMARY KEY,
    BookID INTEGER REFERENCES Books(BookID),
    Quantity INTEGER
);

```
### To create a table for Coupon
 ```
CREATE TABLE Coupon (
    CouponID SERIAL PRIMARY KEY,
    ExpiryDate DATE,
    Function VARCHAR(50)
);
```

 
## References
>Format used from [Markdown Live Preview](https://markdownlivepreview.com/).
>Idea for Sample Bookstore Database [Database Star](https://www.databasestar.com/sample-bookstore-database/).

