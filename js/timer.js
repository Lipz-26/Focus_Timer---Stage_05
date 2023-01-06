import Sounds from "./sounds.js"


//criando a factory para conectar as funções ao index.js, lembrando que já estou exportando a função.

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){
  // variaveis colocada no timer já que só precisa existe aqui dentro desse arquivo.
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds){
    // fazendo um ternario no js para redefinir o cronometro para os minutos inseridos ou para o padrão
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      // logica para tanto quando minuto como segundo chegar a zero, se não quando minuto chegar a zero ele não drecrementar mais o segundo e zerar.
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)
      
      if(isFinished) {
        resetControls()
        updateDisplay()
        //função exercutada para tocar o despertador na hora de acabar o cronometro.
        Sounds().timeEnd()
        return
      }
      
      if(seconds <= 0) {
        seconds = 60
  
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
      
      countdown()
      
    }, 1000);
  }

  //atualizando minutos
  function updateMinutes(newMinutes){
    minutes = newMinutes
  }
  // aplicando o pause
  function hold(){
    clearTimeout(timerTimeOut)
  }

  // colocando a as funções para fora
  return{
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold
  }
}


