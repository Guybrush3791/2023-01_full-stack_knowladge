## Repo
`laravel-primi-passi`

## Todo
Come visto a lezione, dopo aver installato correttamente [Composer](https://getcomposer.org/download/) attraverso l'installer (Windows) o la guida (Linux e Mac), sara' possibile generare un nuovo progetto Laravel.

## Tutorial
### Creazione progetto
Aprire un terminale nella cartella dove si desidera generare il nuovo progetto e procedere come segue:
```sh
composer create-project laravel/laravel hello_world
```

Al termine della fase di installazione, aprire con *VSCode* la cartella `hello_world` appena creata:
![[Pasted image 20230127131808.png]]

### Lancio server HTTP incluso in Laravel
Aprire il terminale tramite *View* --> *Terminal* 
![[Screenshot from 2023-01-27 13-18-51.png]]
![[Pasted image 20230127131944.png]]

All'interno del terminale lanciare il server:
```sh
php artisan serve
```
![[Pasted image 20230127132046.png]]

### Testare pagina di prova di Laravel
Sara' ora possibile collegarsi al progetto al seguente indirizzo:
[http://localhost:8000/](http://localhost:8000/)
![[Pasted image 20230127132152.png]]

### Modifica del layout di prova
Modificare infine il file `resources/views/welcome.blade.php` in modo da far comparire solo un **Hello, World!** in bianco al centro della pagina eliminando tutto il restante contenuto del `<body>`
```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style><!-- LASCIARE INVARIATO --></style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }

            h1 {

                color: white;
            }
        </style>
    </head>
    <body class="antialiased">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
            <h1>Hello, World!</h1>
        </div>
    </body>
</html>
```

### Verifica finale
Controllare il risultato nel browser
![[Pasted image 20230127132403.png]]