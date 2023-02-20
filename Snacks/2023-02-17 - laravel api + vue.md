## Repo
`laravel-api`

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-2)

## Continuazione
Continuazione dell'esercizio precedente: [[2023-02-15 - laravel-relation-3|laravel-relation-3]] + [[2023-02-16 - laravel-relation-4 + front-end|laravel-relation-4 + front-end]]

> [!ATTENTION] ATTENZIONE
> Dare la precedenza agli esercizi di *CRUD* in *monolitico* (tutto dentro *Laravel*), sia per quanto riguarda lo svolgimento degli esercizi, che per la comprensione dei vari passaggi

## Todo
> [!TIP] PROTIP
> Dando priorita' ai task agli esercizi precedenti,  e' ora possibile siluppare lo stesso progetto in modalita' `micro-service`, ovvero avendo piu' progetti diversi per *front-end* (`VueJS`) e *back-end* (`Laravel`).

Sviluppare una pagina che permetta all'utente di vedere la lista di tutti i `Movie` (solo il titolo), all'interno di un progetto in `VueJS` che ricevera' i dati attraverso le `API` sviluppate nel *controller* `ApiController.php` di *Laravel* e collegate con il `file` di *rotte* dedicato (`routes\api.php`).

### Bonus 1
E' possibile, ricalcando i passi visti a lezione, generare dei `form` per la *creazione*/*modifica* dei dati contenuti nel film contando solo la relazione *1aN* con i *generi*

### Bonus 2
Aggiungere la possibilita' di *vedere*/*modificare* anche i `Tag` associati al `Movie` su cui si sta operando un'*operazione di scrittura* (creazione/aggiornamento elemento)