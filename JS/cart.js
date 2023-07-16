//hàm show cart
var cartShow = document.querySelector('.fa-cart-shopping');
var cartHide = document.querySelector('.fa-xmark');
cartShow.addEventListener('click', function(){
    document.querySelector('.cart').style.right = "0";
})
cartHide.addEventListener('click',function(){
    document.querySelector('.cart').style.right = "-100%";
});



