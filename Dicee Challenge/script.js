var randomNumber1= Math.floor(Math.random()*6) +1;//gives random number from 1-6
var randomImageSource="images/dice"+ randomNumber1+".png";//the source of random images
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2= Math.floor(Math.random()*6) +1;//gives random number from 1-6
var randomImageSource2="images/dice"+ randomNumber2+".png";//the source of random images
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);



//to change the h1 element

if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!"
    }else if(randomNumber2<randomNumber1){
        document.querySelector("h1").innerHTML="Player 1 wins!"}
        else{
            document.querySelector("h1").innerHTML="Draw! Refresh again"}  