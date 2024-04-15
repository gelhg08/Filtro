const { Clients, Books } = require("../models/userModel");

const userController = {
  //OBTENER TODOS LOS CLIENTES
  getAllClients: async (req, res) => {
    try {
      const clients = await Clients.find();
      res.json(clients);
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN CLIENTE POR SU ID
  getClientById: async (req, res) => {
    const id = req.params.id;
    try {
      const clientId = await Clients.findById(id);
      res.json(clientId);
    } catch (error) {
      console.error("Error al obtener clientes por id:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN CLIENTE POR SU GENERO
  getClientByGender: async (req, res) => {
    const gender = req.params.gender;
    try {
      const clientGender = await Clients.find({ gender });
      res.json(clientGender);
    } catch (error) {
      console.error("Error al obtener clientes por genero", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN CLIENTE POR SU EDAD

  getClientByAge: async (req, res) => {
    const age = req.params.age;
    try {
      const clientAge = await Clients.find({ age });
      res.json(clientAge);
    } catch (error) {
      console.error("Error al obtener clientes por edad", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN CLIENTE POR SU EMAIL 
  getClientByEmail: async (req, res) => {
    const age = req.params.email;
    try {
      const clientEmail = await Clients.find({ email });
      res.json(clientEmail);
    } catch (error) {
      console.error("Error al obtener clientes por edad", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //CREAR UN NUEVO CLIENTE
  createClient: async (req, res) => {
    const createClient = req.body;
    try {
      const newClient = new Clients(createClient);
      const savedClient = await newClient.save();
      res.json(savedClient);
    } catch (error) {
      console.error("Error al crear el cliente", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ACTUALIZAR UN CLIENTE POR ID
  updateClient: async (req, res) => {
    try {
      const { name } = req.params;
      const updateBook = await Clients.findOneAndUpdate(
        { name: name },
        { $set: { name: "Alejandra" } }
      );
      res.json(updateBook);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ELIMINAR UN CLIENTE POR SU ID

  deleteClient: async (req, res) => {
    try {
      const id = req.params.id;
      const clientDelete = await Clients.findOneAndDelete({ id });
      res.json(clientDelete);
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  //OBTENER TODOS LOS LIBROS
  getAllBooks: async (req, res) => {
    try {
      const book = await Books.find();
      res.json(book);
    } catch (error) {
      console.error("Error al obtener todos los libros:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN LIBRO POR SU ID
  getBookById: async (req, res) => {
    const id = req.params.id;
    try {
      const book = await Books.findById(id);
      res.json(book);
    } catch (error) {
      console.error("Error al obtener libros por id", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN LIBRO POR SU AUTOR
  getBookByAuthor: async (req, res) => {
    const author = req.params.author;
    try {
      const book = await Books.find({ author });
      res.json(book);
    } catch (error) {
      console.error("Error al obtener clientes por edad", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN LIBRO POR SU NOMBRE
  getBookByName: async (req, res) => {
    const name = req.params.name;
    try {
      const book = await Books.find({ name });
      res.json(book);
    } catch (error) {
      console.error("Error al obtener clientes por edad", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //OBTENER UN LIBRO POR PAGINAS
  getBookByPages: async (req, res) => {
    const pages = req.params.pages;
    try {
      const book = await Books.find({ pages });
      res.json(book);
    } catch (error) {
      console.error("Error al obtener clientes por edad", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  //CREAR UN NUEVO LIBRO
  createBook: async (req, res) => {
    const bookCreate = req.body;
    try {
      const newBook = new Books(bookCreate);
      const savedBook = await newBook.save();
      res.json(savedBook);
    } catch (error) {
      console.error("Error al crear el libro", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ACTUALIZAR UN LIBRO POR SU ID,
  updateBook: async (req, res) => {
    try {
      const { name } = req.params;
      const updateBook = await Books.findOneAndUpdate(
        { name: name },
        { $set: { name: "Divergente" } }
      );
      res.json(updateBook);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  //ELIMINAR UN LIBRO POR SU ID

  deleteBook: async (req, res) => {
    try {
      const id = req.params.id;
      const bookDelete = await Books.findOneAndDelete({ id });
      res.json(bookDelete);
    } catch (error) {
      console.error("Error al eliminar libro:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = userController;
