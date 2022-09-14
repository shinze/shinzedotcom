---
color: "#FC7A57"
eleventyNavigation:
  title: "Les images"
  excerpt: "Et même les gif animés"
  key: "Images"
  parent: "HTML"
  order: 3
---

Les images sont des éléments insérés dans un document HTML, elles ne font pas partie de la page mais sont des ressources externes téléchargées par le navigateur au moment de leur affichage.

## Exemple simple avec trois types d’images

```html
 <img src="images/logo.svg" alt="logo les recettes de Gaëtan">
 <img src="images/olive.jpg" alt="une olive verte">
 <img src="images/pizza.png" alt="une belle pizza quatre fromages">
```

Ci-dessus un exemple illustrant l’insertion de trois images de types différents.

::: callout

## En résumé (tltr)

- La plupart des images sur le Web sont au format PNG;
- Les éléments graphiques (logotypes, des icônes) utilisent le format SVG;
- L’attribut `alt` doit être mis sur chaque image et sa valeur renseignée si l'image fait partie du contenu.

:::

## L’attribut `alt`

**L’attribut `alt` est obligatoire, sa valeur quand elle n’est nécessaire que si l'image sert au contenu et n’est pas un simple élément de décoration.**

La valeur de cet attribut sera affichée si l’image venait à manquer (réseau interrompu, image non trouvée) et ce sera aussi ce qui sera lu par une synthèse vocale lorsqu’un utilisateur ayant une déficience visuelle parcourt votre page.

![une image utile](/img/image-404.jpg)

## Les différents types d'images et leur usage

SVG, PNG, JPG, WebP, GIF : Voici il est types d’images utilisables sur le Web aujourd’hui.

### Le format SVG

*Scalable Vector Graphics* (SVG) est un format vectoriel, que l’on peut agrandir à l'infini sans perdre de résolution, contrairement aux autres types d’images de cette liste (formats matriciels).

SVG est un langage à balises, comme HTML et fait partie des standards du Web, est *scriptable*, c'est-à-dire que JavaScript et CSS peuvent modifier ses propriétés (quand le code SVG est directement ajouté dans le fichier HTML).

Comme toute image vectorielle SVG est très adapté aux illustrations, au logotypes, aux images portant de la typographie et à tout autre élément réclamant un tracé précis.

```html
<h1>Exemples avec SVG</h1>

<h2>Exemple avec un fichier SVG externe</h2>
<img src="illustration.svg" alt="une belle illustration">

<h2>SVG directement inséré dans le document HTML</h2>
<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,
    18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" />
</svg>
```

Dans cet exemple, j’illustre deux méthodes permettant d’insérer un fichier svg :

- La première méthode permet d’importer un fichier svg comme une ressource externe, comme toute image;
- La seconde méthode consiste en l'insertion du code du fichier svg dans le document HTML, ce qui nous permettra plus tard de **modifier certaines de ses propriétés via des CSS ou encore du JavaScript**.

### Le format GIF

*Graphics Interchange Format* (GIF) est un format d’image matriciel, très connu pour ses animations.

GIF ne permet d’afficher que 256 couleurs simultanément (8 bits), les images GIF peuvent aussi comporter de la transparence mais ne sera encodée que sur un seul *bit* (autrement dit avec un seul niveau de transparence, un pixel sera transparent ou non transparent, ce qui peut créer un effet d'escalier là où se situe la transparence).

GIF est encore aujourd’hui très utilisé pour ses capacités d’animation mais est abandonné pour les images statiques en faveur d'un format plus moderne comme PNG.

![Cours Pikachu cours](/img/exemple–gif–transparent.gif)

Exemple de GIF animé transparent.

### Le format JPEG

 *Joint Photographic Experts Group* (JPEG) est un format d’image utilisant un algorithme de compression du même nom, optimisé pour la photographie ou pour des images permettant un certain *flou artistique*.

 L'algorithme de compression de JPEG permet de conserver plus de couleurs d'une image au détriment de sa définition et de sa finesse.

<div class="callout">

Les formats GIF comme le format JPEG, sont des algorithmes de compression avec *perte*, cela veut dire que votre image perd des informations et donc de la qualité.

</div>

![une image JPEG trop compressée](/img/compression–jpg.jpg)

 Ci-dessus un exemple d’une image JPEG trop compressée sur laquelle on constate une grande perte de qualité.

### Le format PNG

*Portable Network Graphics* est format plus moderne que les précédents formats JPEG ou GIF, son algorithme de compression est sans perte et permet une transparence sur 24 bits (sans effet d'escalier).

*Le format PNG est aujourd'hui très largement utilisé pour des images graphiques comme pour de la photographie.*

Historiquement PNG permettait de faire de l'animation avec le format APNG mais son usage est marginal aujourd'hui (en faveur du GIF animé).

### Le format WebP

Inventé par Google, ce format a pour objectif de limiter la quantité de données qui circule sur une bande passante. 

Le format WebP a de larges capacités techniques, il supporte la transparence comme PNG, l'animation comme le GIF animé et enfin d'autres fonctionnalités comme la stéréoscopie. Enfin, ce format porterai ses promesses en permettant un gain de 40 % comparé aux images de type GIF JPEG ou PNG.

## Mieux renseigner ses images

Dans une page il est souvent nécessaire de renseigner une image sur son contenu, son auteur, le contexte dans lequel une photographie a été prise.

L’attribut `alt` comme nous l’avons vu permet de renseigner une image, mais cette information n’est pas directement accessible ou tout simplement visible, c’est pour cela qu’en HTML il existe des balises permettant de mieux renseigner un élément d’illustration comme une image, ce sont les balises `figure` et `figcaption`.


### Un exemple d’utilisation de la balise figure

```html
<figure>
  <img src="/img/DCS-2098-FDE23.png" alt="Un chat dans un arbre">
  <figcaption>
    Un chat sauvage confortablement installé dans un arbre,
    profitant du soleil, photo de M. Lechat prise en Espagne
    (Tous droits réservés)
  </figcaption>
</figure>
```

### Un élément utile pour d’autres choses que les images

L’exemple précédent est assez parlant, mais ce qu’il faut noter est que l’élément `figure` n’est pas seulement réservé aux images mais à tout élément d’illustration comme dans ce qui suit.

```html
<figure>
  <p>Jeanne d’Arc a frit, elle a tout compris</p>
  <figcaption>
    Exemple d’humour noir, ici l’auteur (inconnu) fait un lien
    entre la vie de Jeanne d’Arc et un slogan publicitaire en utilisant
    un jeu de mots.
  </figcaption>
</figure>
```

## Références

- [Les images sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img);
- Aller beaucoup plus loin à propos des [types de fichiers pour les images](https://developer.mozilla.org/fr/docs/Web/Media/Formats/Image_types);