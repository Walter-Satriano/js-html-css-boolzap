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


      //quando inserisco un messaggio, dopo 1 sec appare la risposta
      setTimeout(function () {
        var answer = $("#template .message_white").text("Ok").clone();
        $(".chat_room").append(answer);
      }, 1000);
    }
  );




});
