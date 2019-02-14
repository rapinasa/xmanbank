
$(document).ready(function(){
    $("#navbar").click(function(){
        $("#navDiv1").fadeIn(500);
    });
     $("#callcenter").hover(function(){
        $(this).fadeTo("fast", 1);
    });
       $("#callcenter").mouseleave(function(){
        $(this).fadeTo("slow", 0.7);
    });
         }); 
	$(document).ready(function(){
    $("#callcenter").click(function(){
        $("#form2").fadeIn(500);
    });
    $("#faq").on({
        mouseover:function(){
            $("#form2").show("slow");
        },
        mouseout:function() {
            $("#form2").hide("slow");
        }
    });
         }); 
    $(document).ready(function(){
         $("button").click(function(){
            var massege = $("textarea").val();
            var old =  $("#content").html();
            $("#content").html(old+"<p>" + massege + "</p>");
         });
        }); 

$(document).ready(function(){
    $('#cross1,#cross2,#cross3,#cross4,#cross5,cross6').click(function(){
   $('#form1,#form2,#form3,#form4,#form5,#form6').fadeOut('slow');
});
}); 

