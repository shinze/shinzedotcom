---
tags: [Notebooks/Cours/HTML]
title: Attributs
created: '2022-07-03T11:58:50.626Z'
modified: '2022-07-03T13:28:35.384Z'
---

# Des attributs

- Un attribut est une propriété que l’on donne à un élément html pour modifier son comportement;
- Un attribut se compose d’un nom d’attribut et d’une ou plusieurs valeurs;
- Un attribut ne s’ajoute qu’à la balise ouvrante de l’élément.

```html
<a href="https://perdu.com">Vous êtes perdu ?</a>
```

Exemple d’une balise délimitant un lien, ici les balises `<a></a>` permettent d’ajouter un lien sur le contenu `vous êtes perdu`.\
L’attribut nommé `href` permet ici d’indiquer l’adresse à laquelle l’utilisateur sera redirigé : `https://perdu.com` une fois le lien activé.


## À retenir à propos des attributs

### Quelques éléments ont des attributs obligatoires

1. Les liens et l’attribut `href`, sinon le lien ne marche pas);
2. L’attribut `alt` sur les images;
	
### Un attribut peut comporter plusieurs valeurs

C’est le cas de l’attribut `class` comme sur l’exemple suivant.

```html
<p class="paragraphe intro">…Contenu…</p>
<!-- Cet autre paragraphe n’a pas de class -->
<p class="">…Contenu…</p>
```

- Notez qu’une valeur d’attribut n’est pas toujours obligatoire;
- Quelques attributs ne peuvent avoir qu’une seule valeur d’attribut (`href` par exemple, en HTML, un lien ne peut pas rediriger sur plusieurs pages :)).

### Quel attribut sur quel élément ?

Les attributs `id` et `class` qui sont utilisables sur tous les éléments qui composent une page `html`.

Quelques attributs ne sont utilisables que sur quelques types d’éléments, on ne peut par exemple pas mettre l’attribut `href`.


