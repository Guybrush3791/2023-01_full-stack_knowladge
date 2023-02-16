## Repo
`laravel-api`

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-2)

## Correzione - LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-3)
## Todo
Sulla base di quanto visto a lezione, riprodurre la relazione tra `Movie`, `Genre` e `Tag`

### ER
![[Pasted image 20230215125010.png]]

### Database
Creare prima le `migration` per le tabelle, separatamente. Aggiungere poi la migration`add_foreign_key` (come visto in classe) per aggiungere le relazioni all'interno del *DB*.
Attraverso `model`, `factory` e `seeder`, caricare i dati all'interno delle tabelle e verificare il corretto funzionamento (*relazioni comprese*) all'interno del `PHPMyAdmin`.

> [!tip]- PROTIP
> Attenzione alla gestione delle relazioni all'interno dei `seeder`. E' sempre necessario prendere in considerazione l'ordine con cui i vengono eseguite, e la relazione che impone il metodo di *creazione*/*salvataggio* del dato.
> Le regole sono sempre:
> - se ho una chiave esterna *devo valorizzarla prima di salvare in DB*
> - se collego qualcosa *deve gia' esistere in DB*



### Controller + Front-end
Creare un totale di 4 pagine, 6 rotte e 1 controller:
- `home`: pagina che listi tutti i `Movie` suddivisi per `Genre`
- `home.movie`: pagina che lista tutti i `Movie`
- `movie.create`/`movie.store`: pagina contenente il `form` per la *creazione* di nuovi `Movie` da salvare in *DB*
- `movie.edit`/`movie.update`: pagina contenente il `form` per la *modifica* di `Movie` *gia' presenti in DB*
- `movie.delete`: rotta per l'*eliminazione* di `Movie` *gia' presenti in DB*