let burger=document.getElementById('burger');
let navbar3=document.getElementById('navbar3');

console.log('burger');
burger.addEventListener('click',function(){
  if(navbar3.style.display!='none'){
    navbar3.style.display='none'
  }
  else{
    navbar3.style.display='block'
  }
})

