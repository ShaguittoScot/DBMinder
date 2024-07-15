exports.createDatabase = (req, res) => {
    // Lógica para mostrar el formulario de creación de base de datos
    res.render('createDatabase');  // Asegúrate de que 'createDatabase' es el nombre correcto de la vista
};

exports.createDatabasePost = (req, res) => {
    // Lógica para manejar la creación de la base de datos
    // Puedes obtener los datos del formulario usando req.body
    const dbName = req.body.dbName;
    // Lógica para crear la base de datos en MySQL
    res.redirect('/db/list');  // Redirige a la lista de bases de datos después de crear una base de datos
};

exports.listDatabases = (req, res) => {
    // Lógica para listar las bases de datos
    // Obtener las bases de datos desde MySQL y enviarlas a la vista
    res.render('listDatabases');  // Asegúrate de que 'listDatabases' es el nombre correcto de la vista
};
