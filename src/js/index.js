import '../styles/style.scss';
import 'bootstrap'
import 'popper.js'
import TypeIt from 'typeit';


new TypeIt('#billion', {
    speed: 40,
    breakLines: false,
    waitUntilVisible: true
})
    .type("A million dollars isn't cool.")
    .pause(1500)
    .options({speed: 80})
    .delete()
    .pause(500)
    .options({speed: 40})
    .type("You know what's cool?")
    .pause(2500)
    .options({speed: 80})
    .delete()
    .options({speed: 50})
    .type("<strong>A BILLION DOLLARS.</strong>")
    .go();


// function myFunction() {
//     document.body.style.backgroundColor = "#1b1b1b";
//     document.getElementById('billion').style.color = "red";
// }
//
// myFunction();
