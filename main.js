import './src/scss/styles.scss'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import $ from 'jquery'
import * as bootstrap from 'bootstrap'
import SnedPostMessage from './src/js/PostMessage'
import StateHandler from './src/js/StateHandler'
    
var app = document.getElementById("app")

StateHandler(".watch-icon-1", "click")
StateHandler(".watch-icon-2", "click")
StateHandler(".watch-icon-3", "click")
StateHandler(".watch-icon-4", "click")
StateHandler(".watch-icon-5", "click")
StateHandler(".watch-icon-6", "click")
// StateHandler(".watch-icon-7", "click")
// StateHandler(".watch-icon-8", "click")
StateHandler(".watch-icon-9", "click")
StateHandler(".watch-icon-10", "click")
// StateHandler(".watch-icon-11", "click")
// StateHandler(".watch-icon-12", "click")

// Get the Index of the accordion which is active/shown
document.querySelectorAll('.accordion-collapse').forEach((collapse, index) => {
    collapse.addEventListener('shown.bs.collapse', function () {
      SnedPostMessage(app, `Active-Scene:${index}`)
    });
  });
  
  

$(".watch-ui").hide()
window.addEventListener('message', (event) => {
    if (event.data == 'app:ready') {
        // Update the 3D model based on received data
        $(".watch-ui").show()
    }
});