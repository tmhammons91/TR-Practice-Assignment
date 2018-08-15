    function show_content() {

      $('.sources-strategy').addClass("hide");

      $('.topic-content').removeClass("hide");
    }

    function show_sources() {

      $('.topic-content').addClass("hide");

      $('.sources-strategy').removeClass("hide");
    }

    $(document).ready(function () {

      $('#content-button').click(function () { show_content(); });

      $('#sources-button').click(function () { show_sources(); });

    });
