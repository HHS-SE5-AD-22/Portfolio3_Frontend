# Groep 4

Frontend van Portfolio 3

De Frontend voor de applicatie is geschreven in:

* Taal: JavaScript
* Framework: VueJS 3
* URL: https://hhs-se5-ad-22.github.io/Portfolio3_Frontend/


---

## Gebruikte libraries

- Vue3
    - <b>Waarom:</b> Standaard package voor VueJS
    - <b>Hoe hebben we het toegepast:</b> In het hele project wordt VueJS gebruikt.
- Axios
    - <b>Waarom:</b> HTTP requests
    - <b>Hoe hebben we het toegepast:</b> Het ophalen en maken van items
- Vue-Router
    - <b>Waarom:</b> Navigatie binnen de website
- TailwindCSS
    - <b>Waarom:</b> We gebruiken TailwindCSS voor de opmaak van de website
    - <b>Hoe hebben we het toegepast:</b> We gebruiken TailwindCSS classes overal waar we CSS nodig hebben
- ESLint (AirBnB)
    - <b>Waarom:</b> Juiste formattering van het project en voor error checking
    - <b>Hoe hebben we het toegepast:</b> Als je 'npm run lint' gebruikt gaat het automatisch voor je alle bestanden na voor mogelijke fouten
---

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
```
git subtree push --prefix dist origin gh-pages  
```

### Lints and fixes files
```
npm run lint
```