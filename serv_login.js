function cargarUsuarios() {
    const ws = ss.getSheetByName('usuarios');
    const credencialesList = ss.getRange("A2:C" + ws.getLastRow()).getValues();
    return credencialesList;
}

function comprobarCredenciales(user, pass) {
    Logger.log('Comprobando credenciales para el usuario: ' + user);
    Logger.log('Contraseña proporcionada: ' + pass);
    const credencialesList = cargarUsuarios();
    Logger.log('Credenciales cargadas: ' + JSON.stringify(credencialesList));
    for (let claves of credencialesList) {
        Logger.log('Clave cargada: ' + JSON.stringify(claves));
        var usernameFound = claves[0];
        var passwordFound = claves[1];
        var rolFound = claves[2];
        if (usernameFound === user && passwordFound === pass) {
            Logger.log('Clave encontrada: '+ rolFound);
            return rolFound;
        }
        Logger.log('Credenciales incorrectas para el usuario: ' + user);
    }
    return null;
}
function getScriptUrl() {
    Logger.log('URL del script: ' + ScriptApp.getService().getUrl());
    return ScriptApp.getService().getUrl();

}

