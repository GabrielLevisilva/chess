const e2 = document.querySelector('#e2')
// console.log(e2)
const peaoE2 = document.createElement('div')
peaoE2.setAttribute('class', 'peao')
e2.appendChild(peaoE2)

const eventoCoordenadas = function(){coordenadas(event)};
// loop que adiciona eventos aos .peao e POSTEIORMNTE às outras peças
addEventPeca()

function addEventPeca() {
    
    const todosPeoes = document.querySelectorAll('.peao')

    for(let c = 0; c < todosPeoes.length; c++){
        todosPeoes[c].addEventListener('click', eventoCoordenadas)
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
    // TODO CRIAR OUTROS ELSE IF

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
    if (document.querySelector('#e8 .peao')) {
        // Se a condição for verdadeira, significa que existe um div.peao dentro de div.casa
        console.log('Existe pelo menos um div.peao dentro de div.casa.');
        pecaClicada.style.backgroundColor = 'red'
        
        
        pecaClicada.removeEventListener('click', eventoCoordenadas) //remove evento, já que peao chegou ao fim do tabuleiro
        // FAZER ELE VIRAR OUTRAS PEÇAS
      }

        for(let c = 0; c < todasCasas.length; c++){
        todasCasas[c].style.backgroundColor = ''
        todasCasas[c].removeEventListener('click', evento)

        }
    
    
    

}