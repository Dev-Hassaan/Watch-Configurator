import './src/scss/styles.scss'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import $ from 'jquery'
import * as bootstrap from 'bootstrap'
    
$(".watch-isActive").on("click", function() {
    $('.watch-isActive').removeClass("active")
    $(this).addClass("active")
})

// var currentIndex = $(".tab-content").length - $(".tab-content").length
// $(".tab-content").eq(currentIndex).show()
// $("#pre_tab").on("click", function() {

//     $(".tab-content").hide()
    
//     currentIndex += 1

//     if (currentIndex < 0) {
//         currentIndex = $(".tab-content").length - 1 
//     } else if ( currentIndex > $(".tab-content").length - 1) {
//         currentIndex = 0
//     }

//     $(".tab-content").eq(currentIndex).show()

// })
// $("#next_tab").on("click", function() {
//     $(".tab-content").hide()
    
//     currentIndex -= 1

//     if (currentIndex < 0) {
//         currentIndex = $(".tab-content").length - 1 
//     } else if ( currentIndex > $(".tab-content").length - 1) {
//         currentIndex = 0
//     }

//     $(".tab-content").eq(currentIndex).show()

// })