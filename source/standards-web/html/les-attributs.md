---
color: "#d8bef8"
eleventyNavigation:
  title: "Les attributs"
  excerpt: "Nom d’attribut et valeur"
  key: "Les attributs"
  parent: "HTML"
  order: 2
---


Un attribut est un bout de code ajouté à un élément pour modifier ses propriétés, il est composé d’un nom d’attribut et d’une (ou plusieurs) valeurs et ne s’ajoute **qu’à la balise ouvrante** de l’élément qui le porte.


## Exemple simple d’attribut

```html
<a href="https://perdu.com">Vous êtes perdu ?</a>
```

Exemple d’une balise délimitant un lien, ici les balises `<a></a>` permettent d’ajouter un lien sur le contenu `vous êtes perdu`. L’attribut nommé `href` est l’adresse à laquelle l’utilisateur est redirigé vers `https://perdu.com` une fois le lien utilisé.


## Les attributs obligatoires

Des balises ont des attributs obligatoire, de manière intrinsèque car cet attribut est nécessaire au bon fonctionnement de l’élément mais aussi pour des raisons d’accessibilité :

- Les liens, l’attribut `href` et sa valeur, sinon pas de lien;
- L’attribut `alt` sur les images, cet attribut permet de renseigner l’image sur son contenu (si l’image n’est pas disponible ou si la personne ne peut pas voir les images).


## Un attribut peut avoir plusieurs valeurs

C’est le cas de l’attribut `class` comme sur l’exemple suivant. L’attribut `class` est un attribut utilisable sur n’importe quel élément en HTML (c’est un attribut très utilisé en CSS, il permet de sélectionner cet élément comme on le verra).

Les attributs `class` sont utilisables sur tous les éléments qui composent une page `html`.

```html
<p class="paragraphe intro">Contenu de l’intro</p>
<!-- Cet autre paragraphe n’a pas de class -->
<p class="">Un autre contenu</p>
```

Une valeur d’attribut n’est pas toujours obligatoire, c’est le cas pour l’attribut `alt` (sur les images). **Vous devez renseigner seulement se l’image *sert* le contenu**, ou contient du texte par exemple.

```html
<!-- exemple d’image ou le alt est nécessaire -->
<img src="img/affiche.jpg" alt="Fête du 13 juillet">
<!-- exemple d’image ou la valeur de alt n’est pas nécessaire -->
<img src="img/puce-liste.png" alt="">
```

Quelques attributs ne peuvent avoir qu’**une seule valeur** (`src` comme sur l’exemple précédent, la balise `img` permet d’insérer une image et n’accepte qu’une seule adresse).


## Références

- [Les attributs sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes);
