// ==UserScript==
// @name namava
// @description 
// @version 0.1
// @author mostafa
// @license MIT
// @match *://www.namava.ir/*
// @run-at document-end
// @grant none
// ==/UserScript==

window.onload = function () {
	var searchstring = 'تماشای فیلم';
  var anchors = document.getElementsByTagName('a');

  for (i=0; i<anchors.length; i++)
  {
      if (anchors[i].innerHTML.includes(searchstring))
      { 
          var movieId     = anchors[i].onclick.toString().replace (/\D+(\d+)\D+/, '$1')
          var tvip        = '192.168.1.1'
          
          var foo2 = document.createTextNode(' ');
          var newlink2 = anchors[i].cloneNode(false);
          newlink2.href      = 'http://' + tvip + '/play1080?'+movieId;
          newlink2.innerHTML = 'پخش در تلویزیون (۱۰۸۰)';
    	
          anchors[i].parentNode.insertBefore(newlink2, anchors[i].nextSibling);
          anchors[i].parentNode.insertBefore(foo2, anchors[i].nextSibling);

          var foo = document.createTextNode(' ');
          var newlink = anchors[i].cloneNode(false);
          newlink.href      = 'http://' + tvip + '/play?'+movieId;
          newlink.innerHTML = 'پخش در تلویزیون';
          anchors[i].parentNode.insertBefore(newlink, anchors[i].nextSibling);
          anchors[i].parentNode.insertBefore(foo, anchors[i].nextSibling);

      }
  }
};
