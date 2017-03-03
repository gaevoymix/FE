$( document ).ready(function() {
    //tab switcher
    $('ul.sort').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.sort-info').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
    });
    //banner switcher
	var images = ["img/banner-lion.png", "img/banner-jir.png"];
	$(".btn1").click(function(){
        $(".img").attr("src", images[0]);
        $(".btn1").addClass("active");
        $(".btn2, .btn3, .btn4").removeClass("active");
    });
    $(".btn2").click(function() {
        $(".img").attr("src", images[1]);
        $(".btn1, .btn3, .btn4").removeClass("active");
        $(".btn2").addClass("active");
    });
    $(".btn3").click(function(){
        $(".img").attr("src", images[2]);
        $(".btn3").addClass("active");
        $(".btn2, .btn1, .btn4").removeClass("active");
    });
    $(".btn4").click(function(){
        $(".img").attr("src", images[3]);
        $(".btn4").addClass("active");
        $(".btn2, .btn1, .btn3").removeClass("active");
    });
    //custom selectors
    $('select').selecter();
    //hamburger menu
    $('.hamburger').on('click', function () {
        $('.navigation').toggleClass('open-hamburger')
    });
});