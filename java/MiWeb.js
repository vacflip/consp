$(document).ready(function(){
    $(".enlacesCarousel").click(function(){
        var flechaAbajo = '<i class="fa fa-arrow-circle-down" style="font-size:50px"></i>';
        var textoOriginal=$(this).html();
        var click= $(this);
        click.html(flechaAbajo+"   lee abajo   "+flechaAbajo);
        $(".texto").fadeOut(3000);
        $(".texto").fadeIn(3000);
        setTimeout(function(){
            click.html(textoOriginal);
        }, 1000);
    });
    $(".card").click(function(){
        var flechaArriba = '<i class="fa fa-arrow-circle-up" style="font-size:50px"></i>';
        var textoOriginal=$(this).html();
        var click= $(this);
        var height=click.css("height");
        click.html('<div class="card-body"><h5 class="card-title">'+flechaArriba+'   lee arribarr   '+flechaArriba+'</h5></div>');

        click.css("height",height);
        $(".texto").fadeOut(3000);
        $(".texto").fadeIn(3000);
        setTimeout(function(){
            click.html(textoOriginal);
        }, 3000);  });



//    var moreText = $("#more");
//    moreText.hide();
//    $("#Mas").click(function() {
//        var dots = $("#dots");
//        var btn = $("#Mas");
//
//        if(btn.prop('value')=="leer más"){
//            dots.hide();
//            moreText.show();
//            btn.prop('value')="tdagu";
//        }
//        else{
//            dots.show();
//            moreText.hide();
//            btn.prop('value','leer más');
//        }
//    });

    $("#more").css('display','none')
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("Mas");

    btnText.addEventListener("click",function() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer más"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos"; 
    moreText.style.display = "inline";
  }
//        window.resizeTo(1000px,"1000px");
});

});