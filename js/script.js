(function ($) {
   $(document).ready(function() {    




      $(".steps-menu__item:first a").addClass('active');   

      jQuery(window).scroll(function() {
         var $sections = $('section');

         $sections.each(function(i, el) {
            var top  = $(el).offset().top * 0.80;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');

            if( scroll > top && scroll < bottom) {
               $('.steps-menu__item li').removeAttr('class');
               $('a.active').removeClass('active');
               $('.steps-menu__item li').addClass(`${id}-style`);
               $('a[href="#'+id+'"]').addClass('active'); 
               
               let activeMenu = $(".steps-menu__item a.active").parent().index();

               switch (activeMenu) {
                  case 0:
                     $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
                     break;
                  case 1:
                     $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
                     break;
                  case 2:
                     $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
                     break;
                  case 3:
                     $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
                     break;
               }
            }
         })
      });
      
      $(".steps-menu__item").on("click", "a", function (event) {  

         let activeMenu = $(this).parent().index();
         
         switch (activeMenu) {
            case 0:
               $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
               break;
            case 1:
               $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
               break;
            case 2:
               $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
               break;
            case 3:
               $('.steps-menu__element').css('transform', `translateY(${activeMenu * 54}px)`)
               break;
         }

         // исключаем стандартную реакцию браузера
         event.preventDefault();

         // получем идентификатор блока из атрибута href
         var id  = $(this).attr('href'),

         // находим высоту, на которой расположен блок
         top = $(id).offset().top;

         // анимируем переход к блоку, время: 800 мс
         $('body,html').animate({scrollTop: top}, 800);
      });





      
   });
})(jQuery);


