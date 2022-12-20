

let camisas = [];

let camisetas = [];


function separacaoDeItens(lista) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].type === "Camisetas") {
            camisetas.push(lista[i]);
        } else {
            camisas.push(lista[i]);
        }
    }

}
separacaoDeItens(arrayItens);

function createItens(objeto) {

    let li = document.createElement('li');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let span = document.createElement('span');
    let button = document.createElement('button');

    h2.innerText = objeto.nome;
    span.innerText = objeto.price;
    img.src = objeto.img;
    p.innerText = objeto.p;
    button.innerText = objeto.button;
    li.className = 'box'

    li.append(img, h2, p, span, button);

    return li
}

function sectionListObjeto (listaAlt){
    const ulCamisas = document.querySelector('.container1');
    const ulCamisetas = document.querySelector('.container2');

    for (let i = 0; i < listaAlt.length; i++){
        if (listaAlt == camisas) {
            ulCamisas.appendChild(createItens(listaAlt[i]));
        } else {
            ulCamisetas.appendChild(createItens(listaAlt[i]));
        }
    }
}

sectionListObjeto(camisas);
sectionListObjeto(camisetas);
