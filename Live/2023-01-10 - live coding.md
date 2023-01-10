# Es 1
## Testo
1. Inserire delle parole all’interno di un array
2. controllare se la parola passata dall’utente tramite un form è presente nell'array.

## Codice
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

        $bd = $_GET["bd"];
    ?>
</head>
<body>
    <h1>
        <?php 
            
            // 1. Inserire delle parole all’interno di un array
            // 2. controllare se la parola passata dall’utente tramite un form è presente nell'array.

            $arr = [
                "ipsum",
                "dolor",
                "sit",
                "amet",
                "consectetur",
                "adipisicing",
                "elit",
                "Facilis",
                "unde",
                "molestias",
                "aperiam"
            ];

            $res = in_array($bd, $arr);

            if ($res === true) {

                echo "la parola e' presente";
            } else {

                echo "la parola NON e' presente";
            }
        ?>
    </h1>
    <form>
        <label for="badword">Badword</label>
        <input type="text" name="bd">
        <input type="submit" value="SEARCH">
    </form>
</body>
</html>
```
# Es 2
## Testo
Stampare a schermo, attraverso il `foreach`, tutti gli elementi passati in GET.

## Codice
```php
<?php 
            
	foreach($_GET as $key => $value) {

		echo $key . ": " . $value . "<br>";
	}
?>
```

# Es 3
## Testo
Tramite un form inviare una stringa al server.
Se la variabile password passata in GET è uguale a “Boolean” stampare una stringa verde, altrimenti stampare una stringa rossa.

## Codice
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
    </style>
    <?php

        $pws = $_GET["password"] ?? "NO PWS";
    ?>
</head>
<body>
    <?php 
        
        // if ($pws == "Boolean") {

        //     echo "<h1 class='green'>OK</h1>";
        // } else {

        //     echo "<h1 class='red'>KO</h1>";
        // }

        echo $pws == "Boolean"
                ? "<h1 class='green'>OK</h1>"
                : "<h1 class='red'>KO</h1>";
    ?>
    <form>
        <label for="password">Password</label>
        <input type="text" name="password">
        <input type="submit" value="VALIDATE">
    </form>
</body>
</html>
```

# Es 4
## Testo
Creiamo un array contenente le partite di basket di un’ipotetica tappa del calendario. Ogni partita e' definita in una squadra di casa e una squadra ospite, punti fatti dalla squadra di casa e punti fatti dalla squadra ospite. Stampiamo a schermo tutte le partite con questo schema.

Olimpia Milano - Cantù | 55-60

## Codice
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
    </style>
    <?php

        $partite = [
            [
                "sq1" => "Olimpia Milano",
                "sq2" => "Cantu'",
                "pt1" => 55,
                "pt2" => 60
            ], [
                "sq1" => "Firenze",
                "sq2" => "Torino",
                "pt1" => 30,
                "pt2" => 80
            ],  [
                "sq1" => "Bologna",
                "sq2" => "Napoli",
                "pt1" => 10,
                "pt2" => 70
            ], 
        ];

    ?>
</head>
<body>
    <?php 

        foreach($partite as $partita) {

            $sq1 = $partita["sq1"];
            $sq2 = $partita["sq2"];
            $pt1 = $partita["pt1"];
            $pt2 = $partita["pt2"];

            echo $sq1 . " - " . $sq2 . " | " . $pt1 . "-" . $pt2 . "<br>";
        }
    ?>
    
</body>
</html>
```







---

# Es 5
## Testo
Con un form passare come parametri GET `name`, `mail` e `age` e verificare (cercando i metodi che non conosciamo nella documentazione) che: 
- `name` sia più lungo di *3 caratteri*
- `mail` contenga un *punto* e una *chiocciola*
- `age` sia un *numero* 

Se tutto è ok stampare “Accesso riuscito”, altrimenti “Accesso negato”

## Codice
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
    </style>
    <?php

        $name = $_GET["name"];
        $mail = $_GET["mail"];
        $age = $_GET["age"];

        if (
            strlen($name) > 3 
            && str_contains($mail, ".")
            && str_contains($mail, "@")
            && is_numeric($age)
        ) {

            echo "<h1 class='green'>ACCESSO RIUSCITO</h1>";
        } else {

            echo "<h1 class='red'>ACCESSO NEGATO</h1>";
        }
    ?>
</head>
<body>
    <?php 

        
    ?>
    <form>
        <label for="name">Name</label>
        <input type="text" name="name">
        <br>
        <label for="mail">Mail</label>
        <input type="text" name="mail">
        <br>
        <label for="age">Age</label>
        <input type="text" name="age">
        <br>
        <input type="submit" value="VALIDATE">
    </form>    
</body>
</html>
```

