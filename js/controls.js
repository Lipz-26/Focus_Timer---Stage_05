export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSettings,
  buttonStop
}){

  function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSettings.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }   
  
  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSettings.classList.remove('hide')
  }
  
  function getMinutes(){
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes){
    return false

    }
    
    return newMinutes
  }


  return{
    play,
    pause,
    getMinutes,
    reset
  }
}



