---
weight: 1
favicon: "🐒" 
title: 'Qu’est-ce que ce langage CSS ?'
summary: 'Le langage en quelques lignes'
tags: ['learn', 'css']
date: 2021-07-10T01:18:26+02:00
draft: true
---

*CSS* pour _Cascading StyleSheet_ (feuille de styles en cascade) est
le langage de mise en forme pour le web et permet de…

1. **Sélectionner** un ou un ensemble d’éléments avec un *sélecteur*;
2. **Modifier des propriétés** visuelles pour la plupart (par exemple : largeur, couleur…);
3. **Attribuer une valeur** à ces propriétés (`130px`, `blue…`).

{{< figure class="commented-image" src="/learn/css/images/description-css.svg"
caption="Exemple de bloc de déclaration avec un sélecteur, deux déclarations, des propriétés et des valeurs">}}

Une feuille de styles ou document `css` se nomme avec l’extension *.css*, par exemple *style.css* ou
*page.css* et peuvent s’appliquer à des documents `html` mais aussi à un fichier `svg` et permettent de changer l’aspect visuel de n’importe quel élément séléctionné.

## Un exercice pour débuter

{{< hi >}}
**Note** : les outils
{{</hi>}}

**Vous allez avec votre outil de choix créer votre premier (?) site.**

1. Créez un dossier que vous pouvez nommer **🗂  Mon premier site** par exemple;
2. Ouvrez votre éditeur de code préféré ♥️;
3. Créez deux fichiers, un fichier nommé `index.html` et un autre `style.css` que vous enregistrez
dans le dossier précédemment créé.

{{<hi>}}
**Note** : Faire un nouveau document html avec VS Code
{{</hi>}}

Et dans ces fichiers taper le code suivant.

{{< code
  lang="css"
  filename="Mon premier projet/style.css"
  caption="Dans cet exemple, on sélectionne un élément `h1` auquel on applique une couleur bleue" >}}
```css
h1 {
    color: blue
  }
```
{{< /code >}}


{{< code
  lang="html"
  filename="Mon premier projet/index.html"
  caption="Dans le fichier `html` on relie d’abord le fichier `css` en l’ajoutant dans le `head`" >}}
```html {hl_lines=[4],linenostart=1}
…
<head>
  <!-- D’autres éléments seront présents dans le head du document. -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
…
```
{{< /code >}}


{{< code
  lang="html"
  filename="Mon premier projet/index.html"
  caption="Dans le `body` du document `html` on ajoute le titre de notre contenu" >}}
```html
<body>
  <h1>Mon premier site internet !</h1>
</body>
```
{{< /code >}}

La dernière étape est d’ouvrir cette page avec un navigateur de votre choix et si tout se passe bien,
vous devez voir le texte que vous venez d’ajouter en couleur bleue.

{{<hi>}}

## Ce que vous venez de réaliser

1. **Ce que vous allez faire pour chacun de vos projets, créer un dossier et y ajouter les fichiers
qui composent votre projet (documents `html`, `css`, `js`… et plus tard vos images)**;
2. Lier une feuille de styles à un document `html`;
3. Ajouter votre premier _sélecteur_ à une page et modifier _la propriété_ d’un élément.

**Bravo, c’est votre premier site web !**
{{</hi>}}

## Ressources

- [Shay Howe, Learn to code HTML & CSS](https://learn.shayhowe.com/html-css/);
- [Mozilla, Les bases de CSS](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics);
- [La cascade](https://la-cascade.io/);
