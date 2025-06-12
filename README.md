# 🎬 System Zarządzania Filmami

Internetowa aplikacja do zarządzania kolekcją filmów, stworzona w Node.js, Express.js i EJS z wykorzystaniem wzorca MVC oraz Server-Side Rendering.

---

## 📖 Opis Projektu

Aplikacja umożliwia użytkownikom zarządzanie swoją prywatną bazą filmów oraz przeglądanie i komentowanie filmów dostępnych w ogólnym katalogu:

- Dodawanie filmów z tytułem, reżyserem, oceną i statusem  
- Publiczny katalog filmów dostępny dla każdego użytkownika  
- Możliwość dodawania recenzji do dowolnego filmu (widocznych publicznie)  
- Zmiana statusu filmu: **obejrzane** / **w trakcie**  
- Edycja i trwałe usuwanie pozycji z katalogu  
- Stylizowany interfejs w trybie **ciemnym** (Bootswatch Darkly)  
- Rejestracja, logowanie i bezpieczne przechowywanie sesji  

---

## 👥 Zarządzanie Użytkownikami

- **Rejestracja** – Tworzenie konta z haszowaniem haseł (`bcryptjs`)  
- **Logowanie i Wylogowanie** – Bezpieczna sesja per użytkownik  
- **Trwałość sesji** – Dzięki `session-file-store`, sesje przetrwają restart serwera  

---

## 🗣️ System Recenzji

- Każdy użytkownik może dodać recenzję do dowolnego filmu  
- Recenzje są publiczne i widoczne dla wszystkich (email, ocena, komentarz)  
- Recenzje są trwale zapisywane w pliku `movies.json`  

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

## 🧪 Dane Testowe

Można się zarejestrować lub użyć użytkownika domyślnego:

- **Email:** `admin@example.com`  
- **Hasło:** `admin123`

---

## 📂 Struktura Aplikacji

```
film-catalog/
├── controllers/         # Logika aplikacji (kontrolery)
├── models/              # Obsługa danych (User.js, Movie.js)
├── routes/              # Routing Express
├── views/               # Widoki EJS
├── public/css/          # Stylizacja (Bootswatch + custom CSS)
├── data/                # Pliki: movies.json, users.json, popular.json
├── sessions/            # Dane sesji (gitignore)
├── index.js             # Serwer główny
```

---

## 📦 Technologie i Biblioteki

- `Node.js`, `Express.js`, `EJS`  
- `bcryptjs`, `express-session`, `session-file-store`  
- `Bootswatch@Darkly`  

---

## 🔒 Uwaga Bezpieczeństwa

- Folder `sessions/` został wykluczony w `.gitignore`  
- Hasła użytkowników są przechowywane w postaci zaszyfrowanej (bcrypt)  
- Plik `users.json` zawiera użytkownika `admin@example.com` gotowego do logowania  

---

## 👨‍🎓 Autor

Indywidualny projekt zaliczeniowy —  
**Mikhail Nikalayenka**, kierunek: Informatyka, UEHS.
