let estado = function(a){
    if(a === 'sp' || a === 'rj'){
        return "Acesso permitido!"
    }else{
        return "Acesso negado"
    }
}

module.exports = estado