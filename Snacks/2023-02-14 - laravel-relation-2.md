## Repo
`laravel-many-to-many`

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-2)

## Todo
Sulla base di quanto visto a lezione, riprodurre la relazione tra `Product`, `Typology` e `Category`

### ER
![[Pasted image 20230214134246.png]]

### Database
Creare prima le `migration` per le tabelle, separatamente. Aggiungere poi la migration`add_foreign_key` (come visto in classe) per aggiungere le relazioni all'interno del *DB*.
Attraverso `model`, `factory` e `seeder`, caricare i dati all'interno delle tabelle e verificare il corretto funzionamento (relazioni comprese) all'interno del `PHPMyAdmin`.

> [!tip]- PROTIP
> Attenzione alla gestione delle relazioni all'interno dei `seeder`. E' sempre necessario prendere in considerazione l'ordine con cui i vengono eseguite, e la relazione che impone il metodo di *creazione*/*salvataggio* del dato.
> Le regole sono sempre:
> - se ho una chiave esterna *devo valorizzarla prima di salvare in DB*
> - se collego qualcosa *deve gia' esistere in DB*



### Controller + Front-end
Creare un totale di 3 pagine, 4 rotte e 1 controller.

#### `home`
Lista tutti i prodotti per categoria
![[Pasted image 20230214134513.png]]

#### `product.home`
Lista tutti i prodotti
![[Pasted image 20230214134537.png]]

#### `product.create`/`product.store`
Rotta per la creazione di un nuovo `Product` con *tutte le relazioni* (`Category` + `Typology`)
![[Pasted image 20230214134623.png]]

> [!tip]- PROTIP
> Ricordare che per creare un `form` che permetta di valorizzare anche le *relazioni*, sara' necessario che quel `form` *conosca* tutte le entita' relazionate che gli servono