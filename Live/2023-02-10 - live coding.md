# Laravel storage file
Lo *storage* di *Laravel* ci permette di salvare i file in `back-end` per poi riutilizzarli come `asset` per il nostro sito. E' inoltre possbile permettere agli utenti di caricare dei file, il cui nome verra' salvato in *DB* per permetterne la localizzazione.

## Setup iniziale
Per permttere la gestione di file in `back-end` sono sufficienti i seguenti passaggi:
1. modifcare l'`.env` settando il parametro `FILESYSTEM_DISK` a `public`
```properties
# ...

FILESYSTEM_DISK=public

# ...
```

2. creare il *link simbolico* all'interno della cartella `public` con il comando `artisan`
```sh
php artisan storage:link
```

## Accesso allo storage
Per accedere ai file presenti nello storage basta utilizzare la funzione `asset` che ci fornira' un `link` adeguato per referenziare il file sia in `back-end` che nell'`HTML`
```php
<img class="project-img" src="{{ asset('storage/' . $project -> main_image) }}" alt="">
```

> [!tip]- PROTIP
> Tipicamente il nome del file viene recuperato dal *DB*, ma questo non e' *per forza vero*, potrebbero esserci anche immagini *hard-coded*
> ```php
> <img class="project-img" src="{{ asset('storage/prj-no-img.jpg') }}" alt="">
> ```

## Upload delle immagini
E' inoltre possibile fornire agli utenti la possibilita' di caricare delle immagini sul nostro server in modo che siano poi utilizzabili all'interno del sito

### Form
Il `form` richiede una modifica a livello di *codifica dei dati* (vedi `enctype`)
```php
<form method="POST" action="{{ route('admin.project.create') }}" enctype="multipart/form-data">
```

Il tipo di `input` diviene `file`
```php
<input type="file" name="main_image">
```

### Controller
Nel `controller` e' necessario gestire in maniera specifica sia la validazione che l'*upload* vero e proprio

#### Validazione
```php
$data = $request -> validate([
            // ...
            'main_image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            // ...
        ]);
```

> [!danger] ATTENZIONE!
> Il `php.ini` di *default* riporta un limite per la dimensione delle immagini caricate a *2Mb*; non eccedere quel limite nelle validazioni *oppure* riportare il limite aumentato anche nel file `php.ini` utilizzato da *Laravel* (vedi [[2023-02-10 - PHP INI|php.ini]])

#### Upload file
Per rendere il file *persistente* e' necessario copiarlo all'interno della cartella di `storage`
```php
$img_path = Storage::put('uploads', $data['main_image']);
$data['main_image'] = $img_path;
```

### Database
A questo punto dovrebbe essere possibile per l'utente caricare un *immagine* all'interno del nostro *storage* e ottenere il nome dell'immagine all'interno del *DB*
![[Pasted image 20230210124924.png]]

