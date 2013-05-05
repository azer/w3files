var at = document.location.href,
    $ = document.querySelector.bind(document);

if ( /photos\/friends\/?$/.test(at) ) {
  document.body.classList.add('friends');
}


if( /flickr.com\/?$/.test(at) ) {
  document.body.classList.add('home');
  $('.tt-col1').insertBefore(
    $('form'),
    $('#y-photostream')
  );

  $('form').classList.add('search');

  $('.tt-col1').insertBefore(
    $('#tt-upload'),
    $('#y-photostream')
  );

  Array.prototype.map.call($All('h2'), function(el){
    el.innerHTML = el.innerHTML.replace("» ", "");
  });
}
