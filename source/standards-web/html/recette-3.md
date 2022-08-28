---
title: "Exercice, la recette de cuisine, c’est parti (S1E3)"
eleventyNavigation:
  key: "Recette, page 3"
  parent: "Recette"
---

[Consulter la précédente étape](../recette-2)

## Vous en reprendrez bien un peu ?

Une liste d’ingrédients sans recette étant décevante, je suis évidemment passé à la rédaction de la suite, la recette.

Voici le code que j’ai ajouté :

```html
<h2>La recette</h2>
<ol>
  <li>Pour la pâte, dans la farine déposez l’eau et la levure et mélanger afin
    d’assembler les ingrédients ensemble puis laissez reposer deux heures
    couvert d’un torchon humide;</li>
  <li>Pour la sauce, dans une poêle, déposez un filet d’huile d’olive, faîtes revenir
    la pulpe de tomates, une fois la pulpe chaude ajoutez les arômates;</li>
  <li>Après les deux heures de pose, sortez la pâte sur un plan de travail, découpez
    votre pâte en quatre parties égales et formez ainsi quatre boules que vous allez traivailler
    puis laisser reposer une heure.</li>
  <li>Une fois la pâte reposée, former une pizza avec chaque pâton, déposez la sauce sur toute
    sa surface puis déposez quelques morceaux de fromages;</li>
  <li>Vous pouvez cuire vos pizzas dans un four à 230 degrés pendant 15 minutes</li>
</ol>
```

Si vous êtes observateur vous pouvez voir ici l’utilisation d’un type de liste différent, un `ol` (et toujours des `li` pour les items de la liste).

**Cette balise indique une liste ou l’ordre des éléments a son importance : c’est difficile de faire cuire la pizza sans sa pâte, c’est adapté à mon exemple**

## La fin de la recette

Après la recette, j’ai poursuivi comme ceci :

```html
<h3>Et si je n’aime pas le gorgonzola ?</h3>
<p>Si tel est le cas, sachez tout d’abord que vous n’avez aucun goût. Si vous n’aimez pas ce
  délice qu’est le gorgonzola, je vous propose de le remplacer par un fromage insipide de votre
  choix.
</p>
<h2>Accompagnements</h2>
<p>La pizza se déguste tout d’abord avec des amis, un bon vin italien
  ou une eau pétillante bien fraîche.</p>
<p>Vous pouvez aussi accompagner vos pizzas d’une salade de mâche assaisonnée de vinaigre balsamique.</p>
```

De simples paragraphes `p` pour développer chacun des contenus proposés.

## La recette complète (pour les gourmands)

<div class="callout">
Je ne vous conseille pas de réaliser cette recette qui est improvisée.
</div>

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recette de la pizza quatre fromages</title>
</head>
<body>
  <h1>Recette de la pizza quatre fromages</h1>
  <p>Voici un plat qui vous rappelera l’Italie, ses parfums
  et ses plats succulents.</p>
  <h2>Listes des ingrédients</h2>
  <h3>Pour la pâte</h3>
  <ul>
    <li>700 grammes de farine;</li>
    <li>600 grammes d’eau tiède (environ 38 degrés);</li>
    <li>30 grammes de levure boulangère</li>
  </ul>
  <h3>Pour la sauce</h3>
  <ul>
    <li>Une branche de balisique;</li>
    <li>Origan frais ou en poudre</li>
    <li>300 grammes de tomates pelées;</li>
    <li>Sel et poivre</li>
  </ul>
  <h3>Pour la garniture</h3>
  <ul>
    <li>Mozarella;</li>
    <li>Gorgonzola</li>
    <li>Emmental</li>
    <li>Parmesan</li>
  </ul>
  
  <h2>La recette</h2>
  <ol>
    <li>Pour la pâte, dans la farine déposez l’eau et la levure et mélanger afin
      d’assembler les ingrédients ensemble puis laissez reposer deux heures
      couvert d’un torchon humide;</li>
    <li>Pour la sauce, dans une poêle, déposez un filet d’huile d’olive, faîtes revenir
      la pulpe de tomates, une fois la pulpe chaude ajoutez les arômates;</li>
    <li>Après les deux heures de pose, sortez la pâte sur un plan de travail, découpez
      votre pâte en quatre parties égales et formez ainsi quatre boules que vous allez traivailler
      puis laisser reposer une heure.</li>
    <li>Une fois la pâte reposée, former une pizza avec chaque pâton, déposez la sauce sur toute
      sa surface puis déposez quelques morceaux de fromages;</li>
    <li>Vous pouvez cuire vos pizzas dans un four à 230 degrés pendant 15 minutes</li>
  </ol>
  <h3>Et si je n’aime pas le gorgonzola ?</h3>
  <p>Si tel est le cas, sachez tout d’abord que vous n’avez aucun goût. Si vous n’aimez pas ce
    délice qu’est le gorgonzola, je vous propose de le remplacer par un fromage insipide de votre
    choix.
  </p>
  <h2>Accompagnements</h2>
  <p>La pizza se déguste tout d’abord avec des amis, un bon vin italien
    ou une eau pétillante bien fraîche.</p>
  <p>Vous pouvez aussi accompagner vos pizzas d’une salade de mâche assaisonnée de vinaigre balsamique.</p>
</body>
</html>
```
