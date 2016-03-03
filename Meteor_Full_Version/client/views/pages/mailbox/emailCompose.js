Template.emailCompose.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });


    // Initialize summernote plugin
    $('.summernote').summernote();

};


Template.emailCompose.destroyed = function(){

    // Remove special class for backgrount color
    $('body').removeClass('light-navbar');
};