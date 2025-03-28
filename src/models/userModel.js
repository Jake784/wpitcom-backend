const db = require('../config/dbConfig');

// Función para obtener todos los usuarios
exports.getAllUsers = (callback) => {
    const query = 'SELECT * FROM users';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener usuarios:', err);
            callback(err, null); // Retorna el error
        } else {
            callback(null, results); // Retorna los resultados
        }
    });
};

// Función para crear un usuario nuevo
exports.createUser = (userData, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const values = [userData.name, userData.email, userData.password];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error al crear usuario:', err);
            callback(err, null); // Retorna el error
        } else {
            callback(null, results); // Retorna los resultados
        }
    });
};
