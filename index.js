// Import stylesheets
import './style.scss';

$(document).ready(function () {
  console.log('hiiiii');

  var box = $('.box'),
    orginal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    temp = orginal,
    x = [],
    img = 0;

  $('.me').css({ background: 'black' });

  randomTile(4);
  changeBG();

  function randomTile(column) {
    var i;
    for (i = orginal.length - 1; i >= 0; i--) {
      var flag = getRandom(0, i);
      x[i] = temp[flag];
      temp[flag] = temp[i];
      temp[i] = x[i];
    }
    for (i = 0; i < orginal.length; i++) {
      box.append(
        '<div  class="me me_' + x[i] + ' tile" data-bid="' + x[i] + '"></div>'
      );
      if ((i + 1) % column == 0) box.append('<br>');
    }
    i = 15;
    return 0;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function changeBG() {
    $('.me').css({
      background: 'black',
    });
  }

  console.log(document.querySelectorAll('div[data-bid]'));
});
