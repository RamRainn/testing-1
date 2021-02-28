// КНОПКА ПОИСКА

const searchBtn = document.querySelector('.header__searchbox-btn'),
      cancelBtn = document.querySelector('.header__searchbox-closebtn'),
      searhcBox = document.querySelector('.header__searchbox'),
      searhcInput = document.querySelector('.header__searchbox-input');

searchBtn.onclick = () => {
    searhcBox.classList.add("active");
    searhcInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
};

cancelBtn.onclick = () => {
    searhcBox.classList.remove("active");
    searhcInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
};

// ПЕРЕКЛЮЧЕНИЕ ТАБОВ В ФОРМЕ

const x = document.getElementById("login"),
      y = document.getElementById("register"),
      z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}


// ОТКРЫТИЕ ФОРМЫ
  
$('[data-modal=overlay]').on('click', function(){
  $('.overlay').fadeIn();
 
});

$(document).mouseup(function (e) {
  var container = $("#overlay");
  if (container.has(e.target).length === 0){
      container.hide();
  }
});

// ТЕНЬ У ХЕДЕРА ПРИ СКРОЛЛЕ

$(window).scroll(function(){
  if ($(window).scrollTop() > 100){
     $('.header').addClass('scroll');
  } else {
     $('.header').removeClass('scroll');
  }
});
