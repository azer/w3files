var $ = document.querySelectorAll.bind(document);

noAds();

var timer;
window.onscroll = function(){
  if(timer) clearTimeout(timer);
  timer = setTimeout(noAds, 100);
};

function noAds(){
  timer = undefined;
  rm('uiLikePage');
  rm('PageLikeButton');
}

function rm(cls){
  Array.prototype.forEach.call($('.' + cls), function(el){
    var r = parent(el, 'uiUnifiedStory');
    r.parentNode.removeChild(r);
  });
}


function parent(el, cls){
  var p = el.parentNode;

  while (p) {
    if(p.classList.contains(cls)) return p;
    p = p.parentNode;
  }
}
