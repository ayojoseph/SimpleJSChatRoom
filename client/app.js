var socket = io();

$("form").submit(function() {
  var text = $("#message").val();
  var Name = $("#initials").val();
  var screenM = Name + " : " + text;
  socket.emit("message", screenM);
  $("#message").val("");
  $("#initials").val("");
  return false;
});

socket.on("message", function(msg) {
  $("<li>")
    .text(msg)
    .appendTo("#history");
});
