$(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });  

  $('.datepicker').datepicker('option', 'onChangeMonthYear', function(year, month) {     
    var datepicker_header = document.getElementsByClassName("datepicker-header")[0];    

    switch (month) {
      case 1:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 2:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";    
        break;
      case 3:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 4:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 5:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 6:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 7:
        var url = "https://media3.giphy.com/media/CPutABwbvXC92/giphy.webp?cid=3640f6095c05594a31435a76775c8cb1";
        break;
      case 8:
        var url = "https://media3.giphy.com/media/5xtDarqlsEW6F7F14Fq/200w.webp?cid=3640f6095c05596f5a717677498c0664";
        break;
      case 9:
        var url = "https://media1.giphy.com/media/YABVykvyz1N6w/200.webp?cid=3640f6095c05598f34642f6f363797d1";
        break;
      case 10:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 11:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      case 12:
        var url = "https://media2.giphy.com/media/26gsl2WC5tRxkemdi/giphy.gif?cid=3640f6095c054d694b7477337774b912";
        break;
      return url;  
    }
    
    //Pour ajuster le header à la taille de l'image. A finir 
    /*$("<img/>",{load : function(){
        datepicker_header.style.height = this.height+("px");
        
        console.log(this.height);    
      },
      src: url
    });*/

    datepicker_header.style.backgroundImage = "url("+url+")";
    

    
  
  });
});
