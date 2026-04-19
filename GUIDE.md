# Instrukcja Obsługi - Portfolio Lidia

Witaj! Ten dokument jest uproszczoną instrukcją techniczną dla tej aplikacji portfolio. Została ona zoptymalizowana do tego, abyś miał pełną kontrolę i żeby strona błyskawicznie działała u klientów.

## 1. Jak Edytować Treści (Tekst i Zmiana Zdjęć)?

Cały "szablon" jest rozbity na bloki (komponenty). Znajdziesz je w folderze `src/components/sections/`.

*   **Galeria / Portfolio** (`src/components/sections/PortfolioGrid.tsx`):
    *   Otwórz plik: `src/components/sections/PortfolioGrid.tsx`.
    *   Na samej górze pliku znajdziesz tablicę o nazwie `const photos = [...]`.
    *   Podmieniaj link w kluczu `src:` na **kopiowany adres Twojego zdjęcia (albo link na Twoim zewnętrznym hostingu)**. Upewnij się też, że uaktualniasz opis `alt` by wspomóc własne SEO!

*   **Teksty "O mnie"** (`src/components/sections/About.tsx`):
    *   Znajdź akapity zaczynające się od `<p>` i edytuj polski tekst znajdujący się pomiędzy znakami HTML, np. `<p>Cześć! Nazywam się Lidia...</p>`.

*   **Nawigacja i Kontakt** (`src/components/sections/Hero.tsx` oraz `Contact.tsx`):
    *   Wszystkie napisy, numery telefonu czy adres e-mail "Napisz do mnie" możesz bezpiecznie zmieniać. Email zamień na taki uformowany by wyglądał tak: `href="mailto:nowymail@email.com"`.

## 2. Jak Dodać Własne Pliki ze Zdjęciami Zamiast Linków z Unsplash?

1. Wrzuć Twoje wybrane oryginalne zdjęcia do folderu `public/images/` (obecnie może nie być takiego folderu, więc wystarczy go tam stworzyć we wnętrzu folderu `public`).
2. Wtedy w plikach (np. PortfolioGrid) zamiast linku z internetu `https://...` podajesz `/images/nazwa-zdjecia.jpg`.

## 3. Uruchamianie LOKALNE

Będąc w terminalu wewnątrz folderu `lidia-portfolio`:
1. Instalacje potrzebnych modułów (jeśli sklonowałeś projekt od zera):
   `npm install`
2. Start podglądówki na żywo:
   `npm run dev`
3. Wejdź na adres `http://localhost:3000`. Cokolwiek zapiszesz w kodzie (np. `Ctrl+S`), odświeży się od razu w oknie przeglądarki!

## 4. Wrzucanie na zewnątrz - GitHub Pages (Ważne!)

Tak jak ustaliliśmy, strona powinna być publikowana na koncie GitHub na **GitHub Pages**. Zrobiłem dla Ciebie pełną automatyzację.

Oto co musisz zrobić dokładnie **raz**, żeby magia ożyła:
1. Zrób na swoim koncie na GitHubie darmowe nowe repozytorium (np. nazywające się `lidia-portfolio`).
2. "Wypchnij" swój projekt do tego repozytorium klasycznym komitowaniem:
   ```bash
   git init
   git add .
   git commit -m "Pierwszy upload"
   git branch -M main
   git remote add origin ADRES_Z_GH
   git push -u origin main
   ```
3. Na stronie tego Twojego nowego repozytorium na Github, wejdź w zakładkę **Settings** -> z lewego menu znajdź **Pages**.
4. Zmień opcję pod tytułem **Source** z "Deploy from a branch" na **"GitHub Actions"**.
5. ...To wszystko! Ponieważ wstawiłem ukryty skrypt w pliku `.github/workflows/deploy.yml`, Github Pages automatycznie wykryje Next.js i zbuduje stronę i ją tam odświeży po **każdym nowym pushu zmian**. Za każdym razem jak nadpiszesz zdjęcia w `PortfolioGrid` i zrobisz `git push`, za ok 45 sekund po stronie GitHuba strona się odmieni. Sama.

**Jeden maluteńki problem przy braku WŁASNEJ DOMENY**:
Jeżeli używasz tej strony pod domyślnym linkiem *username.github.io/portfolio/* a nie z dołączoną dedykowaną domeną `.pl`, będziesz musiał podać informację nazwie folderu `basePath: '/portfolio'` do pliku `next.config.ts`, inaczej nie załadują ci się cssy! Skontaktuj się i dam ci instrukcję gdy tak się stanie. Pamiętaj też od razu przypiąć dedykowaną domenę.
