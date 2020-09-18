'use strict';

(function () {

  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var pageMain = document.querySelector('.page-main');
  var pageFooter = document.querySelector('.page-footer');

  pageHeader.classList.remove('page-header--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');

      pageMain.classList.add('page-main--closed');
      pageFooter.classList.add('page-footer--closed');
    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');

      pageMain.classList.remove('page-main--closed');
      pageFooter.classList.remove('page-footer--closed');
    }
  });

})();
