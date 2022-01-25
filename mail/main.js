let listaMail = ['esempio@email.com', 'mario@hotmail.it', 'email@virgilio.com'];

let insertMail = prompt('Inserisci la tua mail');

for (let i = 0; i < listaMail.length; i++) {

    //se il valore inserito nel prompt è presente nell'Array assegna true alla variabile
    if (listaMail[i] == insertMail) {
      var resultList = true;
    }
    
}

// se resultList ha valore true 
if (resultList  == true) {

      let mailResult = document.getElementById('return-email');
      mailResult.innerHTML = "Accesso Consentito. <br> La mail inserita è presente nell'elenco!";

    } else {

      mailResult = document.getElementById('return-email');
      mailResult.innerHTML = "Accesso Negato. <br> La mail inserita NON è presente nell'elenco!";

    }