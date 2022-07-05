---
tags: "standards-web"
title: "Les standards HTML, CSS, SVG et une pincée de JS"
---

{{ tags[0] }}

HTML, CSS, SVG et JS sont des langages fondamentaux du web.

Ces langages sont documentés par le [W3C](https://www.w3.org/), un regroupement d’industriels du marché du web (fabricants ou fournisseurs de matériel, de logiciels, de services) dont l’objectif est de définir [ces standards](https://www.w3.org/standards/) parmi d’autres.

Parmi [les entreprises membres du W3C](https://www.w3.org/Consortium/Member/List) on peut citer : Google, Apple, Microsoft, Cisco, Mozilla… (De petits acteurs économiques).

Chaque page que vous pouvez consulter en ligne utilise un (ou plus) des langages listés ci-dessous :

- [HTML](html/) (HyperText Markup Language) est le langage qui permet de structurer et de donner du sens à du contenu sur le web;
- [SVG](svg/) (Scalable Vector Graphics) est un langage graphique pour les images vectorielles;
- [CSS](css/) est ce va permettre de modifier les propriétés visuelles des éléments HTML  et SVG;
- [JS](js/) JS peut modifier ces langages, changer les propriétés d’éléments lorsque l’utilisateur interagit, charger des données, les afficher, rendre votre page dynamique.

## Dans cette section

{% for item in collections.standards-web %}
- [{{ item.data.title }}]({{ item.url }}): {{ item.data.description }} {{ item.data.parent }};
{% endfor %}


<!-- 1. Le langage [[HTML]];
	1. [[Des attributs]];
	2. [[Des balises]];
	3. Structure d’une page HTML;
	4. La sémantique;
	5. Accessibilité;
	6. Des ressources pour aller plus loin;
	7. Exercices;
1. Le langage [[CSS]];
	8. Utiliser CSS avec HTML;
	9. Des sélecteurs;
	10. Des propriétés;
	11. 
2. Le langage [[SVG]];
3. Les outils pour développer
4. Qualité; -->


