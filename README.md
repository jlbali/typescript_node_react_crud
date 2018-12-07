# typescript_node_react_crud
A simple skeleton project in development for a CRUD application in NodeJS and using ReactJS


## Prerequisites

- npm install -g typescript ts-node

- MongoDB 3 installed.


Taking as a base information from:

https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf


- server (TS files)
- dist_server (compiled JS files)
- client_TS (TS files for React).
- client_JS (compiled JS files for React).
- dist_client (compiled React Bundle).
- scripts (SQL database creation and MongoDB scripts).


Status: page 88 of book.

Not clear where to use the redux-thunk, no import whatsoever of that in the book...



p. 51-59 skipped, going straight to chapter 4 so as to combine with the database.


As stated, we will follow the exercise but it is not perhaps the best way of accomplishing the desired functionality.
Too much logic inside the ToDoPage, the form should be a different component.


Design, Navbar, forms opened in other windows, etc...
As georayos2...

Next steps:

- complete tutorial from the web page.
- develop a NodeJS and SQLite version, in parallel, with adaptable DAO objects.
- develop client React using maybe React/Redux.

- First completion status: once the complete CRUD of Todos is done, with database
access and all the correct styles.



- Develop a TodoApp, starting from server. Using Sequelize and maybe Mongoose/MongoDB. No authentication, complete an entire CRUD line using server code and React/Redux.

- next steps: go with the frontend part, starting with showing the data. Then, work
simultaneously in the backend and the frontend so as to be adding all the CRUD functionality (ie, update, delete, create, etc).

Problems:

- Query to fetch all todos seems to return nothing, check database and check everything else. See if middleware of redux-thunk is appropriately put.

- query to get all Todos is not working, maybe is not pointing to the correct database definition file, or maybe instead there is some step needed to actually create the table. Maybe some population is needed?? 
SEEMS FIXED!

- No elements are being shown when querying for the Todos, maybe they are not being saved. It does not seem they are being saved, when accessing the file.
FIXED!!

- Ofuscation issues that complicate debugging.... How to turn them off?
FIXED. Added to webpack a mode flag set to "development".

- Error with some undefined list, look at that.
FIXED

