function getnwquote(quote) {
  var a = Math.floor(Math.random()*quote.length);
  return a;
}
function add() {
  var quote = [{"id": 0, "Author":"Carol Burnet", "Quote": "Only I can change my life. No one can do it for me." },
          {
           "id" : 1,"Author":"George Sand" , "Quote": "There is only one happiness in this life, to love and be loved."
          },
          {
           "id" : 2,"Author":"Joseph Camphbell" , "Quote": "We must let go of the life we have planned, so as to accept the one that is waiting for us." 
          },
          {
           "id" : 3,"Author":"Yoko Ono" , "Quote": "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life."
          },
          {
           "id" : 4,"Author":"Nourman Cousins" , "Quote": "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live."
          },
          {
           "id" : 5,"Author":"Maya Angelou" , "Quote": "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."
          },  
          {
           "id" : 6,"Author":"Rabindranath Tagore" , "Quote": "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."
          },
          {
           "id" : 7,"Author":" William Barclay" , "Quote": "There are two great days in a person's life - the day we are born and the day we discover why."
          },
          {
           "id" : 8,"Author":"Valerie Bertinelli" , "Quote": "Happiness is a choice. You can choose to be happy. There's going to be stress in life, but it's your choice whether you let it affect you or not. "
          },
          {
           "id" : 9,"Author":"Oprah Winfrey" , "Quote": "The biggest adventure you can take is to live the life of your dreams."
          },
          {"id":10, "Author":"Dr. Seuss", "Quote":"Don't cry because it's over, smile because it happened."              
              },
              {"id":11, "Author":"Marilyn Monroe", "Quote":"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
               
               }];
  return quote;
}
////
function addcol() {
  var color1 = [{"r":255,"g":99,"b":71},
                {"r":188,"g":143,"b":143},               
                {"r":10,"g":134,"b":11},
                {"r":0,"g":0,"b":50},//244,164,96
                {"r":255,"g":165,"b":0},
                {"r":210,"g":105,"b":30},
                {"r":154,"g":205,"b":50},//154,205,50
                {"r":218,"g":112,"b":214},
                {"r":255,"g":105,"b":180},//
                {"r":32,"g":178,"b":170},
               {"r":240,"g":128,"b":128}];
 return color1;
}
function getcol(color1) {
var a =Math.floor(Math.random()*color1.length);
  var colr = "rgb("+color1[a]["r"]+","+color1[a]["g"]+","+color1[a]["b"]+")";
  return colr;
}
$(document).ready(function(){
  var quote = add();
  var color1 = addcol();
  var html="<div >";
  var colr = getcol(color1);  
  var i = getnwquote(quote);
    html+="<p class = 'fa fa-quote-left'>"+"   "+quote[i].Quote+"  <span class = 'fa fa-quote-right'></span></p><h4 text-align='right'>-"+quote[i].Author+"</h4> </div>";
  $("#qtblock").html(html);
 //css changes
  //background-color
  $(".placed, .btn").css("background-color",colr);
  $(".placed").parent().css("background-color",colr);
    $("p,h4").css("color",colr);
  $("#btn1").on("click",function(){
    window.open("https://twitter.com/home?status="+quote[i].Quote+" -"+quote[i].Author+" ","_blank");
  });
  //on click
  $("#nq").on("click",function(){  
   var html="<div>";
   var colr = getcol(color1);
   var i = getnwquote(quote);
    html+="<p class = 'fa fa-quote-left'>"+"   "+quote[i].Quote+" <span class = 'fa fa-quote-right'></span></p><h4 text-align='right'>-"+quote[i].Author+"</h4> </div>";
  $("#qtblock").html(html);
  $(".placed , .btn").css("background-color",colr);
    $(".btn").css("color","white");
  $(".placed").parent().css("background-color",colr);
    $("p,h4").css("color",colr);
  $("#btn1").on("click",function(){
    window.open("https://twitter.com/home?status="+quote[i].Quote+" -"+quote[i].Author+" ","_blank");
  });
    //$("#btn2").on("click",function(){
      //window.open("https://www.facebook.com/sharer/sharer.php?u="+quote[i].Quote+" -"+quote[i].Author+" ","_blank");
    //});
  });
  
});