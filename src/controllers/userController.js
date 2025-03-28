const userModel = require('../models/userModel');

// Controlador para obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ message: "Error al obtener usuarios", error: err });
        } else {
            res.status(200).json(results);
        }
    });
};

// Controlador para crear un usuario nuevo
exports.createUser = (req, res) => {
    const userData = req.body; // Datos enviados desde el frontend
    userModel.createUser(userData, (err, results) => {
        if (err) {
            res.status(500).json({ message: "Error al crear usuario", error: err });
        } else {
            res.status(201).json({ message: "Usuario creado con éxito", results });
        }
    });
};
