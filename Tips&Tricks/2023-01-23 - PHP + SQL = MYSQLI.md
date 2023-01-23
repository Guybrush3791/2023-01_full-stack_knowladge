## In codice
```php
<?php

echo "<h1>Hello World from SQL</h1>";

// Define connection parameters
define("DB_SERVERNAME", "localhost");
define("DB_USERNAME","root");
define("DB_PASSWORD", "code");
define("DB_NAME", "db_university");
 
// Connect
$conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if ($conn && $conn -> connect_error) {
    echo "Connection failed: " . $conn -> connect_error;

    return;
}

echo "<h2>Connection ok</h2>";

$sql = "
SELECT *
FROM degrees
";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<div><h2>" . $row['name'] . " (" . $row['level'] . ")</h2>"
           . $row['address'] . "<br>" . $row['website'] . "<br>" . $row['email']
           . "</div>";
  }
} elseif ($result) {
    echo "0 results";
} else {
    echo "query error";
}

$conn -> close();
```
## In prosa
Per permettere al `PHP` di *comunicare* con il *database* e' necessario instaurare prima la comunicazione tra i due *servizi*:
```php
// Define connection parameters
define("DB_SERVERNAME", "localhost");
define("DB_USERNAME","root");
define("DB_PASSWORD", "code");
define("DB_NAME", "db_university");
 
// Connect
$conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if ($conn && $conn -> connect_error) {
    echo "Connection failed: " . $conn -> connect_error;

    return;
}
```

Se il controllo e' andato a buon fine, si puo' procedere all'esecuzione di una o piu' *query*:
```php
$sql = "
SELECT *
FROM degrees
";
$result = $conn->query($sql);
```

E' ora possibile leggere i risultati, se presenti:
```php
if ($result && $result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<div><h2>" . $row['name'] . " (" . $row['level'] . ")</h2>"
           . $row['address'] . "<br>" . $row['website'] . "<br>" . $row['email']
           . "</div>";
  }
} elseif ($result) {
    echo "0 results";
} else {
    echo "query error";
}
```

### *N.B.:*
E' *SEMPRE* necessario chiudere correttamente la comunicazione con altri servizi:
```php
$conn -> close();
```
## For Linux ONLY
Per chi usa `XAMPP` come server `HTTP`/`MYSQL`, aggiungere la seguente *fix* per la comunicazione con il `PHP`:
- dentro a `XAMPP`, aprire le configurazioni del server `MySQL`
![[Screenshot from 2023-01-23 13-00-28.png]]

- nel menu, aprire il file testuale di configurazione
![[Screenshot from 2023-01-23 13-00-38.png]]

- all'interno del file aggiungere le seguenti righe in fondo
```sql
[mysqld]
socket=/run/mysqld/mysqld.sock

[client]
socket=/run/mysqld/mysqld.sock
```
![[Screenshot from 2023-01-23 13-00-23.png]]

- riavviare il server DB
![[Screenshot from 2023-01-23 13-00-28.png]]

- all'interno del terminale collegarsi come utente senza password:
```sh
mysql -u root
```

- modificare la password di `root` con il seguente comando
```sh
SET PASSWORD FOR 'root'@localhost = PASSWORD("root");
```

Sara' ora possibile collegarsi al server `localhost` attraverso il nome utente e password *root*.

#### N.B.:
Si noti che all'interno del file `PHP` l'indirizzo del *DB* non sara' `localhost` ma `127.0.0.1`:
```php
define("DB_SERVERNAME", "127.0.0.1");
define("DB_USERNAME","root");
define("DB_PASSWORD", "code");
define("DB_NAME", "db_university");
```