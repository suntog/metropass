var $ = require('jquery');

module.exports = function printTerms(passTypes) {
  $('#data-target').empty();
  // TODO: make this more generalized and recursive.
  $.each(passTypes.passtype, function (type, typeValue) {
    $('<div class="passtype">').text(`${type}:`).attr('data',`passtype.${type}`).appendTo('#data-target');
    $.each(typeValue, function(fareType, fareTypeChild) {
      $('<div class="faretype">').text(`${fareType}:`).attr('data',`passtype.${type}.${fareType}`).appendTo('#data-target');
      $.each(fareTypeChild, function(fareValue, value){
        if (fareValue == "discount") {
          $('<div class="farevalue">').text(`${fareValue}:`).attr('data',`passtype.${type}.${fareType}.${fareValue}`).appendTo('#data-target').append('<span class="editor">edit</span>');
          $.each(value, function(discount, rate) {
            $('<div class="discount">').text(`${discount}: ${rate}%`).attr('data',`passtype.${type}.${fareType}.${fareValue}.${discount}`).appendTo('#data-target').append('<span class="editor">edit</span>');
          });
        } else {
          $('<div class="farevalue">').text(`${fareValue}: ${value}`).attr('data',`passtype.${type}.${fareType}.${fareValue}.${value}`).appendTo('#data-target').append('<span class="editor">edit</span>');
        }
      });
    });
  });
  /*
  $('dt').off('dblclick').dblclick(function() {
    $.ajax({
      url: '/metropass-api/' + $(this).text(),
      type: 'DELETE',
      success: printPassTypes
    });
  });*/
};
