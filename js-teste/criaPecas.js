// PEÕES
// cria o peão que fica inicialmente na casa a2
const a2 = document.querySelector('#a2')
const peaoA2 = document.createElement('div')
peaoA2.setAttribute('class', 'peao')
a2.appendChild(peaoA2)
peaoA2.innerHTML = 'peão'
// cria o peão que fica inicialmente na casa e3
const e2 = document.querySelector('#e2')
const peaoE2 = document.createElement('div')
peaoE2.setAttribute('class', 'peao')
e2.appendChild(peaoE2)
peaoE2.innerHTML = 'peão'


// REIS
// por enquanto o rei ficará no meio do tabuleiro para testes
const d5 = document.querySelector('#d5')
const reiD5 = document.createElement('div')
reiD5.setAttribute('class', 'rei')
d5.appendChild(reiD5)
reiD5.innerHTML = 'rei'