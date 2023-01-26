### `User`
Per prima cosa implementare la classe `User` con *variabili d'istanza*, *costruttore*, *proprieta'* e *metodi*
```php
class User {

    private $name;
    private $lastname;
    private $age;
    private $discount;

    public function __construct($name, $lastname, $age) {

        $this -> setName($name);
        $this -> setLastname($lastname);
        $this -> setAge($age);

        $this -> updateDiscount();
    }

    public function getName() {

        return $this -> name;
    }
    public function setName($name) {

        $this -> name = $name;
    }
    public function getLastname() {

        return $this -> lastname;
    }
    public function setLastname($lastname) {

        $this -> lastname = $lastname;
    }
    public function getAge() {

        return $this -> age;
    }
    public function setAge($age) {

        $this -> age = $age;
    }
    public function getDiscount() {

        // return $this -> age >= 55 ? 30 : 0;

        return $this -> discount;
    }
    protected function setDiscount($discount) {

        $this -> discount = $discount;
    }

    public function getFullName() {

        return $this -> getName() . " " . $this -> getLastname();
    }
    public function updateDiscount() {

        if ($this -> getAge() >= 55) {

            $this -> setDiscount(30);
        } else {

            $this -> setDiscount(0);
        }
    }
    public function getHtml() {

        return $this -> getFullName() . ": " 
            . $this -> getAge()
            . " --> " . $this -> getDiscount() . "%";
    }
}
```

### `Membership`
E' ora possibile implementare la semplice classe `Membership`
```php
class Membership {

    private $name;    
    private $price;
    private $date;    

    public function __construct($name, $price, $date) {
        
        $this -> setName($name);
        $this -> setPrice($price);
        $this -> setDate($date);
    }

    public function getName() {

        return $this -> name;
    }
    public function setName($name) {

        $this -> name = $name;
    }
    public function getPrice() {

        return $this -> price;
    }
    public function setPrice($price) {

        $this -> price = $price;
    }
    public function getDate() {

        return $this -> date;
    }
    public function setDate($date) {

        $this -> date = $date;
    }

    public function getHtml() {

        return $this -> getName() . ": " . $this -> getPrice()
            . " --> " . $this -> getDate();
    }
}
```

### `PremiumUser`
Il `PremiumUser` non e' altro che un utente con una `Membership`. Sara' quindi necessario introdurre questa sola *variabile* (con relative *proprieta'*). Si noti in particolare il richiamo al *costruttore* e al *getHtml()* della classe *padre* (`User`) attraverso il `parent ::`.
```php
class PremiumUser extends User {

    private Membership $memberShip;

    public function __construct($name, $lastname, $age, Membership $memberShip) {

        parent :: __construct($name, $lastname, $age);

        $this -> setMemberShip($memberShip);
    }

    public function getMemberShip() {

        return $this -> memberShip;
    }
    public function setMemberShip(Membership $memberShip) {

        $this -> memberShip = $memberShip;
    }

    public function updateDiscount() {

        // if ($this -> getAge() >= 30) {

        //     $this -> setDiscount(30);
        // } else {

        //     $this -> setDiscount(0);
        // }

        $this -> setDiscount(
            $this -> getAge() >= 30 ? 30 : 0
        );
    }
    public function getHtml() {

        return parent :: getHtml() . "<br>"
            . $this -> getMemberShip() -> getHtml();
    }
}
```

### Extra
Una volta creato l'ecosistema di classi (eventualmente con relativi `import`/`require` se su piu' *file*), e' possibile testare i vari componenti e verificare il risultato con dei `log` sfruttanto il metodo `getHtml()`
```php
echo "<h1>Hello, World!</h1>";

$user = new User("Guybrush", "Threepwood", 33);
echo $user -> getHtml();

echo "<br><br>";

$memberShip = new Membership("Non so", 100, "2023-01-31");
echo $memberShip -> getHtml();

echo "<br><br>";

$pUser = new PremiumUser("Guybrush", "Threepwood", 33, $memberShip);
echo $pUser -> getHtml();
```