//$(window).scroll(function(){
//    var scrollTop = $(window).scrollTop();
//    if(scrollTop < 200){
//        maxHeight = 498;
//    }else if(scrollTop > 400){
//        maxHeight = 91;
//    }else{
//        maxHeight = 498 - 91 * (((scrollTop-200) * 100)/200)/100;
//    }
//    $('#thediv').stop().animate({'max-height': maxHeight+"px"}, 1);
//}) 

let div = document.getElementById('project1');

let test = document.getElementById('copyrightfooter');

let viewportOffset = div.getBoundingClientRect();

let top = viewportOffset.top;
console.log(top);
let callFunc = () => {
    console.log(top);
}

//window.addEventListener('scroll', () => {
//    if(window.scrollY === )
//})