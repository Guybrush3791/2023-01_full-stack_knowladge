Dopo aver inizializzato la comunicazione tra *back-end* e *front-end*, siamo riusciti a creare una lista di elementi che vengono *letti* e *scritti* su un file in formato `JSON`, ottenendo cosi' la persistenza dei dati.
Abbiamo inoltre fornito la possibilita' all'utente di aggiungere un nuovo elemento alla lista, testando ulteriormente il passaggio completo dei dati dall'*utente* fino al *file in persistenza* e *ritorno*.

## Zip
![[2023-01-12_json-encode-decode.zip]]

## Code
### Back-end
#### `test.php`
Test di `json_encode`/`json_decode` e della *lettura*/*scrittura* di dati `PHP` su file in formato `JSON`.
```php
<?php

$todoList = [
    [
        "text" => "todo 1",
        "completed" => true
    ],
    [
        "text" => "todo 2",
        "completed" => true
    ],
    [
        "text" => "todo 3",
        "completed" => false
    ],
    [
        "text" => "todo 4",
        "completed" => false
    ]
];

$jsonTodoList = json_encode($todoList);
file_put_contents('todo.json', $jsonTodoList);

$jsonTodoList = file_get_contents("todo.json", true);
$todoList = json_decode($jsonTodoList);

$todoList[] = [
    "text" => "todo 5",
    "completed" => false
];
$jsonTodoList = json_encode($todoList);
file_put_contents('todo.json', $jsonTodoList);

$jsonTodoList = file_get_contents("todo.json", true);
$todoList = json_decode($jsonTodoList);
var_dump($todoList);
```

#### `api.php`
`API` per la lettura di tutti i task presenti sul *file di persistenza* (`todo.json`).
```php
<?php
	
header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Headers: X-Requested-With");

header('Content-Type: application/json');

$jsonTodoList = file_get_contents("todo.json", true);
echo $jsonTodoList;
```

#### `api-create-todo.php`
`API` per la scrittura di un *nuovo elemento* nella lista, salvando le modifiche sul *file di persistenza*.
```php
<?php

header("Access-Control-Allow-Origin: http://localhost:8080");
header("Access-Control-Allow-Headers: X-Requested-With");

header('Content-Type: application/json');

$newTodo = $_GET['newTodo'];

$jsonTodoList = file_get_contents("todo.json", true);
$todoList = json_decode($jsonTodoList);

$todoList[] = [
    "text" => $newTodo,
    "completed" => false
];
$jsonTodoList = json_encode($todoList);
file_put_contents('todo.json', $jsonTodoList);
```

#### `todo.json`
*File di persistenza*
```json
[{
    "text": "todo 1",
    "completed": true
}, {
    "text": "todo 2",
    "completed": true
}, {
    "text": "todo 3",
    "completed": false
}, {
    "text": "todo 4",
    "completed": false
}, {
    "text": "asdfasdf",
    "completed": false
}, {
    "text": "asdfasdf",
    "completed": false
}, {
    "text": "dddd",
    "completed": false
}, {
    "text": "dzfsdfsdfds",
    "completed": false
}]
```

### Front-end
E' stato tutto svolto all'interno di un componente di prova

#### `JsonTest.vue`
Qui abbiamo la *lettura* di tutti i *task* dal `back-end` e la relativa stampa di quei dati in una lista. 
All'interno del form e' inoltre possibile *aggiungere* un nuovo elemento alla lista, che finira' in *persistenza*.
```js
<template>
  <div>
    <h1>Hello World</h1>
    <ul>
      <li
        v-for="(todoElem, ind) in todoList"
        :key="ind"
      >
        {{ todoElem.text }}
      </li>
    </ul>
    <form @submit="formSubmit">
      <input type="text" name="newTodo" v-model="newTodo">
      <input type="submit" value="CREATE">
    </form>
  </div>
</template>

<script>

import axios from 'axios';

const API_URL = "http://localhost/";

export default {
  name: 'JsonTest',
  data() {

    return {

      newTodo: "",

      todoList: []
    };
  },
  methods: {

    formSubmit(e) {

      e.preventDefault();
      
      const params = { params: { 
        'newTodo': this.newTodo
      }};

      axios.get(API_URL + "api-create-todo.php", params)
           .then(() => {

             this.getAllData();
           });
    },
    getAllData() {

      axios.get(API_URL + "api.php")
         .then(res => {

            const data = res.data;

            this.todoList = data;
         });
    }
  },
  mounted() {

    this.getAllData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```