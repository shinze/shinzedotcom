---
weight: 2
title: "L’art de la sélection en CSS"
summary: ""
date: 2021-07-10T01:17:25+02:00
draft: true
---

**Savoir sélectionner un élément `html` avec `css` est indispensable à son utilisaton.**

Le langage `css` offre des outils vous permettant de sélectionner un ou plusieurs éléments et de leur appliquer un ensemble de propriétés.

## Sélection par balise, *tag* ou encore type

Ce mode permet de sélectionner un ou plusieurs éléments en utilisant le nom
de leur balise. Un `h1 {…}` pour sélectionner le titre principal du contenu, un `p {…}` pour 
sélectionner tous les paragraphes d’une page et leur appliquer des propriétés communes.

La sélection par balise est généralement utilisée pour régler un aspect visuel transverse
à votre page ou à votre site. Voici un exemple :

{{< code
  lang="html"
  filename="index.html"
  caption="Je crée deux sections dans lesquelles sont deux paragraphes." >}}

```html
<section>
  <p>Un exemple de texte</p>
</section>
<section>
  <p>Un autre exemple de texte</p>
</section>
```

{{< /code >}}

{{< code
  lang="css"
  filename="style.css"
  caption="Dans le fichier `css`, je sélectionne les `p` et change le corps du texte en le passant à `2rem`" >}}

```css
p { font-size: 2rem}
```

{{< /code >}}

Dans cet exemple tous les éléments dont le type est `p` sont sélectionnés et vont
avoir le même style.

{{<exercice>}}
Ajoutez un titre `<h3>` aux sections du document `html` et appliquez-leur en `css` une même couleur de votre choix.
{{</exercice>}}

## Sélection par `class`

Chaque élément d’un document `html` peut porter l’attribut `class`
et avoir une ou plusieurs valeurs (`class="valeur1 valeur2"`). Comme pour la sélection par type, 
cette manière de sélectionner permet de sélectionner un à plusieurs éléments
et de leur appliquer les mêmes propriétés.

## Sélection par valeur d’attribut

Permet la sélection d’éléments selon : 

- La présence ou non d’un attribut sur un élément;
- La valeur de l’attribut (la valeur *contient*, *commence par*, *fini par* ou *contient exactement*).

{{< code
  lang="css"
  filename="style.css"
  caption="Presque tous les modes de sélection par attribut" >}}

```css
/* Les éléments img qui contiennent un attribut alt */
img[alt] {
  border: 1px solid blue;
}

/* Les images dont la source a un nom qui commence par abc */
img[src^="abc"] {
  border: 3px solid purple;
}

/* Les images dont la source contient le mot fruit */
img[src*="fruit"] {
  border: 2px dotted red;
}

/* Les liens qui finissent en .com */
a[href~=".com"] {
  color: red;
}

/* Les liens dont l’attribut href est strictement égal à… */
a[href="https://www.perdu.com"] {
    color: green
}

/* Et celui-ci ? */
p[class="hello"] {
  color: orange;
}
```

{{< /code >}}

{{< hi >}}

### Exercice

Faîtes la page `html` qui correspond au fichier `css` cité en exemple ci-dessus.
{{< /hi >}}

**Note**: Il est tout à fait possible de *simuler* la sélection par `class`
par le biais de la sélection par attributs.

## Position hiérarchique

Ce mode de sélection `css` sert à sélectionner un ou des éléments selon leur
position dans le document `html` et permet par exemple de sélectionner
le premier élément d’un ensemble, la première lettre d’un paragraphe,
le dernier élément d’une liste, un élément situé après tel autre élément…

** ‼️  exemple **

## Sélection par état

## Quand utiliser une manière de sélectionner ou une autre ?
