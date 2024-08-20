var participantes = [];


function adicionar() {
    var addAmigo = document.getElementById('nome-amigo').value;
    //alert('Amigos adicionados: ' + addAmigo);
    participantes.push(` ${addAmigo}`);
    //alert('Lista de amigos: ' + listaAmigos);
    var campoIncluidos = document.getElementById('lista-amigos');
    campoIncluidos.textContent = participantes;
    document.getElementById('nome-amigo').value = '';
};
    //

function sortear() {
    alert(participantes);
    let embaralhados = embaralha(participantes);
    alert ('embaralhados' + embaralhados);
    var sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < embaralhados.length; i++) {
        if (i < embaralhados.length - 1) {
        sorteio.innerHTML += embaralhados[i] + ' --> ' + embaralhados[i + 1] + '<br>'; } else {
            sorteio.innerHTML += embaralhados[embaralhados.length - 1] + ' --> ' + embaralhados[0] + '<br>';
        }
    };
}


function embaralha(lista) {
    alert('Embaralhando');
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    };
    return lista;
};

function reiniciar() {
    participantes = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
}