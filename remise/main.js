let montantFacture = Number(prompt('Le montant de la facture :'));
let remise = montantFacture / 100;
if (montantFacture > 150) {
    let newMontant = parseInt(montantFacture - remise);
    alert("Le montant de votre facture après votre remise s'élève à : " + newMontant + " €");
}
else {
    newMontant = montantFacture;
    alert("Le montant de votre facture s'élève à : " + newMontant + " €");
}
