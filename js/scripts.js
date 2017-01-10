$(document).ready(function() {
  $("h1").click(function() {
    $("h1").after("<img src='http://www.decalsplanet.com/img_b/vinyl-decal-sticker-8859.jpg'>");
    $("img").click(function() {
      $(this).remove();
    });
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Hello, user!</li>");
    $("ul#user").children("li").click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Adios</li>");
    $("ul#webpage").prepend("<li>I'm sorry Dave, I can't let you do that.</li>");
    $("ul#user").children("li").first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>I'm not.</li>");
    $("ul#user").children("li").first().click(function () {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function () {
      $(this).remove();
    });
  });

});
