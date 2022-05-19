
var topSwiper = new Swiper ('.top_gallery', {
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let scrollButtons = document.querySelectorAll('.scroll-button');
for (let i = 0; i < scrollButtons.length; i++) {
  scrollButtons[i].addEventListener('click', function (e) {
    e.preventDefault();
    let targetID = this.getAttribute('href');
    let target = document.querySelector(targetID);
    // console.log(targetID, target);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

function resizeFunction() {
  let val = "Window Width=" + window.outerWidth + ", Window Height=" + window.outerHeight;
  // console.log(val);

  let slidersArray = document.querySelectorAll('.swiper-slide');
  for (let i = 0; i < slidersArray.length; i++) {
    slidersArray[i].setAttribute('style', '');
  }
  setTimeout(function () {
    topSwiper.width = 0;
    topSwiper.update();
  }, 300);
}
var inputZagib = '';
var inputFlex = '';
var inputHvat = '';
var inputPhone = '';
var phoneCheckValue = '';
function sendEmail() {
  var zagib = document.getElementsByName('optionsBend');
for (var i = 0, length = zagib.length; i < length; i++) {
 if (zagib[i].checked) {
  inputZagib = (zagib[i].value);
  console.log(inputZagib);
  break;
 }
}
  var Flex = document.getElementsByName('optionsFlex');
for (var y = 0, ylength = Flex.length; y < ylength; y++) {
 if (Flex[y].checked) {
  inputFlex = (Flex[y].value);
  console.log(inputFlex);
  break;
 }
}
  var Hvat = document.getElementsByName('optionsSide');
for (var x = 0, xlength = Hvat.length; x < xlength; x++) {
 if (Hvat[x].checked) {
  inputHvat = (Hvat[x].value);
  console.log(inputHvat);
  break;
 }
}

  inputPhone = $('#inputPhone').val();
  phoneCheckValue = $('#check').is(':checked');
  if (inputZagib == '' || inputFlex == '' || inputHvat == '') {
    alert('Пожалуйста выберите, клюшку!');
    window.location.href = '#options';
  }
  else if (inputPhone == '') {
    alert('Пожалуйста укажите Ваш номер!');
  }
  else if (phoneCheckValue != true) {
    alert('Нужно согласиться на обработку данных!');
  }
  else {
    $.post(
          "../php/mail-form.php",
          {
            "ehvat" : inputHvat,
            "ezagib" : inputZagib,
            "eflex" : inputFlex,
            "ephone" : inputPhone,
          },
          function (data) {
            if (data==1){
              alert('Заяка на рассчет отправлена!');
            }else {
              alert('Повторите заявку!');
            }
          }
        );
  }
}

$(document).ready(function() {
	$("#inputPhone").inputmask("+7(999)999-99-99")
});
