## Repo
`laravel-base-crud`

### N.B.: 
Continuare sulla `repo` di ieri 

## Todo
Continuando l'esercizio iniziato ieri, introdurre le operazione *CRUD* viste a lezione:
- possibilita' di *eliminare* un elemento dal *DB*
- possibilita' di *creare* un *nuovo* elemento nel *DB*

Per raggiungere il risultato sara' necessario introdurre *3 nuove rotte*:
- *saint.destroy*: rotta per l'eliminazione di un elemento dal *DB*
- *saint.create*: rotta che ritorna il *form* necessario all'utente per *inserire i dati* che verranno poi utilizzati per creare un *nuovo elemento* all'interno del *DB*
- *saint.store*: rotta che riceve il contenuto del *form* e salva *nuova entita'* in *DB*

**N.B.**: per ogni rotta nel `web.php` vi sara' un metodo dedicato all'interno del `MainController`

Sara' inoltre necessario aggiungere la *view* che contiene il *form* che l'utente utilizzera' per inserire i dati del *nuovo `Saint`* da inserire in *DB*

## Traccia
Vedi live coding: [[2023-02-03 - live coding]]