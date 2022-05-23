$(document).ready(function(){
    var color = $( "#a" ).css( "background-color" );
    var color1 =$("#b").css( "background-color" );
    var color2 = $("#c").css( "background-color" );
    var color3 = $("#d").css( "background-color" );
    var color4 = $("#e").css( "background-color" );
    var color5 = $("#f").css( "background-color" );
    var color6 = $("#g").css( "background-color" );
    var color7 = $("#h").css( "background-color" );
    var color8 = $("#i").css( "background-color" );
   
    $("#a").click(function(){
        var color = $( "#a" ).css( "background-color" );
        var color1 =$("#b").css( "background-color" );
        var color3 = $("#d").css( "background-color" );
        //   alert (color);
       if( color =='rgb(0, 0, 0)'){
         $("#a").css("background-color", "white");
        //  alert(color1);
         if(color1=='rgb(255, 255, 255)'){
             
         $("#b").css("background-color","black");
         }
         else{
            $("#b").css("background-color","white");
         }
         if(color3=='rgb(255, 255, 255)'){
         $("#d").css("background-color","black");
         }
         else{
            $("#d").css("background-color","white");
         }
       
       }
       else{
        //    alert("hello");
           $("#a").css("background-color","black");
           if(color1 =='rgb(255, 255, 255)'){  
            $("#b").css("background-color","black");
            }
            else{
               $("#b").css("background-color","white");
            }
            if(color3=='rgb(255, 255, 255)'){
            $("#d").css("background-color","black");
            }
            else{
               $("#d").css("background-color","white");
            }
   
           }
      
    });

    $("#b").on("click", function(){
        
    var color1 =$("#b").css( "background-color" );
    var color = $( "#a" ).css( "background-color" );
    var color2 = $("#c").css( "background-color" );
    var color4 = $("#e").css( "background-color" );
   // alert(color1);
       if(color1 =='rgb(255, 255, 255)'){
         $("#b").css("background-color", "black");
         if(color =='rgb(0, 0, 0)'){
         $("#a").css("background-color","white");
         }
         else{
            $("#a").css("background-color","black");
         }
         if(color2 == 'rgb(0, 0, 0)'){
         $("#c").css("background-color","white");
         }
         else{
            $("#c").css("background-color","black");
         }
         if(color4 == 'rgb(0, 0, 0)'){
         $("#e").css("background-color","white");
         }
         else{
            $("#e").css("background-color","black");
         }
       }
       else{
        //  alert("hello");
           $("#b").css("background-color","white");
         //  alert("say");
           if(color =='rgb(0, 0, 0)'){
            $("#a").css("background-color","white");
            }
            else{
               $("#a").css("background-color","black");
            }
            if(color2 == 'rgb(0 , 0 , 0)'){
            $("#c").css("background-color","white");
            }
            else{
               $("#c").css("background-color","black");
            }
            if(color4 == 'rgb(0 , 0 , 0)'){
            $("#e").css("background-color","white");
            }
            else{
             //  alert("dddd");
               $("#e").css("background-color","black");
            }
          

       }
    });
    $("#c").on("click", function(){
      var color1 =$("#b").css( "background-color" );
      var color2 = $("#c").css( "background-color" );
      var color5 = $("#f").css( "background-color" );
        // alert("hello");
      //   var color2 = $( "#c" ).css( "background-color" );
        //   alert (color);
       if( color2 =='rgb(0, 0, 0)'){
         $("#c").css("background-color", "white");
         if(color1 =='rgb(255, 255, 255)'){
         $("#b").css("background-color", "black");
         }
         else{
            $("#b").css("background-color", "white");
         }
         if(color5 =='rgb(255, 255, 255)'){
            $("#f").css("background-color", "black");
            }
            else{
               $("#f").css("background-color", "white");
            }
       }
       else{
         //  alert("hello");
           $("#c").css("background-color","black");
           if(color1 =='rgb(255, 255, 255)'){
            $("#b").css("background-color", "black");
            }
            else{
               $("#b").css("background-color", "white");
            }
            if(color5 =='rgb(255, 255, 255)'){
               $("#f").css("background-color", "black");
               }
               else{
                  $("#f").css("background-color", "white");
               }
       }
    });
    $("#d").on("click", function(){
      var color3 = $("#d").css( "background-color" );
      var color4 = $("#e").css( "background-color" );
      var color6 = $("#g").css( "background-color" );
      var color = $( "#a" ).css( "background-color" );
        // alert("hello");
      //   var color = $( "#d" ).css( "background-color" );
        //   alert (color);
       if( color3 =='rgb(255, 255, 255)'){
         $("#d").css("background-color", "black");
         if(color =='rgb(0, 0, 0)'){
         $("#a").css("background-color","white");
         }
         else{
            $("#a").css("background-color","black");
         }
         if(color4 =='rgb(0, 0, 0)'){
         $("#e").css("background-color","white");
         }
         else{
            $("#e").css("background-color","black");
         }
         if(color6 =='rgb(0, 0, 0)'){
         $("#g").css("background-color","white");
         }
         else{
            $("#g").css("background-color","black");
         } 
       }
       else{
           $("#d").css("background-color","white");
           if(color =='rgb(0, 0, 0)'){
            $("#a").css("background-color","white");
            }
            else{
               $("#a").css("background-color","black");
            }
            if(color4 =='rgb(0, 0, 0)'){
            $("#e").css("background-color","white");
            }
            else{
               $("#e").css("background-color","black");
            }
            if(color6 =='rgb(0, 0, 0)'){
            $("#g").css("background-color","white");
            }
            else{
               $("#g").css("background-color","black");
            } 
       }
    });
    $("#e").on("click", function(){
      var color4 = $("#e").css( "background-color" );
      var color5 = $("#f").css( "background-color" );
      var color1 =$("#b").css( "background-color" );
      var color3 = $("#d").css( "background-color" );
      var color7 = $("#h").css( "background-color" );
        // alert("hello");
      //   var color = $( "#e" ).css( "background-color" );
        //   alert (color);
       if( color4 =='rgb(0, 0, 0)'){
         $("#e").css("background-color", "white");
       if(color1 == 'rgb(255, 255, 255)'){
         $("#b").css("background-color","black");
       }
       else{
         $("#b").css("background-color","white");
       }
       if(color3 == 'rgb(255, 255, 255)'){
         $("#d").css("background-color","black");
       }
       else{
         $("#d").css("background-color","white");
       }
       if(color5 == 'rgb(255, 255, 255)'){
       $("#f").css("background-color","black");
       }
       else{
         $("#f").css("background-color","white");
       }
       if(color7 == 'rgb(255, 255, 255)'){
       $("#h").css("background-color","black");
       }
       else{
         $("#h").css("background-color","white");
       }
       }
       else{
           $("#e").css("background-color","black");
           if(color1 == 'rgb(255, 255, 255)'){
            $("#b").css("background-color","black");
          }
          else{
            $("#b").css("background-color","white");
          }
          if(color3 == 'rgb(255, 255, 255)'){
            $("#d").css("background-color","black");
          }
          else{
            $("#d").css("background-color","white");
          }
          if(color5 == 'rgb(255, 255, 255)'){
          $("#f").css("background-color","black");
          }
          else{
            $("#f").css("background-color","white");
          }
          if(color7 == 'rgb(255, 255, 255)'){
          $("#h").css("background-color","black");
          }
          else{
            $("#h").css("background-color","white");
          }
       }
    });
    $("#f").on("click", function(){
      var color4 = $("#e").css( "background-color" );
      var color5 = $("#f").css( "background-color" );
      var color2 = $("#c").css( "background-color" );
      var color8 = $("#i").css( "background-color" );
        // alert("hello");
      //   var color = $( "#f" ).css( "background-color" );
        //   alert (color);
       if( color5 =='rgb(255, 255, 255)'){
         $("#f").css("background-color", "black");
         if( color2 =='rgb(0, 0, 0)'){
         $("#c").css("background-color","white");
         }
         else{
            $("#c").css("background-color","black");
         }
         if( color4 =='rgb(0, 0, 0)'){
         $("#e").css("background-color","white");
         }
         else{
            $("#e").css("background-color","black");
         }
         if( color8 =='rgb(0, 0, 0)'){
         $("#i").css("background-color","white");
         }
         else{
            $("#i").css("background-color","black");
         }
       }
       else{
           $("#f").css("background-color","white");
           if( color2 =='rgb(0, 0, 0)'){
            $("#c").css("background-color","white");
            }
            else{
               $("#c").css("background-color","black");
            }
            if( color4 =='rgb(0, 0, 0)'){
            $("#e").css("background-color","white");
            }
            else{
               $("#e").css("background-color","black");
            }
            if( color8 =='rgb(0, 0, 0)'){
            $("#i").css("background-color","white");
            }
            else{
               $("#i").css("background-color","black");
            }
       }
    });
    $("#g").on("click", function(){
      var color3 = $("#d").css( "background-color" );
      var color7 = $("#h").css( "background-color" );
      var color6 = $("#g").css( "background-color" );
        // alert("hello");
      //   var color = $( "#g" ).css( "background-color" );
        //   alert (color);
       if( color6 =='rgb(0, 0, 0)'){
         $("#g").css("background-color", "white");
         if(color3 =='rgb(255, 255, 255)'){
         $("#d").css("background-color","black");
         }
         else{
            $("#d").css("background-color","white");
         }
         if(color7 =='rgb(255, 255, 255)'){
         $("#h").css("background-color","black");
         }
         else{
            $("#h").css("background-color","white");
         }
       }
       else{
           $("#g").css("background-color","black");
           if(color3 =='rgb(255, 255, 255)'){
            $("#d").css("background-color","black");
            }
            else{
               $("#d").css("background-color","white");
            }
            if(color7 =='rgb(255, 255, 255)'){
            $("#h").css("background-color","black");
            }
            else{
               $("#h").css("background-color","white");
            }
       }
    });
    $("#h").on("click", function(){
      var color8 = $("#i").css( "background-color" );
      var color7 = $("#h").css( "background-color" );
      var color6 = $("#g").css( "background-color" );
      var color4 = $("#e").css( "background-color" );
        // alert("hello");
      //   var color = $( "#h" ).css( "background-color" );
        //   alert (color);
       if( color7 =='rgb(255, 255, 255)'){
         $("#h").css("background-color", "black");
        
         if( color4 =='rgb(0, 0, 0)'){
         $("#e").css("background-color","white");
         }
         else{
            $("#e").css("background-color","black");
         }
         if( color6 =='rgb(0, 0, 0)'){
         $("#g").css("background-color","white");
         }
         else{
            $("#g").css("background-color","black");
           
         }
         if( color8 =='rgb(0, 0, 0)'){
         $("#i").css("background-color","white");
         }
         else{
            $("#i").css("background-color","black");
           
         }
       }
       else{
           $("#h").css("background-color","white");
           if( color4 =='rgb(0, 0, 0)'){
            $("#e").css("background-color","white");
            }
            else{
               $("#e").css("background-color","black");
            }
            if( color6 =='rgb(0, 0, 0)'){
            $("#g").css("background-color","white");
            }
            else{
               $("#g").css("background-color","black");
            }
            if( color8 =='rgb(0, 0, 0)'){
            $("#i").css("background-color","white");
            }
            else{
               $("#i").css("background-color","black");
            }
            if(color6 =='rgb(0, 0, 0)'&& color7=='rgb(0, 0, 0)'&& color8=='rgb(0, 0, 0)'){
               alert("You win ")
            }
       }
    });
    $("#i").on("click", function(){
      var color8 = $("#i").css( "background-color" );
      var color7 = $("#h").css( "background-color" );
      var color5 = $("#f").css( "background-color" );
        // alert("hello");
      //   var color = $( "#i" ).css( "background-color" );
        //   alert (color);
       if( color8 =='rgb(0, 0, 0)'){
         $("#i").css("background-color", "white");
         if( color5 =='rgb(255, 255, 255)'){
         $("#f").css("background-color","black");
         }
         else{
            $("#f").css("background-color","white");
         }
         if( color5 =='rgb(255, 255, 255)'){
         $("#h").css("background-color","black");
         }
         else{
            $("#h").css("background-color","white");
         }
        
       }
       else{
           $("#i").css("background-color","black");
          
           if( color5 =='rgb(255, 255, 255)'){
            $("#f").css("background-color","black");
            
            }
            else{
               $("#f").css("background-color","white");
            }
            if( color5 =='rgb(255, 255, 255)'){
            $("#h").css("background-color","black");
          //  $("#p").html("You win ")
            }
            else{
               $("#h").css("background-color","white");
            }
            
       }
      
    });
    
});
