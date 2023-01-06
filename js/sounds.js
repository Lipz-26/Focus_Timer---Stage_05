export default function () {

  //variaveis que estão com o link das musicas
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  //audio em loop
  bgAudio.loop = true


  // funções de sons na hora de pressionar algum botão no cronometro.
  function pressButton(){
    buttonPressAudio.play()

  }

  function timeEnd(){
    kitchenTimer.play()
  }

  //colocando os elementos e funções para fora.
  return{
    pressButton,
    timeEnd,
    bgAudio
  }
}