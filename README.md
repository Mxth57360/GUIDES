# Guides Skool 2.0

Les guides en ligne, hébergés gratuitement sur GitHub Pages, indépendamment de Claude.

## Mettre en ligne (une seule fois)

1. Connecte-toi sur github.com (compte gratuit).
2. En haut à droite : **+** › **New repository**. Nom : `GUIDES`. Coche **Public**. Clique **Create repository**.
3. Sur la page du dépôt vide, clique **uploading an existing file**, puis glisse le **contenu** de ce dossier (le fichier `index.html` et le dossier `f1`). Clique **Commit changes**.
4. Onglet **Settings** › **Pages** › *Build and deployment* : Source **Deploy from a branch**, Branch **main**, dossier **/ (root)**, puis **Save**.
5. Une à deux minutes plus tard, le guide est en ligne :
   - accueil : `https://mxth57360.github.io/GUIDES/`
   - guide F1 : `https://mxth57360.github.io/GUIDES/f1/` (c'est ce lien qu'on envoie aux gens qui commentent FORMULE 1)

## Ajouter un nouveau guide

Ajoute un dossier à côté de `f1` (par exemple `motion/` avec son `index.html` et son dossier `media/`), puis une carte dans `index.html`. Il sera en ligne à `https://mxth57360.github.io/GUIDES/motion/`.

## Modifier un guide

Ouvre le fichier sur github.com, clique sur le crayon, modifie, puis **Commit changes**. Le site se met à jour en une minute.

## Bon à savoir

- Le site reste en ligne tant que le dépôt existe, même si la conversation Claude est supprimée.
- Limites GitHub Pages : 25 Mo par fichier envoyé depuis le navigateur, environ 1 Go par site. Garde les vidéos compressées (le guide F1 pèse 13 Mo).
- Pour un aperçu propre quand le lien est partagé, remplace dans `f1/index.html` la ligne `og:image` par l'adresse complète de l'image, par exemple `https://mxth57360.github.io/GUIDES/f1/media/img/poster_final.jpg`.
- Nom de domaine perso (ex. `guides.tondomaine.fr`) : Settings › Pages › Custom domain, puis un enregistrement CNAME chez ton registrar vers `TON-PSEUDO.github.io`.
