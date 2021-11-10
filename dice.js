
var rn1 = Math.floor(Math.random()*6)+1;
//console.log(rn1)
var rnImg1="dice"+rn1+".png";
//console.log(rnImg1)
var rnSImg1 ="assets/"+rnImg1;
//console.log(rnSImg1)
var image1= document.querySelectorAll("img")[0]
image1.setAttribute("src",rnSImg1)
console.log(image1)


var rn2 = Math.floor(Math.random()*6)+1;
//console.log(rn2)
var rnImg2="dice"+rn2+".png";
//console.log(rnImg2)
var rnSImg2 ="assets/"+rnImg2;
//console.log(rnSImg2)
var image2= document.querySelectorAll("img")[1]
image2.setAttribute("src",rnSImg2)
console.log(image2)



if(rn1>rn2){
    document.querySelector("h1").innerHTML="Player 1 Wins 😎😎😎 "
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML="Player 2 Wins 😎😎😎 "
}
else{
    document.querySelector("h1").innerHTML="Draw😒😒😒"
}