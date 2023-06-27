// let valueDisplays = document.querySelectorAll(".stat-counter");
// let interval = 4000;

//** start value -> end value to parse -> duration of time*/ 
// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-decimals"));
//     let duration =  Math.floor(interval/endValue);
//     let counter = setInterval(function(){
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if(startValue == endValue){
//             clearInterval(counter);
//         }
//     }, duration)
// });