# Es 6
## Testo
Creare un array di array. Ogni array figlio avrà come chiave una data in questo formato: DD/MM/YYYY (es 01/01/2007) e come valore un array di post associati a quella data. Stampare ogni data con i relativi post.

## Data
```php
$posts = [
	'10/01/2019' => [
		[
			'title' => 'Post 1',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 1'
		],
		[
			'title' => 'Post 2',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 2'
		],
	],
	'10/02/2019' => [
		[
			'title' => 'Post 3',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 3'
		]
	],
	'15/05/2019' => [
		[
			'title' => 'Post 4',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 4'
		],
		[
			'title' => 'Post 5',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 5'
		],
		[
			'title' => 'Post 6',
			'author' => 'Michele Papagni',
			'text' => 'Testo post 6'
		]
	],
];
```

## Codice
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
    </style>
    <?php

        $posts = [

            '10/01/2019' => [
                [
                    'title' => 'Post 1',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 1'
                ],
                [
                    'title' => 'Post 2',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 2'
                ],
            ],
            '10/02/2019' => [
                [
                    'title' => 'Post 3',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 3'
                ]
            ],
            '15/05/2019' => [
                [
                    'title' => 'Post 4',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 4'
                ],
                [
                    'title' => 'Post 5',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 5'
                ],
                [
                    'title' => 'Post 6',
                    'author' => 'Michele Papagni',
                    'text' => 'Testo post 6'
                ]
            ],
        ];


    ?>
</head>
<body>
    <?php 

        foreach ($posts as $date => $postsPerDay) {

            echo "<h1>" . $date . "</h1>";

            foreach ($postsPerDay as $post) {

                $title = $post['title'];
                $author = $post['author'];
                $text = $post['text'];

                echo "<div>" . $title . " - " . $author 
                    . "<br>" . $text . "</div><br><br>";
            }
        }
    ?>
        
</body>
</html>
```

# Es 7
## Testo
Creare un array con 15 numeri casuali, tenendo conto che l’array non dovrà contenere lo stesso numero più di una volta

## Codice
```php
<?php

	$arr = [];
	while (count($arr) < 15) {

		$rndValue = rand(1, 20);

		if (!in_array($rndValue, $arr)) {

			$arr[] = $rndValue;
		}
	}

	var_dump($arr);
?>
```

# Es 8
## Testo
Prendere un paragrafo abbastanza lungo, contenente diverse frasi. Prendere il paragrafo e suddividerlo in tanti paragrafi. Ogni punto un nuovo paragrafo.

## Data
```php
$phars = "

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat urna et pellentesque gravida. Curabitur sagittis eros ipsum, nec imperdiet nibh pellentesque eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at pretium massa, nec molestie augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat sed ex non mollis. Phasellus in eros erat. Phasellus pulvinar tempor faucibus. Ut turpis augue, convallis sit amet magna at, scelerisque posuere risus. Nulla hendrerit scelerisque mauris ac iaculis. Integer ac mauris libero. In tincidunt ante sit amet sagittis vulputate. Suspendisse laoreet scelerisque accumsan. Etiam quis ligula urna. Phasellus maximus massa sem, lacinia facilisis urna vulputate eget.

In vitae consectetur purus. Curabitur eu varius neque. Nunc eu velit placerat, facilisis odio non, elementum risus. Fusce vulputate, nulla sit amet efficitur viverra, velit nunc faucibus massa, mattis feugiat purus est ac diam. Sed sollicitudin ipsum vel justo aliquam, nec ultrices est convallis. Cras eu aliquam lacus. In tempor, turpis at ullamcorper feugiat, libero nulla tristique enim, in luctus metus ligula quis risus. Sed venenatis eget risus in cursus. Nulla venenatis odio neque, nec eleifend sapien interdum in. Maecenas iaculis elit nisl, quis dapibus lorem consequat sit amet. Morbi ut nisi non dolor ultricies tempor. Maecenas porta orci arcu.

Pellentesque aliquet mollis justo, et luctus augue laoreet id. Duis leo leo, efficitur ut quam vel, accumsan volutpat turpis. Donec vitae turpis sem. Ut enim orci, vehicula fermentum aliquam vel, dignissim nec ante. Ut faucibus quam nec risus euismod blandit. Aliquam quis bibendum justo. Nam eget lacinia mi, in vulputate tortor. Praesent mollis sollicitudin tellus, et tincidunt orci mollis in. Etiam nec massa sed justo efficitur gravida. Phasellus at laoreet neque. Quisque aliquet tellus risus, id porttitor nisl semper nec.

