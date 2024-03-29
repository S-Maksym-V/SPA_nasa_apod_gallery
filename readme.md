# Nasa Apod Gallery

based on NASA Open API: https://api.nasa.gov/

## Anforderungen:

### Min:

- nutzen api_key for samav99 or DEMO_KEY [done]
- Git Version Control [done]
- leeres Projekt zum Stand der Projektvorlage(vite-react-starter) bringen [done]

- Index-Seite:

  - Überschrift [done]
  - Beschreibung [done]
  - Ein Feld mit:
    - Bild-Kacheln [done]
    - oder Video-Thumbnail [done]
  - Übergang zur details-Seite (Info über Bild/Video) beim Click auf einer Kachel [done]
  - Jede Kachel:
    - entweder Checkbox "download"
    - oder Link "show video" mit url zum Video
  - Background: Gradient aus https://open-props.style/ oder eine Farbe oder ein Bild [done]
  - Footer mit Navigation: << Prev {aktuelles Zeitraum} Next >>: [done]
    - Button "<< Prev" wird gesperrt, wenn heutiges Datum erreicht [done]

- Je details-Seite hat:
  - eigene URL [done]
  - Details zu APOD angezeigt: title, date, explanation, url, hd url, HD-Bild oder Video-Thumbnail, copyright(wenn gibt's) [done]
- Ansicht / Anzahl der Bilder: Bilder absteigend nach Zeit angezeigt - von heutigem Datum in Vergangenheit soweit wie möglich. Einstellbare Anzahl der Bilder pro Seite. [done]
- Deploy in Vercel [failed]

- #### **Fixes**:
  - neues Bild wird nich sofort nach der Mitternacht veröffentlicht, sondern später. Ein Fehler "Date must be between Jun 16, 1995 and {Datum von gestern}" tritt deshalb ein.

### Optional:

- "View options:" Dropdown-Menü:

  - infinite (from today in the past so far as possible)
  - time period (user defined time period)
  - birthday images (images that published on your birthdays) - Geburtsdatum eintragen und Bilder angezeigt, die auf entsprechenden Geburtstagen veröffentlicht wurden
  - random (defined number of random images) - Eintragen, wie viel Bilder angezeigt werden muss

- Animation:

  - Shake von Bild-Kacheln
  - Ein Bereich auf der Seite (rechts), wohin Bilder für Markieren zum Herunterladen überzogen werden können. Die Bilder werden dort gestapelt. Durch "Download selected" alle gestapelte Bilder herunterladen.

- Responsive index-Seite:
  - Überschrift: Gallery of NASA APOD (Astronomy Picture of the Day) --> reduzieren bis "Gallery of NASA APOD"
- Responsive details-Seiten

- Beim Click auf "Download selected" alle "selected" Bilder in Originalgröße herunterladen

- Index-Seite:

  - Button "Download selected":
    - Button erstellen [done]
    - Ausgegraut, bis nichts markiert
  - Bild-Kachel hat:
    - Click auf Bild unmittelbar - Overlay mit dem Bild in Originalgröße
    - Zeichen (Checkbox) "Favorite" (Sternchen / Herz) - alle Favorite-Bilder durch Button "Download selected" zusammenherunterladen.
    - Zeichen (Checkbox) "Download" - dieses Bild sofort herunterladen
    - auch "Details" - Übergang zur Seite mit Bild-Details
    - Alle Zeichen sind zuerst ausgegraut, nach Click - farbig

- aktuelle Ansicht in URL-params von **index** speichern:

  - Daten des ersten und letzten Bilds der Bilder, die gerade angesehen werden.
  - keine params: von Anfang, d.h. vom heutigem Datum anzeigen

- Overlay mit dem Bild in Originalgröße:
  - Pfeil-Buttons: "next", "previous"
  - Übergang zum nächstes / vorheriges Bild durch Pfeil-Taster auf Tastatur
  - Slide Show mit einstellbare Zeit (default 1s)
  - Elementen wie eine Kachel: "Favorite", "Download", "Details"
