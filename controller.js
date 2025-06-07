var url = 'https://docs.google.com/spreadsheets/d/1aGDWBNbpSjO80PqxXSwEhGkumj4bnf9b1Jdu6kXvKSI/edit?gid=0#gid=0';
var ss = SpreadsheetApp.openByUrl(url);
var Route = {};
Route.path = function (route, callback){
  Route[route] = callback;
}

function myFunction(u) {
  var ws = ss.getSheetByName('usuarios');
  Logger.log('esto ' + u);
  ws.appendRow([u, new Date()]);
}

function doGet(e) {

  Route.path('form', loadForm);
  Route.path('login', loadLogin);
  Route.path('logistica', laodLogistica);
  Route.path('bodega', laodBodega);
  Route.path('conductor', loadConductor);

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]();
  } else {
    return HtmlService.createTemplateFromFile('login_vista').evaluate();
  }
}

function render (file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp.evaluate();  
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function loadForm() {
  var ws = ss.getSheetByName('usuarios');
  var list = ws.getRange("A2:A" + ws.getLastRow()).getValues().flat();
  var listUsersHtml = list.map(function (r) { return '<option>' + r + '</option>'; }).join('');
  return render ('crearRutas', {list: listUsersHtml, tittle: "Creacion de rutas"});
}

function loadLogin(){
  var ws = ss.getSheetByName('usuarios');
  var usersList = ss.getRange("A2:A" + ws.getLastRow()).getValues().flat();
  return render('vista_login', {tittle: "Login"});
}

function laodLogistica(){
  var ws = ss.getSheetByName('usuarios');
  return render ('vista_liderlogistica', {list: listUsersHtml, tittle: "Logistica"});
}

function laodBodega(){
  var ws = ss.getSheetByName('usuarios');
  return render ('vista_liderbodega', {list: listUsersHtml, tittle: "Logistica"});
}

function loadConductor(){
  var ws = ss.getSheetByName('usuarios');
  return render ('vista_conductor', {list: listUsersHtml, tittle: "Conductor"});
}