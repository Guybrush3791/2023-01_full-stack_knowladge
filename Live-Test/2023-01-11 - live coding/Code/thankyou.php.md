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