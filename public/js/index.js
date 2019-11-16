var action = document.querySelector('.action');
var slideshow = document.querySelector('.slideshow');


 function fn() {
   clearInterval(data);
   
   // 给定时器添加名字
      var data = setInterval(function(e) {
         // 判断元素移动的位置
   if(slideshow.offsetLeft == -2000) {
      slideshow.style.left = 0;
   }
         // 获取元素偏移量
         var a = slideshow.offsetLeft;
         // // 判断有没有移动到500px
         // if(a == 500) {
         //    // 关闭定时器
         //    clearInterval(data);
         // } else {
         //    // 动画代码
         
         // }
         slideshow.style.left = `-${-a + 1}px`;
       },1);
 }

fn()

//  slideshow.addEventListener('click',function(e) {
//     this.offsetLeft
//  })