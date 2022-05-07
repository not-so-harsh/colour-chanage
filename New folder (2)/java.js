function getNewcolor(){
  var symbol, color ;
  symbol ="0123456789ABCDEF";
   
  color="#";
  for(var i=0 ; i<6 ; i++){
    color=color+symbol[Math.floor(Math.random()*16)];
    document.getElementById("hex").style.backgroundColor = color;
    document.getElementById("hex").innerHTML = color;


  }
}


