function cargarDatosUsuarios() {
    var ws = ss.getSheetByName('facturas');
  var listFacturas = ws.getRange("A2:D" + ws.getLastRow()).getValues();
  var listFacturasHtml = listFacturas.map(
    function (r){
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
    }
  ).join('');
  var objUsuarios = {list: listFacturasHtml};
  return objUsuarios;
}

function agregarFactura(facturaDto) {
    var url = 'https://docs.google.com/spreadsheets/d/1aGDWBNbpSjO80PqxXSwEhGkumj4bnf9b1Jdu6kXvKSI/edit?gid=0#gid=0';
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName('facturas');
    ws.appendRow([facturaDto.codigo, facturaDto.cliente, facturaDto.vendedor, facturaDto.fecha, new Date()]);
}