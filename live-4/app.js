const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        nomi: ['Alessandro', 'Gianluca', 'Claudio'], // live 1
        movie: {
            images: [
                'https://www.themoviedb.org/t/p/w220_and_h330_face/hwg3pXw2m4HfRGbyRMIP8laf5Lf.jpg',
                'https://www.themoviedb.org/t/p/original/dz4dFXs400TXAfXm3y2UB1gm3Xq.jpg',
                'https://www.themoviedb.org/t/p/original/hSfDBCOybk4JFA01Zl4jhUJma5k.jpg',
                'https://www.themoviedb.org/t/p/original/egwQDrRDpCaFiUrlBL06mw2wQNK.jpg',
                'https://www.themoviedb.org/t/p/original/zSfInn64EI37x0I6GKl9Gs0jn7d.jpg'
            ],
            title: 'John Wick',
            category: 'Action',
            length: '200'
        }
    },
})

/* 
Milestone 1
Creiamo un oggetto Movie con le seguenti proprietà:
- Images - conterrà una lista di immagini
- Title - conterrà il titolo del film
- Cathegory - la categoria del film
- length - che conterra la lunghezza del film in minuti
*/

/* 
Milestone 2
Creare il markup ed utilizzare vue per stampare a schermo il film in una card
mostrando la prima immagine, il titolo, la categoria e la lunghezza
*/

/* 
Milestone 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dinamico lo slider
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente
*/

/* 
Milestone 4
Aggiungiamo le miniature delle altre immagini presenti per il film. Evidenziamo l'immagine 
*/