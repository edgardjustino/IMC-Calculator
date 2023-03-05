function contar (){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('ERRO! Faltam dados!')
        res.innerHTML = 'Impossível contar!'
        if ( p <=0){ alert( 'Passo inválido, considerar passo 1')
    p = 1}
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i,f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
        } else {
            for (c = o; c >=f ; c -= p ){
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `...`
    }
}