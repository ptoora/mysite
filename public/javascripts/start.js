$(document).ready(
    function(){
      $(".openableTitle1").click(function(){
        if ($(".openable1").css("display")=="none")
          $(".openable1").show();
        else 
        $(".openable1").hide();
      })
    }
);

$(document).ready(
  function(){
    $("[class^=openableTitle]").hover(function(){ 
        $(this).css('background-color','yellow')
    })
  }
);

$(document).ready(
  function(){
    $(".openableTitle2").click(function(){
      if ($(".openable2").css("display")=="none")
        $(".openable2").show();
      else 
      $(".openable2").hide();
    })
  }
);

$(document).ready(
  function(){
    $(".openableTitle3").click(function(){
      if ($(".openable3").css("display")=="none")
        $(".openable3").show();
      else 
      $(".openable3").hide();
    })
  }
);

$(document).ready(
  function(){
    var floatingBanners = $(".floating-banner");
    function bannerMoveRight(){
	    floatingBanners.animate({left:"+=1000"}, 1000 , 'linear', bannerMoveDown);
    }
    function bannerMoveDown(){
	    floatingBanners.animate({top:"+=1000"}, 1000, 'linear', bannerMoveLeft);
    }
    function bannerMoveLeft(){
	    floatingBanners.animate({left:"0"}, 1000, 'linear', bannerMoveUp);
    }
    function bannerMoveUp(){
	    floatingBanners.animate({top:"0"}, 1000, 'linear', bannerMoveRight);
    }
    bannerMoveRight();
  }
);

    
