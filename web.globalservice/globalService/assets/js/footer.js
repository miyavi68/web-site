function footer () {
    $.ajax ({
        url: "footer.html",
        cache: false,
        // async: false,
        success: function(html) {
            document.write(html);
        }
    });
}