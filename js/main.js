$(document).ready(function(){

console.log("Document ready!");
    
    
    var isQuestionCompany = true;
    var questionProgress = 1;
    
    var currCompanyValue = 0;
    var currYouValue = 0;
    
    var baseCurveWidth = 500;
    var curveUIWidth = $('.curve-holder').width();
    var offsetPerc = curveUIWidth/baseCurveWidth;
    
    var baseProgressCurveMaxWidth =  offsetPerc * 400;
       
    
     var itemSelectorWidth = $('#itemSelector img').width();
     $("#itemSelector img").css('width', offsetPerc * 100+'%');
    
    /* $("#curve-progress").css({Border: 400,
                              BorderTopRightRadius: 400});*/

    
   
    
   /* 
    var itemMapping = [[1, 6, 10], 
                       [6, 26, 23],
                       [109, 352, 36],
                       [225, 490, 50], 
                       [360, 590, 60], 
                       [510, 660, 70],
                       [680, 695, 86]]
*/
    
   /*    
    var itemMapping = [[-6, 40, 10], 
                       [38, 210, 23],
                       [109, 352, 36],
                       [225, 490, 50], 
                       [360, 590, 60], 
                       [510, 660, 70],
                       [680, 695, 86]]
*/
       var itemMapping = [[-6, 40, 10], 
                       [32, 134, 23],
                       [109, 352, 36],
                       [225, 490, 50], 
                       [360, 590, 60], 
                       [510, 660, 70],
                       [680, 695, 86]]
 
    
 
    $(".char1").on("tap",function(e){
     itemSelected(1, e.target);
    }) 
 
    $(".char2").on("tap",function(e){
     itemSelected(2, e.target);
    }) 
 
    $(".char3").on("tap",function(e){
     itemSelected(3, e.target);
    }) 
 
    $(".char4").on("tap",function(e){
     itemSelected(4, e.target);
    }) 
 
    $(".char5").on("tap",function(e){
     itemSelected(5, e.target);
    }) 
 
    $(".char6").on("tap",function(e){
     itemSelected(6, e.target);
    }) 
 


    function itemSelected(itemNum, t)
    {
        console.log("offsetPerc :"+offsetPerc);
        console.log("itemSelected :"+itemNum + " target"+t);
        var targ = t;
        
        $(targ).parent().children("span").css("color", "white");
        $(targ).css("color", "black");
      /*  
       $("#itemSelector img").css({"display": "block",
                            "top": (offsetPerc * itemMapping[itemNum - 1][0])+"px",
                             "left": (offsetPerc * itemMapping[itemNum - 1][1])+"px", 
                               WebkitTransform: 'rotate(' +itemMapping[itemNum - 1][2]+ 'deg)',
                               '-moz-transform': 'rotate(' +itemMapping[itemNum - 1][2]+ 'deg)',
                               transform: 'rotate(' +itemMapping[itemNum - 1][2]+ 'deg)'})
       */
        
        
        
       
        
        var size = (baseProgressCurveMaxWidth/6) * itemNum;
       // $("#curve-progress-you").animate({borderWidth : size, borderTopRightRadius: size});   
       
        var answered = false;
        var targ;
        if(!isQuestionCompany)
        {
            currYouValue = itemNum;  
            isQuestionCompany = true;  
            answered = true;
            targ = $("#curve-progress-you")
            $(".scoreTabCompany").animate({"right": "0"}) 
        }
        else
        {
            currCompanyValue = itemNum;      
            isQuestionCompany = false;       
            targ = $("#curve-progress-company");
            $(".scoreTabYou").animate({"right": "0"}) 
        }
        
        
        console.log("currCompanyValue:"+currCompanyValue);
        console.log("currYouValue:"+currYouValue);
        if(currCompanyValue > currYouValue)
        {
            $("#curve-progress-company").css('z-index', '0');    
            $("#curve-progress-you").css('z-index', '1');    
        }
        else if(currYouValue > currCompanyValue)
        {
            $("#curve-progress-company").css('z-index', '1');    
            $("#curve-progress-you").css('z-index', '0');    
        }    
        
         questionProgress ++;
        targ.animate({borderWidth : size, borderTopRightRadius: size}, 500, function(){
        
         if(answered)
          doNextQuestion();  
        });   
        

       
                          
    }
    
    
    
    function doNextQuestion()
    {
        console.log("doNextQuestion")
    
       $(".questionContent").animate({"left": "-800px"}) 
       $(".scoreTabYou").animate({"right": "-300px"}) 
       $(".scoreTabCompany").animate({"right": "-300px"}) 
       $("#inner-wrapper").animate({"background-position": "100px"})  
    }
          
    

})