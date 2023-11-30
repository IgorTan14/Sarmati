$(function(){
  
  
   $('.header__menu-item--more').on('click', function(){ 
    $('.header__menu-submenu').toggleClass('on');
  });
  
  $('.top-slider').slick({
    slideToShow:1,
    slideToScroll:1,
    arrows: false,
    dots: true,
    autoSpeed: 3000,
    infinity: true,
       })


       $('.types__inner').slick({
        slidesToShow: 3,
        slideToScroll:1,
        centerMode: true,
        centerPadding: '60px',
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 730,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          },
        ]
           })
       

$('.pagination__link').on('click', function(){ 
  $('.pagination__link--active').removeClass('pagination__link--active');
  $(this).removeClass('pagination__link--active');
  $(this).toggleClass('pagination__link--active');
});

$('.addresses__choose-item').on('click', function(){ 
  $('.addresses__choose-item').removeClass('active')
  $(this).addClass('active');
});



$('.header__burger').on('click', function(){ 
  $('.burger-content').toggleClass('burger-content--active');
  $('.product-list__filter ').toggleClass('hidden');
  $('.main').toggleClass('off');
  $('.header__burger').toggleClass('header__burger--active');
});

$('.stars').rateYo({
  starWidth: "16px",
  normalFill: '#D6D6D6',
  ratedFill: '#FFCC00',
  spacing: '10px',
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
});

});





// полифил для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach){
  NodeList.prototype.forEach = function (callback, thisArg){
    thisArg = thisArg || window;
    for (var i = 0; i <this.length; i++){
      callback.call(thisArg, this[i], i, this);
    };
  };
};

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){

        const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
        const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
        const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
        const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
        const dropDownArr = dropDownWrapper.querySelector('.dropdown-arr');

        // клик по кнопке - открыть/закрыть select
          dropDownBtn.addEventListener('click', function(){
          dropDownList.classList.toggle('on-flex');
          dropDownArr.classList.toggle('rotate-arr');
        })

        dropDownListItems.forEach(function(listItem){
          listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownInput.value = this.dataset.value;

            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          });
        });

        // клик вне дропдауна - закрвть дропдаун
        document.addEventListener('click', function(e){
          if(e.target !== dropDownBtn){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          }
        });

        document.addEventListener('keydown', function(e) {
          if(e.key === 'Tab' || e.key ==='Escape'){
            dropDownList.classList.remove('on-flex');
            dropDownArr.classList.remove('rotate-arr');
          }
        });
});



