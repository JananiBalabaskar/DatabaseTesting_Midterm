
# Online Bookstore Database  

  

## Tables and Attributes 

  

### Authors 

|    Attributes   |        Datatype     |       Constraints      | 

|-----------------|---------------------|------------------------| 

| AuthorID      |       SERIAL        | PRIMARY KEY   | 

| FirstName     | VARCHAR (50) |                              | 

| LastName     | VARCHAR (50) |                               | 

### Publishers 

|    Attributes         |        Datatype        |       Constraints       | 

|----------------------|-----------------------|------------------------| 

| PublisherID         |       SERIAL         | PRIMARY KEY     | 

| PublisherName    |VARCHAR (100) |                                 | 

| PhoneNumber      | VARCHAR (20) |                                  | 

 

  

### Books 

|    Attributes         |        Datatype         |       Constraints                                           | 

|----------------------|-----------------------|----------------------------------------------------| 

| BookID               |         SERIAL        | PRIMARY KEY                                        | 

| Title                    | VARCHAR (255) |                                                                     | 

| AuthorID            | INTEGER             | REFERENCES Authors (AuthorID)           | 

| PublisherID        | INTEGER              | REFERENCES Publishers (PublisherID)   | 

| PublishedDate     | DATE                   |                                                                       | 

| Edition                | VARCHAR(50)    |                                                                       | 

| Language            | VARCHAR(50)    |                                                                       | 

| Price                    | DECIMAL(10, 2) |                                                                       | 

| CopiesCount       | INTEGER             |                                                                       | 

| TotalSold            | INTEGER             |                                                                       | 

| ISBN                   | VARCHAR(20)    |                                                                       | 

| Format                | VARCHAR(50)    |                                                                        | 

| FileURL             | VARCHAR(255)   |                                                                       | 

  

### Customers 

|    Attributes         |        Datatype       |       Constraints       | 

|----------------------|----------------------|------------------------| 

| CustomerID        |       SERIAL         | PRIMARY KEY   | 

| FirstName           | VARCHAR (50) |                                  | 

| LastName            | VARCHAR (50) |                                | 

| UserName           | VARCHAR (50) |                                 | 

| Password             |VARCHAR (255) |                                | 

| Address               |VARCHAR (255) |                                | 

| Country               | VARCHAR (50) |                                 | 

| PhoneNumber     | VARCHAR (20) |                                 | 

| EmailId               | VARCHAR (100)|                                | 

| CartID                 | INTEGER            |                                | 

  

 

 

### Genre 

|    Attributes         |        Datatype       |       Constraints       | 

|----------------------|----------------------|------------------------|  

| GenreID              |         SERIAL       | PRIMARY KEY   | 

| GenreName        | VARCHAR (100) |                                | 

  

### BookGenre 

| Attributes | Datatype   |                                                 Constraints                                               | 

|-------------|---------------|-------------------------------------------------------------------------------------| 

| BookID    | INTEGER | REFERENCES Books(BookID), PRIMARY KEY(BookID, GenreID)| 

| GenreID   | INTEGER | REFERENCES Genre(GenreID), PRIMARY KEY(BookID, GenreID) | 

  

### Purchase 

|    Attributes            |         Datatype        |       Constraints                                          | 

|------------------------|------------------------|--------------------------------------------------| 

| PurchaseID             | SERIAL                | PRIMARY KEY                                       | 

| CustomerID            | INTEGER             | REFERENCES Customers(CustomerID) | 

| PurchaseDate          | DATE                   |                                                                     | 

| TotalAmount          | DECIMAL (10, 2) |                                                                     | 

| PaymentMethodID | INTEGER              |                                                                     | 

| PaymentStatus        | VARCHAR (50)    |                                                                     | 

| ShippingID              | INTEGER             |                                                                     | 

  

 

 

### Reviews 

|   Attributes      |       Datatype       |                     Constraints                             | 

|------------------|----------------------|---------------------------------------------------| 

| ReviewID       | SERIAL             | PRIMARY KEY                                        | 

| CustomerID    | INTEGER         | REFERENCES Customers(CustomerID)  | 

| BookID          | INTEGER          | REFERENCES Books(BookID)                | 

| Rating            | DECIMAL(3, 2) |                                                                    | 

| Comment       | TEXT                  |                                                                    | 

| ReviewDate   | DATE                  |                                                                    | 

  

### Wishlist 

|     Attribute       |   Datatype   |                      Constraints                           | 

|-------------------|----------------|---------------------------------------------------| 

| WishlistID       | SERIAL      | PRIMARY KEY                                       | 

| CustomerID      | INTEGER | REFERENCES Customers(CustomerID) | 

| CreationDate    | DATE        |                                                                    | 

  

### WishlistBooks 

|Attributes | Type        |                                                            Constraints                                      | 

|-------------|-------------|---------------------------------------------------------------------------------------| 

| BookID   |INTEGER| REFERENCES Books(BookID), PRIMARY KEY(BookID, WishlistID)| 

|WishlistID| INTEGER|REFERENCES Wishlist(WishlistID), PRIMARY KEY(BookID, WishlistID) | 

  

 

 

 

### Payment 

|      Attributes    |      Datatype |                     Constraints                           | 

|--------------------|-----------------|-------------------------------------------------| 

| PaymentID       | SERIAL        | PRIMARY KEY                                    | 

| PurchaseID      | INTEGER     | REFERENCES Purchase(PurchaseID)   | 

| CouponID        | INTEGER     |                                                                | 

  

### PaymentMethod 

|          Attributes       |         Datatype     |                     Constraints                            | 

|-------------------------|---------------------|---------------------------------------------------| 

| PaymentMethodID | SERIAL              | PRIMARY KEY                                       | 

| CustomerID             | INTEGER          | REFERENCES Customers(CustomerID) | 

| CardNumber            | VARCHAR(20) |                                                                   | 

| CardType                 | VARCHAR(20) |                                                                    | 

| ExpirationDate         | DATE                 |                                                                   | 

| BillingAddress        | VARCHAR(255) |                                                                   | 

  

### Shipping 

|   Attributes           |     Datatype          |                    Constraints                        | 

|----------------------|----------------------|------------------------------------------------| 

| ShippingID          | SERIAL              | PRIMARY KEY                                    | 

| PurchaseID          | INTEGER           | REFERENCES Purchase(PurchaseID) | 

| ShippingAddress | VARCHAR(255)|                                                                | 

| ShippingDate       | DATE                 |                                                                | 

| TrackingNumber  | VARCHAR(50) |                                                                 | 

| DeliveryDate        | DATE                  |                                                               | 

  

 

### Cart 

|   Attributes    | Datatype   |       Constraints     | 

|-----------------|--------------|-----------------------| 

| CartID          | SERIAL    | PRIMARY KEY | 

| CartListID    | INTEGER |                             | 

  

### CartList 

|     Attributes    |    Datatype        |               Constraints                     | 

|-------------------|--------------------|-----------------------------------------| 

| CartListID       | SERIAL            | PRIMARY KEY                          | 

| BookID           | INTEGER         | REFERENCES Books(BookID)  | 

| Quantity         | INTEGER          |                                                       | 

  

### Coupon 

|   Attributes     |   Datatype        |      Constraints     | 

|------------------|--------------------|-----------------------| 

| CouponID      | SERIAL            | PRIMARY KEY  | 

| ExpiryDate     | DATE               |                              | 

| Function         | VARCHAR(50)|                              | 
