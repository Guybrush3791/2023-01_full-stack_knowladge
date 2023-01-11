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