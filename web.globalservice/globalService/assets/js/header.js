function header () {
    $.ajax ({
        url: "header.html",
        cache: false,
        // async: false,
        success: function(html) {
            document.write(html);
        }
    });
}