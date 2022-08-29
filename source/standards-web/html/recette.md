---
eleventyNavigation:
  title: "Exercice, la recette de cuisine, un faux départ"
  key: "Recette"
  parent: "HTML"
---

## C’est parti pour la recette !

Dans mon document `index.html` avec VS Code, j’ai commencé à saisir le plan de mon document comme ceci :

```html
Recette de la pizza quatre fromages
Listes des ingrédients
La recette
Et si je n’aime pas le gorgonzola ?
Accompagnements
```

## Un petit test

Une fois le document enregistré et ouvert avec mon [navigateur préféré](getfirefox.com), je ne vois rien de spectaculaire, le navigateur n’affiche même pas le saut entre chaque ligne.

Le document que je viens de créer porte bien l’extension `.html` et le navigateur sait afficher ce type de fichier mais ce n’est pas pour autant un document valide.

## Un meilleur départ

Dans VS Code, j’ai tout effacé et à partir de ce fichier `html` vierge j’ai tapé **«*!*» (un simple point d’exclamation) suivi de la touche de tabulation**, celle avec le caractère «*⇥*» de mon clavier.

VS Code a alors généré le code suivant : 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

Cette dizaine de ligne est la structure de base d’un document html valide et on y trouve les informations suivantes :

1. La première ligne, on indique au navigateur que le fichier est effectivement un document de type html;
2. La balise `<html>` (fermée à la dernière ligne de l’extrait) ce qui sera l’intégralité du code `html` de ma future page.\
À noter que par défaut, l’attribut `lang` a la valeur `en` ce qui signifie que cette page est en anglais (Une liste [complète et indigeste des codes de langue](https://fr.wiktionary.org/wiki/Wiktionnaire:BCP_47/language-2) existants);
3.`<head>`, (fermée à la ligne 8 `</head>`) représente l’entête du document. Permet de regrouper des [métadonnées](https://fr.wikipedia.org/wiki/M%C3%A9tadonn%C3%A9e) concernant le document;
4. Une métadonnée indiquant au navigateur le jeu de caractères utilisé pour votre contenu, [pour en savoir plus](https://openweb.eu.org/articles/jeux_caracteres/);
5. `<meta http-equiv="X-UA-Compatible" content="IE=edge">` réservée pour des problèmes de compatibilités de navigateurs *ancestraux* (Microsoft Explorer ©);
6. Cette métadonnée permet d’indiquer comment un *smartphone ou une tablette* doit gérer l’[affichage de votre page](https://developer.mozilla.org/fr/docs/Web/HTML/Viewport_meta_tag);
7. La balise `<title>` représente le titre de votre document **visible dans l’onglet de votre navigateur mais aussi sur les résultat de recherche** d’un moteur de recherche;
8. Fermeture de l’entête (`</head>`);
9. C’est dans `<body></body>` la partie *visible* de l’iceberg, votre contenu;

**[Pour la suite, c’est par ici](../recette-2)**‌