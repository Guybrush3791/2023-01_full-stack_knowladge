
## Repo
`php-strong-password-generator`

## Todo
Dobbiamo creare una pagina che permetta ai nostri utenti di utilizzare il nostro generatore di password sicure. L’esercizio è suddiviso in varie milestone ed è molto importante svilupparle in modo ordinato.

#### Milestone 1
Creare un `form` che invii in `GET` la lunghezza della password. Una nostra funzione utilizzerà *questo dato* per generare una **password casuale** da restituire all’utente. La **password** dovra' essere composta da *lettere minuscole e maiuscole, numeri e simboli*
Scriviamo tutto (logica e layout) in un unico file `index.php`.

#### Milestone 2
**Verificato il corretto funzionamento del nostro codice**. Spostiamo poi la logica in un file `helper.php` che includeremo poi nella pagina principale.

--- 

### Bonus
#### Milestone 3
Invece di visualizzare la password nella `index.php`, effettuare un *redirect* ad una pagina dedicata che tramite `$_SESSION` recupererà la password da mostrare all’utente.

#### Milestone 4
Gestire ulteriori parametri per la *password*: quali caratteri attivare fra numeri, lettere e simboli per la generazione di *password causale*. Possono essere scelti singolarmente (es. solo numeri) oppure possono essere combinati fra loro (es. numeri e simboli, oppure tutti e tre insieme).
Dare all’utente anche la possibilità ottenere *password* contenenti caratteri ripetuti o meno.

---

## Possibile layout risultante
![[Pasted image 20230111120801.png]]