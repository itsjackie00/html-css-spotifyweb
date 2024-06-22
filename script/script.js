// Funzione per gestire il click sul pulsante dell'icona
document.getElementById('dropdownToggle').addEventListener('click', function() {
    var menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show'); // Aggiunge/rimuove la classe 'show'
});

// Funzione per chiudere il menu quando si clicca fuori
window.addEventListener('click', function(e) {
    var menu = document.getElementById('dropdownMenu');
    if (!e.target.matches('#dropdownToggle')) {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }
});