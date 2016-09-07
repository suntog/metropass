var $ = require('jquery');

module.exports = function printAccnts(passTypes) {
  $('#data-target').empty();

  obj = passTypes.accounts;

  function recurseObj(obj) {
    $.each(obj, function (key, value) {
      var text = key;
      if (Array.isArray(obj)) {
        text = `account-${key}`;
      }
      if (typeof value === 'object') {

        $('<div class="' + text + '">').text(`${text}:`).appendTo('#data-target');
        recurseObj(value);
      } else {
        $('<div class="' + text + '">').text(`${key}: ${value}`).appendTo('#data-target');
      }

    });
  }
  recurseObj(obj);





};
