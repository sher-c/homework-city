$(document).ready(function () {
//when click the button..the city name will update the picture
//detect when the button is click
$('#submit-btn').click(function(event){
event.preventDefault();

//set variable city is city type value
var city = $('#city-type').val()
//if city is "New York" or "New York City" or "NYC"
if (city === "New York" || city === "New York City" || city === "NYC") {
  $('body').attr('id', 'nyc')}
// else if city is "San Francisco" or "SF" or "Bay Area"
else if (city === "San Francisco" || city === "Bay Area" || city === "SF") {
    $('body').attr('class', 'sf')}
// else if city is "Los Angeles" or "LA" or "LAX"
else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
    $('body').attr('class', 'la')}
//else if city is "Austin" or "ATX"
else if (city === "Austin" || city === "ATX") {
            $('body').attr('class', 'au')}
//else if city is "Sydney" or "SYD"
else if (city === "Sydney" || city === "SYD") {
            $('body').attr('class', 'sy')}
});

})



// })
