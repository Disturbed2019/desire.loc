// $(function () {
//
// })
document.addEventListener("DOMContentLoaded",function(){
const openBtn = document.querySelector('.header__btn');
const closeBtn = document.querySelector('.rightside-menu__close');
const menu = document.querySelector('.rightside-menu');
const slider = document.querySelector('.top__slider');
const contact_slider = document.querySelector('.contact-slider');
const article_slider = document.querySelector('.article-slider__box');
const mix = document.querySelector('.gallery__inner');
const  label = document.querySelector('.post-checkbox__label');


const openMenu = () =>{
    menu.classList.remove('rightside-menu--close');
};
const closeMenu = () =>{
    menu.classList.add('rightside-menu--close')
};
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);


    if (slider || contact_slider || article_slider){
        $('.top__slider').slick({
            dots: true,
            arrows:false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $('.contact-slider').slick({
            dots: true,
            arrows:false,
            slidesToShow: 10,
            slidesToScroll:10
        });
        $('.article-slider__box').slick({
            dots: false,
            arrows:true,
            prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/icons/arrow-slider-left.svg" alt=""></button>',
            nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/icons/arrow-slider-right.svg" alt=""></button>'
        });

    }


    if (mix){
        let Mixer = mixitup ( '.gallery__inner',{
            load: {
                filter: '.bedroom'
            }
        } )
    }

    label.addEventListener('click', () => {
        label.classList.toggle('active');
    });


});
