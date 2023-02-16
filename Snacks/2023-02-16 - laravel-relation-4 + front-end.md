## Repo
`laravel-api`

## Traccia LC
[GitHub link](https://github.com/Guybrush3791/laravel-relation-2)

## Continuazione
Continuazione dell'esercizio precedente: [[2023-02-15 - laravel-relation-3|laravel-relation-3]]

## Todo
Dando priorita' ai task dell'[[2023-02-15 - laravel-relation-3|esecizio precedente]],  e' ora possibile siluppare lo stesso progetto in modalita' `micro-service`, ovvero avendo piu' progetti diversi per *front-end* (`VueJS`) e *back-end* (`Laravel`).

Sviluppare dunque una rotta che ritorni tutti i film in `JSON`, per poi eseguire 2 test:

- da *browser*: collegando direttamente il browser alla rotta dell'*API*; verra' visualizzato un `JSON` contentente tutti i dati di tutti i film (*senza relazioni*)
![[Pasted image 20230216141628.png]]

- attraverso *axios* + *console.log*: e' ora possibile con una configurazione minimale di `VueJS` *+* `Axios`, andare a scaricare gli stessi dati, e rappresentarli nel `console.log`
```html
<script>

import axios from 'axios';

export default {

  mounted() {

    axios.get('http://localhost:8000/api/v1/movie/all')
         .then(res => {

            const data = res.data;
            const success = data.success;
            const movies = data.response;

            console.log(movies);
         })
         .catch(err => console.error(err));
  }
};

</script>
```
![[Pasted image 20230216141956.png]]

### Bonus
Una volta ottenuti i *dati* all'interno del `console.log`, e' possibile utilizzarli come visto nelle parti precedenti del corso, per *rappresentare i dati* attraverso l'`HTML`