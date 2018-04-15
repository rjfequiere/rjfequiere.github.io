$(function() {
  'use strict';
  $('#main').smoothState({
    prefetch: true,
    cacheLength: 4
  });
  var $grid = $('.lately-grid').masonry({
    itemSelector: '.lately-grid-item',
    columnWidth: '.lately-grid-item-sizer'
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
