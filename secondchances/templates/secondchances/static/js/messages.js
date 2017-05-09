var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
let msgEndpoint = "/api/message/";
var user1 = document.getElementsByClassName("from_user")[0].getAttribute("id");
var user2 = document.getElementsByClassName("to_user")[0].getAttribute("id");

function sendMessage() {

    var content = $("textarea").val();
    if (content != "") {
        $.ajax({
            beforeSend: function(xhr) { xhr.setRequestHeader("X-CSRFToken", csrftoken); },
            type: "POST",
            url: msgEndpoint,
            data: JSON.stringify({
                   "sender": user1,
                   "recipient": user2,
                   "content": content,
                   "sent_at": null,
                   "read_at": null,
                  }),
            dataType: "json",
            contentType: "application/json",
            success: function() { location.reload(); },
        });

    }
    else {
        alert("I can't send an empty message");
    }
}
