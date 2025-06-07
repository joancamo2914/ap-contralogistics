function cargarUsuarios () {
    const ws = ss.getSheetByName('usuarios');
    const credencialesList = ss.getRange("A2:C" + ws.getLastRow()).getValues();
    Logger.log('Usuarios cargados: ' + credencialesList);
    return credencialesList;
}

function comprobarCredenciales (user, pass) {
    const credencialesList = cargarUsuarios();
    Logger.log(cargarUsuarios());
    for (user of credencialesList) {
        const usernameFound = user[0];
        const passwordFound = user[1];
        const rolFound = user[2];
        if (usernameFound === user && passwordFound === pass) {
            Logger.log('Credenciales correctas para el usuario: ' + user);
            return rolFound;
        }
    }
    return null;
}

function iniciarSesion () {

}