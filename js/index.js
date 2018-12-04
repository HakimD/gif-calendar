$(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  }); 
  
  //Gif chargement page
  var datepicker_header = document.getElementsByClassName("datepicker-header")[0];   
  var month = $(".datepicker").datepicker('getDate').getMonth()+1;
  var url = chooseUrl(month);
  
  datepicker_header.style.backgroundImage = "url("+url+")";

  //Gif prev, next
  $('.datepicker').datepicker('option', 'onChangeMonthYear', function(year, month) {       
    switch (month) {
      case 1:
        var url = "https://media2.giphy.com/media/UO95NWY0PmoWk/giphy.gif?cid=3640f6095c0681d2344638663672cf6d";
        break;
      case 2:
        var url = "https://media3.giphy.com/media/EyIIrI9w2Skx2/giphy.gif?cid=3640f6095c0681e844722e656bd7d9f9";    
        break;
      case 3:
        var url = "https://media1.giphy.com/media/BcmAJPjoMM2IHOwbCx/giphy.gif?cid=3640f6095c0682423765312f6f6aeaf7";
        break;
      case 4:
        var url = "https://media0.giphy.com/media/Qw4X3FGaZ6y9cLu1EwE/giphy.gif?cid=3640f6095c06826661383361418f4900";
        break;
      case 5:
        var url = "https://media.giphy.com/media/l3fZMzs7sIisUt0Tm/giphy.gif";
        break;
      case 6:
        var url = "https://media0.giphy.com/media/xSM46ernAUN3y/giphy.gif?cid=3640f6095c0683fa4e2e516f63ddd22b";
        break;
      case 7:
        var url = "https://media1.giphy.com/media/9CFQYEHg5CEmI/giphy.gif?cid=3640f6095c068f5d724642362ee60d37";
        break;
      case 8:
        var url = "https://media3.giphy.com/media/5xtDarqlsEW6F7F14Fq/200w.webp?cid=3640f6095c05596f5a717677498c0664";
        break;
      case 9:
        var url = "https://media0.giphy.com/media/d2lcHJTG5Tscg/giphy.gif?cid=3640f6095c068112382f375577d115f5";
        break;
      case 10:
        var url = "https://media1.giphy.com/media/yoJC2Olx0ekMy2nX7W/giphy.gif?cid=3640f6095c067dcb75593062496fa97e";
        break;
      case 11:
        var url = "https://media2.giphy.com/media/Ro8XMR5aUp4YM/giphy.gif?cid=3640f6095c068347536a4a656f85e9fd";
        break;
      case 12:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";      
        break;
      default:
      return url;  
    }
    datepicker_header.style.backgroundImage = "url("+url+")";     
  });
});

function chooseUrl(month) {
  switch (month) {
    case 1:
      var url = "https://media2.giphy.com/media/UO95NWY0PmoWk/giphy.gif?cid=3640f6095c0681d2344638663672cf6d";
      break;
    case 2:
      var url = "https://media3.giphy.com/media/EyIIrI9w2Skx2/giphy.gif?cid=3640f6095c0681e844722e656bd7d9f9";    
      break;
    case 3:
      var url = "https://media1.giphy.com/media/BcmAJPjoMM2IHOwbCx/giphy.gif?cid=3640f6095c0682423765312f6f6aeaf7";
      break;
    case 4:
      var url = "https://media0.giphy.com/media/Qw4X3FGaZ6y9cLu1EwE/giphy.gif?cid=3640f6095c06826661383361418f4900";
      break;
    case 5:
      var url = "https://media.giphy.com/media/l3fZMzs7sIisUt0Tm/giphy.gif";
      break;
    case 6:
      var url = "https://media0.giphy.com/media/xSM46ernAUN3y/giphy.gif?cid=3640f6095c0683fa4e2e516f63ddd22b";
      break;
    case 7:
      var url = "https://media1.giphy.com/media/9CFQYEHg5CEmI/giphy.gif?cid=3640f6095c068f5d724642362ee60d37";
      break;
    case 8:
      var url = "https://media3.giphy.com/media/5xtDarqlsEW6F7F14Fq/200w.webp?cid=3640f6095c05596f5a717677498c0664";
      break;
    case 9:
      var url = "https://media0.giphy.com/media/d2lcHJTG5Tscg/giphy.gif?cid=3640f6095c068112382f375577d115f5";
      break;
    case 10:
      var url = "https://media1.giphy.com/media/yoJC2Olx0ekMy2nX7W/giphy.gif?cid=3640f6095c067dcb75593062496fa97e";
      break;
    case 11:
      var url = "https://media2.giphy.com/media/Ro8XMR5aUp4YM/giphy.gif?cid=3640f6095c068347536a4a656f85e9fd";
      break;
    case 12:
      var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";      
    default:
    return url;  
  }
}

//Pour ajuster le header à la taille de l'image. A finir 
    /*$("<img/>",{load : function(){
        datepicker_header.style.height = this.height+("px");
        
        console.log(this.height);    
      },
      src: url
    });*/