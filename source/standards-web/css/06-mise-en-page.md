---
eleventyNavigation:
  title : "La mise en page (à faire)"
  excerpt: "grid, flex et autre propriétés de mise en page"
  key: "La mise en page"
  parent: "CSS"
  order: 6
---

Les outils de mise en page sont *relativement* récents en CSS. Les premiers site web (le langage CSS n’existait pas) étaient mis en page avec des tableaux (essayez de faire une mise en page sur un tableur comme Excel)

C’est plus tard avec l’arrivée du langage CSS que des premières tentatives de sortir des mises en page à base de tableaux est apparue.

## Des boîtes

En HTML ([comme vu auparavant](../css/01-des-boites.md)), la présentation des éléments prend la forme d’une boîte avec deux principaux modèles de boîte : des boîtes qui se positionnent les unes sur les autres et des boîtes qui se mettent les unes à côté des autres (sur une ou plusieurs lignes).

Ce concept de boîte est l’outil fondamental de mise en page en CSS, c’est ce qui régit le flux d’une page HTML et de chaque élément qui la compose.



```html
<h1>Les pizzas</h1>
<p>Un plat réellement équilibré ?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur ratione autem, sit eveniet fugit quae porro, optio, expedita dignissimos delectus voluptates! Nihil voluptatibus eum autem facilis praesentium odio cumque!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel assumenda animi dolores! Dicta, voluptatum ducimus ratione reiciendis harum accusantium eligendi alias aperiam fuga possimus nobis molestias necessitatibus laboriosam commodi quasi.</p>
```