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