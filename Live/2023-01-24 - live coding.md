# OOP
## Codice
### `index.php`
```php
<?php

class Address {

    public $street;
    public $city;
    public $country;

    public function __construct($street, $city, $country) {

        $this -> street = $street;
        $this -> city = $city;
        $this -> country = $country;
    }

    public function getFullAddress() {

        return $this -> street
        . " - " . $this -> city 
        . " (" . $this -> country . ")";
    }
}
class User {

    public $username;
    public $password;

    public $dateOfBirth;

    public Address $address;

    public function __construct($username, $password, 
            $dateOfBirth, Address $address) {

        $this -> username = $username;
        $this -> password = $password;
        $this -> dateOfBirth = $dateOfBirth;
        $this -> address = $address;
    }

    public function getHtml() {

        return "User: " . $this -> username
        . "<br>date of birth: " . $this -> dateOfBirth
        . "<br>address: " . $this -> address -> getFullAddress();
    }
}

echo "<h1>";

$address1 = new Address("via Falsetto, 123", "Roma", "Italy");
$address2 = new Address("Pommerstrasse, 14", "Berlin", "Germany");
var_dump($address1);
echo "<br><br>";
var_dump($address2);

echo "<br><br>------------------------------------------<br><br>";

$user1 = new User("guybrush", "code", "1983-02-15", $address1);
$user2 = new User("pluto", "disney", "1883-02-15", $address2);
var_dump($user1);
echo "<br><br>";
var_dump($user2);

echo "<br><br>------------------------------------------<br><br>";

echo $user1 -> getHtml();
echo "<br><br>";
echo $user2 -> getHtml();
echo "<br><br>";
$user3 = new User("topolino", "disney2", "1901-01-27", $address1);
echo $user3 -> getHtml();

$user4 = new User("topolino2", "disney2", "1901-01-27", NULL);
echo "ok";

echo "<br><br>------------------------------------------<br><br>";

echo "</h1>";
```

### `index2.php`
```php
<?php

class Address {

    public $street;
    public $city;
    public $country;

    public function __construct($street, $city, $country) {

        $this -> street = $street;
        $this -> city = $city;
        $this -> country = $country;
    }

    public function getFullAddress() {

        return $this -> street
        . " - " . $this -> city 
        . " (" . $this -> country . ")";
    }
}
class User {

    public $username;
    public $password;

    public $dateOfBirth;

    public array $addresses;

    public function __construct($username, $password, 
            $dateOfBirth, array $addresses) {

        $this -> username = $username;
        $this -> password = $password;
        $this -> dateOfBirth = $dateOfBirth;
        $this -> addresses = $addresses;
    }

    public function getFullAddress() {

        $str = "";
        foreach ($this -> addresses as $address) {

            $str .= $address -> getFullAddress() . "<br>";
        }
        return $str;
    }

    public function getHtml() {

        return "User: " . $this -> username
        . "<br>date of birth: " . $this -> dateOfBirth
        . "<br>address:<br>" . $this -> getFullAddress();
    }
}

echo "<h1>";

$address1 = new Address("via Falsetto, 123", "Roma", "Italy");
$address2 = new Address("Pommerstrasse, 14", "Berlin", "Germany");
$addresses1 = [ $address1, $address2 ];

$user = new User("pluto", "disney", "1973-01-01", $addresses1);

echo $user -> getHtml();

echo "</h1>";
```