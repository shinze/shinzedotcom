---
weight: 1
title: 'Introduction au langage CSS'
summary: 'Le langage en quelques lignes'
tags: ['learn', 'css']
date: 2021-07-10T01:18:26+02:00
draft: true
---

`css` pour _Cascading StyleSheet_ (feuille de styles en cascade) est
le langage de mise en forme des pages `html` et `css` permet :

1. De **sélectionner** un ou un ensemble d’éléments;
2. De **modifier des propriétés** (visuelles pour la plupart, largeur, couleur…);
3. Et d’**attribuer une valeur** à ces propriétés (par exemple : `130px`, `blue…`).

## Un exemple

**Note** : les outils
Vous allez avec votre outil de choix créer votre premier (?) site.

1. Créez un dossier que vous pouvez nommer comme vous souhaitez («Mon premier site» par exemple);
2. Ouvrez votre éditeur de code préféré;
3. Créez deux fichiers, un fichier nommé `index.html` et un autre `style.css`;

**Note** : Faire un nouveau document html avec VS Code

Et dans ces fichiers taper le code suivant.

{{< code
  lang="css"
  filename="style.css"
  caption="Dans cet exemple, on sélectionne un élément `h1` auquel on applique une couleur bleue" >}}
```css
h1 {
    color: blue
  }
```
{{< /code >}}


{{< code
  lang="html"
  filename="index.html"
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
  filename="index.html"
  caption="Dans le `body` du document `html` " >}}
```html
<body>
  <h1>Mon premier site internet !</h1>
</body>
```
{{< /code >}}
