 var slider = document.querySelector('#slider');
 var bar = document.querySelector('#bar');
 var cross = document.querySelector('#slider i');
 var bottombar = document.querySelector('#bottombar');



 bar.addEventListener('click', function(){
     slider.style.left = '0%';
 });

 cross.addEventListener('click', function(){
    
    slider.style.left = '-100%';
});

