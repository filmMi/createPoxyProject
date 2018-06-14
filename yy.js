(function (doc, win) {
  var docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc = function () {
      

    var clientWidth = docEl.clientWidth;
    var isH5W = 750
    if(clientWidth>isH5W){
      if (!clientWidth) return;
      document.querySelector('html').style.fontSize = clientWidth / 60 +'px';
    }else{
      document.querySelector('html').style.fontSize = clientWidth/375 * 5 +'px';
    }   
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();


})(document, window);