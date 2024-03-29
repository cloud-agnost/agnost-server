# Changelog

All notable changes to this project are documented in this file.

### 1.4.12 (2024-03-08)

-  Added `isnull` and `isnotnull` query functions

### 1.4.11 (2024-02-19)

-  Updated includes function to make the last parameter mandatory

### 1.4.10 (2024-02-19)

-  Updated comparison operator validation rules for date values

### 1.4.9 (2024-01-07)

-  Added return count info to model `findMany` and `searchText` methods

### 1.4.8 (2024-01-07)

-  Added null value check to equal and not-equal query functions

### 1.4.7 (2023-12-28)

-  Bug fixed in updating json field values
-  Bug fiexed in setting the reference id values in MongoDB databases

### 1.4.4 (2023-10-27)

-  Minor bug fixes
-  Renamed `getSQLQuery` method to `getSQLSubQuery

### 1.4.3 (2023-10-27)

-  Added support for MySQL databases
-  Added `getSQLQuery` method to Model module to get the SQL query string based on the method input parameters

### 1.4.2 (2023-10-09)

-  Added `getClient` method to Cache module to access the Redis client driver to perform advanced operations

### 1.4.1 (2023-10-06)

-  Fixed uppercase function name bug in Function manager

### 1.4.0 (2023-10-05)

-  Added the realtime methods to broadcast and send messages to a channel through websockets

### 1.3.0 (2023-10-01)

-  Added the new updateOne and deleteOne methods to database model manager and renamed update and delete methods to updateMany and deleteMany respectively

### 1.2.0 (2023-09-22)

-  Added the module to manage application cache (e.g, managing key-value pairs in Redis)

### 1.1.0 (2023-09-20)

-  Added the module to call custom helper functions defined in Agnost Studio

### 1.0.0 (2023-09-19)

-  Initial version of Agnost server-side client library
