## Repo
`php-badwords`

## Todo
1. Creare una variabile con un paragrafo di testo a vostra scelta. Stampare a schermo il paragrafo e la sua lunghezza. 
2. Una parola da censurare viene passata dall'utente tramite parametro GET: 
	- Stampare di nuovo il paragrafo e la sua lunghezza, dopo aver sostituito con tre asterischi tutte le occorrenze della parola da censurare

## Soluzione
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
    </style>
    <?php

        $phar = "Lorem amet ipsum dolor amet ipsum ipsum amet consectetur adipisicing elit. Obcaecati nesciunt illum deleniti vel earum ut, error vero numquam cupiditate, quisquam, sunt nostrum. Atque eius fuga doloremque beatae temporibus illum officiis!";    
        $lng = strlen($phar);

        $badword = $_GET['bd'];

        $safePhar = str_replace($badword, "***", $phar);
        $safeLng = strlen($safePhar);
    ?>
</head>
<body>
    <h1>
        <?php 
            echo  $phar . " : " . $lng;
            echo "<br>";

            if (isset($badword)) {
                
                echo "Badword: " . $badword;
                echo "<br>";
                echo $safePhar . " : " . $safeLng;
            }
        ?>
    </h1>
</body>
</html>
```