Aliquam sit amet varius felis, vitae faucibus est. Aliquam id ligula egestas, ultricies ante sed, dignissim augue. Nulla eu neque sed nibh semper aliquam sit amet at arcu. Nunc ultricies mattis nisl, a eleifend erat. Donec condimentum posuere suscipit. Quisque imperdiet nisl erat, ut sollicitudin magna commodo vitae. Proin gravida suscipit tortor ut vehicula. Curabitur at leo id erat gravida gravida. Phasellus vel dolor fermentum, elementum metus vel, fermentum leo. Morbi nisl nunc, commodo ac finibus et, convallis at ex. Fusce semper luctus semper. In ut tortor nec nibh finibus egestas ac et massa. Nam et mauris consequat, bibendum lectus et, viverra justo.

Morbi imperdiet nibh diam, at ornare mauris maximus vitae. Fusce rutrum porta tellus id consectetur. Ut nec iaculis sapien, vel vulputate libero. Phasellus ornare non nulla in cursus. Vestibulum eu elit et diam tincidunt iaculis. Mauris eget turpis sed lacus lacinia cursus vel id mauris. Proin ipsum risus, facilisis quis semper auctor, bibendum nec lacus. Vestibulum luctus mauris turpis, ac ultricies ipsum finibus eu. Praesent aliquet sodales iaculis. Phasellus at hendrerit felis. Donec accumsan neque id orci sagittis, in euismod purus sagittis. Nunc eleifend, lacus sit amet dictum venenatis, tellus justo luctus tellus, id tincidunt arcu quam vitae urna. Pellentesque in maximus arcu, nec fringilla lectus. In sem massa, auctor sed orci quis, pharetra egestas ex.
";
```

## Codice
### Algo
```php
$phars = "..."; // <-- Data

$pharsArr = explode(".", $phars);

foreach($pharsArr as $phar) {

	echo "<p>" . $phar . ".</p>";
}
```

### Algo + Data
```php
<?php

        $phars = "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat urna et pellentesque gravida. Curabitur sagittis eros ipsum, nec imperdiet nibh pellentesque eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at pretium massa, nec molestie augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat sed ex non mollis. Phasellus in eros erat. Phasellus pulvinar tempor faucibus. Ut turpis augue, convallis sit amet magna at, scelerisque posuere risus. Nulla hendrerit scelerisque mauris ac iaculis. Integer ac mauris libero. In tincidunt ante sit amet sagittis vulputate. Suspendisse laoreet scelerisque accumsan. Etiam quis ligula urna. Phasellus maximus massa sem, lacinia facilisis urna vulputate eget.
In vitae consectetur purus. Curabitur eu varius neque. Nunc eu velit placerat, facilisis odio non, elementum risus. Fusce vulputate, nulla sit amet efficitur viverra, velit nunc faucibus massa, mattis feugiat purus est ac diam. Sed sollicitudin ipsum vel justo aliquam, nec ultrices est convallis. Cras eu aliquam lacus. In tempor, turpis at ullamcorper feugiat, libero nulla tristique enim, in luctus metus ligula quis risus. Sed venenatis eget risus in cursus. Nulla venenatis odio neque, nec eleifend sapien interdum in. Maecenas iaculis elit nisl, quis dapibus lorem consequat sit amet. Morbi ut nisi non dolor ultricies tempor. Maecenas porta orci arcu.
Pellentesque aliquet mollis justo, et luctus augue laoreet id. Duis leo leo, efficitur ut quam vel, accumsan volutpat turpis. Donec vitae turpis sem. Ut enim orci, vehicula fermentum aliquam vel, dignissim nec ante. Ut faucibus quam nec risus euismod blandit. Aliquam quis bibendum justo. Nam eget lacinia mi, in vulputate tortor. Praesent mollis sollicitudin tellus, et tincidunt orci mollis in. Etiam nec massa sed justo efficitur gravida. Phasellus at laoreet neque. Quisque aliquet tellus risus, id porttitor nisl semper nec.
Aliquam sit amet varius felis, vitae faucibus est. Aliquam id ligula egestas, ultricies ante sed, dignissim augue. Nulla eu neque sed nibh semper aliquam sit amet at arcu. Nunc ultricies mattis nisl, a eleifend erat. Donec condimentum posuere suscipit. Quisque imperdiet nisl erat, ut sollicitudin magna commodo vitae. Proin gravida suscipit tortor ut vehicula. Curabitur at leo id erat gravida gravida. Phasellus vel dolor fermentum, elementum metus vel, fermentum leo. Morbi nisl nunc, commodo ac finibus et, convallis at ex. Fusce semper luctus semper. In ut tortor nec nibh finibus egestas ac et massa. Nam et mauris consequat, bibendum lectus et, viverra justo.
Morbi imperdiet nibh diam, at ornare mauris maximus vitae. Fusce rutrum porta tellus id consectetur. Ut nec iaculis sapien, vel vulputate libero. Phasellus ornare non nulla in cursus. Vestibulum eu elit et diam tincidunt iaculis. Mauris eget turpis sed lacus lacinia cursus vel id mauris. Proin ipsum risus, facilisis quis semper auctor, bibendum nec lacus. Vestibulum luctus mauris turpis, ac ultricies ipsum finibus eu. Praesent aliquet sodales iaculis. Phasellus at hendrerit felis. Donec accumsan neque id orci sagittis, in euismod purus sagittis. Nunc eleifend, lacus sit amet dictum venenatis, tellus justo luctus tellus, id tincidunt arcu quam vitae urna. Pellentesque in maximus arcu, nec fringilla lectus. In sem massa, auctor sed orci quis, pharetra egestas ex.
";

        $pharsArr = explode(".", $phars);
        
        foreach($pharsArr as $phar) {

            echo "<p>" . $phar . ".</p>";
        }
    ?>
