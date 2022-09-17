---
color: "#fddbf8"
eleventyNavigation:
  title : "Les unités de dimension"
  excerpt: "pixel, rem, ch, vw, %…"
  key: "Les unités"
  parent: "CSS"
---

<!-- Vous savez quelle est la dimension d’une feuille A4, mais quelle est la largeur du Web, sa longueur ? Une multitude de réponses sont possibles, autant qu’il existe d’écrans et de fenêtres dans le monde.

Le web se veut flexible de nature et le langage CSS répond à cet enjeux avec de nombreuses unités de dimensions. -->

En CSS on peut indiquer une couleur, une opacité, un degré de rotation, un interlignage… De nombreux types de propriétés et pour cela CSS à de nombreuses valeurs à disposition.


## Les valeurs sans unités

Quelques valeurs en CSS n’attendent pas forcément d’unités pour être appliquées. C’est le cas avec la propriété `line-height` (l’interlignage) comme dans cet exemple :

```css
p {
  /* Ici 1rem : 16px */
  font-size: 1rem;
  line-height: 2;
}
```

Le corps du paragraphe est indiqué à `16px`, l’interlignage sera de 200% de cette valeur : 16 × 2 = `32px` calculé par le navigateur.

Si l’utilisateur augmente le corps du texte, l’interlignage s’ajuste en proportion.

::: callout

La propriété `line-height` accepte aussi des valeurs avec des unités (comme pixel par exemple) mais c’est souvent une mauvaise pratique.

**En ne mettant pas d’unité à cette propriété vous vous assurez que l’interlignage soit toujours proportionnel au corps de votre élément.**

:::

- Les propriétés de couleurs n’attendent pas systématiquement d’unité, `rgb()`  peut avoir des valeurs allant de 0 à 255;
- L’[alpha des couleurs](../css/04-les-couleurs) notées en `rgba()` et `hsla()`;
- L’opacité `opacity` peut se noter `opacity: 0.5` pour indiquer une opacité de 50 %;
- La déclaration `transform: scale(1.5)` permet d’indiquer un coefficient d’agrandissement sans unité.


## Unités absolues

Les unités absolues sont des unités en référence au monde physique, comme le mètre qui est étalonné. Un mètre sera toujours un mètre.

### `px`, le pixel

Sur le web un pixel est une unité absolue : un élément qui fait une largeur de `20px` fera toujours la même dimension sur un même écran.

Le W3C dit (grâce à un calcul savant) qu’un pixel en CSS doit faire **environ** O,26 mm (1/96 d’un pouce).

Ne confondez pas un pixel en CSS avec un pixel sur un écran, certains écrans de haute densité représente un pixel *logiciel* avec quatre pixels physiques.


### Les unités *physiques*

Toutes les unités qui ont pour référence le monde physique, comme le mètre cité plus haut. Ces unités sont en général réservée dans des feuilles de style d’impression papier.

À noter que le mètre ne fait pas partie des unités de CSS mais en voici d’autres dont certaines ne vous sont pas inconnues :

- `cm`, 1 centimètre comme sur votre double décimètre;
- `mm`, Un dixième de centimètre;
- `Q`, ne rigolez pas, c’est un quart de millimètre;
- `pt` vous le connaissez, il mesure 0,352778 mm;
- `in`, un pouce, 2,54 cm ou encore 4.34 carottes;
- `pc` une unité typographique prenant en référence le pouce.

::: callout

Ne jugeons pas le système de mesure anglo-saxon même s’ils le méritent.

:::

### Les angles

CSS permet d’effectuer des rotations, des inclinaisons, ce qui fait appel à des unités d’angles et pour cela on a des degrés, des radians, des grades et des rotations (`turn`). 

Petit rappel de mathématique (j’ai révisé mes angles pour ça), un cercle…

