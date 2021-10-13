(function (gallery_id) {
    var title = $('h2'),
        viewer = $('#viewer'),
        thumbs = $('#thumbs');
    
    // album info
    $.getJSON('//graph.facebook.com/' + gallery_id + '?callback=?', function(json, status, xhr) {
      title.html('<a href="' + json.link + '">' + json.name + '</a> from ' + json.from.name);
    });

    // images
    $.getJSON('//graph.facebook.com/' + gallery_id + '/photos?callback=?', function(json, status, xhr) {
      var imgs = json.data;

      viewer.attr('src', imgs[0].images[0].source)

      for (var i = 0, l = imgs.length - 1; i < l; i++) {
        $('<img src="' + imgs[i].images[3].source + '" data-fullsize="' + imgs[i].images[0].source + '">').appendTo(thumbs);
      }
  
      $('img', thumbs).bind('click', function(e) {
        e.preventDefault();
        viewer.attr('src', $(this).attr('data-fullsize'));
      });
    });
  })('426067170422'); // let's go -- put the gallery ID here
