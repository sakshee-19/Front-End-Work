function setimage(img) {
  var icons = new Skycons({"color":"brown"});
  switch(img) {
    case 'fog':
      icons.set("day",Skycons.FOG);
      $("body").css('background-image', 'url("https://media.al.com/live/photo/fog-downtown-mobilejpg-5c5e1b94824b8ae1.jpg")');
      break;
      
    case 'cloudy':
      icons.set("day",Skycons.CLOUDY);
      $("body").css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Overcast_Mehamn.jpg/1200px-Overcast_Mehamn.jpg")');
      break;
      
    case 'rain': icons.set("day",Skycons.RAIN);
      $("body").css('background-image', 'url("https://www.ethicare.in/wp-content/uploads/201402-orig-defeated-949x534.jpg")');
      break;
      
    case 'sunny': icons.set("day",Skycons.CLEAR_DAY);
 $("body").css("background","url('https://www.pocketables.com/images/2012/07/sunny-608x333.jpg')");
      break;
      
    case 'wind': icons.set("day",Skycons.WIND);  $("body").css("background","url('https://cdn.pixabay.com/photo/2014/01/29/21/22/sand-storm-254627_960_720.jpg')");
      break;
    
    case 'snow': icons.set("day",Skycons.SNOW);
 $("body").css("background","url('https://cdn.images.express.co.uk/img/dynamic/153/590x/secondary/uk-snow-478595.jpg')");
      break;
      
    case 'clear-day':
      icons.set("day",Skycons.CLEAR_DAY); $("body").css("background","url('https://news.bbcimg.co.uk/media/images/66231000/jpg/_66231244_brianbarnes.jpg')")
      break;
      
    case 'clear-night': icons.set("day",Skycons.CLEAR_NIGHT);
 $("body").css("background","url('https://c1.staticflickr.com/8/7417/16173818807_0c03de5441_b.jpg')")
      break;
      
    case 'partly-cloudy-day': icons.set("day",Skycons.PARTLY_CLOUDY_DAY);
 $("body").css("background","url('https://100daysofsunshineblog.files.wordpress.com/2014/11/wp_20141124_018.jpg')");
      break;
      
    case 'partly-cloudy-night': icons.set("day",Skycons.PARTLY_CLOUDY_NIGHT);     $("body").css("background","url('https://ak2.picdn.net/shutterstock/videos/6731749/thumb/1.jpg')");
      break;
      case 'sleet': 
icons.set("day", Skycons.SLEET);
      $("body").css("background","url('https://framinghamsource.com/wp-content/uploads/2016/12/ice.snow_.patch_-1-800x445.jpeg')");
      break;
            }
  $("body").css({                   "height":"100%",
  "background-position": "center",
    "background-repeat": "no-repeat",
    "background-size": "cover",
  "margin-top":"0"}); 
icons.play();
}
//setimage to set back and icons
function weather(city,lat,lan) {
  $.getJSON('https://api.darksky.net/forecast/615dcc2d1c7f52690d77539db1d7a99e/'+lat + ',' +lan+'?callback=?', function(forecast) {
    console.log(forecast);
    a=forecast["currently"]["icon"];
    setimage(forecast["currently"]["icon"]);
    //setimage("partly-cloudy-night");
    if((forecast["currently"]["icon"]==='clear-day') && (forecast["currently"]["temperature"]>=95)){
      setimage("sunny");
    }
    $("#temp").html("<h3>"+forecast["currently"]["temperature"]+"&degF</h3>");
    $("#blk1").html("<h4> "+ city +"</h4>")
    $("#blk2").html("<h4>"+forecast["currently"]["summary"] +"</h4>");
    $("#blk3").html("<h4>"+forecast["currently"]["windSpeed"] +" mi/h</h4>")
    $("#temp").css({"padding":"1%"});
    $("#blk1").css("padding","1%");
    $("#blk2").css("padding","1%");
    $("#blk3").css("padding","1%");
    var f = ((forecast["currently"]["temperature"]-32)*5)/9;
    var cnt=1;
    $(".btn").on("click",function(){
     if(cnt==1) {
      $("#btn1").html("change to "+'&deg'+"F");
       $("#btn1").css("background-color","#4CAF50");
       $("#temp").html("<h3>"+f.toFixed(2)+"&degC</h3>");
       cnt=0;
     }
      else{
        
      $("#btn1").html("change to "+'&deg'+"C");
       $("#btn1").css("background-color","#008CBA");
       $("#temp").html("<h3>"+forecast["currently"]["temperature"]+"&degF</h3>");
        cnt=1;
      }
    });
    console.log(a);
       //$("#dat").html("<h3>"+a+"</h3>");
});
}

$(document).ready(function(){
 var add="";
  var city="";
  var lat="";
  var lan="";
  $("#sbtn").on("click",function(){
    //create request
   var input = document.getElementById("userInput").value;
    console.log(input);
  if(input.length==0)
   {
     alert("Enter valid Input");
     return;
   }
   $("#sbtn").css("background-color","red");
   var str = input.split(",");
   var add=str[0];
   for (var i=1; i<str.length;++i) {
     add=add+"+"+str[i];
   }
   console.log(add);
   $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+add+"&key=AIzaSyDBdyuy1BFSNCTquIirRe-_wUMemZl23jY", function(json){
     city=json["results"][0]["address_components"][0]["short_name"]+","+json["results"][0]["address_components"][1]["short_name"];
    lat=json["results"][0]["geometry"]["location"]["lat"];
    lan=json["results"][0]["geometry"]["location"]["lng"];
    console.log(city);
    console.log(lat);
    weather(city,lat,lan);
  }); 
  });
  
});