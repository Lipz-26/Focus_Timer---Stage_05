import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSettings,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js"
export default function events(
  {controls, timer, sounds}
  ){
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sounds.pressButton()
    
  })
  
  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sounds.pressButton()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sounds.bgAudio.play()
  })
  
  buttonSettings.addEventListener('click', function (){
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes){
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}

