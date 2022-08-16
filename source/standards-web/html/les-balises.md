---
tags: "html"
title: "Les balises HTML"
tempplateEngineOverride: njk, md
---

HTML est un **langage à balises** permettant de délimiter différentes parties de votre contenu, chaque **élément** va porter un sens différent.

Différents types de contenus peuvent être *balisés* : des titres, des paragraphes, des listes, des liens, des images, des navigation, des sections, des formulaires [La liste peut être longue](http://html5doctor.com/element-index/) et permet d’améliorer [la sémantique](https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique) de votre contenu.

## Comment ça marche ?

Pour baliser un contenu vous utiliserez (la plupart du temps) une balise ouvrante, une balise fermante et un contenu.

La balise ouvrante s’écrit `<nomBalise>` et la balise fermante `</nomBalise>`, entre ces deux balises le contenu que l’on souhaite délimiter.



L’ensemble balise ouvrante + contenu + balise fermante se nomme un élément .

```html
<h1>Découvrir le langage HTML</h1>
<p>Le langage HTML (HyperText Markup Language) est…</p>
```

Ci-dessus, un exemple de quatre balises délimitant du contenu, un titre (avec les balises `h1`) et un paragraphe (avec les balises `p`).

La suite : [[Des attributs]]


## Références

- [Liste de balises disponibles en HTML5](https://developer.mozilla.org/fr/docs/Web/HTML/Element);
- [Une autre liste](http://html5doctor.com/element-index/), chaque élément HTML est analysé et illustré d’exemples;
