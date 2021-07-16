---
weight: 3
title: 'Les CSS c’est des boîtes'
summary: ''
tags: ['learn', 'css']
categories: ['Cours']
date: 2021-07-10T01:17:25+02:00
draft: true
---

## Un exemple

Dans cet exemple afin de faire une petite zone de 100px × 100px qui contient un texte de bienvenue, vous allez ajouter le bout de code qui suit à votre document `html`.

{{<code lang="html" caption="C’est toujours bien d’être poli" filename="index.html">}}
```html
<h1>Bienvenue sur mon site d’e-commerce !</h1>
```
{{</code>}}

Puis dans un fichier `css` relié à votre fichier `html`, vous allez décrire ce que vous souhaitez, une boîte qui fait `100px` par `100px`.

{{<code lang="css" caption="C’était assez simple finalement…" filename="style.css">}}
```css
h1 {
  width: 100px;
  height: 100px;
  padding: 30px;
  background: #ffccee;
  border: 1px #cacaca solid;
}
```
{{</code>}}

Mais… Comme vous pouvez le constater [dans cet exemple](https://codepen.io/shinze/pen/eYWBOzb), ça ne marche pas tout à fait comme prévu… Le contenu dépasse.

<!-- À déplacer -->

## Apprendre à lâcher-prise

Habituellement, quand vous voulez réaliser ce même exemple dans la plupart des logiciels, graphiques ou non, vous allez poser un élément qui servira de boîte, votre texte à l’intérieur et donner un style visuel à cet élément.

Mais surtout vous allez redimensionner cet élément à `100px × 100px` en indiquant ces valeurs dans des champs dédiés à cet usage.

{{<quote>}}
> «  Je vais mettre ce texte ici sur un fond qui
> fera 100  ×  100 pixels… ».
{{</quote>}}

Le document sur lequel vous travaillez habituellement est dans des dimensions hauteur et largeur qui sont figées, que ce soit pour imprimer (A4, A5…) ou tout autre usage, vous êtes habitués à travailler dans un espace figé.

Le web n’a pas de dimension fixe, votre contenu doit s’adapter à un environnement qui n’a pas cette contrainte.

## La dimension d’Internet

{{< hi >}}
{{< /hi >}}
