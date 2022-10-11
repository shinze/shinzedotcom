---
color: "#88fda2"
eleventyNavigation:
  title: "Le modèle de boîtes"
  excerpt: "Un modèle pas très naturel"
  key: "Le modèle de boîtes"
  parent: "CSS"
---

Les éléments dans une page web sont tous représentés par des boîtes et ce modèle peut ne pas être intuitif ou naturel (surtout pour des designers habitués aux outils graphiques).

Le modèle de boîte est le premier *outil* de [mise en page](../06-mise-en-page) que l’on peut citer.

## Ma première boîte

Voici le code que je saisis dans un nouveau document HTML, le code qui suit est quand à lui dans un fichier CSS que je lie au document HTML.

```html
<p>Mon premier test de CSS</p>
```

```css
p {
  border: 20px solid black;
  width: 100px;
  padding: 15px;
}
```

## La question

**À votre avis, ce paragraphe (`p`) fait quelle largeur ? 100 pixels ? 130 ? Aucune idée ?**

::: callout
### La réponse

La largeur totale de cette boîte est de 170 pixels : **largeur + bordures (×2), marges internes (×2)**. C’est le modèle de boîte par défaut de CSS.
:::

### Quelques explications

Chaque élément HTMl est une boîte. Ces boîtes peuvent avoir un *padding* (un marge interne), un contour (`border`), une marge (`margin`).

- Si la dimension est spécifiée (avec `width` et/ou `height`), le calcul de la largeur ou la hauteur de la boîte **n’inclut pas** les propriétés `padding`, `border`, `margin`;
- Si elle n’est pas indiquée, la dimension de la boîte est déduite de l’espace nécessaire à afficher son contenu;

![L’exemple du modèle de boîte tel que présenté dans l’inspecteur de Firefox](/img/box-model.png)

Cette image illustre le modèle de boîte tel que l’on peut le voir dans l’inspecteur de votre navigateur et représente les différentes propriétés liées à un élément HTML dans le calcul d’une boîte : **la marge, la bordure, la marge interne et la dimension (hauteur et largeur)**.

### Comment y échapper ?

Pour échapper à ce modèle et adopter un calcul de boîte plus *naturel* voici ce que vous devriez ajouter systématiquement à vos fichiers CSS.

```css
/*
  Modèle de boîte naturel
  Infos : https://www.paulirish.com/2012/box-sizing-border-box-ftw/
*/

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

## Deux types de boîtes

Les boîtes en HTML sont de deux types :

- **Type *inline* (en ligne)** : les éléments se mettent les uns à côté des autres;
- **Type *block* (bloc)** : les éléments *s’empilent* les uns au-dessus des autres.

```html
<p>
  <strong>Bonjour</strong>
  <em>à tous !</em>
</p>
<p>Comment, </p>
<p>Allez-vous ?</p>
```

Testez le code ci-dessus, certains éléments se mettent sur une rangée, d’autres s’empilent (même si je saute une ligne dans le code).

::: callout

Le type de boîte est différent selon l’élément HTML utilisé, c’est une propriété que l’on peut modifier en CSS sans avoir à changer d’élément HTML.

```css
strong {
  display: block;
}

p {
  display: inline;
}
```

:::

### D’autres différences (de taille ?)

- Les éléments *inline* ne peuvent pas avoir de largeur, ni de hauteur propre, en modifiant leur propriété `display` on peut à nouveau rendre une largeur et une hauteur à ces éléments;
- Un padding vertical sur un éléments *inline* ne va pas avoir d’impact sur d’autres éléments;
- Certaines autres propriétés CSS ne s’appliquent qu’à des éléments *inline* ou *block*;

## Références

- [Le modèle de boîte](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/The_box_model) sur MDN;
- [Une petite explication en anglais](https://www.paulirish.com/2012/box-sizing-border-box-ftw/);
- [La propriété CSS `display`](https://developer.mozilla.org/fr/docs/Web/CSS/display);

