$( document ).ready(function() {

  $("#send_message").click(
    function() {

      //salvo il valore di input
      var inputUser = $(".write_msg").val();
      var msg = $("#template .message_green").clone();

      // stampo in pagina il messaggio
      msg.text(inputUser);
      $(".chat_room").append(msg);

      //pulisco l'input
      $(".write_msg").val("");
    }
  );


});
