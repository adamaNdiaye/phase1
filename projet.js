document.getElementById("inscription").addEventListener("submit",function(e) {
    e.preventDefault()

    var erreur;

    var nom = document.getElementById("Nom")
    var telephone = document.getElementById("telephone")
    var email = document.getElementById("email")
    var message = document.getElementById("Message")

    if (!message.value){
        erreur = "Veuillez renseigner un message";
    }
    if (!email.value){
        erreur = "Veuillez renseigner un email";
    }
    if (!telephone.value){
        erreur = "Veuillez renseigner un numéro";
    }
    
    if (!nom.value){
        erreur = "Veuillez renseigner un nom";
    }
    
    if (erreur){
        e.preventDefault()
        document.getElementById("erreur").innerHTML = erreur;
        return false ;
    } else{
        alert("Formulaire envoyé !");
    }
   
});