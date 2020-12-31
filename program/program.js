'use strict';

const canvas=document.getElementById('canvas');
const contxt=canvas.getContext("2d");

var num=0;
var width=canvas.width;
var height=canvas.height;
contxt.fillStyle="red";
contxt.fillRect(0,0,width,height/4);
contxt.fillRect(0,(height/4)*3,width,height/4);

contxt.fillStyle="green";
contxt.fillRect(width/10,(height/4)*2.5,20,20);
// var start=(Math.PI/180)*0;
// var end=(Math.PI/180)*360;
// contxt.arc(width/5,height/2,30,start,end,true);//true false で向き変える
// contxt.fill();
// contxt.stroke();

function draw(){
  num++;
  contxt.fillStyle="red";
  contxt.fillRect(num,0,200,150);
}

function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
 


canvas.onclick=function jump(){
  var i=(height/4)*2.5;

  for(let a=0;a<=50;a++){
    
    setTimeout(() => {
      contxt.clearRect(0,0,canvas.width,canvas.height);//削除
      contxt.fillStyle="red";
      contxt.fillRect(0,0,width,height/4);
      contxt.fillRect(0,(height/4)*3,width,height/4);
      contxt.fillStyle="green";
      contxt.fillRect(width/10,i-a,20,20);
    }, 500);    
    // setInterval(function up(){
    //     contxt.clearRect(0,0,canvas.width,canvas.height);//削除
    //     contxt.fillStyle="red";
    //     contxt.fillRect(0,0,width,height/4);
    //     contxt.fillRect(0,(height/4)*3,width,height/4);
    //     contxt.fillStyle="green";
    //     contxt.fillRect(width/10,i-a,20,20);
    // }, 500);
    var remind=i-a;
  }
  //clearInterval("setInterval(function up())");
  
  sleep(1000);

  for(let a=0;a<=50;a++){
    
    setTimeout(() => {
      contxt.clearRect(0,0,canvas.width,canvas.height);//削除
      contxt.fillStyle="red";
      contxt.fillRect(0,0,width,height/4);
      contxt.fillRect(0,(height/4)*3,width,height/4);
      contxt.fillStyle="green";
      contxt.fillRect(width/10,remind+a,20,20);
    }, 500);    
    
  }
  

}

// setInterval('draw()',500);

