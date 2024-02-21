score=0
cross=true;
audio=new Audio('game.mp3')
audiogo=new Audio('scream.mp3')
setTimeout(() => {
  audio.play()
}, 1000);
document.onkeydown =function(e){
    console.log("key code is:",e.key)
    if(e.key=='ArrowUp'){
     dino=document.querySelector('.dino')
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino')
        },700);
    }
     if(e.key=='ArrowRight'){
      dino=document.querySelector('.dino')
         dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
         dino.style.left=dinoX+122+"px"
     }
     if(e.key=='ArrowLeft'){
      dino=document.querySelector('.dino')
       dino.style.transform="rotateY" +(180+ 'deg')
         dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
         dino.style.left=dinoX-122+"px"
     }
}
setInterval(()=>{
  dino=document.querySelector('.dino')
  gameover=document.querySelector('.gameover')
  obstacle=document.querySelector('.obstacle')
  dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
  dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'))
  ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
  oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'))
  offsetX=Math.abs(dx-ox)
  offsetY=Math.abs(dy-oy)
  // console.log(offsetX,offsetY)
  if(offsetX<113 && offsetY<52){
    gameover.innerHTML="Game Over -Reload To Play Again"
    obstacle.classList.remove('obstacleani')
    audiogo.play()
    setTimeout(() => {
      audiogo.pause()
      audio.pause()
    }, 1000);
  }
  else if(offsetX <73 && cross){
    score+=1;
    updatescore(score)
    cross=false;
    setTimeout(()=>{
      cross=true;
    },1000);
    setTimeout(() => {
      
      anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
      newdur=anidur-0.1 ;
      obstacle.style.animationDuration=newdur + 's';
    }, 500);
  }
},10);
function updatescore(score){
  scoreCont.innerHTML="Your Score"+score
}