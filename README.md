# caneroktay.github.io

Caner Oktay Personal Website



"Zuerst habe ich ein fertiges Template gefunden, aber dann habe ich es komplett umgebaut – inklusive Sprachauswahl, One-Page-Struktur und vielen optischen Anpassungen.

Was steckt technisch dahinter? Das Ganze basiert auf dem Bootstrap-Framework. Aber was macht Bootstrap eigentlich? Es liefert dir im Grunde eine riesige Palette an fertigen CSS-Styles. In diesem Paket sind bereits alle Klassen und Bezeichnungen enthalten, die man braucht, damit die Seite ‚responsive‘ ist – also auf jedem Gerät gut aussieht. Man muss diese Klassen dann nur noch im eigenen HTML-Code einbauen."

### 1. Metadaten & Head (`<head>`)

* **`window.history.replaceState(...)`** : Entfernt die Dateiendung `.html` aus der URL für ein saubereres Erscheinungsbild.
* **`<meta charset="utf-8">`** : Definiert die Zeichenkodierung (unterstützt Sonderzeichen).
* **`<meta name="viewport" ...>`** : Sorgt dafür, dass die Website auf Mobilgeräten korrekt angezeigt wird (Responsive Design).
* **`Cache-Control / Pragma`** : Verhindert, dass der Browser eine veraltete Version der Seite speichert.
* **`Bootstrap CSS`** : Das Framework für das Layout und Design.
* **`Fontawesome`** : Bibliothek für Icons (Symbole wie Facebook- oder Code-Icons).

---

### 2. Navigationsleiste (`<nav>`)

Die Kopfzeile der Website zur Navigation.

* **`navbar-brand`** : Enthält das Logo der Website.
* **`navbar-toggler`** : Ein Button für die mobile Ansicht (Burger-Menü).
* **`nav-link`** : Links zu den verschiedenen Abschnitten wie "Über mich", "Fähigkeiten", "Blog" und "Kontakt".
* **`lang-toggle`** : Ein Umschalter zwischen Türkisch (TR) und Deutsch (DE).

"Das verbessert die User Experience (UX) wirklich ungemein! Eine Navbar, die beim Scrollen mitläuft oder am oberen Rand fixiert bleibt (sticky/fixed), ist heutzutage ein absolutes Muss für moderne Websites.”

---

### 3. Hero-Sektion (`#hero`)

Der erste sichtbare Bereich der Seite mit den wichtigsten Informationen.

* **`hero-img`** : Das Hauptbild der Person (Caner Oktay).
* **`hero-title (h1)`** : Die Hauptüberschrift, aktuell als Platzhalter "Im Aufbau !!!".
* **`hero-meta`** : Ein kurzer Einleitungstext auf Türkisch.
* **`author`** : Informationen über die Person, die den Text verfasst hat (Eylül Oktay).

---

### 4. Über mich Sektion (`#about`)

Informationen zur Person und deren Kompetenzen.

* **`section-title`** : Die Überschrift "Über mich"
* **`about-text`** : Platzhalter für die Biografie.
* **`skills-section`** : Enthält Fortschrittsbalken ( **Progress-Bars** ), die das Niveau in Webdesign, Frontend, Backend ve Mobile Entwicklung anzeigen.

---

### 5. Fähigkeiten / Dienstleistungen (`#services`)

Eine detaillierte Liste der technischen Angebote.

* **`service-card`** : Einzelne Boxen, die jeweils eine Fähigkeit beschreiben.
* **`service-icon`** : Grafische Symbole (z.B. ein Server-Icon für Backend).
* **`webdevelopment, UI/UX, SEO`** : Beschreibungen der angebotenen technischen Leistungen.

---

### 6. Blog-Sektion (`#blog`)

Verlinkung zu externen Inhalten.

* **`portfolio-card`** : Eine visuelle Darstellung des Blogs.
* **`portfolio-overlay`** : Ein Button "Zur Blog-Seite gehen", der beim Drüberfahren erscheint.
* **`badge-warning`** : Ein kleines Label mit dem Text "Blogger By Google".

---

### 7. Kontaktformular (`#contact`)

Ermöglicht Besuchern das Senden von Nachrichten.

* **`form`** : Das Formular sendet die Daten an den Dienst  *Formspree* .
* **`input / textarea`** : Felder für Name, E-Mail und die Nachricht.
* **`button type="submit"`** : Der Absendeknopf für das Formular.


Hier ist der Aufbau meines Kontaktformulars:

Das Ganze ist in einem **Bootstrap-Container** (`container-fluid`) eingebettet, damit es über die volle Breite geht und responsiv bleibt. Der Kern ist aber das `<form>`-Tag.

**Wie funktioniert das Versenden?**
Anstatt ein eigenes Backend mit PHP oder Node.js zu schreiben, nutze ich den Dienst  **Formspree** . Das siehst du am `action`-Attribut: Sobald der Nutzer auf 'Abschicken' klickt, werden die Daten direkt an die URL von Formspree gesendet. Die Methode ist hier `POST`, was der Standard für den sicheren Datenversand ist.

**Die Struktur:**

* **Inputs:** Ich frage den Namen, die E-Mail und die Nachricht ab. Alle Felder haben das Attribut `required`, damit man das Formular nicht leer abschicken kann.
* **Mehrsprachigkeit:** Damit die Seite multilingual bleibt, verwende ich `data-translate-key`. Ein JavaScript im Hintergrund erkennt diese Keys und tauscht die Texte (z. B. 'Schreib mir!') je nach gewählter Sprache aus.
* **Styling:** Die Labels habe ich mit Inline-CSS (`margin` und `font-size`) direkt angepasst, damit sie optisch sauber über den Eingabefeldern sitzen.c

---

### 8. Footer (`<footer>`)

Der untere Bereich der Webseite.

* **`Footer Logo`** : Wiederholung des Logos.
* **`Social Links`** : Icons mit Links zu Instagram, X (Twitter), GitHub und LinkedIn.
* **`Copyright`** : Urheberrechtshinweis.

---

### 9. Skripte (`<script>`)

Die Funktionalität der Seite.

* **`jQuery / Bootstrap JS`** : Ermöglicht interaktive Elemente wie das einklappbare Menü.
* **`translation.js`** : Ein Skript, das wahrscheinlich die Sprachumschaltung steuert.
* **`Smooth scroll`** : Ein JavaScript-Code, der sanftes Scrollen zu den Abschnitten ermöglicht, wenn man auf einen Menüpunkt klickt.
