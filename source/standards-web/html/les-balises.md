---
cover: "adi-goldstein-mDinBvq1Sfg-unsplash.jpg"
color: "#EEFC57"
eleventyNavigation:
  title: "Les balises"
  key: "Les balises"
  parent: "HTML"
---

HTML est un **langage à balises**, des bouts de code permettant de délimiter différentes parties de votre contenu, chaque **élément** ainsi créé va apporter un sens différent à votre contenu.

Les *balises* permettent de renseigner différents types de contenus : des titres, des paragraphes, des listes, des liens, des images, des navigations, des sections, des formulaires et [la liste peut être longue](http://html5doctor.com/element-index/)

De fournir des balises adaptées permet d’améliorer [la sémantique](https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique) de votre contenu, son indexation dans les différentes moteurs de recherche et enfin et surtout l’acces de vos contenus au plus grand nombre.

## Comment ça marche ?

Pour baliser un contenu vous utiliserez (la plupart du temps) une balise ouvrante, une balise fermante et un contenu.

La balise ouvrante s’écrit `<nomBalise>` et la balise fermante `</nomBalise>`, entre ces deux balises le contenu que l’on souhaite délimiter.

``` html
<h1>Découvrir le langage HTML</h1>
<p>Le langage HTML (HyperText Markup Language) est…</p>
```

Ci-dessus, l’extrait d’un document `html` avec un exemple de balises délimitant différents types de contenus. Un titre (avec les balises `h1`) et un paragraphe (avec les balises `p`).

L’ensemble balise **ouvrante + contenu + balise fermante** se nomme **un élément**. Dans l’exemple précédent nous avons donc créé deux éléments.

## Des balises particulières

Certaines balises HTML sont dites *auto-fermantes*, c’est par exemple le cas de certaines balises qui n’ont pas de contenu propre, c’est aussi parfois des balises qui portent elle-même leur propre valeur (par le biais d’[un attribut](../les-attributs)).

Une image par exemple (un contenu externe téléchargé et affiché par le navigateur) a une balise qui est auto-fermante comme illustré juste après.

```html
<img src="https://placekitten.com/300" alt="On parle d’internet, il faut un petit chat">
```



## Un petit exercice

1. Suivez ce [guide de mise en place d’un projet pour le web](../../pratique/nouveau-projet);
2. Donnez-moi votre recette préférée dans le fichier *index.html* (si vous manquez d’inspiration faîtes la recette de ce que vous venez de manger);


Une fois que vous avez terminé votre recette, vous pouvez aller consulter [ma version de la pizza quatre fromages](../recette).

## Références

- [Liste de balises disponibles en HTML5](https://developer.mozilla.org/fr/docs/Web/HTML/Element);
- [Une autre liste d’éléments utilisables en HTML](http://html5doctor.com/element-index/), chaque élément HTML est ici analysé et illustré d’exemples.
