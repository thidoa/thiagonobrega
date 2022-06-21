
jQuery(document).ready(function ($) {

    setTimeout(function () {
       $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
    }, 100);
});