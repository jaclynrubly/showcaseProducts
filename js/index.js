$('.row .product').each(function(i){
  setTimeout(function(){
    $('.row .product').eq(i).addClass('is-showing');
  },150*(i+1))
})