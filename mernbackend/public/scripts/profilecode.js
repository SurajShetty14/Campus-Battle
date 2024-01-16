$(document).ready(function(){
    $('ul li a').click(function(){
        var page = $(this).attr('href');
        $('#content').load(page);
        return false;
    });
});