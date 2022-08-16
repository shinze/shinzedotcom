---
tags: "standards-web"
title: "Les standards HTML, CSS, SVG et une pincée de JS"
date: Last Modified
---
## Des standards ?

HTML, CSS, SVG et JS sont des langages fondamentaux du web définis par le [W3C](https://www.w3.org/), un regroupement d’industriels du marché du web dont l’objectif est de définir [des standards](https://www.w3.org/standards/) pour de nombreuses technologies dont le web fait partie.

Parmi [les entreprises membres du W3C](https://www.w3.org/Consortium/Member/List) on peut citer : Google, Apple, Microsoft, Cisco, Mozilla… (De petits acteurs de l’économie).

Chaque page que vous pouvez consulter en ligne utilise un (ou plus) des langages listés ci-dessous :

- [HTML](html/) (HyperText Markup Language) est le langage qui permet de structurer et de donner du sens à du contenu sur le web;
- [SVG](svg/) (Scalable Vector Graphics) est un langage graphique pour créer des images vectorielles;
- [CSS](css/) va permettre de modifier les propriétés visuelles des éléments HTML  et SVG;
- [JS](js/) JS peut modifier ces langages, changer les propriétés d’éléments lorsque l’utilisateur interagit, charger des données, les afficher, rendre votre page dynamique.

## Dans cette section

{% for item in collections.standards-web %}
- [{{ item.data.title }}]({{ item.url }}): {{ item.data.description }} {{ item.data.parent }};
{% endfor %}
