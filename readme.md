# À lire pour toi patate

C’est le repo pour tes cours. Ça tourne sous eleventy.

La ressource que tu as utilisé est celle ci : https://www.youtube.com/watch?v=BKdQEXqfFA0 trouvé en venant d’ici https://www.11ty.dev/docs/tutorials/

- À voir pour minifier les ressources : https://www.benjaminrancourt.ca/how-to-minify-your-eleventy-build/
- À lire : https://web.dev/learn/css/the-cascade/

## Documentation

- Lancer le projet en dev : `npm start`;
- _builder le projet_ : `npm run build`.

### Structure de l’appli

- Chaque dossier est un nœud de l’arborescence et contient un fichie `dossier.json` contenant les données propres de ce niveau d’arborescence.
- La navigation globale est gérée par `_data/navigation.js` et l’affichage est calculé dans `base.njk`;
- Utilisation de MarkdownIt;
- Utilisation de https://github.com/markdown-it/markdown-it-mark pour les tags md marqués de ==tag==;


## Ressources

- https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/;
- [Hello test](./test.md)
