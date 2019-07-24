$(document).ready(function() {

  // FUNZIONE DI INVIO MESSAGGIO/RISPOSTA AUTOMATICA
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

  // FUNZIONE DI RICERCA UTENTE
  $(".chat_search input").keyup(
    function() {

      // salvo l'input in una variabile e rendo l'input tutto minuscolo
      var searchInput = $(this).val().toLowerCase();

      // funzione per traversare la lista contatti
      $(".chat_items").each(
        function() {
          // di default visualizzo tutti gli utenti
          $(this).show();

          // salvo in una variabile il nome utente trovato
          var chatUser = $(this).find("h4").text().toLowerCase();
          console.log(chatUser);

          // se l'input è incluso nascondo gli utenti non trovati
          if (!chatUser.includes(searchInput)) {
            $(this).hide();
          }
        }
      );
    }
  );






});
