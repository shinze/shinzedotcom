---
color: "#ffe76a"
eleventyNavigation:
  title : "Les sélecteurs CSS"
  subtitle: "Cibler des éléments avec CSS"
  key: "Les sélecteurs CSS"
  parent: "CSS"
  order: 2
---

Les sélecteurs CSS indique le ou les éléments sur le(s)quels s’applique un ensemble de styles.

```css
sélecteur {
  propriété: valeur;
}
```

## Les sélecteurs fondamentaux

::: callout

## En résumé

CSS permet de cibler et d’appliquer des styles à un élément ou à une famille d’éléments.

:::

### Le sélecteur universel

Le sélecteur universel permet de cibler l’intégralité des éléments d’une page ou d’un sous-ensemble d’une page.

```css
/* Tous les éléments (ou presque) de la page seront orange */
* {color: orange}
```

*Presque* tous les éléments de la page auront une couleur orange dans l’exemple précédent à l’exception des liens qui n’[héritent pas par défaut](../css/03-la-cascade) de quelques propriétés (dont la couleur).

### Sélecteur de type

Le sélecteur de type est ce qui permet de cibler les éléments HTML par le nom de leur balise.

```css
/* Je sélectionne tous les éléments p
et leur applique une couleur bleue */
p {color: blue}
```

### Sélecteur de `class`

Ce sélecteur (très utilisé) cible les éléments par la valeur de leur attribut `class`. La syntaxe est d’ajouter un point (.) devant le nom de la `class` que l’on souhaite atteindre.

```html
<p>Hello</p>
<p class="highlight">CSS</p>
```

```css
/* Seul le paragraphe portant la class "highlight" aura une couleur bleue */
.highlight {color: blue}
```

### Le sélecteur d’identifiant

C’est comme pour le sélecteur de `class` un sélecteur permettant de cibler des éléments selon la valeur d’un attribut, ici l’`id` d’un élément.

```html
<p>Hello</p>
<p id="nom">Verner Panton</p>
```

```css
/* L’élément portant un id "nom" sera bleu */
#nom {color: blue}
```

::: callout

#### À noter

- En HTML, dans une page unique, **un seul élément ne peut porter un même `id`**. Dans l’exemple précédent, une ne pourrait contenir qu’un seul et unique `<p id="nom">`;
- Dans des projets récents, l’attribut `id` est déprécié en faveur des `class` (pour limiter les difficultés liées au [calcul de spécificité](https://developer.mozilla.org/fr/docs/Web/CSS/Specificity));
- L’`id` reste très utilisé en *JavaScript* pour ses performances.

:::

## Les combinaisons de sélecteurs

Les combinaisons de sélecteurs sont un enchaînement de plusieurs *sélecteurs fondamentaux* séparés par un caractère (un espace, un plus, un *tilde*, un inférieur à).

Ces combinaisons permettent de créer des sélections plus précises et plus spécifiques.

Chaque sélecteur de la chaîne peut être n’importe quel type de sélecteur.

### La sélection hiérarchique

Le sélecteur hiérarchique ou *descendant* permet de cibler des éléments qui appartiennent à un autre élément, une balise dans une balise dans une balise…

```html
<p>La liste des <b>ingrédients</b></p>
<ul>
  <li><b class="high">Farine</b></li>
  <li><b>Tomates</b></li>
  <li>Olives</li>
</ul>
```

Chaque sélecteur de la chaîne de sélection est séparé du suivant par un espace( ).

```css
/* Les "b" présents dans un "p" seront verts */
p b { color: green }

/* Les éléments avec une class ".high" et présent dans un "p" seront rouges */
p .high {color: red}
```

### La sélection hiérarchique directe

La sélection hiérarchique directe permet d’atteindre des enfants directs d’un élément parent.

Dans cet exemple, le premier `a` est un enfant direct de l’élément parent `article`.

```html
<article>
  <a href="#">La pizza</a>
  <p>La pizza est un plat qui se <a href="#">mange chaud</a>.</p>
</article>
```

Pour ne sélectionner que ce premier `a` et non celui qui est dans le `p` voici un exemple de sélection hiérarchique directe en CSS.

```css
article > a {color: green}
```

### Sélecteur de proximité

Ce sélecteur permet à un élément enfant de sélectionner un de ses frères ou sœur (un autre élément appartenant au même parent) qui est situé après lui.

```html
<img src="pizza01.png" alt="Pizza calabraise">
<h1>La pizza</h1>
<img src="pizza02.png" alt="Pizza 4 fromages">
```

```css
/* La seconde image a une bordure rouge */
h1 ~ img {
  border: 1px solid red;
}
```


::: callout
## À lire à l’envers

Les sélecteurs par combinaisons se lisent à l’envers. L’élément qui est ciblé est le dernier de la combinaison, chaque caractère de séparation peut être remplacé par une expression comme suit :

- `a b` (espace) : Élément a **enfant de** b;
- `a > b` : **Enfant direct de…**;
- `a + b` : **Situé juste après…**;
- `a ~ b` : **Frère de…**.
:::

## Les groupes de sélecteurs

CSS permet de cibler plusieurs éléments en une seule déclaration en séparant chaque sélecteur d’une virgule.

```css
/* Les éléments listés ici sont verts */
p, a, h1, .highlight {color: green}
```


## Références

- [Les sélecteurs sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Selectors);
- [Une belle collection de sélecteurs](https://htmldog.com/references/css/selectors/) avec des exemples;