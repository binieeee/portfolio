$(function(){
    
    $('#yebin').fullpage({
        //sectionsColor: ['#dfdeed', '#e0c6ea','#ccc', '#eae4eb' ,],
        anchors: ['page1','page2','page3'],
        navigation : false,
        navigationPosition : 'none' ,
        controlAroows: true,
        slidesNavPosition:'bottom'
        
    })

    $('.tab-nav li').click(function(){
        $('.tab-nav li a').removeClass('on')
        $(this).find('a').addClass('on')
       
        
        $('.tab-content > *').hide()
        let idx = $(this).index()
        console.log(idx)

        $('.tab-content > *').eq(idx).show()
     })
     
     $('.tab-nav li').eq(0).trigger('click')

     //--------------------------------------------------
     $('.introduce').click(function(){
        $('header').addClass('zindex')
        $('.popupbox').show()
    })

    $('.popup button').click(function(){
        $('header').removeClass('zindex')

        $('.popupbox').hide()
    })

    $('.education').click(function(){
        $('header').addClass('zindex')
        $('.popupbox2').show()
    })

    $('.popup2 button').click(function(){
        $('header').removeClass('zindex')
        $('.popupbox2').hide()
    })
  

    $('.skill').click(function(){
        $('header').addClass('zindex')
        $('.popupbox3').show()
    })

    $('.popup3 button').click(function(){
        $('header').removeClass('zindex')
        $('.popupbox3').hide()
    })
  

})
