## Programmazione a oggetti: OOP
### Costruzione di una classe
#### Definizione
Una classe rappresenta un'entita' della realta' che interagisce con il sistema in qualche modo. Va quindi notato come le caratteristiche che vengono trasposte in variabili sono quelle che hanno una relazione con il sistema informatico. 

#### Costruzione
Una classe e' tipicamente composta da:
- *variabili d'istanza*: 
```php
private $var1;
```
Le variabili d'istanza sono tipicamente *private* o tutt'al'piu' *protected*, e garantiscono accesso in lettura/scrittura attraverso le *proprieta'*

- *costruttori*:
```php
public function __construct($var1) {

	$this -> var1 = $var1;
}
```
I costruttori sono metodi particolari atti a istanziare degli oggetti della classe in cui si trovano, e vengono richiamati con la keyword *new*, ricevendo per argomenti tutti i dati utili all'inizializzazione della nuova istanza

- *proprieta'* (getter/setter):
```php
public function getVar1() {

	return $this -> var1;
}
public function setVar1($var1) {

	$this -> var1 = $var1;
}
```
Le proprieta' sono gruppi di 2 metodi (*getter* e *setter*) utili per la lettura/scrittura delle variabili d'istanza; in particolare si noti come nel *setter* e' possibile inserire gli eventuali vincoli di integrita' sulla variabile

- *metodi*:
```php
public function getHtml() {

	return $this -> var1;
}
```
E' inoltre possibile definire un qualsiasi numero di metodi utili al *life-cycle* dell'oggetto

### Rapporto tra le classi
#### HAS-A
Il rapporto di tipo *HAS-A* e' un rapporto di appartenenza e/o di utilizzo. Questo tipo di relazione viene utilizzato quando un'oggetto e' utile alla definizione di un altro oggetto (*es*: un'entita' **film** e' caratterizzata da un'entita' **genre** che e' a sua volta una classe)
```php
$genre = new Genre("Sci-fi", "Science fiction");
$movie = new Movie("Matrix", "Matrix", 108, "1998", [ $genre1 ]);
```

Questo tipo di rapporto e' molto utilizzato anche nella produzione di classi rappresentanti un *database*. Nella maggior parte dei casi le relazioni che troviamo tra le tabelle, vengono tradotte in `PHP` come rapporti di tipo *HAS-A*
![[Pasted image 20230126102016.png]]

#### IS-A
##### Ereditarieta'
Il rapporto di tipo *IS-A* e' invece un rapporto di specializzazione di una classe su un'altra. In questo caso abbiamo la classe *padre* che contiene **TUTTE** le *variabili*, *proprieta'* e *metodi* che vengono utilizzati sia dalla classe stessa, sia da tutte le classi che la *ereditano*.
Avremo quindi un rapporto di specializzazione in cui la classe che eredita **E'** a tutti gli effetti un oggetto **ANCHE** della classe *ereditata*
###### Person: classe padre
```php
class Person {

    private $id;
    private $name;
    private $surname;
    private $dateOfBirth;
    private $fiscalCode;
    private $email;

    public function __construct($id, $name, $surname, 
        $dateOfBirth, $fiscalCode, $email) {

        $this -> setId($id);
        $this -> setName($name);
        $this -> setSurname($surname);
        $this -> setDateOfBirth($dateOfBirth);
        $this -> setFiscalCode($fiscalCode);
        $this -> setEmail($email);
    }

    public function getId() {

        return $this -> id;
    }
    public function setId($id) {

        $this -> id = $id;
    }
    public function getName() {

        return $this -> name;
    }
    public function setName($name) {

        $this -> name = $name;
    }
    public function getSurname() {

        return $this -> surname;
    }
    public function setSurname($surname) {

        $this -> surname = $surname;
    }
    public function getDateOfBirth() {

        return $this -> dateOfBirth;
    }
    public function setDateOfBirth($dateOfBirth) {

        $this -> dateOfBirth = $dateOfBirth;
    }
    public function getFiscalCode() {

        return $this -> fiscalCode;
    }
    public function setFiscalCode($fiscalCode) {

        $this -> fiscalCode = $fiscalCode;
    }
    public function getEmail() {

        return $this -> email;
    }
    public function setEmail($email) {

        $this -> email = $email;
    }

    public function getHtml() {

        return $this -> getId() . "<br>"
             . $this -> getName() . "<br>"
             . $this -> getSurname() . "<br>"
             . $this -> getDateOfBirth() . "<br>"
             . $this -> getFiscalCode() . "<br>"
             . $this -> getEmail();
    }
}
```

