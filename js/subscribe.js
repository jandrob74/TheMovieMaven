
// Responsive Subscribe Popup

$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#subscribe").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        // Subscribe button and actions
        $("button[name=subscribe]").click(() => {
            $.ajax({
                type: "POST",
                url: $("#popup-form").attr("action"),
                data: $("#popup-form").serialize(),
                success: (data) => {
                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
                }
            });
        });

        // Close button
        $("#popup-close").click(() => {
            $("#subscribe, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });
    }

});