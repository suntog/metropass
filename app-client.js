var $ = require('jquery');
var printPassTypes = require('./lib/printPassTypes');
var printAccnTypes = require('./lib/printAccnTypes');

$(document).ready(function () {
  var pathName = window.location.pathname;
  //console.log(`path: ${pathName}`);
  if (pathName == "/metropass-types.html") {
    $.getJSON('/metropass-api', printPassTypes);
  }
  if (pathName == "/metropass-account.html") {
    $.getJSON('/metropass-api', printAccnTypes);
    $('#check-all').click(function(e) {
      $.getJSON('/metropass-api', printAccnTypes);
    });

  }


  /*  $('form').submit(e => {
        e.preventDefault();
        $.post('/metropass-api', {passtype: $('#passtype').val(), description: $('#description').val()}, printTerms);
        document.forms[0].reset();
    });
*/
});
