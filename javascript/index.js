document.addEventListener('DOMContentLoaded', () => {
    let btnAdd = document.querySelectorAll('.plus, .add');
    let btnMinus = document.querySelectorAll('.moin');
    let quantities = document.querySelectorAll('.qte');
    let prices = document.querySelectorAll('.prix');
    let total = document.querySelector('.total');

    // Ajouter des écouteurs d'événements aux boutons d'ajout
    btnAdd.forEach((button, index) => {
        button.addEventListener('click', () => {
            quantities[index].textContent = parseInt(quantities[index].textContent) + 1;
            updateTotal();
        });
    });

    // Ajouter des écouteurs d'événements aux boutons de diminution
    btnMinus.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (parseInt(quantities[index].textContent) > 0) {
                quantities[index].textContent = parseInt(quantities[index].textContent) - 1;
                updateTotal();
            }
        });
    });

    // Initialiser le total à la valeur actuelle
    updateTotal();
});

// Fonction pour mettre à jour le total
function updateTotal() {
    let sum = 0;
    let quantities = document.querySelectorAll('.qte');
    let prices = document.querySelectorAll('.prix');
    let total = document.querySelector('.total');
    quantities.forEach((qty, index) => {
        sum += parseInt(qty.textContent) * parseFloat(prices[index].textContent.replace('$', '').trim());
    });
    total.textContent = sum.toFixed(2) + ' $'; // Mettre à jour l'affichage du total
}

// Code JS pour supprimer un produit du panier
let deleteElements = document.querySelectorAll('.supprimer');
deleteElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Supprimer le produit
        element.closest('.card-body').remove();
        // Mettre à jour le total après suppression
        updateTotal();
    });
});

// Code JS pour liker un produit
let likeElements = document.querySelectorAll('.aimer');
likeElements.forEach(element => {
    element.addEventListener('click', () => {
        if (element.style.color === "black") {
            element.style.color = "red";
        } else {
            element.style.color = "black";
        }
    });
});
