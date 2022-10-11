---
color: "#F5B0CB"
eleventyNavigation:
  title: "Quelques conseils pour vous simplifier la vie"
  key: "Conseils"
  parent: "Pratiques"
  order: "1"
---

Aborder un projet pour le Web peut sembler insurmontable, voici quelques conseils pour vous simplifier la tâche et vous aider à avancer.

## C’est quoi le plan ?

Votre projet a plusieurs pages ? Une seule page ? Vous avez combien de projets à présenter dans votre portfolio ?

N’hésitez pas à prendre votre outil de dessin préféré et commencez à poser l’architecture générale de votre projet, ce que l’on nomme une arborescence. C’est souvent l’occasion de se poser des questions essentielles sur le contenu car au final tout est là : **quel est le contenu que je vais publier et comment je l’organise**.

![Exemple d’arborescence avec le site shinze.com](/img/arbo.png)

## Les autres font comment ?

*Tout comme pourrait être l’enfer le Web est pavé de bonnes idées*.

Le problème d’UX ou d’UI est rarement unique, essayez de trouver des réponses ailleurs, faîtes une étude *concurrentielle*, ils font comment les autres ?

Dans cette exercice *d’espionnage industriel* n’oubliez pas d’observer vos trouvailles, lisez, **utilisez votre cerveau et analysez**.

Beaucoup de réponses ne sont pas les bonnes, ou ne le sont que partiellement. Si vous ne savez pas, demandez conseil, faîtes des recherches complémentaires sur les éléments sur lesquels vous doutez.

::: callout
Attention à vous méfier aussi de la réponse *des gros* du marché (Apple, Google, …) qui [parfois font de mauvais choix](https://adrianroselli.com/2020/03/i-dont-care-what-google-or-apple-or-whomever-did.html) à un problème d’interface ou [d’accessibilité](https://twitter.com/zeldman/status/1334470523716309000).
::::

![Un bel exemple](/img/contre-exemple.png)

Un bel exemple, tiré du monde réel, et dont l’absurdité n’est pas à démontrer (probablement testé avec des zombies).

## Organisation du code

La pratique du développement, que vous débutez peut-être, réclame de la rigueur.

Contraignante en début de projet, cette rigueur devient un outil précieux lorque votre projet prend de l’ampleur, que vous devez manipuler de plus en plus d’éléments, que vous n’êtes (pas) plus seul sur le projet.

### Rangez votre chambre

Vos parents vous l’ont déjà expliqué (sûrement pour des raisons d’hygiène), dans un projet web le rangement est là pour préserver l’hygiène mentale de tous et éviter les difficultés techniques et les erreurs parfois difficiles à identifier.

- N’hésitez pas à **créer des dossiers et sous-dossiers pour organiser** vos média (images, fichier de code, pages);
- Pour le nom de tout ça : **pas d’espace pour séparer les mots** qui le composent (*Mes Images* deviendra `images` ou `mes-images`);
- Pas de caractères spéciaux, **ni caractères avec des accents ni émoji** (Un fichier *👉 Mickaël* deviendra `mickael`);
- **Regroupez vos documents par types**, c’est très pratique de ranger les images dans un dossier `images`;
- Chaque fichier **doit** porter une extension, ce sont les lettres situées à la fin du nom du fichier (après le point : `banana.png`). Cette extension correspond au type de votre fichier (`.png, .jpeg, .html, .js, .css, .md`…);
- Créez des dossiers pour chaque nœud de votre arborescence si le nombre de fichiers commence à augmenter un peu trop;

### Communiquez

Si vous aimez ranger vos documents par ordre alphabétique, dîtes-le ! Si vous préférez organiser vos dossiers en les préfixant d’un chiffre, parlez-en.

Documenter l’organisation de votre projet est un vrai bénéfice, lorsque vous êtes en équipe mais aussi quand vous reprenez un projet après l’avoir lâchement laissé de côté pendant 6 mois.

Pour cela, vous pouvez créer un [fichier Markdown](https://www.markdowntutorial.com/fr/) à la racine de votre projet (souvent intitulé `README.md`) dans lequel vous documentez l’organisation de votre projet, la manière de nommer les images, les choses à régler ou à finaliser et enfin comment marche ce projet, quels sont les choix techniques qui ont été faits ? Ça vous aidera dans 6 mois.

**Le nom de vos éléments et l’organisation de vos fichiers doivent être tristes à mourir**

### Testez

Vous produisez un projet mobile ? Testez le sur du matériel réel (un vrai téléphone), les sensations visuelles que vous allez avoir sont très différentes de ce qui est sur votre écran 17 pouces, les interactions sont différentes. C’est une expérience différente.

(Comme 99% des designers de la planète) vous réalisez un projet qui ne vous est pas destiné ? Testez-le avec des utilisateurs potentiels, dans des conditions reproduisant au mieux la réalité, ne les aidez pas et observez leur comportement (vous les aiderez par la suiite en améliorant votre interface) et enfin demandez leur avis, vous en apprendrez plus comme ça.

**Mettez-vous *dans la merde***, essayez votre projet avec le pire matériel que vous ayez à disposition. Vous pourrez alors vous mettre dans les conditions d’usage de votre projet dans le monde réel.





