const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//Rutas para clientes
router.get("/clients", userController.getAllClients);
router.get("/clients/id/:id", userController.getClientById);
router.get("/clients/gender/:gender", userController.getClientByGender);
router.get("/clients/email/:email", userController.getClientByEmail);
router.get("/clients/age/:age", userController.getClientByAge);
router.post("/clients", userController.createClient);
router.put("/clients/:name", userController.updateClient);
router.delete("/clients/:id",userController.deleteClient);

//Rutas para libros
router.get("/books", userController.getAllBooks);
router.get("/books/:id", userController.getBookById);
router.get("/books/author/:author", userController.getBookByAuthor);
router.get("/books/pages/:pages", userController.getBookByPages);
router.get("/books/name/:name", userController.getBookByName);
router.post("/books", userController.createBook);
router.put("/books/:name", userController.updateBook);
router.delete("/books/:id", userController.deleteBook);


module.exports = router




