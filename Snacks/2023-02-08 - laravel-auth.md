## Repo
`laravel-auth`

## Todo
Come visto a lezione, iniziare a progettare un ipotetico sito con parte *amministrativa* e parte *pubblica*. L'argomento un vostro eventuale *portfolio*.
La pagina pubblica dara' la possibilita' ai visitatori di vedere i *progetti*, mentre quella privata' permettera' all'utente *amministratore* di `creare`, `modificare` o `eliminare` i *progetti* dal portale (stile gestionale).
Il progetto prendera' anche gran parte della giornata di domani, quindi niente paura per i tempi.

### Giornata 1
- creazione di progetto nuovo con *tutti* i passaggi essenziali per *bootstrap*, *vite* e *auth* (vedi [[2023-02-08 - live coding|live coding - Laravel AUTH]])
- sviluppo di scaffolding per il `front-end` e per il `back-end`
- testing di rotte *pubbliche* e *private*
- creazione di *un utente amministratore* (tramite il `form` di *registrazione*)
- rimozione successiva delle rotte di amminstrazione (dal `web.php`), in modo che non sia piu' possibile registrarsi ulteriormente

A questo punto dovrebbe essere un progetto *piu' o meno vuoto* con tutto il necessario per lo *sviluppo* della parte **core** dell'applicazione.

### Giornata 2
Procedere ora con la parte di `CRUD`, a partire da `model`, `migration`, `factory` e `seeder`, per poi concludere con la parte di `view` e `controller` dando la possibilita' all'utente di eseguire tutte le operazioni `CRUD`.
Mantenere le operazioni di *scrittura* accessibili *solo all'utente registrato* nella [[#Giornata 1]]. Le operazioni in *sola lettura* invece dovranno essere pubbliche (`home` e `show`)

> [!tip]- PROTIP
> 
> Si consiglia inizialmente di tenere tutte le rotte libere, in modo da velocizzare lo sviluppo del codice. Una volta che la *CRUD completa* sara' codificata e testata, sara' possibile con un semplice `group` andare a proteggere tutte le rotte private in un colpo solo (vedi [[2023-02-08 - live coding#Rotte|live coding - Laravel AUTH > Rotte]])

#### Entita': **Project**
| FIELD | DATA TYPE | INTEGRITY | VALIDATION | INFO |
| - | - | - | - | - |
| name | VARCHAR(64) | not nullable ; unique | 
| description | text | nullable | 
| main_image | VARCHAR | unique | | nella forma di `link` |
| release_date | date | | in past |
| repo_link | VARCHAR | not nullable ; unique | | `link` a repo **GitHub** |

> [!tip]- PROTIP
> Inizialmente inserire comunque dati *fake*, sara' poi cura dell'*amministratore* inserire i dati reali. Per eliminare i dati *fake* sara' suffciente rilanciare il comando `artisan` per il `refresh` delle tabelle.

### Bonus
**Eseguite tutte le operazioni**, e' possibile iniziare abbellendo esteticamente la pagina, per poi terminare costumizzando anche il *form di login*, eventualmente modificando anche l'`header` che contiene il menu in testa alla pagina.