---
tags: "standards-web"
title: "Les standards HTML, CSS, SVG et une pincée de JS"
---

HTML, CSS, SVG et JS sont des langages fondamentaux du web, documentés par le [W3C](https://www.w3.org/), un regroupement d’industriels du marché du web (fabricants ou fournisseurs de matériel, de logiciels, de services) dont l’objectif est de définir ces standards [parmi d’autres](https://www.w3.org/standards/).

Parmi [les entreprises membres du W3C](https://www.w3.org/Consortium/Member/List) on peut citer : Google, Apple, Microsoft, Cisco, Mozilla… (De petits acteurs économiques).

Chaque page que vous pouvez consulter en ligne utilise un (ou plus) des langages listés ci-dessous :

- [HTML](@note/1-00 - HTML) (HyperText Markup Language) est le langage qui permet de structurer et de donner du sens à du contenu sur le web;
- SVG (Scalable Vector Graphics) est un langage graphique pour les images vectorielles;
- CSS est ce va permettre de modifier les propriétés visuelles des éléments HTML  et SVG;
- JS peut modifier ces langages, changer les propriétés d’éléments lorsque l’utilisateur interagit, charger des données, les afficher, rendre votre page dynamique.

## À consulter dans cette section

{% for post in collections.standards-web %}
- [{{ post.data.title }}]({{ post.url | url}})
{% endfor %}



<!-- 1. Le langage [[HTML]];
	1. [[Des attributs]];
	2. [[Des balises]];
	3. Structure d’une page HTML;
	4. La sémantique;
	5. Accessibilité;
	6. Des ressources pour aller plus loin;
	7. Exercices;
2. Le langage [[CSS]];
	1. Utiliser CSS avec HTML;
	2. Des sélecteurs;
	3. Des propriétés;
	4. 
3. Le langage [[SVG]];
4. Les outils pour développer
5. Qualité; -->


