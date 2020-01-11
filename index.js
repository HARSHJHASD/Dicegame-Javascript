
var n=Math.floor((Math.random()*6)+1);

var randomimage="dice"+n+".png";

var randomimagesrc="images/" + randomimage;

var target=document.getElementsByTagName("img")[0];

target.setAttribute("src",randomimagesrc);



var n2=Math.floor((Math.random()*6)+1);

var randomimage2="dice"+n2+".png";

var randomimagesrc2="images/" + randomimage2;

var target2=document.getElementsByTagName("img")[1];

target2.setAttribute("src",randomimagesrc2);
