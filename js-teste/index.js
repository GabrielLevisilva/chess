

const eventoCoordenadas = function(){coordenadas(event)};
// loop que adiciona eventos aos .peao e POSTEIORMNTE às outras peças
addEventPeca()

function addEventPeca() {
    
    const todosPeoes = document.querySelectorAll('.peao')
    const todosReis = document.querySelectorAll('.rei')

    for(let c = 0; c < todosPeoes.length; c++){
        todosPeoes[c].addEventListener('click', eventoCoordenadas)
        
    }

    for(let c = 0; c < todosReis.length; c++ ){
        todosReis[c].addEventListener('click', eventoCoordenadas)
    }

    
    

}

// Pegar as coordenadas da peça escolhida
function coordenadas(event){
    let pecaClicada = event.target
    console.log(pecaClicada)
    // Pega a casa em que a peça clicada está e o seu id
    let casaPai = pecaClicada.parentNode
    console.log(casaPai)
    let idCasaPai = casaPai.id
    // Pega os eixos vertical e horizontal
    let vertical = idCasaPai[0]
    console.log(vertical)
    let horizontal = Number(idCasaPai[1])
    console.log(horizontal)
    
    

    // Verificar qual é a peça. Se ela é um rei, bispo, peão, etc.
    if(pecaClicada.classList.contains('peao')){
        console.log("A peça é um peão")
        casasPeao(vertical, horizontal, pecaClicada)
    }
    else if(pecaClicada.classList.contains('rei')){
        console.log("A peça é um REI")
        casasRei(vertical, horizontal, pecaClicada)
    }
    // TODO CRIAR OUTROS ELSE IF
}



function casasRei(vertical, horizontal, pecaClicada){
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const todasCasas = document.querySelectorAll('.casa') //cuidado para não tirar a class white e black
    
    let teste = (letters.indexOf(vertical) + 1)
    let idCasaLado = letters[teste] + horizontal
    console.log(idCasaLado)

    

    let deslocarCasa = 0
    

    for(let c = 0; c< todasCasas.length; c++){
        if(todasCasas[c].id == idCasaLado){
            deslocarCasa = todasCasas[c]
            let evento = function(){moverPeao(pecaClicada, deslocarCasa, todasCasas, evento, horizontal)};
            deslocarCasa.addEventListener('click', evento)
            deslocarCasa.style.backgroundColor = 'blue' //Adiciona cor à casa que pode ser movimentada
    // Adiciona evento à casa que pode ser andada
            break;
        }
        else{
            console.log('ainda não REI')
        }
    }

    let teste2 = (letters.indexOf(vertical) - 1)
    let idCasaLado2 = letters[teste2] + horizontal
    console.log(idCasaLado2)

    let deslocarCasa2 = 0

    for(let c = 0; c< todasCasas.length; c++){
        if(todasCasas[c].id == idCasaLado2){
            deslocarCasa2 = todasCasas[c]
            let evento = function(){moverPeao(pecaClicada, deslocarCasa2, todasCasas, evento, horizontal)};
            deslocarCasa2.addEventListener('click', evento)
            deslocarCasa2.style.backgroundColor = 'blue' //Adiciona cor à casa que pode ser movimentada
    // Adiciona evento à casa que pode ser andada
            break;
        }
        else{
            console.log('ainda não REI')
        }
    }

    
    let idCasaLado3 = vertical + (horizontal + 1)
    console.log(idCasaLado2)

    let deslocarCasa3 = 0

    for(let c = 0; c< todasCasas.length; c++){
        if(todasCasas[c].id == idCasaLado3){
            deslocarCasa3 = todasCasas[c]
            let evento = function(){moverPeao(pecaClicada, deslocarCasa3, todasCasas, evento, horizontal)};
            deslocarCasa3.addEventListener('click', evento)
            deslocarCasa3.style.backgroundColor = 'blue' //Adiciona cor à casa que pode ser movimentada
    // Adiciona evento à casa que pode ser andada
            break;
        }
        else{
            console.log('ainda não REI')
        }
    }

    
    
}



function casasPeao(vertical, horizontal, pecaClicada){
    
    console.log("Você entrou na função casas peão")
    console.log(pecaClicada)

    const todasCasas = document.querySelectorAll('.casa') //cuidado para não tirar a class white e black
    let idDeslocarCasa = vertical + (horizontal + 1)
    
    // for que percorre todas as casas em busca de uma que o peão pode andar
    // TALVEZ TRANSFORMAR ISSO EM UMA FUNÇÃO
    let deslocarCasa = 0

    for(let c = 0; c < todasCasas.length; c++){
        if(todasCasas[c].id == idDeslocarCasa){
            deslocarCasa = todasCasas[c]
            break;
        }
        else{
            console.log('ainda não')
        }
    }

    console.log(deslocarCasa)
    deslocarCasa.style.backgroundColor = 'blue' //Adiciona cor à casa que pode ser movimentada
    // Adiciona evento à casa que pode ser andada
    let evento = function(){moverPeao(pecaClicada, deslocarCasa, todasCasas, evento, horizontal)};
    deslocarCasa.addEventListener('click', evento)
    
}

function moverPeao(pecaClicada, deslocarCasa, todasCasas, evento, horizontal=0){
    // adicionar peão à casa escolhida
    deslocarCasa.appendChild(pecaClicada)

        for(let c = 0; c < todasCasas.length; c++){
        todasCasas[c].style.backgroundColor = ''
        todasCasas[c].removeEventListener('click', evento)

        }
    
    
    

}