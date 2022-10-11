---
color: "#C8FFBE"
eleventyNavigation:
  title: "CSS"
  excerpt: "Cascading StyleSheets"
  key: "CSS"
  parent: "Standards"
  order: 2
---

_Cascading StyleSheets_, ou les feuilles des styles en cascades (CSS) est le language du Web permettant de manipuler l’apparence d’éléments HTML mais aussi SVG.

<!-- TODO: lien SVG -->

CSS va nous permettre de sélectionner n’importe quel élément (ou une famille d’éléments) d’une page HTML, en modifier l’aspect visuel, changer la mise en page d’un document pour en adapter pour l’affichage sur un téléphone mobile, une tablette ou l’écran de [votre piscine connectée](https://www.oklyn.fr/) (oui, ça existe).

## La syntaxe

```css
/* Commentaire */
sélecteur {
  propriété: valeur;
  autre-propriété: valeur;
  /* Attention ce code n’est pas valide :) */
}
```

C’est un language descriptif structuré de la manière suivante :

- L’élément intitulé *[sélecteur](../css/02-les-selecteurs/)* est le bout de code qui va dire au navigateur de **sélectionner un ou plusieurs éléments**;
- La partie entre les accolades se nomme un *bloc de déclarations*;
- La ligne qui commence par *propriété* est appelée **une déclaration**, elle se finit par un point virgule(;);
- Le terme *propriété* indique la caractéristique à modifier (largeur, couleur, etc.);
- La valeur est ce qui sera attribué à la propriété;

::: callout
Notez que la propriété et la valeur sont toujours séparées de deux points (:).
:::

### Un exemple simple

```css
a {
  background-color: blue;
}
```

Dans cet exemple le navigateur va sélectionner tous les liens (les éléments `a`) et leur appliquer une couleur bleue.


## Appliquer des styles

Nous allons voir ensemble comment associer un fichier CSS à un fichier HTML.

Dans un premier temps, créez un fichier _style.css_ dans le dossier de votre projet dans lequel vous allez taper le code suivant (ou le copier, plus simplement).

```css
body {
  background-color: blue;
}
```

Ensuite, modifiez les pages HTML sur lesquelles vous souhaitez ajouter cette feuille de styles.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

Enfin, ouvrez une des pages HTML à laquelle vous avez ajouté la feuille de styles, **le fond de votre page devrait être bleu si tout marche comme prévu**.

### Et si chez moi ça ne marche pas ?

1. La page HTML que vous avez ouverte contient-t’elle bien le lien vers le fichier `style.css` ?;
2. Votre fichier `style.css` est-il correctement nommé ? Vous n’avez pas ajouté un *s* ? Remplacé le *y* par un *i* ? Des espaces invisibles ? Dans ce cas, retapez le nom du fichier.
3. Si votre feuille de styles est dans un dossier, il faut alors changer le chemin vers ce fichier;
4. Avez-vous simplement bien enregistré vos modifications ? (Oui, ça arrive aussi)

Pour la suite vous conseille [le modèle de boîte](01-des-boites){.cta}.