$(document).ready(function(){
    $('.cstm-btn-add').click(function () {
        $('.img-gallery').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="http://i.imgur.com/YpHAm.jpg"/></div>');
    });
    
    $('.cstm-show-img').click(function(){
        var myImgUrl = $('.url-field').val();
        $('.img-gallery').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="'+myImgUrl+'"/></div>');
    });


    $('.cstm-btn-remove').click(function(){
        console.log('Test 3');
        var numberOfImg = $('.container .row .col-md-4').length;
            $('.container .row .col-md-4:nth-child('+numberOfImg+')').remove();

    });
    
});