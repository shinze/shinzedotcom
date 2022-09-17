---
color: "#FFF3DA"
eleventyNavigation:
  title: "La cascade"
  excerpt: "Le C de CSS ou de quelle couleur sera cet élément ?"
  key: "La cascade"
  parent: "CSS"
---

La cascade est le mécanisme par lequel le navigateur va déterminer l’apparence d’un élément en agglomérant les *propriétés* CSS et les *valeurs* issues de plusieurs sélecteurs et de l’héritage de l’élément.

<!-- Par défaut en CSS, c’est le dernier sélecteur qui a raison (le dernier dans le code) mais des sélecteurs différents peuvent avoir une priorité différente dans ce mécanisme de calcul, c’est **la spécificité**. -->

## L’héritage

### Les propriétés *héritées*

```html
<body>
  <article>
    <p>
      <span>Iggy Pop, ami de <strong>David Bowie</strong></span>
      <i>est un artiste américain du vingtième siècle.</i>
    </p>
  </article>
</body>
```

```css
body {
  color: blue;
  border: 1px solid red;
}
```

Dans l’exemple ci-dessus, l’ensemble des éléments HTML sont bleus car la propriété `color` est *héritable*, cela signifie que la couleur est ici définie par la couleur appliquée à l’élément parent (`body`).

Cependant certaines propriétés ne sont pas héritées, c’est ce que l’on peut constater dans l’exemple ci-dessus, les éléments appartenant au `body` n’ont pas de bordure bleue.

Une liste [des propriétés *héritées*](https://gist.github.com/dcneiner/1137601).

### Des éléments qui n’héritent pas

En CSS certains éléments ne vont pas hériter de propriétés par d’autres éléments, les liens (`a`) et les [éléments de formulaire](https://developer.mozilla.org/fr/docs/Learn/Forms/Your_first_form) n’héritent pas de toutes les propriétés.

```html
<p>
  Lust for life
  <a href="iggy.html">Découvrir l’artiste</a>
  <span>Iggy Pop</span>
  <button>Voir la description</button>
</p>
```

```css
body { color: red }
```

Ici le texte sera bien rouge à l’exception des liens et du bouton qui garderont leur couleur par défaut.

#### *Forcer* l’héritage

```css
body { color: red }
a, button { color: inherit }
```

Appliqué au code HTML précédent, ce code CSS va permettre aux liens et aux boutons d’être en rouge comme tous les autres éléments.

::: callout

### Une pratique du monde réel

[Une autre pratique](https://necolas.github.io/normalize.css/) consiste à rendre l’héritage de certaines propriétés comme étant *autorisé* sur tous les éléments de la manière suivante :

```css
* { font-family: inherit; }
body { font-family: monospace; }
```

Dans cet exemple tous les éléments faisant partie du document utiliseront une police à espacement fixe (`monospace`).

:::

## La spécificité

En CSS, c’est la dernière déclaration qui sera appliquée mais tous les sélecteurs ne sont pas égaux face au **calcul de spécificité**.

### De quelle couleur est le paragraphe ?

```html
<article id="art">
  <p class="question" id="quest">Je suis de quelle couleur ?</p>
</article>
```

```css
p { color: blue }
p { color: rebeccapurple }
p { color: red }
```

On commence doucement, dans ce code l’élément `p` sera rouge, car **en CSS, la dernière déclaration aura le fin mot si les sélecteurs sont de même types.**

### Corsons un peu les choses

Avec le même extrait de code HTML, quelle est la couleur du paragraphe (`p`) ? 

```css
article { color: blue }
.question { color: rebeccapurple }
p { color: red }
```

Le paragraphe sera ici violet (`rebeccapurple`) car **la sélection par `class` a plus de poids** que la sélection par type.

La couleur appliquée par le sélecteur parent (`article`) est encore plus faible dans ce calcul.

### Encore un peu plus difficile ?

```css
article { color: blue }
#quest { color: orange }
.question { color: rebeccapurple }
p { color: red }
```

Comme dans ce code CSS nous effectuons une sélection par `id` (`#quest`), la couleur du paragraphe sera `orange` car le sélecteur d’`id` a plus de poids que la sélection par `class`.

### Un dernier pour la route

La même question avec le même code HTML.

```css
#art #quest { color: blue}
.question { color: rebeccapurple}
#quest { color: orange }
p { color: red }
```

Cette fois ci le paragraphe sera bleu, le premier sélecteur contient deux `id`, il gagne.

Si vous aimez jouer, voici un [calculateur de spécificité CSS](https://specificity.keegan.st/).

## `!important`

Cette déclaration est une invention maléfique. Elle permet d’outre-passer la spécificité d’une déclaration en la priorisant. 

**C’est vrai que c’était déjà trop simple.**

```css
.question { color: rebeccapurple !important}
#quest { color: orange }
```

Le paragraphe sera orange, `!important` surpasse l’`id` dans cet exemple.

::: callout

La présence de cette déclaration est l’indice d’un code de *mauvaise qualité* et sûrement difficile à maintenir.

:::

## Éviter les crampes aux doigts et les mots de tête ?

Dans le monde réel, **on ne joue pas avec la spécificité**, car le code est amené à être manipulé par différents intervenant(e)s de niveaux de connaissance différents du langage CSS.

Pour simplifier le travail de chacun :

- On n’utilise pas de sélection par `id`, sauf pour JavaScript;
- Quelques sélections par type (la sélection d’éléments HTML) pour mettre à zéro certains éléments HTML de manière globale;
- Le minimum de sélection hiérarchique et seulement sur des éléments *prévisibles*;
- Des sélections par `class`;
- Nous punissons les collègues qui utilisent `!important`;

## Références

- Une vidéo en anglais qui va en profondeur sur le [sujet de la cascade](https://www.youtube.com/watch?v=lrivS7K1LcY;);
- 