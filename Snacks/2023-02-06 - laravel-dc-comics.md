## Repo
`laravel-dc-comics`

**N.B.**: il nome della `repo` non c'entra molto con l'esercizio, ma non e' importante, caricare cmq qui l'esercizio ;-)

## Todo
Sulla base di quanto visto a lezione e del live coding in allegato ([[2023-02-06 - live coding]]), strutturare una *CRUD COMPLETA* sulla seguente entita':

**PERSON**
- *firstName* : VARCHAR(32) : NOT NULLABLE
- *lastName* : VARCHAR(32) : NOT NULLABLE
- *dateOfBirth* : DATE : must be in the past : NOT NULLABLE
- *heigth* : INTEGER : must be 0 or more : NULLABLE

### Mandatory:
- *database*: `model` + `facotry` + `migration` + `seeder`
- *rotte*: `index` + `create` + `delete`

**N.B.**: no validazione

### Bonus:
- *rotte*: `show` + `edit`
- *validazione dati `form`*

