---
color: "#EDF0DA"
eleventyNavigation:
  title : "La mise en page (en cours)"
  excerpt: "grid, flex et autre propriétés de mise en page"
  key: "La mise en page"
  parent: "CSS"
---

Les outils de mise en page sont *relativement* récents en CSS. Les premiers site web étaient mis en page avec des tableaux, essayez de faire une mise en page sur un tableur si un jour vous vous ennuyez.

C’est avec l’arrivée du langage CSS que des premières tentatives de ne plus utiliser de tableaux sont apparues.

## Le flux HTML

En HTML ([comme expliqué par ici](../css/01-des-boites.md)), les éléments prennent la forme d’une boîte avec deux principaux modèles : *inline*  ou *block*.

La dimension calculée des boîtes va être conditionnée (parmi d’autres) par les paramètres suivants :

1. Plus j’ai de contenu et plus grande sera la boîte, idem avec la dimension des éléments *enfants*;
2. Si je l’affiche dans une fenêtre plus ou moins large, l’élément sera plus au moins haut pour afficher le contenu;
3. Des propriétés qui font partie du modèle de boîte qui modifie ce calcul de dimension;
4. Le type de boîte.

```html
<article>
  <img src="https://placekitten.com/500/200" alt="">
  <h1>
    Les chats
    <span>Comment sont-t’ils devenus des stars d’internet ?</span>
  </h1>
  <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur ratione autem</strong>, <em>sit eveniet</em> fugit quae porro, optio, expedita dignissimos delectus voluptates! <a href="#">Nihil voluptatibus</a> eum autem facilis praesentium odio cumque!</p>
  <p>Un article de <em>Antoine Hernandez</em></p>
</article>
```

```css
* { outline: 2px solid #999 }
```

Testez cet exemple et observez le comportement des différents éléments quand vous redimensionnez la fenêtre de votre navigateur. Les différentes boîtes s’organisent *d’elles-même* (chaque élément pousse l’autre qui lui même en pousse le suivant et ainsi de suite).

Vous pouvez aussi constater que ces boîtes ont des comportements différents lié à leur type (*inline* ou *block*).

**C’est ce principe que l’on nomme le flux HTML.**

## Ma première mise en page

Le flux est l’outil de base à comprendre pour faire de la mise en page avec CSS et HTML. Le flux a deux directions : *inline* ou *block*, ce qui correspond à la manière dont les boîtes se positionnent les unes par rapport aux autres.

Avec le même exemple d’HTML utilisé au début de cette page, appliquez le code CSS suivant :

```css
body {
  font-family: sans-serif;
  line-height: 1.5;
  font-size: 1.2rem;
}

article {
  background-color: #acd;
  padding: 3rem;
}

h1 {
  margin: 0;
  font-size: 3rem;
  line-height: 1.2;
}

h1 span {
  display: block;
  font-size: 1.5rem;
  font-weight: normal;
}

img {
  display: block;
  margin-bottom: 1rem;
  /* L’image se redimensionne avec la fenêtre */
  max-width: 100%;
  height: auto;
}

p strong {
  display: block;
  margin-bottom: 1rem;
}
```

Dans cet exemple, aucune propriété *avancée* de mise en page n’a été utilisé, seuls des propriétés modifiant *la boîte* de chaque élément. En changeant le type de certaines boîtes (`display: block`) on peut avoir la main sur leur disposition.

Observez les différences de comportement de certains éléments avec la version précédente sans CSS.

**Expérimentez, essayez de modifier les différentes propriétés de ce exemple pour en faire votre propre mise en page.**

## Des outils de mise en page

Si le flux permet d’avoir un premier niveau de mise en page, CSS dispose *d’outils* complémentaire pour la mise en page : *flexbox* et *grid*, deux modules partageant des similarités permettant chacun de fournir des solutions différentes de mise en page.

### Flex

*Flexbox* est un mécanisme de mise en page permettant de gérer la disposition d’éléments HTML sur l’axe vertical ou horizontal et chaque élément d’une mise en page *flexbox* peut changer de dimension selon l’espace disponible, voici ce que permet de faire *flexbox* :

- Organiser les éléments **soit en lignes soit en colonnes**;
- L’alignement horizontal et vertical des éléments dans l’espace qui les contient (*parent*);
- Gérer **l’espace entre ces colonnes ou ces rangées**, ce que l’on appelle des *gouttières* en mise en page (`gap`);
- Par défaut les éléments sont organisés sur un seul axe mais il est possible de les laisser passer à la ligne (`wrap`) quand l’espace disponible n’est pas suffisant;
- La dimension ou la proportion de chaque élément peut être gérées sur un seul élément comme sur l’ensemble des éléments dans un *flexbox* (`flex`);
- L’ordre des éléments peut être modifié sans avoir à modifier le code HTML (`order`);
- La direction des boîtes, permettant d’inverser complètement l’ordre des éléments (`flex-direction`);

#### Aller plus loin avec *flexbox*

- Un article complet pour [pratiquer *flexbox*](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Flexbox);
- Le [jeu de la grenouille](https://flexboxfroggy.com/#fr) pour apprendre en jouant;
- Manipuler visuellement [différentes propriétés de *flex](https://yoksel.github.io/flex-cheatsheet/)*;

<!-- TODO: ajouter des ressources à propos de flex -->

### Grid

*Grid* et un mécanisme très similaire à *flexbox* qui va permettre de gérer une mise en page sur deux axes, horizontaux et verticaux. Voici les fonctionnalités complémentaires qu’ajoute *grid* :

- Permettre de disposer des éléments HTML (sur un même élément parent) sur deux axes;
- Nommer des zones de la grille et y disposer les éléments;
- 

#### Pour aller plus loin avec *grid*

- [Apprendre *grid*](https://learncssgrid.com/) en profondeur;
- [Le jeu des carottes](https://cssgridgarden.com/#fr) pour découvrir *grid* de manière ludique;
- Un [contenu en français](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Grids) sur MDN;
- Une belle [collection de mises en page](https://labs.jensimmons.com/) utilisant *grid*;
- Un [ensemble de vidéos en anglais](https://mozilladevelopers.github.io/playground/css-grid) allant dans le détail de *grid*;

### Flex ? Grid ? Les deux ?

Cette question, quand utiliser *grid* ou *flexbox* est arrivée assez rapidement avec cette nouveauté technique. De manière générale, dans une page HTML les deux mécanismes de mise en page cohabitent mais ne s’applique pas pour les mêmes objectifs.

*grid* est plutôt dédié à la mise en page globale d’un document HTML alors que *flexbox* est très adapté à la mise en page dans des composants de cette même page.

#### Quelques articles sur le sujet

- [Grid for layout, flexbox for components](https://ishadeed.com/article/grid-layout-flexbox-components/), d’Ahmad Shadeed;
- Un [article plus ancien en français](https://www.alsacreations.com/article/lire/1794-flexbox-ou-grid-layout.html) traitant du même thème;

### Les positions

Le flux est un élément fondamental de la mise en page en CSS, *flexbox* et *grid* permettent de modifier ce flux sur les éléments que l’on souhaite mettre en page. En CSS il est aussi possible de sortir certains éléments de ce flux.

#### Positions `static`, `relative`, `absolute` `fixed` et `sticky`


