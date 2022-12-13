// script.js

// Script

// Plugins
@@include('./plugins/lazysizes.min.js');
@@include('./plugins/fslightbox.js');
@@include('./plugins/swiper-bundle.min.js');

// Blocks

document.addEventListener('DOMContentLoaded', () => {

    @@include('./blocks/tabs.js');
    @@include('./blocks/bricks.js');
    @@include('./blocks/page.js');
    @@include('./blocks/popup.js');
    @@include('./blocks/unit-block.js');
    @@include('./blocks/modal-popup.js');
    @@include('./blocks/slider.js');
    @@include('./blocks/button-none.js');
  @@include('./blocks/table-header-scroll.js');
  
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    @@include('./blocks/text.js');
    $(".header__productionButton").click(function(){
      $(this).toggleClass("js-active")
      $(this).next().toggleClass("js-active")
      $(this).next().next().toggle(500)
    })
    $(".bgShadow").click(function(){
      $(".header__productionButton,.catalog-menu").removeClass("js-active")
      $(".bgShadow").hide(500)
    })
  
    document.addEventListener('keydown', function (e) {
      if(e.keyCode === 27){
        $(".header__productionButton,.catalog-menu").removeClass("js-active")
        $(".bgShadow").hide(500)
      }
  });
    
    $(function() {
    
      $('ul.catalog-menu__main-list').on('click', 'li:not(.js-active)', function() {
       
        $(this)
          .addClass('js-active').siblings().removeClass('js-active')
          .closest('div.catalog-menu__row').find('div.catalog-menu__item-right').removeClass('js-active').eq($(this).index()).addClass('js-active');
      });
      
    });

});
