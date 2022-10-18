$(document).ready(function () {
    new WOW().init();
    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.project-pagination',
        bulletClass: 'project-pagination-bullet',
        bulletActiveClass: 'project-pagination-bullet-active',
        clickable: true
      },
      });
});