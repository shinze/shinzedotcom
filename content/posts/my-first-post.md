---
title: 'À propos'
date: 2021-07-05T00:05:03+02:00
draft: true
summary: À propos de ce blog, des outils utilisés, de son contenu…
---

**Un pense-bête, une documentation, un premier billet pour tester
différentes fonctionnalités. Si vous être curieux, n’hésitez surtout,
fouillez, récupérez, copiez, collez et adaptez à vos besoins.**

## Hugo, testé et adopté

Je suis tombé amoureux des outils de génération de sites statiques.
Ce sont en général des outils simples, libres, utilisant des langages qui
me sont accessibles souvent très performants.

Ce blog est généré avec [Hugo](https://gohugo.io/), un _framework_ spécialement
fait pour ce genre de choses.

Hugo permet de créer toute forme de site, du blog au site d’e-commerce,
le contenu est pour moi écrit en
[Markdown](https://daringfireball.net/projects/markdown/syntax), un
langage léger permettant de générer de l’HTML très simplement.

### Un thème tout fait pour commencer

Le thème utilisé ests [Hyde](https://themes.gohugo.io/themes/hyde/) par Mark Otto (@mdo), légèrement modifié et adapté pour la langue française.

- [ ] 📓 TODO : Faire mon propre thème, promis. 

## Comment ça marche ?

Ce site fonctionne grâce à Hugo, un générateur de site statique.


## Insertion de code simple

### Exemple en shell

```sh
$ hugo server -D
```
### Exemple en html

```html {hl_lines=[2],linenostart=1}
<!-- Commentaire -->
<figcaption class="commented-code__caption">
    <div class="commented-code__caption-meta">  
      <em class="commented-code__lang">html</em>
      <em class="commented-code__filename">index.html</em>
    </div>
    <div class="commented-code__caption-content">Un exemple de fichier super</div>
  </figcaption>
```

### En JavaScript
```javascript
var toto = "hello"
```
## Insertion de code un peu enrichie

Ce petit module utilise les [*shortcodes* d’Hugo](https://gohugo.io/templates/shortcode-templates/) et me permet d’insérer un 
extrait de code, d’indiquer le langage utilisé, le nom du fichier et un petit 
commentaire en plus.

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
