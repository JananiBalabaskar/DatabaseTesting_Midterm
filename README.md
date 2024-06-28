
# Online Bookstore Database  

## Tables and Attributes 

### Authors
| Attribute  | Type        | Constraints     |
|------------|-------------|-----------------|
| AuthorID   | SERIAL      | PRIMARY KEY     |
| FirstName  | VARCHAR(50) |                 |
| LastName   | VARCHAR(50) |                 |

### Publishers
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PublisherID     | SERIAL      | PRIMARY KEY     |
| PublisherName   | VARCHAR(100)|                 |
| PhoneNumber     | VARCHAR(20) |                 |

### Books
| Attribute       | Type           | Constraints                          |
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
| Attribute       | Type        | Constraints     |
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
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| GenreID         | SERIAL      | PRIMARY KEY     |
| GenreName       | VARCHAR(100)|                 |

### BookGenre
| Attribute       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| BookID          | INTEGER     | REFERENCES Books(BookID), PRIMARY KEY(BookID, GenreID) |
| GenreID         | INTEGER     | REFERENCES Genre(GenreID), PRIMARY KEY(BookID, GenreID) |

### Purchase
| Attribute       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| PurchaseID      | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers(CustomerID) |
| PurchaseDate    | DATE           |                 |
| TotalAmount     | DECIMAL(10, 2) |                 |
| PaymentMethodID | INTEGER        |                 |
| PaymentStatus   | VARCHAR(50)    |                 |
| ShippingID      | INTEGER        |                 |

### Reviews
| Attribute       | Type           | Constraints     |
|-----------------|----------------|-----------------|
| ReviewID        | SERIAL         | PRIMARY KEY     |
| CustomerID      | INTEGER        | REFERENCES Customers(CustomerID) |
| BookID          | INTEGER        | REFERENCES Books(BookID) |
| Rating          | DECIMAL(3, 2)  |                 |
| Comment         | TEXT           |                 |
| ReviewDate      | DATE           |                 |

### Wishlist
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| WishlistID      | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers(CustomerID) |
| CreationDate    | DATE        |                 |

### WishlistBooks
| Attribute       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| BookID          | INTEGER     | REFERENCES Books(BookID), PRIMARY KEY(BookID, WishlistID) |
| WishlistID      | INTEGER     | REFERENCES Wishlist(WishlistID), PRIMARY KEY(BookID, WishlistID) |

### Payment
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentID       | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase(PurchaseID) |
| CouponID        | INTEGER     |                 |

### PaymentMethod
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| PaymentMethodID | SERIAL      | PRIMARY KEY     |
| CustomerID      | INTEGER     | REFERENCES Customers(CustomerID) |
| CardNumber      | VARCHAR(20) |                 |
| CardType        | VARCHAR(20) |                 |
| ExpirationDate  | DATE        |                 |
| BillingAddress  | VARCHAR(255)|                 |

### Shipping
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| ShippingID      | SERIAL      | PRIMARY KEY     |
| PurchaseID      | INTEGER     | REFERENCES Purchase(PurchaseID) |
| ShippingAddress | VARCHAR(255)|                 |
| ShippingDate    | DATE        |                 |
| TrackingNumber  | VARCHAR(50) |                 |
| DeliveryDate    | DATE        |                 |

### Cart
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CartID          | SERIAL      | PRIMARY KEY     |
| CartListID      | INTEGER     |                 |

### CartList
| Attribute       | Type        | Constraints                          |
|-----------------|-------------|--------------------------------------|
| CartListID      | SERIAL      | PRIMARY KEY                          |
| BookID          | INTEGER     | REFERENCES Books(BookID)             |
| Quantity        | INTEGER     |                                      |

### Coupon
| Attribute       | Type        | Constraints     |
|-----------------|-------------|-----------------|
| CouponID        | SERIAL      | PRIMARY KEY     |
| ExpiryDate      | DATE        |                 |
| Function        | VARCHAR(50) |                 |


  


 

