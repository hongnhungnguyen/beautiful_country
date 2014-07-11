/**
 * Created by hongnhung on 11/07/2014.
 */
$(function(){

    setInterval("imgChange()", 2000);
    $(".home").show();
    $("#n1").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").show();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n2").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").show();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n3").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").show();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n4").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").show();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });
    $("#n5").click(function(){
        $(".chinese").show();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });
    $("#n6").click(function(){
        $(".french").show();
        $(".chinese").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });
    $("#n7").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").show();
    });$("#n8").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").show();
        $(".japan").hide();
    });$("#n9").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").show();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n10").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").hide();
        $(".lao").show();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n11").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").hide();
        $(".english").show();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });$("#n12").click(function(){
        $(".chinese").hide();
        $(".french").hide();
        $(".canada").hide();
        $(".guinea").hide();
        $(".usa").hide();
        $(".italia").hide();
        $(".campuchia").show();
        $(".english").hide();
        $(".lao").hide();
        $(".korea").hide();
        $(".vn").hide();
        $(".japan").hide();
    });



    //login
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });
    //info
    ("#info").click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });

});
// Image Rotator
function imgChange() {
    var curPhoto = $(".photoShow div.current");
    var nextPhoto = curPhoto.next();
    if (nextPhoto.length == 0)
        nextPhoto = $(".photoShow div:first");
    curPhoto.removeClass("current").addClass("previous");
    nextPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function () {
        curPhoto.removeClass("previous");
    });
}

