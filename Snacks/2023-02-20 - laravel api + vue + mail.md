## Repo
`laravel-api`

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-2)

## Continuazione
Continuazione dell'esercizio precedente: [[2023-02-15 - laravel-relation-3|laravel-relation-3]] + [[2023-02-16 - laravel-relation-4 + front-end|laravel-relation-4 + front-end]] + [[2023-02-17 - laravel api + vue|laravel api + vue]]

> [!ATTENTION] ATTENZIONE
> Dare la precedenza agli esercizi di *CRUD* in *monolitico* (tutto dentro *Laravel*), sia per quanto riguarda lo svolgimento degli esercizi, che per la comprensione dei vari passaggi

## Todo
> [!TIP] PROTIP
> Dando priorita' ai task degli esercizi precedenti,  e' ora possibile sviluppare lo stesso progetto in modalita' `micro-service`, ovvero avendo piu' progetti diversi per *front-end* (`VueJS`) e *back-end* (`Laravel`).

Sviluppare una pagina che permetta all'utente di vedere la lista di tutti i `Movie` (solo il `name` + `tags`), all'interno di un progetto in `VueJS` che ricevera' i dati attraverso le `API` sviluppate nel *controller* `ApiController.php` di *Laravel* e collegate con il `file` di *rotte* dedicato (`routes\api.php`).

Generare un `form` per la *creazione*/*modifica* dei dati contenuti nel film contando solo la relazione *1aN* con i *generi*.

Aggiungere la possibilita' di *vedere*/*modificare* anche i `Tag` associati al `Movie` su al `form` per permettere all'utente di associarli con il `Movie` in fase di *creazione*/*aggiornamento*.

### Bonus
Mandare una *mail* all'amministratore (inventare un'indirizzo di fantasia) per ogni operazione di *scrittura* fatta sul *DB* (*creazione*/*aggiornamento*/*eliminazione*).

La mail dovra' riportare *quale operazione e' stata svolta* e *tutti i dettagli* del film su cui l'operazione e' stata eseguita (dopo la modifica, se in fase di *aggiornamento*).

Per la gestione delle mail utilizzare il servizio [[2023-02-08 - MailTrap|MailTrap]] visto a lezione, creando un account gratuito e riportando i collegamenti nel file `.env`.