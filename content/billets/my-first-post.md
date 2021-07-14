---
title: 'À propos'
date: 2021-07-05T00:05:03+02:00
draft: true
slug: a-propos
summary: À propos de ce blog, des outils utilisés, de son contenu…
---

**Un pense-bête, une documentation, un premier billet pour tester
différentes fonctionnalités. Si vous êtes curieux, n’hésitez surtout,
fouillez, récupérez, copiez, collez et adaptez à vos besoins.**

## Hugo, testé et adopté

Je suis amoureux des outils de génération de sites statiques.
Ce sont des outils simples, libres, utilisant des langages qui me sont accessibles et performants.

Ainsi ce blog est généré avec [Hugo](https://gohugo.io/), un _framework_ spécialement conçu à cet effet.

Hugo permet de créer toute forme de site, du blog au site d’e-commerce, le contenu est rédigé en [Markdown](https://daringfireball.net/projects/markdown/syntax), un langage léger, un standard d’usage, me permettant de générer de l’HTML confortablement.

### Pour commencer, un thème tout fait

Le thème utilisé est [Hyde](https://themes.gohugo.io/themes/hyde/) par Mark Otto (@mdo) porté sur Hugo par [Steve Francis](https://github.com/spf13/hyde), légèrement modifié et adapté pour la langue française et ajouter quelques fonctionnalités.

- [ ] 📓 TODO : Faire mon propre thème, promis. 

## Un markdown étendu

Hugo utilise un moteur de rendu nommé Goldmark pour tout ce qui est contenu. Ce moteur respecte le standard *commonMark* mais l’étend avec quelques éléments intéressants.

## Insertion de code simple

### Exemple de code en shell

```sh
$ hugo server -D
```

### Exemple de code `html`

```html {hl_lines=[2]}
<!-- Commentaire -->
<figcaption class="commented-code__caption">
    <div class="commented-code__caption-meta">  
      <em class="commented-code__lang">html</em>
      <em class="commented-code__filename">index.html</em>
    </div>
    <div class="commented-code__caption-content">Un exemple de fichier super</div>
  </figcaption>
```

### En SVG
```svg
<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="10" y="10" height="100" width="100" style="stroke:#ff0000; fill: #0000ff"/>
</svg>
```

### JavaScript
```javascript
// Un commentaire en JS
const hello = "hello"
function hello() {
    console.info(hello);
}
```

### CSS
```css
/* Un commentaire en CSS */
body {
    background-color: red;
}
.class {
  color: blue;
}
```

## Insertion de code enrichi

Ce module que j’ai *développé* utilise les [*shortcodes* d’Hugo](https://gohugo.io/templates/shortcode-templates/) et me permet d’insérer un extrait de code, d’indiquer le langage utilisé, le nom du fichier et d’ajouter un petit commentaire.

{{< code lang="markdown" caption="Exemple d’insertion de code enrichie" filename="post.md">}}
```markdown
{{</* code lang="markdown" caption="Exemple d’insertion de code avancée" filename="post.md" */>}}
## Je ne sais *pas* ce qu’est la récursivité…
{{</* /code */>}}
```
{{< /code >}}

### Source du module

{{< code lang="Go html/template" caption="Shortcode pour afficher du code enrichi de quelques infos" filename="codecaption.html">}}
``` html
<figure class="commented-code">
  <div class="commented-code__code">
    {{ .Inner | markdownify }}
   </div> 

  <figcaption class="commented-code__caption">
    <div class="commented-code__caption-meta">  
      <em class="commented-code__lang" title="Type de fichier">{{ .Get "lang"}}</em>
      <em class="commented-code__filename" title="Position et nom du fichier">{{ .Get "filename"}}</em>
    </div>
    <div class="commented-code__caption-content">{{ .Get "caption"}}</div>
  </figcaption>
</figure>
```
{{< /code >}}
