//// ==UserScript==
// @name namava
// @version 0.1
// @author mostafa
// @match *://www.namava.ir/*
// @run-at document-end
// @grant none
// ==/UserScript==

var tvip        = '192.168.10.110:9090'

function addButtons(link, movieId) {
  //   var foo2 = document.createTextNode(' ')
  //   var newlink2 = link.cloneNode(false)
  //   newlink2.href      = 'http://' + tvip + '/play1080?'+movieId
  //   newlink2.innerHTML = 'پخش در تلویزیون (۱۰۸۰)'
  //   link.parentNode.insertBefore(newlink2, link.nextSibling)
  //   link.parentNode.insertBefore(foo2, link.nextSibling)

  var foo = document.createTextNode(' ')
  var newlink = link.cloneNode(false)
  newlink.href      = 'http://' + tvip + '/play?'+movieId
  newlink.innerHTML = 'پخش در تلویزیون'
  link.parentNode.insertBefore(newlink, link.nextSibling)
  link.parentNode.insertBefore(foo, link.nextSibling)
}

window.onload = function () {

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(addedNode) {
        anchors = addedNode.getElementsByTagName('a')
        for (i=0; i<anchors.length; i++)
        {
          if (anchors[i].href.includes('play.namava.ir')) {
            addButtons(anchors[i], anchors[i].href.replace (/\D+m=(\d+)&.*/, '$1'));
          } else if (anchors[i].href.includes('namava.ir/play')) {
            addButtons(anchors[i], anchors[i].href.replace (/\D+(\d+)\D*/, '$1'));
          }
        }
      });
    });
  });

  observer.observe(document.body, {childList: true, subtree: true});
};
