// **Switch make document ready first then run function
$(document).ready(function() {

  //detect click update
  $('#submit-btn').click(function(event){
    event.preventDefault();
    //take the vairable in text box make lowercase
    var city = $('#city-type').val().toLowerCase();
    //switch if city case is 'nyc'..to id'nyc' background
    switch(city) {
      case 'nyc':
      case 'new york':
      case 'new york city':
        $('body').attr('id','nyc');
        break;
      case 'san francisco':
      case 'bay area':
      case 'sf':
        $('body').attr('class', 'sf')
        break;
      case 'los angeles':
      case 'la':
      case 'lax' :
        $('body').attr('class', 'la')
        break;
      case 'austin':
      case 'atx':
        $('body').attr('class', 'au')
        break;
      case 'sydney':
      case 'sy':
        $('body').attr('class', 'sy')
        break;
      default:
    }

})
});

// **IF ELSE make document ready first then run function
// $(document).ready(function() {
//
//   //detect click update
//   $('#submit-btn').click(function(event){
//     event.preventDefault();
//     //take the vairable in text box
//     var city = $('#city-type').val().toLowerCase();
//
//     //if city is "new york" or "new york city" or "nyc" ** lowercase as alr change to lower on top.
//     if (city === "nyc" || city === "new york"|| city === "new york city") {
//     //nyc id already specify as background image...
//     //so in body change the attr to nyc id..
//       $('body').attr('id','nyc')
//     }
//     else if (city === "san francisco" || city === "bay area" || city === "sf") {
//       $('body').attr('class', 'sf')
//     }
//     else if (city === "los angeles" || city === "la" || city === "lax") {
//       $('body').attr('class', 'la')
//     }
//     else if (city === "austin" || city === "atx") {
//       $('body').attr('class', 'au')
//     }
//     else if (city === "sydney" || city === "syd") {
//                 $('body').attr('class', 'sy')
//     }
// })
// });
