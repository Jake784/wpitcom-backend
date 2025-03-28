const db = require('../config/dbConfig');

// Función para obtener todos los usuarios
exports.getAllUsers = (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};

// Función para crear un usuario nuevo
exports.createUser = (userData, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const values = [userData.name, userData.email, userData.password];

    db.query(query, values, (err, results) => {
        if (err) callback(err, null);
        else callback(null, results);
    });
};
