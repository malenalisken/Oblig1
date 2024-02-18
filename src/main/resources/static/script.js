
function checkAntall(){
    let input = document.getElementById("antall").value
    const pattern = /^[0-9]{1,2}$/;
    let validAntall = pattern.test(input);
    if (isNaN(input) || input<=0 || !validAntall){
        document.getElementById("notValidAntall").innerHTML="Må være tall og større enn 0";
        document.getElementById("notValidAntall").style.color="red";
        return false;
    }else{
        document.getElementById("notValidAntall").innerHTML="";
        return true;
    }
}
function checkFornavn(){
    let input = document.getElementById("fornavn").value;
    const pattern = /^[A-Z][a-zA-Z]{1,}$/;
    let validFornavn = pattern.test(input);
    if (validFornavn) {
        document.getElementById("notValidFornavn").innerHTML = "";
    }else{
        document.getElementById("notValidFornavn").innerHTML="Må starte med stor bokstav";
        document.getElementById("notValidFornavn").style.color="red";
    }
    return validFornavn;
}
function checkEtternavn(){
    let input = document.getElementById("etternavn").value;
    const pattern = /^[A-Z][a-zA-Z]{1,}$/;
    let validEtternavn = pattern.test(input);
    if (validEtternavn) {
        document.getElementById("notValidEtternavn").innerHTML = "";
    }else{
        document.getElementById("notValidEtternavn").innerHTML="Må starte med stor bokstav";
        document.getElementById("notValidEtternavn").style.color="red";
    }
    return validEtternavn;
}
function checkTelefonnr(){
    let input = document.getElementById("telefonnr").value;
    const pattern = /^[0-9]{8}$/;
    let validTelefonnr = pattern.test(input);
    if (validTelefonnr) {
        document.getElementById("notValidTelefonnr").innerHTML = "";
    }else{
        document.getElementById("notValidTelefonnr").innerHTML="Må ha 8 siffer mellom 0-9";
        document.getElementById("notValidTelefonnr").style.color="red";
    }
    return validTelefonnr;
}
function checkEpost(){
    let input = document.getElementById("epost").value;
    const pattern = /^[\w]+@[\w]+\.[a-zA-Z0-9]{2,}$/;
    let validEpost = pattern.test(input);
    if (validEpost) {
        document.getElementById("notValidEpost").innerHTML = "";
    }else{
        document.getElementById("notValidEpost").innerHTML="Ikke gyldig epost";
        document.getElementById("notValidEpost").style.color="red";
    }
    return validEpost;
}



const billetter =[];
function kjopBillett(){
    let film = document.getElementById("velgFilm").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    if(film === "velgFilm"){
        document.getElementById("notValidFilm").innerHTML="Må velge en film";
        document.getElementById("notValidFilm").style.color="red";
        return;
    }else{
        document.getElementById("notValidFilm").innerHTML="";
    }

    let allValid = checkAntall() && checkFornavn() && checkEtternavn() && checkTelefonnr() && checkEpost();
    if(allValid){
        let enBillett = {
            film : film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        }
        billetter.push(enBillett);
        let ut="";
        for(let b of billetter){
            ut+= b.antall + " billetter for " + b.film + "<br>" +
                "Kjøpt av: " + b.fornavn + " " + b.etternavn + "<br>" +
                "Kontakt info: " + b.telefonnr + " " + b.epost + "<br><br>";
        }
        document.getElementById("visBilletter").innerHTML=ut;
        document.getElementById("billettForm").reset();
    }
}
function slettBilletter(){
    billetter.length=0;
    document.getElementById("visBilletter").innerHTML="";
}