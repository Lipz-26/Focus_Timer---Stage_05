import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSettings,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const sounds = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSettings,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}
)
Events({controls, timer, sounds})

