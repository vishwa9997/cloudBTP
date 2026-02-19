const cds = require('@sap/cds');

module.exports = cds.service.impl(async function(srv) {
    srv.on('printText', req =>{
        console.log(req.data)
        return '$(req.data) World..!'
    })


})