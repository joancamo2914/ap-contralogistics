function cargarUsuarios () {
    const ws = ss.getSheetByName('usuarios');
    const credencialesList = ss.getRange("A2:C" + ws.getLastRow()).getValues();
    return credencialesList;
}

function comprobarCredenciales (user, pass) {
    Logger.log('Comprobando credenciales para el usuario: ' + user + ' con contraseña: ' + pass);
    const credencialesList = cargarUsuarios();
    for (claves of credencialesList) {
        const usernameFound = claves[0];
        Logger.log(claves[0]);
        const passwordFound = claves[1];
        Logger.log(claves[1]);
        const rolFound = claves[2];
        Logger.log(claves[2]);
        if (usernameFound === user && passwordFound === pass) {
            Logger.log('retornando lo siguiente: ' + rolFound);
            return rolFound;
        }
    }
    Logger.log('Credenciales incorrectas para el usuario: ' + user);
    return null;
}

function getScriptUrl() {
  Logger.log('URL del script: ' + ScriptApp.getService().getUrl());
    return ScriptApp.getService().getUrl();
  
}