```

# Es 9
## Testo
Utilizzare l'array nella sezione *Data*, stampare gli `insegnanti` in un rettangolo grigio e i `PM` in un rettangolo verde.

## Data
```php
$db = [
	'teachers' => [
		[
			'name' => 'Michele',
			'lastname' => 'Papagni'
		],
		[
			'name' => 'Fabio',
			'lastname' => 'Forghieri'
		]
	],
	'pm' => [
		[
			'name' => 'Roberto',
			'lastname' => 'Marazzini'
		],
		[
			'name' => 'Federico',
			'lastname' => 'Pellegrini'
		]
	]
];
```

## Codice
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

        $db = [
            'teachers' => [
                [
                    'name' => 'Michele',
                    'lastname' => 'Papagni'
                ],
                [
                    'name' => 'Fabio',
                    'lastname' => 'Forghieri'
                ]
            ],
            'pm' => [
                [
                    'name' => 'Roberto',
                    'lastname' => 'Marazzini'
                ],
                [
                    'name' => 'Federico',
                    'lastname' => 'Pellegrini'
                ]
            ]
        ];
    ?>
</head>
<body>
    <div class="bg-gray">
        <?php
            foreach($db["teachers"] as $teacher) {

                $name = $teacher["name"];
                $lastname = $teacher["lastname"];

                echo $name . " " . $lastname . "<br>";
            }
        ?>
    </div>
    <div class="bg-green">
        <?php
            foreach($db["pm"] as $pm) {

                $name = $pm["name"];
                $lastname = $pm["lastname"];

                echo $name . " " . $lastname . "<br>";
            }
        ?>
    </div>
</body>
</html>
```

# Es 10
## Testo
Creare un array contenente qualche alunno di un’ipotetica classe. Ogni alunno avrà Nome, Cognome e un array contenente i suoi voti scolastici. Stampare Nome, Cognome e la media dei voti di ogni alunno.

## Codice
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

        $alunni = [
            [
                "name" => "Marco",
                "lastname" => "Rossi",
                "voti" => [ 4, 6, 7, 9, 9, 10, 7, 5 ]
            ],
            [
                "name" => "Francesca",
                "lastname" => "Bianchi",
                "voti" => [ 8, 9, 6, 5, 7, 9, 10, 10 ]
            ],
            [
                "name" => "Piero",
                "lastname" => "Verdi",
                "voti" => [ 8, 7, 6, 5, 7, 6, 5, 4, 6, 3 ]
            ],
            
        ];
    ?>
</head>
<body>
    <?php

        foreach ($alunni as $alunno) {

            $name = $alunno["name"];
            $lastname = $alunno["lastname"];
            $voti = $alunno["voti"];
            
            $sum = 0;
            foreach ($voti as $voto) {

                $sum += $voto;
            }

            $avg = $sum / count($voti);

            echo $name . " " . $lastname . ": " . $avg . "<br>";
        }
    ?>
</body>
</html>
```