import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSettings,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

// por não ter dependências não foi necessário desestrutura objeto.
const sounds = Sounds()

// injeção de dependencias

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSettings,
  buttonStop
})

// retirada as dependencias minutes e timerTimeOut pois estão agora no timer.js assim como as variaveis let timerTimeOut e minutes
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset
}
)

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  // criada essa função para fazer som ao mexer nos controles do cronometro.
  sounds.pressButton()
  
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  // criada essa função para fazer som ao mexer nos controles do cronometro.
  sounds.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  // criada essa função para fazer som ao mexer nos controles do cronometro.
  sounds.pressButton()
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  // elemento criado para tocar ou não a musica de fundo.
  sounds.bgAudio.play()
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  // elemento criado para tocar ou não a musica de fundo.
  sounds.bgAudio.pause()
})


buttonSettings.addEventListener('click', function (){
  let newMinutes = controls.getMinutes()
  
  if(!newMinutes){
    timer.reset()
    return
  }

  // adicionada a função updateMinutes para atualização dos minutos na hora de colocar na pop-up
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})




