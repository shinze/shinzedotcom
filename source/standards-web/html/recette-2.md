---
tags: "html"
title: "Exercice, la recette de cuisine, c’est parti (pour de vrai)"
---

[Par ici pour le début de cet exercice](../html/recette)

## Je pars sur une meilleure base

Dans ce document `index.html`, entre les balises `<body></body>`, je tape ça, [la même chose que précédemment](../recette) mais avec quelques balises de titres :

```html
<h1>Recette de la pizza quatre fromages</h1>
<h2>Listes des ingrédients</h2>
<h2>La recette</h2>
<h3>Et si je n’aime pas le gorgonzola ?</h3>
<h2>Accompagnements</h2>
```

<div class="callout">

**À noter que j’utilise des fois `h1`, d’autres `h2` ou encore `h3`, ces balises indiquent des titres de niveaux différents.**

Ces niveaux de titre vont de 1 à 6 (`h1, h2, h3…`) et **hiérarchise** le document, le `h1` est le plus haut niveau de hiérarchie et le `h6` le plus bas.

</div>

Une fois enregistré j’ouvre à nouveau le document avec mon navigateur et le résultat est déjà plus satisfaisant.

J’ai ensuite modifié quelques informations complémentaires, tout d’abord le titre de ma page, dans la balise `head`.

```html
<title>Recette de la pizza quatre fromages</title>
```

Puis la langue du document car cette page sera en français .

```html
<html lang="fr">
```

Après toutes ces modifications, voici le code que j’obtiens :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recette de la pizza quatre fromages</title>
</head>
<body>
  <h1>Recette de la pizza quatre fromages</h1>
  <h2>Listes des ingrédients</h2>
  <h2>La recette</h2>
  <h3>Et si je n’aime pas le gorgonzola ?</h3>
  <h2>Accompagnements</h2>
</body>
</html>
```

<div class="callout">

### À noter

Les espaces présents devant chaque balise sont ce que l’on nomme des indentations. Elles ne sont utiles qu’aux humains (vous) et leur rendre le document plus compréhensible.

</div>

## Encore un peu de contenu

Sour le `h1`, j’ajoute du contenu, un rapide texte d’introduction.

```html
  <h1>Recette de la pizza quatre fromages</h1>
  <p>Voici un plat qui vous rappelera l’Italie, ses parfums
    et ses plats succulents.</p>
```

Après j’attaque la liste des ingrédients, que je mets… Sous le titre indiquant la liste des ingrédients.

```html
  <h2>Listes des ingrédients</h2>
  <h3>Pour la pâte</h3>
  <ul>
    <li>700 grammes de farine;</li>
    <li>600 grammes d’eau tiède (environ 38 degrés);</li>
    <li>30 grammes de levure boulangère</li>
  </ul>
  <h3>Pour la sauce</h3>
  <ul>
    <li>Une branche de balisique;</li>
    <li>Origan frais ou en poudre</li>
    <li>300 grammes de tomates pelées;</li>
    <li>Sel et poivre</li>
  </ul>
  <h3>Pour la garniture</h3>
  <ul>
    <li>Mozarella;</li>
    <li>Gorgonzola</li>
    <li>Emmental</li>
    <li>Parmesan</li>
  </ul>
```

La liste des ingrédients est complète, j’ai ajouté quelques `h3` pour fournir un peu plus d’informations au utilisateurs qui souhaiteraient réaliser cette sucullente recette. 

Les balises `ul, li` permettent d’indiquer la présence d’une liste (un ensemble d’informations que l’on regroupe), chaque item de la liste est mis dans une balise `li` et l’ensemble des éléments est dans une balise `ul` (**U**nordered **L**ist).

[Par ici, je continue la recette](../recette-3)