$(document).ready(function() {

  // FUNZIONE DI INVIO MESSAGGIO/RISPOSTA AUTOMATICA
  $("#send_message").click(sendmsg);

  function sendmsg() {

    //salvo il valore di input
    var inputUser = $(".write_msg").val();
    var msg = $("#template .message_green").clone();

    // stampo in pagina il messaggio
    msg.text(inputUser);
    $(".chat_room.active").append(msg);

    //pulisco l'input
    $(".write_msg").val("");

    //quando inserisco un messaggio, dopo 1 sec appare la risposta
    setTimeout(function() {
      var answer = $("#template .message_white").text("Ok").clone();
      $(".chat_room.active").append(answer);
    }, 1000);
  };

  // invio il messaggio premendo il pulsante "invio" da tastiera
  $(".write_msg").keypress(
    function(invio) {
      if (invio.which == 13) {
        sendmsg();
      }
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
          };
        }
      );
    }
  );

  /* Milestone 3
  - Click sul contatto mostra la conversazione del contatto cliccato,
  è possibile inserire nuovi messaggi per ogni conversazione.
  - Cancella messaggio: cliccando sul messaggio appare un menu a tendina
  che permette di cancellare il messaggio selezionato. */

  $(".chat_items").click(
    function() {

      //quando il contatto è cliccato cambia colore
      $(this).toggleClass("bg_items");

      var refchat = $(this).attr("refchat");

      $(".chat_room").removeClass("active");

      $(".chat_room[refchat='"+ refchat +"']").addClass("active");
    }
  );





});
