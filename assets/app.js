// Crea nuova istanza dell'oggetto vue

const app = new Vue(
    {
        // Opzioni dell'oggetto
        el: '#app', // el = elemento, #app è il selettore del div in HTML
        // questo, di per se è una proprietà che si appende all HTML senza DOM manipulation
        data: {
            Greetings: 'Hello VueJS', // questa è una proprietà dell'oggetto data chave: valore
            text: 'a Progressive Framework',
            userName: 'Alessandro', // questa è una direttiva che verrà collegata con v-model
            css_classes: 'text-red',
            counter: 0,
        },
        // qui vanno dentro tutti i nostri method e funzioni però chiave valore
        methods: {
            // Sintassi function di ES6, per rimuovere chiave:valore
            sayHi() {

            },
            // Metodo 2 con funzione
            incrementCounter() {
                this.counter += 1
            }
        }
    }
);