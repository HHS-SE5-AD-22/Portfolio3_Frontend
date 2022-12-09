# Groep 4

Frontend van Portfolio 3

De Frontend voor de applicatie is geschreven in:

* Taal: TypeScript
* Framework: VueJS 4

De applicatie wordt gehost op [AWS](https://aws.amazon.com/).

---

## Voortgang

Sprint 1 - 100% klaar

---

## URLs

TODO

---

## Gebruikte libraries

- Vue3
    - <b>Waarom:</b> Standaard package voor VueJS
    - <b>Hoe hebben we het toegepast:</b> In het hele project wordt VueJS gebruikt.
- VueX
    - <b>Waarom:</b> Zodat we alle state in een centrale store houden
    - <b>Hoe hebben we het toegepast:</b> Modules (Course, User en Task) gemaakt in de VueX store en we houden alles daar vast. 
- Axios
    - <b>Waarom:</b> HTTP requests
    - <b>Hoe hebben we het toegepast:</b> Het ophalen en maken van items
- Vue-Router
    - <b>Waarom:</b> Navigatie binnen de website
    - <b>Hoe hebben we het toegepast:</b> Navigatie wanneer je op een knop klikt, bijvoorbeeld om de taken van een student te bekijken
- TailwindCSS
    - <b>Waarom:</b> We gebruiken TailwindCSS voor de opmaak van de website
    - <b>Hoe hebben we het toegepast:</b> We gebruiken TailwindCSS classes overal waar we CSS nodig hebben
- Vee-validate
    - <b>Waarom:</b> Voor het valideren van formulieren
    - <b>Hoe hebben we het toegepast:</b> Tijdens het maken van een Cursus of Task moet je bepaalde validatie regels volgen
- ESLint (AirBnB)
    - <b>Waarom:</b> Juiste formattering van het project en voor error checking
    - <b>Hoe hebben we het toegepast:</b> Als je 'npm run lint' gebruikt gaat het automatisch voor je alle bestanden na voor mogelijke fouten
---

## CSS Classes
### Primaire kleuren:
TODO

---
## Opzetten applicatie

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```