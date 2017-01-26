$(document).ready(function(){
    var filelength = 3;
    $('.cstm-btn-add').click(function () {
        $('.container .row').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="http://i.imgur.com/YpHAm.jpg"/></div>');
    });
    
    $('.cstm-show-img').click(function(){
        var myImgUrl = $('.url-field').val();
        $('.container .row').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="'+myImgUrl+'"/></div>');
    });

    $('.thumbnail-img').on('click',function(){
        console.log('img');
        $(this).val();
    });
    
    $('.cstm-btn-remove').click(function(){
        console.log('Test 2');
        var numberOfImg = $('.container .row .col-md-4').length;
            $('.container .row .col-md-4:nth-child('+numberOfImg+')').remove();



    });
    
});