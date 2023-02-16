Per creare un nuovo progetto con tutte le specifiche viste a lezione, e' necessario eseguire in ordine una precisa sequenza di operazioni

## Creazione progetto
### Creazione nuovo progetto
Creare un nuovo progetto tramite riga di comando
```sh
composer create-project --prefer-dist laravel/laravel my_project "9.*"
```

> [!ATTENTION] ATTENTION
> Con l'uscita delle nuove versioni di *Laravel* e' necessario specificare la versione che vogliamo installare durante la fase di *creazione del progetto*

### Impostazione dipendenze tramite pacchetto
Dopo essere entrati nella cartella del progetto appena creata, aggiungere la dipendenza tramite `composer require` per poi lanciare lo *script* contenuto
```sh
cd my_project
composer require pacificdev/laravel_9_preset
php artisan preset:ui bootstrap
```

### Installazione dipendenze front-end
```sh
npm i
```

## Esecuzione progetto
Tramite due terminali separati eseguire i due comandi per il *server back-end* e quello per la compilazione del *front-end*

### Terminale 1
Eseguire il seguente comando
```sh
php artisan serve
```

La risposta attesa e' nella seguente forma
```sh
INFO  Server running on [http://127.0.0.1:8000].  

Press Ctrl+C to stop the server
```

### Terminale 2
Eseguire il seguente comando
```sh
npm run dev
```

La risposta attesa e' nella seguente forma
```sh
VITE v3.2.5  ready in 146 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose

LARAVEL v9.48.0  plugin v0.6.1

➜  APP_URL: http://localhost
```

## Test progetto
E' possibile collegarsi al sito in esecuzione all'indirizzo specificato nel *Terminale 1*:
- [http://localhost:8000/](http://localhost:8000/)
- [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
