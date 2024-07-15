exports.createTable = (req, res) => {
    // Lógica para mostrar el formulario de creación de tablas
    res.render('createTable');  // Asegúrate de que 'createTable' es el nombre correcto de la vista
};

exports.createTablePost = (req, res) => {
    // Lógica para manejar la creación de la tabla
    // Puedes obtener los datos del formulario usando req.body
    const tableName = req.body.tableName;
    const columns = req.body.columns;
    // Lógica para crear la tabla en MySQL
    res.redirect('/tables/list');  // Redirige a la lista de tablas después de crear una tabla
};

exports.listTables = (req, res) => {
    // Lógica para listar las tablas
    // Obtener las tablas desde MySQL y enviarlas a la vista
    res.render('listTables');  // Asegúrate de que 'listTables' es el nombre correcto de la vista
};
