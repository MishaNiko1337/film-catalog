# 🎬 System Zarządzania Filmami

Internetowa aplikacja do zarządzania kolekcją filmów, stworzona w Node.js, Express.js i EJS z wykorzystaniem wzorca MVC oraz Server-Side Rendering.

---

## 📖 Opis Projektu

Aplikacja umożliwia użytkownikom zarządzanie swoją prywatną bazą filmów poprzez:

- Dodawanie filmów z tytułem, reżyserem, oceną i recenzją
- Zmianę statusu filmu: **obejrzane** / **w trakcie**
- Edycję oraz trwałe usuwanie pozycji z kolekcji
- Oddzielne kolekcje filmów dla każdego użytkownika
- Stylizowany interfejs w trybie **ciemnym** (Bootswatch Darkly)
- Rejestrację, logowanie i bezpieczne przechowywanie sesji

---

## 👥 Zarządzanie Użytkownikami

- **Rejestracja Użytkowników** – Tworzenie kont z bezpiecznym hashowaniem haseł (bcryptjs)
- **Logowanie i Wylogowanie** – Bezpieczna sesja dla każdego użytkownika
- **Przechowywanie Sesji** – Za pomocą `session-file-store` (nawet po restarcie serwera)

---

## 🎞️ Zarządzanie Filmami

- **Dodawanie Filmu** – Formularz z walidacją danych (tytuł, reżyser, ocena, status, recenzja)
- **Edycja Filmu** – Możliwość aktualizacji informacji o filmie
- **Zmiana Statusu** – Przełączanie między "obejrzane" a "w trakcie"
- **Usuwanie Filmu** – Trwałe usunięcie z kolekcji
- **Własność** – Każdy film przypisany jest do konkretnego użytkownika

---

## 🛠️ Uruchomienie Aplikacji

1. **Zainstaluj zależności:**

```bash
npm install
```

2. **Uruchom aplikację w trybie developerskim:**

```bash
npm run dev
```

3. **Otwórz w przeglądarce:**

[http://localhost:3000](http://localhost:3000)

---

## 📂 Struktura Aplikacji

```
film-catalog/
├── controllers/         # Logika aplikacji (kontrolery)
├── models/              # Praca z danymi (movies.json)
├── routes/              # Trasy Express.js
├── views/               # Widoki EJS (SSR)
├── public/css/          # Stylizacja (Bootswatch + custom)
├── data/movies.json     # Dane filmów
├── sessions/            # Dane sesji użytkowników
├── index.js             # Główny serwer
```

---

## 📦 Technologie i biblioteki

- **Node.js**, **Express.js**, **EJS**
- **express-session** + **session-file-store**
- **bcryptjs**
- **Bootswatch Darkly**

---

## 🧪 Dane Testowe

Możesz się zarejestrować lub użyć konta testowego:

- Email: `test@example.com`
- Hasło: `1234`

---

## 🔒 Uwaga Bezpieczeństwa

Plik `sessions/` został dodany do `.gitignore`.  
Zalecane: nie wysyłać go na GitHub ani Moodle.

---

## 👨‍🎓 Autor

Projekt indywidualny zaliczeniowy — student kierunku Informatyka.
