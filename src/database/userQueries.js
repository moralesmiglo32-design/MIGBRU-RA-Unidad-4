
const db = require('../config/database');

// Buscar un usuario por su correo
const getUserByEmail = async (correo) => {
    const [rows] = await db.query(
        'SELECT * FROM usuarios WHERE correo = ?',
        [correo]
    );

    return rows[0];
};

// Registrar un usuario
const createUser = async (usuario) => {
    const { nombre, correo, password } = usuario;

    const [result] = await db.query(
        `INSERT INTO usuarios (nombre, correo, password)
         VALUES (?, ?, ?)`,
        [nombre, correo, password]
    );

    return result.insertId;
};

module.exports = {
    getUserByEmail,
    createUser
};
