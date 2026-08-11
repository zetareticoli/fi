// js/page-transitions.js
//
// Decides the direction of the cross-document view transition described in
// css/transitions.css. Loaded synchronously from <head> because `pagereveal`
// fires before the new document is painted: a deferred script can miss it.
(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'page-transition:from';
  var STORAGE_MAX_AGE = 3000;

  if (!('startViewTransition' in document) || !('onpagereveal' in window)) {
    return;
  }

  // Tells the stylesheet to drop the JS-less fallback animation.
  root.classList.add('vt-native');

  function pathOf(url) {
    try {
      return new URL(url, location.href).pathname.replace(/\/+$/, '');
    } catch (error) {
      return null;
    }
  }

  // A project page is a document inside the work collection, e.g. /work/ferrari.
  function isProjectPath(path) {
    var index = path ? path.indexOf('/work/') : -1;
    return index !== -1 && path.length > index + '/work/'.length;
  }

  function directionFor(fromPath, toPath) {
    var leaving = isProjectPath(fromPath);
    var entering = isProjectPath(toPath);
    if (entering) return 'vt-forward';
    if (leaving) return 'vt-back';
    return null;
  }

  // Chrome exposes the previous entry through the Navigation API; elsewhere we
  // fall back to what the outgoing document recorded on `pageswap`.
  function previousPath() {
    var activation = window.navigation && window.navigation.activation;
    if (activation && activation.from) {
      return pathOf(activation.from.url);
    }

    try {
      var stored = sessionStorage.getItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
      if (!stored) return null;
      var record = JSON.parse(stored);
      if (Date.now() - record.at > STORAGE_MAX_AGE) return null;
      return record.path;
    } catch (error) {
      return null;
    }
  }

  window.addEventListener('pageswap', function (event) {
    if (!event.viewTransition) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ path: pathOf(location.href), at: Date.now() })
      );
    } catch (error) {
      /* private mode: direction detection degrades to a cross-fade */
    }
  });

  window.addEventListener('pagereveal', function (event) {
    if (!event.viewTransition) return;

    // The new snapshot is live, so the staggered reveal would play while the
    // page is still sliding. Show that content upfront instead.
    root.classList.add('vt-active');
    document.querySelectorAll('.animate-in').forEach(function (element) {
      element.classList.add('is-visible');
    });

    var direction = directionFor(previousPath(), pathOf(location.href));
    if (direction) root.classList.add(direction);

    event.viewTransition.finished.then(function () {
      root.classList.remove('vt-active');
      if (direction) root.classList.remove(direction);
    });
  });
})();
