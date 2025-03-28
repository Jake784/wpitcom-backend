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

// Controlador para crear un usuario nuevo con validaciones
exports.createUser = (req, res) => {
    const userData = req.body; // Datos enviados desde el frontend

    // Validar los datos antes de enviarlos al modelo
    if (!userData.name || !userData.email || !userData.password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios: name, email y password" });
    }

    // Verifica que el email tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
        return res.status(400).json({ message: "El correo electrónico no tiene un formato válido" });
    }

    userModel.createUser(userData, (err, results) => {
        if (err) {
            res.status(500).json({ message: "Error al crear usuario", error: err });
        } else {
            res.status(201).json({ message: "Usuario creado con éxito", results });
        }
    });
};