- Se divise en 360 degrés;
- Se divise en 400 grades (`grad`);
- Si divise en 1 `turn` (pour faire une rotation à 90 degrés on indique `.5turn`);
- Se divise en 2π radians (je suis encore en [train de calculer](https://fr.wikipedia.org/wiki/Radian));

```css
.item { transform: rotate(90deg)}
.lorem { transform: rotate(100grad) }
.other-item { transform: rotate(.5turn) }
.ipsum { transform: rotate(1rad) }
```

Les valeurs en degré et `turn` sont assez communes, les deux autres unités sont plus rarement utilisées.

Une [table de correspondance](https://css-tricks.com/gradians-and-turns-the-quiet-heroes-of-css-angles/) de différentes unités d’angles.

## Unités relatives

Les unités relatives sont des unités comparables au pourcentage : des unités proportionnelles. Le contexte dans lequel s’applique une *unité relative* est donc essentiel en CSS.

### Pourcentage

C’est une unité que l’on connaît tous mais qui peut être déroutante en CSS, l’élément servant de référence au calcul du pourcentage est différent selon la propriété utilisée.

```html
<div class="side">
  <section class="news">
    <article class="frontpage">
      Hello
    </article>
  </section>
</div>
```

```css
.news { height: 500px}
.frontpage {
  height: 50%;
  width: 100px;
  margin-left: 50%;
}
```

- Dans cet exemple, l’élément `.frontpage` aura une hauteur de : `500px / 0,5 = 250px` calculé par le navigateur, la moitié de la hauteur de l’élément parent;
- Idem pour sa marge gauche `margin-left` qui est calculée sur la largeur de l’élément parent.

```css
.side {
  width: 200px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
```

Si j’ajoute ces styles, la valeur de translation (`translateX(-50%)`) s’applique en conséquence de la largeur de l’élément `.side` et non du parent.

::: callout

#### Pour résumer

Selon la propriété utilisant des pourcentages, l’élément de référence servant au calcul ne sera pas le même.

[Une superbe ressource](https://wattenberger.com/blog/css-percents) avec des démo interactives pour vous aider à mieux comprendre le fonctionement des pourcentages.

:::


### Unités typographiques

Le web c’est beaucoup de typographie et CSS a beaucoup d’unités pour traiter ce sujet : `em`, `rem`, `ex`, `ch`, `ic`, `lh`… Je vais me contenter d’illustrer les unités les plus utilisées aujourd’hui.

#### L’unité `em`

`em` est une unité historique se basant sur la hauteur d’un caractère M en majuscule.

```html
<article>
  <h2>Les unités typographiques</h2>
</article>
```

```css
article { font-size: 24px }
h2 { font-size: 2em }
```

C’est une unité relative au corps typographique de l’élément parent : Dans cet exemple la parent (`article`) à un corps de texte de 24 pixels, `2em` sera calculé à 48 pixels.

#### L’unité `rem`

`rem` est une unité typographique très utilisée aujourd’hui. Si `em` utilise le parent direct comme référence de calcul, `rem` utilise la racine du document (`body`) et est donc plus simple à maîtriser.

```css
article { font-size: 1.5rem }
h2 { font-size: 2rem }
```

Avec le même code HTML précédent, en appliquant ce code le corps du `h2` n’a pas changé mais la référence pour le calculer est différente.

On considère souvent que le `body` a un corps de 16 pixels (c’est une préférence du navigateur), le calcul d’un `rem` se fait donc sur cette base, `2rem`: 2 × 16px = 32 pixels.

#### L’unité `ch`

L’unité `ch` devient intéressante dès que l’on se pose la question du confort de lecture, 40 à 60 caractères par ligne, c’est la marge attendue pour un texte *confortable*.

Mais comment atteindre cette valeur ? Je m’assure de sauter une ligne au soixantième caractère ? Mais si je saute des lignes, ça va donner quoi sur un mobile ?

`ch` va nous aider dans cette quête, car cette unité est proportionnelle à un caractère (le 0).

```html
<p>Mais comment atteindre cette valeur ?
   Je m’assure de sauter une ligne au soixantième caractère ?
   Mais si je saute des lignes, ça va donner quoi sur un mobile ?</p>
```

```css
/* Mon texte est enfin confortable à lire */
p { width: 60ch}
```

### Les unités liées à la fenêtre, le *viewport*

La fenêtre est la zone dans laquelle s’affiche votre page web en anglais le *viewport*. Une série d’unités permet de s’en servir comme élément de référence.

#### Les unités `vw, vh…`

`vw` la largeur de la fenêtre et `vh` la hauteur de la fenêtre, la valeur calculée sera un pourcentage de la dimension de la fenêtre, `20vw` sera `20%` de la largeur de la fenêtre et `10vw` sera 10% de la hauteur de la fenêtre.

## Une calculatrice intégrée

CSS permet de manipuler différentes unités et permet aussi d’additionner des carottes et des torchons, c’est le travail de la fonction `calc()` qui peut effectuer des calculs en manipulant les différentes unités vues précédemment.

```css
.item { width: calc((100vw - 30%) / 2) }
```

Je peux additionner, soustraire, multiplier, diviser différentes unités entre-elles sans avoir à faire les calculs moi-même.