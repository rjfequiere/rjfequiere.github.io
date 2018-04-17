$(function() {
  'use strict';
  var $grid = $('.lately-grid').masonry({
    itemSelector: '.lately-grid-item',
    columnWidth: '.lately-grid-item-sizer'
  });
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
});
