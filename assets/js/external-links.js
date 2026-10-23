(function() {
  var links = document.querySelectorAll("a[href]");

  Array.prototype.forEach.call(links, function(link) {
    var url = new URL(link.href, window.location.href);

    if ((url.protocol === "http:" || url.protocol === "https:") && url.origin !== window.location.origin) {
      link.target = "_blank";
      link.relList.add("noopener", "noreferrer");
    }
  });
})();