/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle
*/


// Recupero gli elementi dal DOM
const gridContainer = document.querySelector('.grid-container');
const playButton = document.querySelector('button');
const stageSelect = document.getElementById('stage');

// Funzione per creare la griglia
const createGrid = () => {
    // Rimuovo eventuali classi di griglia precedenti
    gridContainer.classList.remove('cell-10', 'cell-9', 'cell-7');

    // Rimuovo tutto le celle esistenti, prima della creazione di una nuova griglia
    gridContainer.innerHTML = '';

    // Creo la variabile per recuperare il livello di stage selezionato dall'utente
    const stage = parseInt(stageSelect.value);

    let cellCount;
    let cellClass;

    // Determino il numero di celle e righe in base allo stage
    switch (stage) {
        case 1:
            cellCount = 100;
            cellClass = 'cell-10';
            break;
        case 2:
            cellCount = 81;
            cellClass = 'cell-9';
            break;
        case 3:
            cellCount = 49;
            cellClass = 'cell-7';
            break;
        default:
            cellCount = 100;
            cellClass = 'cell-10';
            alert('Stage non valido, non barare (!!) ed utilizza lo stage Facile, Medio o Difficile.');
            return;
    }

    // Aggiungo la classe dello stage appropriato
    gridContainer.classList.add(cellClass);

    // Creo le celle
    for (let i = 1; i <= cellCount; i++) {
        // Creo un elemento per la cella
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // Aggiungo il numero alle celle
        cell.textContent = i;
        // Stampo tutti i numeri della cella per un controllo
        console.log('Cella numero: ', i);

        // Aggiungo l'event listener alla cella
        cell.addEventListener('click', function () {
            // Gestisco la classe per colorare la cella al click, aggiungo o rimuovo
            cell.classList.toggle('clicked');
            // Stampo il numero della cella come risultato in console
            console.log(`Cella cliccata: ${i}`);
        });

        // Aggiungo la cella alla griglia
        gridContainer.appendChild(cell);
    }
};

// Aggiungo l'event listener al bottone
playButton.addEventListener('click', createGrid);

// Aggiungo l'event listener di cambio selezione agli stage
stageSelect.addEventListener('change', createGrid);