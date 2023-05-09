$(document).ready(function() {
  var page = 1;
  var perPage = 10;
  var loading = false;

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height() && !loading) {
      loading = true;
      $.getJSON("https://api.github.com/repos/:owner/:repo/issues?page=" + page + "&per_page=" + perPage, function(data) {
        for(var i = 0; i < data.length; i++) {
          $("#content").append("<p>" + data[i].title + "</p>");
        }
        page++;
        loading = false;
      });
    }
  });
});
