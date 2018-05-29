function editFunction() {


    console.log("heloo")
    var person1 = $("#e1").val()
    console.log(person1);
    $("#p1").text(person1);

    

     var person2 = $("#e2").val()
     $("#p2").css('background-image', "url("+person2+")");

     var person3 = $("#e3").val()
     $("#p3").attr("src",person3);

     var person4 = $("#e4").val()
     $("#p4").text(person4); 

 /*   var person1 = prompt("Please enter your username");
    var person2=prompt("you can change cover picture ");
    var person3=prompt("you can change your user picture");
    var person4=prompt("you can change your bio");
  


    $("#p1").text(person1);
    $("#p2").css('background-image', "url("+person2+")");

   
    $("#p3").attr("src",person3);
    $("#p4").text(person4);          */

    

}

editFunction();
function showhide()
{
    $("#fm1").css("visibility","visible");

}  

  function newTweet()
  {



       var li  = $("#p8").clone();
       console.log(li)
       var txt = prompt("enter text for your new tweet");
       $("#li1").prepend(li)
       $("#txt1").text(txt)
          
       
      // var txt = prompt("enter text for your new tweet");
      // 
      // $("#p8").text(txt);
     // var li=  $("#p8").clone(true).appendTo("#p7");

     //  var t1 = prompt("enter text for your new tweet");
      // var li2= $(li).text(t1);

      // $("#whole").appendChild(li2)
     //  document.getElementById("whole").appendChild(li);
      // ul.appendChild(li);
       //$("#p7").append();
  }

  //var ul = document.getElementById("whole");         node.appendChild(textnode); 
  //var li = document.createElement("li");
  //li.appendChild(document.createTextNode("Element 4"));