$(function(){
    $('.tab-nav li').click(function(){
        $('.tab-nav li a').removeClass('on')
        $(this).find('a').addClass('on')
       
        
        $('.tab-content > *').hide()
        let idx = $(this).index()
        console.log(idx)

        $('.tab-content > *').eq(idx).show()
     })
     
     $('.tab-nav li').eq(0).trigger('click')

})