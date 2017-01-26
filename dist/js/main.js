$(document).ready(function(){
    $('.cstm-btn-add').click(function () {
        $('.img-gallery').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="http://webneel.com/daily/sites/default/files/images/daily/05-2014/12-sunrise-picture.jpg"/></div>');
    });
    
    $('.cstm-show-img').click(function(){
        var myImgUrl = $('.url-field').val();
        $('.img-gallery').append('<div class="col-md-4"><img class="thumbnail thumbnail-img" src="'+myImgUrl+'"/></div>');
    });


    $('.img-gallery').delegate('.col-md-4','click', function () {
         $(this).remove();

    });


    $('.cstm-btn-remove').click(function(){
        var imglen = $('.img-gallery .col-md-4').length;
        $('.img-gallery .col-md-4:nth-child('+imglen+')').remove();
        console.log(imglen);
    });
    
});