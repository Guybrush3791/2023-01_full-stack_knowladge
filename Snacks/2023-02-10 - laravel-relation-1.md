## Repo
`laravel-one-to-many`

## Todo
Sulla base di quanto visto a lezione, riprodurre la relazione tra `Person`, `PersonDetail` e `Post`.

### ER
![[Pasted image 20230213131457.png]]

### Database
Creare prima le `migration` per le tabelle, separatamente. Aggiungere poi la migration`add_foreign_key` (come visto in classe) per aggiungere le relazioni all'interno del *DB*.
Attraverso `model`, `factory` e `seeder`, caricare i dati all'interno delle tabelle e verificare il corretto funzionamento (relazioni comprese) all'interno del `PHPMyAdmin`.

> [!tip]- PROTIP
> Attenzione alla gestione delle relazioni all'interno dei `factory`. E' sempre necessario prendere in considerazione l'ordine con cui i vengono eseguite (la regola e' sempre *se collego qualcosa, deve gia' esistere in DB*), e la relazione che impone il metodo di *creazione*/*salvataggio* del dato.


### Bonus: front-end
Creare 2 pagine separate, la prima basata sull'entita' `Person`, l'altra sull'entita' `Post`. Le due pagine dovranno listare l'entita' principale con i relativi dettagli, relazioni comprese

#### Person
![[Pasted image 20230213131826.png]]

#### Post
![[Pasted image 20230213131837.png]]

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-1)
