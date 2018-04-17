$(function() {
  'use strict';
  var $grid = $('.lately-grid').masonry({
    itemSelector: '.lately-grid-item',
    columnWidth: '.lately-grid-item-sizer'
  });
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
  $('#main').smoothState({
    prefetch: true,
    cacheLength: 4,
    onAfter: function () {
      $grid.masonry('layout');
    }
  });
});
