var turnonoff = document.getElementById('liga/desliga')
var lampada = document.getElementById('lamp')

function lamp_quebrada(){
  return lampada.src.indexOf ('quebrada') > -1
  //essa função serve pra verificar se ela tá quebrada

  //indexOf faz uma varredura de uma string procurando outra string

  //quando o indexOf acha o parâmetro ('quebrada'), ele retorna um número maior que -1, então se for maior que -1, ele achou a imagem
}

function ligada(){
  if(!lamp_quebrada ())
  //se a lampada for diferente da função (se ela estiver quebrada), essa função não vai ativar
  lampada.src = './img/ligada.jpg'
}

function desligada(){
  if(!lamp_quebrada())
  //se a lampada for diferente da função (se ela estiver quebrada), essa função não vai ativar
  lampada.src = './img/desligada.jpg'
}

function quebrada(){
  lampada.src = './img/quebrada.jpg'
}

function lamponoff(){
  if(turnonoff.textContent == 'Ligar'){
  ligada()
  turnonoff.textContent = 'Desligar'
  }else{
    desligada()
    turnonoff.textContent = 'Ligar'
  }
}

turnonoff.addEventListener('click', lamponoff)

lampada.addEventListener('mouseover', ligada)
lampada.addEventListener('mouseleave', desligada)
liga_desliga.addEventListener('click', ligada)
lampada.addEventListener('dblclick', quebrada)