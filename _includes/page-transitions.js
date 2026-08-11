// _includes/page-transitions.js
//
// Decides the direction of the cross-document view transition described in
// css/transitions.css. Inlined at the top of <head>: `pagereveal` fires before
// the new document is painted, so a deferred script can miss it, and a
// separate file would be one more request the transition has to wait for.
(function () {
  'use strict';

  var root = document.documentElement;
  var STORAGE_KEY = 'page-transition:from';
  var STORAGE_MAX_AGE = 3000;

  // However fast the next document arrives, it cannot arrive within the frame
  // the finger lands, so the card answers the press itself. `:active` is not
  // dependable for this on touch, hence the explicit class.
  var pressed = null;

  function release() {
    if (!pressed) return;
    pressed.classList.remove('is-pressed');
    pressed = null;
  }

  document.addEventListener('pointerdown', function (event) {
    var card = event.target.closest && event.target.closest('a.work-item');
    if (!card) return;
    release();
    pressed = card;
    card.classList.add('is-pressed');
  }, { passive: true });

  // pointercancel is what fires when the touch turns into a scroll.
  ['pointerup', 'pointercancel', 'visibilitychange'].forEach(function (name) {
    document.addEventListener(name, release, { passive: true });
  });

  // `onpagereveal` is the signal for cross-document transitions specifically:
  // a browser can support same-document ones and still not fire it.
  if (!('startViewTransition' in document) || !('onpagereveal' in window)) {
    root.classList.add('no-view-transitions');
    return;
  }

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
