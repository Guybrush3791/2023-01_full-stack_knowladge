---
alias: live coding - Laravel AUTH
---
# Laravel AUTH
## Installazione
Per attivare l'auteticazione di Laravel basta aggiungere ai comandi utilizzati fin'ora l'installazione e l'esecuzione del pacchetto `laravel/breeze`
```sh
composer require laravel/breeze --dev
php artisan breeze:install
```

Si procede poi con la normale installazione di `bootstrap`
```sh
composer require pacificdev/laravel_9_preset
php artisan preset:ui bootstrap --auth
```

Lanciare infine i terminale per l'esecuzione del server + front-end compiler
- terminale 1
```sh
php artisan serve
```
- terminale 2
```sh
npm i ; npm run dev
```
- terminale 3: disponibile per ulteriori comandi (`migration`, `seeder`, `factory`, ecc)

## Rotte disponibili
- **home**
	include i collegamenti con rotte di `login` e `registrazione`
![[Pasted image 20230208121703.png]]

- **register**
	da la possibilita' all'utente di registrarsi fornendo dati consistenti con le classiche validazioni
![[Pasted image 20230208121813.png]]

- **login**
	rotta per l'autenticazione di utenti gia' registrati e collegamento con *recupero password*
![[Pasted image 20230208122018.png]]
- **dashboard**
	unica vera rotta protetta da *autenticazione*
![[Pasted image 20230208121909.png]]

- **forgot password**
	utile per il recupero password smarrita
![[Pasted image 20230208122114.png]]
![[Pasted image 20230208123230.png]]
![[Pasted image 20230208122928.png]]
	**N.B.**: attenzione, il servizio e' disponibile solo dopo aver impostato un provider mail valido; per la fase di sviluppo si consiglia di utilizzare il servizio [[2023-02-08 - MailTrap|Mail Trap]]

## Utilizzo di rotte protette e NON protette
Dopo aver creato il solito ecosistema di `front-end` composto da `components`, `layouts` e `pages`, includere all'interno del *main-layout* i link per la gestione dell'autenticazione (`login`, `register`, ecc)
#### Views
- `components\header.blade.php`
```php
<div id="app">


    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <div class="navbar-brand d-flex align-items-center"></div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{url('/') }}">{{ __('Home') }}</a>
                        <a class="nav-link" href="{{url('/logged') }}">logged</a>
                    </li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                    @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                    </li>
                    @endif
                    @else
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }}
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ url('dashboard') }}">{{__('Dashboard')}}</a>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </li>
                    @endguest
                </ul>
            </div>
        </div>
    </nav>
```

- `layouts\main-layout`
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Usando Vite -->
    @vite(['resources/js/app.js'])
</head>
<body>
    @include('components.header')
    @yield('content')
    @include('components.footer')
</body>
</html>
```

#### Rotte
Per definire se una rotta deve essere protetta oppure no, e' sufficiente utilizzare la `middleware` all'interno della definizione delle rotte (`routes\web.php`)

- rotte **NON** protette
```php
Route::get('/', [MainController :: class, 'home']) -> name('home');
```

- rotte *protette*: versione 1, *singolarmente*
```php
Route::get('/logged', [MainController :: class, 'logged']) -> middleware(['auth', 'verified']) -> name('logged');
```

- rotte *protette*: versione 2, *gruppo*
```php
Route::middleware(['auth', 'verified'])
   ->name('admin.')
   ->prefix('ad')
   ->group(function () {
         Route::get('/dash', [MainController :: class, 'logged'])
         ->name('dashboard');
   });
```

> [!tip]- PROTIP
> questa rotta risponde a:
> - URL: `localhost:8000/ad/dash` 
> - nome: `admin.dashboard`

