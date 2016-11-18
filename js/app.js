

   


//variables

var $overlay = $('<div id="overlay"></div>');
var $img = $("<img>");

//var $caption = $("<p></p>");


// appending elements

$overlay.append($img);
// $overlay.append($caption);
$("body").append($overlay);



//function if you click the link

 $("#galleria a").click(function(event){
   
event.preventDefault();
   
   
   // show the overlay and hide the footer
    $overlay.show();
   $(".wrapper button.next").show();
   $(".wrapper button.prev").show();
 $("footer").hide();
   
   
   
   
   // shows the image
var href = $(this).attr("href");
  $img.attr("src", href);
   
  
  

   //shows the caption
  var captionText = $(this).children("img").attr("alt");
 $caption.text(captionText);  
   
  
 
 });



