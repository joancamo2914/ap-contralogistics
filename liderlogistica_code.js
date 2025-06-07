function dtoFactura(facturaDto) {
    var url = 'https://docs.google.com/spreadsheets/d/1aGDWBNbpSjO80PqxXSwEhGkumj4bnf9b1Jdu6kXvKSI/edit?gid=0#gid=0';
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName('facturas');
    ws.appendRow([facturaDto.codigo, facturaDto.cliente, facturaDto.vendedor, facturaDto.fecha, new Date()]);
}
