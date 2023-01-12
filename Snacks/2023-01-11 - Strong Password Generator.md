
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

---

## Soluzione

### Zip
![[2023-01-12_live-password-generator.zip]]

### Code
#### `index.php`
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        * {

            background: purple;
            color: white;
        }

        .green {

            color: green;
        }
        .red {

            color: red;
        }

        .bg-gray {

            background-color: grey;
        }
        .bg-green {

            background-color: green;
        }
    </style>
    <?php

        session_start();

        require_once __DIR__ . "/libs/helper.php";

        $lng = $_GET['length'] ?? -1;

        $minLetters = $_GET['minLetters'] ?? false;
        $maxLetters = $_GET['maxLetters'] ?? false;
        $numbers = $_GET['numbers'] ?? false;
        $symobols = $_GET['symobols'] ?? false;
        $dupplicate = $_GET['dupplicate'] ?? false;

        if ($lng > 0) {

            $pws = pwsGenrate($lng, $minLetters, $maxLetters, 
                                $numbers, $symobols, $dupplicate);
            $_SESSION['pws'] = $pws;
            header("Location: thankyou.php");
        }
    ?>
</head>
<body>
    
    <h1>Hello, World!</h1>
    <form>
        <label for="length">Length</label>
        <input type="number" name="length" 
            <?php
                if ($lng > 0) {
                    echo "value='" . $lng . "'";
                }
            ?>
        >
        <br>
        <input type="checkbox" name="minLetters">
        <label for="minLetters">Lettere minuscole</label>
        <br>
        <input type="checkbox" name="maxLetters">
        <label for="maxLetters">Lettere maiuscole</label>
        <br>
        <input type="checkbox" name="numbers">
        <label for="numbers">Numeri</label>
        <br>
        <input type="checkbox" name="symobols">
        <label for="symobols">Simboli</label>
        <br>
        <input type="checkbox" name="dupplicate">
        <label for="dupplicate">Caratteri dupplicati</label>
        <br>
        <input type="submit" value="GENERATE">
    </form>
</body>
</html>
```

#### `thankyou.php`
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        * {

            background: purple;
            color: white;
        }

        .green {

            color: green;
        }
        .red {

            color: red;
        }

        .bg-gray {

            background-color: grey;
        }
        .bg-green {

            background-color: green;
        }
    </style>
    <?php

        session_start();

        $pws = $_SESSION['pws'];
    ?>
</head>
<body>
    
    <h1>Hello, World!</h1>
    <h1>New password: <?php echo $pws ?></h1>
</body>
</html>
```

#### `libs/helper.php`
```php
<?php

    function pwsGenrate($lng, $minLettersOn, $maxLettersOn, 
                        $numbersOn, $symobolsOn, $dupplicate) {

        $minLetters = 'abcdefghijklmnopqrstuvwxyz';
        $maxLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $numbers = '0123456789';
        $symobols = '!@#$%^&*()_-+';

        $pwsChars = '';

        if ($minLettersOn) {

            $pwsChars .= $minLetters;
        }
        if ($maxLettersOn) {

            $pwsChars .= $maxLetters;
        }
        if ($numbersOn) {

            $pwsChars .= $numbers;
        }
        if ($symobolsOn) {

            $pwsChars .= $symobols;
        }
        
        if (strlen($pwsChars) < 1) {

            return "ERROR!";
        }
        
        $pws = '';
        while(strlen($pws) < $lng) {
    
            $newChar = substr($pwsChars, rand(0, strlen($pwsChars)), 1);

            // if (!(!$dupplicate && str_contains($pws, $newChar))) {
            if ($dupplicate || !str_contains($pws, $newChar)) {

                $pws .= $newChar;
            }
        }

        return $pws;
    }
```
