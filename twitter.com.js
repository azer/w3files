var $ = document.querySelector.bind(document),
    home = $('.home-tweet-box'),
    profile = $('.recent_photos');

if(home) $('.wrapper').insertBefore($('.home-tweet-box'), $('#timeline'));

profile && setTimeout(function(){
  document.querySelector('.wrapper').insertBefore(document.querySelector('.recent_photos'), document.querySelector('#timeline'));
}, 1000);

Array.prototype.forEach.call(document.querySelectorAll('.promoted-tweet'), function(el){
  el.parentNode.removeChild(el);
});
