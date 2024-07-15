exports.getLogin = (req, res) => {
    res.render('login');  // Asegúrate de que 'login' es el nombre correcto de la vista
};




exports.postLogin = (req, res) => {
    // Lógica de inicio de sesión
    res.redirect('/');
};

exports.getRegister = (req, res) => {
    res.render('register');  // Asegúrate de que 'register' es el nombre correcto de la vista
};

exports.postRegister = (req, res) => {
    // Lógica de registro
    res.redirect('/auth/login');
};

// ---------

exports.showLoginPage = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    // Lógica para autenticar al usuario
    if (username === 'admin' && password === 'password') { // Ejemplo básico
        req.session.user = username;
        res.redirect('/db/list'); // Redirige a una página después de iniciar sesión
    } else {
        res.send('Usuario o contraseña incorrectos');
    }
};