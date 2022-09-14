---
color: "#B6E8FF"
eleventyNavigation:
  title : "Les couleurs"
  excerpt: "Bleu, vert, orange, #2288FF, etc."
  key: "Les couleurs"
  parent: "CSS"
  order: 4
---

En CSS, on a des couleurs et de nombreuses manières de les noter et de les appliquer.

## Ou appliquer les couleurs ?

`color`, `background-color`, `box et text-shadow`,`border` et `outline` sont les propriétés acceptant une valeur de couleurs.

```css
/* Le texte de ma page est violet */
body { color: purple }

/* Le fond de ma page est orange */
body { background-color: orange; }

/* Tous les paragraphes seront avec une bordure bleue avec des tirets */
p { border: 2px dashed blue }

/* Les articles ont une ombre orange */
article { box-shadow: 0 0 1rem 0 orange }

/* Le h1 a une ombre bleue */
h1 { text-shadow: 0 1ch 0 blue }
```

## Les mots clefs

Quelques mots clefs permettent l’ajout de fonctionnalités au langage :

- `transparent` applique une transparence totale à un élément;
- `currentColor` permet d’appliquer la couleur de l’élément parent (définie par la propriété `color`);

## Les couleurs nommées

CSS bénéficie d’un [référentiel historique](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) de couleurs *nommées* qui continue d’évoluer et propose maintenant un peu plus de 256 couleurs.

L’avantage de ce référentiel est sa simplicité mais son inconvénient majeur est qu’il très limité pour des usages réels et est **donc peu utilisé** aujourd’hui.

```css
/* Tous les liens seront violets */
a { color: rebeccapurple }
```

## La notation hexadécimale

La notation hexadécimale, en base 16, permet d’indiquer une couleur en utilisant 8 caractères allant de 0 à F (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E et F.) précédés d’un croisillon (`#` et non pas un *hashtag* 😜).

`#f1de8c80, #RRVVBBAA` : Chaque paire représente respectivement la valeur d’une des composante de la couleur RVB (`RR`, `VV` et `BB`) et éventuellement une composante *alpha* (opacité de la couleur, `AA`).

::: callout

Je vous rassure tous vos outils graphiques vous permettent de copier-coller cette valeur.

:::

```css
/* Le paragraphe est orange légèrement transparent */
p { color: #facd2080 }

/* La même couleur sans transparence */
p { color: #facd20 }
```

## La notation en `rgb` et `rgba`

C’est pour des designers une manière de noter une couleur sans doute plus familière.

```css
p { color: rgb(120, 20, 255) }
```

Chaque terme séparé par une virgule est respectivement une composante couleur : r,v et b avec une valeur de 0 à 255 (comme dans tous les outils graphiques) indiquant la quantité de chaque couleur.

Cette même notation peut aussi utiliser des pourcentages, **à noter que chaque valeur doit alors être indiquée en pourcentage**

```css
p { color: rgb(10%, 20%, 80%) }
```

### La transparence : `rgba`

La notation est similaire à celle en `rgb` mais ajoute une composante *alpha* permettant de spécifier l’opacité d’une couleur (de 0 à 100% d’opacité).

L’alpha peut se noter de deux manières différentes comme illustré ci-après :

```css
/* L’opacité est de 80% */
p { color: rgba(10%, 20%, 80%, 0.80) }

/* Même opacité mais notée en pourcentage */
p { color: rgba(10%, 20%, 80%, 80%) }
```

## La notation en `hsl` et `hsla`

Les notation `hsl` et `hsla` (*Hue, Saturation et Lightness*) sont des notations équivalentes à *tsl (teinte, saturation et luminosité)*.

Cette notation est souvent considérée comme plus simple que les deux notations précédentes car elle permet de mieux situer une couleur dans un cercle chromatique.

`hsl(H,S,L)` ou `hsl(H,S,L,A)` :

- H représente la teinte exprimée en degré allant de 0 à 360 degrés (sa position sur le [cercle chromatique](https://fr.wikipedia.org/wiki/Cercle_chromatique)) à noter que l’unité *degré* n’est pas à indiquer;
- S le taux de saturation de la couleur exprimée en pourcentage, une valeur de 0% indique une couleur grise et 100% une couleur très vive;
- L, la luminosité est exprimée en pourcentage comme la saturation;
- A, l’opacité de la couleur est exprimée (comme pour la notation `rgb`), soit en pourcentage (`10%`) soit avec une valeur qui va de 0 à 1 (`0.10`).

```css
/*Trois manières de noter une couleur en hsl(a)*/
p { color: hsl(120, 20%, 30%) }
p { color: hsl(120, 20%, 30%, .1) }
p { color: hsl(120, 20%, 30%, 10%) }
```

::: callout
### À noter

La notation `hsl` est une représentation mathématique d’un espace colorimétrique qui **ne prend pas en compte la perception humaine de luminosité d’une teinte**.

L’œil humain n’est pas sensible à toutes les teintes de la même manière, **pour une même luminosité un jaune paraît plus lumineux qu’un bleu**.

[En apprendre un peu plus](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/) sur la perception des couleurs.

:::

## Accessibilité des couleurs

**L’accessibilité numérique consiste à rendre les contenus et services numériques compréhensibles et utilisables par toute personne.**

Les couleurs sont un élément fondamental de l’accessibilité numérique, voici les deux principales règles concernant les couleurs :

- La couleur ne doit pas être le seul moyen de communiquer une information *(Ex. En rouge Les chiffres de cette année)*;
- Vous devez vous assurer que votre interface a des contrastes suffisants. Le rapport de contraste entre la couleur de fond et le contenu doit être suffisant;

### Quelques outils pour vous simplifier le travail sur les contrastes couleurs

- Un outil vous permettant de [visualiser vos contrastes](https://color.review/) et de choisir des couleurs plus adaptées (vous devez atteindre au minimum un résultat *AA*);
- Ce service vous permet d’[avoir un aperçu de l’accessibilité](https://contrast-grid.eightshapes.com/) de nombreuses couleurs en une seule fois;
- Un outil vous permettant de [manipuler les couleurs](https://hue.tools/modify?format=hex&color=77f15cff) un peu mieux que la plupart des outils graphiques;
- Un service avancé vous permettant de [créer une palette de couleurs](https://accessiblepalette.com/) en limitant les problèmes de luminosité perçue.