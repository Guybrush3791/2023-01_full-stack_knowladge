
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

---

# Code
## Folder
![[Pasted image 20230111122659.png]]

## Files
## `index.php`
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
    ?>
</head>
<body>
    
    <h1>Hello, World!</h1>
    <form method="POST">
        <label for="mail">Mail</label>
        <input type="text" name="mail"
            <?php
                echo getOldMailValue($mail);
            ?>
        >
        <input type="submit" value="VALIDATE">
    </form>
    
    <?php

        if ($validMail) {

            $_SESSION['mail'] = $mail;

            header('Location: ./thankyou.php');
        } else {

            echo getHtmlValidation($validMail, $mail);
        }
    ?>

</body>
</html>
```

## `thankyou.php`
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

        $mail = $_SESSION['mail'];
    ?>
</head>
<body>
    
    <h1>Thank You: <?php echo $mail; ?></h1>

</body>
</html>
```
## `libs/helper.php`
```php
<?php

    $mail = $_POST['mail'] ?? false;

    $validMail = str_contains($mail, "@") 
                    && str_contains($mail, ".");

    function getHtmlValidation($validMail, $mail) {

        if ($mail === false) {

            return "";
        }

        return $validMail 
            ? "<h1 class='green'>OK: " . $mail . "</h1>" 
            : "<h1 class='red'>KO: " . $mail . "</h1>"
        ;
    }

    function getOldMailValue($mail) {

        if ($mail !== false) {

            return "value='" . $mail . "'";
        }

        return "";
    }
```