$(document).ready(function () {
//when click the button..the city name will update the picture
//detect when the button is click
$('#submit-btn').click(function(event){
event.preventDefault();

//set variable city is city type value and change it to lower case
var city = $('#city-type').val();
city = city.toLowerCase();

//if city is "New York" or "New York City" or "NYC"
if (city === "new york" || city === "new york city" || city === "nyc") {
  $('body').attr('id', 'nyc')}
// else if city is "San Francisco" or "SF" or "Bay Area"
else if (city === "san francisco" || city === "bay area" || city === "sf") {
    $('body').attr('class', 'sf')}
// else if city is "Los Angeles" or "LA" or "LAX"
else if (city === "los angeles" || city === "la" || city === "lax") {
    $('body').attr('class', 'la')}
//else if city is "Austin" or "ATX"
else if (city === "austin" || city === "atx") {
            $('body').attr('class', 'au')}
//else if city is "Sydney" or "SYD"
else if (city === "sydney" || city === "syd") {
            $('body').attr('class', 'sy')}
});
})

// switch (city) {
//   case 'new york':
//   case 'new york city':
//   case 'nyc':
//     $('body').attr('id', 'nyc')
//     break;
//   case 'san francisco':
//   case 'bay area':
//   case 'sf':
//     $('body').attr('class', 'sf')
//     break;
//   case 'los angeles':
//   case 'la':
//   case 'lax' :
//     $('body').attr('class', 'la')
//     break;
//   case 'austin':
//   case 'atx':
//     $('body').attr('class', 'au')
//     break;
//   case 'sydney':
//   case 'sy':
//       $('body').attr('class', 'sy')
//       break;
//       default:
//
// }






// })
