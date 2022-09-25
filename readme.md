# Description

Ici reposent les sources de shinze.com, ça tourne grâce à Eleventy.

## Pour lancer le projet en local

- Lancer le projet en dev : `npm start`;
- _builder le projet_ : `npm run build`.

## Quelques détails

- Le code CSS est minifié grâce à https://www.benjaminrancourt.ca/how-to-minify-your-eleventy-build/;
- HTML est minifié par le fichier de config;
- Chaque dossier est un nœud de l’arborescence et contient un fichier `dossier.json` contenant les données propres de ce niveau d’arborescence;

## Ressources

- 11ty : https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/;
- Gandi et Github pages : https://gist.github.com/matt-bailey/bbbc181d5234c618e4dfe0642ad80297;
- Ressources de Github (build, deploy) : https://maarten.be/blog/20220730/how-to-deploy-your-eleventy-website-to-github-pages-with-github-actions/
- Deploy GHpages script : https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-first-deployment-with-github_token



## Todo

- Mieux comprendre 11ty;
- Revoir le template de tags;