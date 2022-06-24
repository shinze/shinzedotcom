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

Quand vous voulez illustrer ce dernier exemple dans votre application de choix, vous allez poser un élément, mettre votre texte à l’intérieur et lui appliquer son style visuel. Enfin, vous allez redimensionner cet élément à `100px × 100px` en indiquant ces valeurs dans des champs dédiés à cet usage.

{{<quote>}}

> «  Je vais mettre ce texte ici sur un fond qui
> fera 100  ×  100 pixels… ».
> {{</quote>}}

Le document sur lequel vous travaillez est dans des dimensions hauteur et largeur qui sont définies et figées, que ce soit pour imprimer (A4, A5…) ou tout autre usage, **vous êtes habitués à travailler dans un espace dont vous connaissez la dimension.**

{{< figure class="commented-image" src="/learn/css/images/google-docs.png"
caption="Mon site d’e-commerce sur Google Docs, on peut voir ici un format A4">}}

https://www.html5rocks.com/static/images/screenshots/crossdevice/image16.gif

Votre contenu doit s’adapter à un environnement très variant, observez les écrans que vous ou vos proches utilisez, pas un seul de ces écrans n’a la même dimension.

 **Une page web n’a pas de dimension fixe comme peut l’avoir un morceau de papier au format A4.**

<!-- ## La dimension d’Internet -->

## Respecter le flux

Une page web a ce que l’on nomme un **flux**, c’est la manière dont les éléments dans cette page interagissent les uns avec les autres.

Une boîte qui pousse une autre boîte, un paragraphe qui pousse un titre et ce même titre qui fait descendre l’image un peu plus bas dans l’écran, ou encore un contenu qui donne sa dimension à un élément.

{{<exercice>}}
Prenez une page de Wikipédia, redimensionnez votre la fenêtre de votre navigateur, vous verrez clairement comment les éléments s’agencent et *se poussent* entre eux.

{{</exercice>}}

## On fait comment alors ?

Si l’on reprend l’exercice de départ, il va falloir lâcher prise, laisser le texte vivre sa vie. La boîte dans laquelle doit se situer le texte ne devrait peut-être pas avoir de largeur, ni même de hauteur.

{{< hi >}}
{{< /hi >}}
