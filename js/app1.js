$(document).ready(function () {
  })

var list = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

list.forEach(function (item) {
  var option = $('<option>').attr('value', item).text(item)
  $('select').append(option)
})



$('select').change(function (){
  var text = $(this).val()

  if (text == 'NYC') {
      $('body').attr('id', 'nyc')
    }

  else if (text == 'SF') {
      $('body').attr('class', 'sf')
    }

  else if (text == 'LA') {
      $('body').attr('class', 'la')
    }

  else if (text == 'ATX') {
      $('body').attr('class', 'au')
    }

  else if (text == 'SYD') {
      $('body').attr('class', 'sy')
    }

});