###### Student: classe figlia (1)
```php
class Student extends Person {

    private $degreeId;
    private $enrolmentDate;
    private $registrationNumber;

    public function __construct($id, $name, $surname, 
        $dateOfBirth, $fiscalCode, $email, $degreeId, 
        $enrolmentDate, $registrationNumber) {

        parent :: __construct($id, $name, $surname, 
            $dateOfBirth, $fiscalCode, $email);
        
        $this -> setDegreeId($degreeId);
        $this -> setEnrolmentDate($enrolmentDate);
        $this -> setRegistrationNumber($registrationNumber);
    }

    public function getDegreeId() {

        return $this -> degreeId;
    }
    public function setDegreeId($degreeId) {

        $this -> degreeId = $degreeId;
    }
    public function getEnrolmentDate() {

        return $this -> enrolmentDate;
    }
    public function setEnrolmentDate($enrolmentDate) {

        $this -> enrolmentDate = $enrolmentDate;
    }
    public function getRegistrationNumber() {

        return $this -> registrationNumber;
    }
    public function setRegistrationNumber($registrationNumber) {

        $this -> registrationNumber = $registrationNumber;
    }

    public function getHtml() {

        return parent :: getHtml() . "<br>"
            . $this -> getDegreeId() . "<br>"
            . $this -> getEnrolmentDate() . "<br>"
            . $this -> getRegistrationNumber();
    }
}
```

###### Teacher: classe figlia (2)
```php
class Teacher extends Person {

    private $phone;
    private $officeAddress;
    private $officeNumber;

    public function __construct($id, $name, $surname, 
        $dateOfBirth, $fiscalCode, $email, $phone, 
        $officeAddress, $officeNumber) {

        parent :: __construct($id, $name, $surname, 
            $dateOfBirth, $fiscalCode, $email);

        $this -> setPhone($phone);
        $this -> setOfficeAddress($officeAddress);
        $this -> setOfficeNumber($officeNumber);
    }
    public function getPhone() {

        return $this -> phone;
    }
    public function setPhone($phone) {

        $this -> phone = $phone;
    }
    public function getOfficeAddress() {

        return $this -> officeAddress;
    }
    public function setOfficeAddress($officeAddress) {

        $this -> officeAddress = $officeAddress;
    }
    public function getOfficeNumber() {

        return $this -> officeNumber;
    }
    public function setOfficeNumber($officeNumber) {

        $this -> officeNumber = $officeNumber;
    }

    public function getHtml() {

        return parent :: getHtml() . "<br>"
            . $this -> getPhone() . "<br>"
            . $this -> getOfficeAddress() . "<br>"
            . $this -> getOfficeNumber();
    }
}
```

In questo caso possiamo dire che un qualsiasi *studente*, cosi' come un qualsiasi *insegnante*, sono **A TUTTI GLI EFFETTI** delle **PERSONE**. Verranno quindi ereditate tutte le *variabili d'istanza*, *costruttori*, *prorieta'* (getter/setter) e *metodi*.

##### Polimorfismo
All'interno della programmazione a oggetti, dove viene sfruttata l'*ereditarieta'*, troviamo spesso utilizzato anche il *polimorfismo*, ovvero la possibilita' di ridefinire dei metodi che sono stati ereditati dalla classe padre, conservando la possibilita' di sfuttare anche il codice ereditato
###### Person: classe padre
```php
class Person {

	// ...

	public function getHtml() {

        return $this -> getId() . "<br>"
             . $this -> getName() . "<br>"
             . $this -> getSurname() . "<br>"
             . $this -> getDateOfBirth() . "<br>"
             . $this -> getFiscalCode() . "<br>"
             . $this -> getEmail();
    }
}
```

###### Student: classe figlia (1)
```php
class Student extends Person {

	// ...

	public function getHtml() {

        return parent :: getHtml() . "<br>" 
            . $this -> getDegreeId() . "<br>"
            . $this -> getEnrolmentDate() . "<br>"
            . $this -> getRegistrationNumber();
    }
}
```

###### Teacher: classe figlia (2)
```php
class Student extends Person {

	// ...

	public function getHtml() {

        return parent :: getHtml() . "<br>"
            . $this -> getPhone() . "<br>"
            . $this -> getOfficeAddress() . "<br>"
            . $this -> getOfficeNumber();
    }
}
```

##### Modificatori di visibilita'
Con l'introduzione dei rapporti di parentela, si rende necessario andare a limitare la liberta' di accesso alle *variabili* e *metodi* in funzione della posizione del chiamante
- `private`: modificatore piu' stringente di tutti, permette l'accesso *SOLO* nella classe di definizione
- `protected`: modificatore di visibilita' che permette l'accesso all'interno della classe di appartenenza e di tutte le classi che ereditano
- `public`: modificatore piu' lasco di tutti, permette l'accesso in qualunque punto del codice

###### N.B.:
Si noti che tipicamente le *variabili d'istanza* sono **TUTTE** `private`, e permettono invece l'accesso in *lettura*/*scrittura* attraverso le *proprieta'* (getter/setter). 
I metodi sono invece equamente divisi tra `private`, `protected` e `public` in funzione del loro utilizzo.
Cercare in ogni circostanza di utilizzare modificatori di visibilita' piu' stringenti possibile.