# Todo
1. Controllare che la mail passata in GET sia ben formata e contenga un punto e una chiocciola
2. Se è corretta stampare un messaggio di success, altrimenti mostrare un messaggio di errore

## Metodo
**Milestone 1**: scriviamo tutto (logica e layout) in un unico file *index.php*
**Milestone 2:** verificato il corretto funzionamento del nostro codice, spostiamo la logica in un file *functions.php* che includeremo poi nella pagina principale

## Bonus
**Milestone 3:** invece di usare una classe statica per lo stile dell’alert, modificarla in base all’esito della funzione. Usare *alert-danger* in caso di errore e *alert-success* in caso di esito positivo.
**Milestone 4:** invece di visualizzare il messaggio di success nella *index.php*, in caso di esito positivo effettuare un redirect ad una thankyou page.
**Milestone 5:** far vedere come utilizzare *$_GET* per valorizzare il campo di input in caso il controllo del server dia esito negativo