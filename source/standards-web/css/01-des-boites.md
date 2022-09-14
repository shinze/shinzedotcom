---
color: "#88fda2"
eleventyNavigation:
  title: "Le modèle de boîtes"
  excerpt: "Un modèle pas très naturel"
  key: "Le modèle de boîtes"
  parent: "CSS"
  order: 1
---

Les éléments dans une page web sont tous représentés par des boîtes et ce modèle peut ne pas être intuitif ou naturel (surtout pour des designers habitués aux outils graphiques).

Le modèle de boîte est le premier *outil* de mise en page que l’on peut citer.

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

**À votre avis, ce paragraphe (`p`) fait quelle largeur ? 100 pixels ? 130 ? Aucune idée ?**

::: callout
### La réponse

La largeur totale de cette boîte est de 170 pixels : **largeur + bordures (×2), marges internes (×2)**. C’est le modèle de boîte par défaut de CSS.
:::

### Quelques explications

Chaque élément HTMl est dans une boîte, ces boîtes ont aussi un *padding* (un marge interne), un contour, une marge.

Le calcul de la largeur ou la hauteur de la boîte n’inclut pas ces propriétés (`padding`, `border`, `margin`) par défaut et *s’ajoute* à la dimension calculée (et affichée) de la boîte.

### Comment y échapper ?

Pour échapper à ce modèle et adopter un calcul de boîte plus *naturel* voici ce que vous devriez ajouter systématiquement à vos fichiers CSS.

```css
/*
  Application d’un modèle de boîte naturel
  https://www.paulirish.com/2012/box-sizing-border-box-ftw/
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

- **Type *inline*** : Des éléments qui se mettent les uns à côté des autres;
- **Type *block*** : Des éléments qui *s’empilent* les uns au-dessus des autres.

```html
<p>
  <strong>Bonjour</strong>
  <em>à tous !</em>
</p>
<p>Comment, </p>
<p>Allez-vous ?</p>
```

Testez le code ci-dessus, certains éléments se mettent sur une rangée, d’autres s’empilent (même si je saute une ligne dans le code).

::: callout

Le type de boîte est différent selon l’élément HTML et c’est une propriété que l’on peut modifier en CSS.

```css
strong {
  display: block;
}

p {
  display: inline;
}
```

:::

### D’autres différences

- Les éléments *inline* ne peuvent pas avoir de largeur, ni de hauteur propre, en modifiant leur propriété `display` on peut à nouveau rendre une largeur et une hauteur à ces éléments;
- Un padding vertical sur un éléments *inline* ne va pas avoir d’impact sur d’autres éléments;
- Certaines autres propriétés CSS ne s’appliquent qu’à des éléments *inline* ou *block*;

## Références

- [Le modèle de boîte](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/The_box_model) sur MDN;
- [Une petite explication en anglais](https://www.paulirish.com/2012/box-sizing-border-box-ftw/);
- [La propriété CSS `display`](https://developer.mozilla.org/fr/docs/Web/CSS/display);

