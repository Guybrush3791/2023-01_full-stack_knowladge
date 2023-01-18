## Repo
`db-university`

## Todo
Come definito a lezione, creare uno *schema ER* per la modellazione di una realta' universitaria. Caricare poi il risultato in formato `JPEG` sulla *repo*.

### Universita'
Le entita' sono: `dipartimento`, `corso di laurea`, `corso`, `insegnante`, `studente`, `esame`, `appello`:
- sono presenti diversi *dipartimenti* (es.: Lettere e Filosofia, Matematica, Ingegneria ecc.);
- ogni *dipartimento* offre più *corsi di laurea* (es.: Civiltà e Letterature Classiche, Informatica, Ingegneria Elettronica ecc..)
- ogni *corso di laurea* prevede diversi *corsi* (es.: Letteratura Latina, Sistemi Operativi 1, Analisi Matematica 2 ecc.)
- ogni *corso* può essere tenuto da diversi *insegnanti*
- ogni *corso* prevede più appelli d'*esame*
- ogni *studente* è iscritto ad un solo *corso di laurea*
- ogni *studente* può iscriversi a più *appelli*
- per ogni *appello* a cui lo *studente* ha partecipato, è necessario memorizzare il *voto* ottenuto, anche se non sufficiente