# Guides Skool 2.0

Les guides en ligne, hébergés gratuitement sur GitHub Pages, indépendamment de Claude.

## Mettre en ligne (une seule fois)

1. Connecte-toi sur github.com (compte gratuit).
2. En haut à droite : **+** › **New repository**. Nom : `GUIDES`. Coche **Public**. Clique **Create repository**.
3. Sur la page du dépôt vide, clique **uploading an existing file**, puis glisse le **contenu** de ce dossier (le fichier `index.html` et le dossier `f1`). Clique **Commit changes**.
4. Onglet **Settings** › **Pages** › *Build and deployment* : Source **Deploy from a branch**, Branch **main**, dossier **/ (root)**, puis **Save**.
5. Une à deux minutes plus tard, le guide est en ligne :
   - l'adresse de base `https://mxth57360.github.io/GUIDES/` renvoie vers le Skool : elle ne liste aucun guide
   - guide F1 : `https://mxth57360.github.io/GUIDES/f1/` (c'est ce lien qu'on envoie aux gens qui commentent FORMULE 1)
   - guide Jutsu : `https://mxth57360.github.io/GUIDES/jutsu/` (pour ceux qui commentent JUTSU)
   - guide Matrix : `https://mxth57360.github.io/GUIDES/matrix/` (pour ceux qui commentent MATRIX)
   - guide Blender : `https://mxth57360.github.io/GUIDES/blender/` (pour ceux qui commentent BLENDER)
   - guide Focale : `https://mxth57360.github.io/GUIDES/focales/` (pour ceux qui commentent FOCALE)
   - guide Cinéma : `https://mxth57360.github.io/GUIDES/cinema/` (pour ceux qui commentent CINÉMA)
   - guide Pub : `https://mxth57360.github.io/GUIDES/pub/` (pour ceux qui commentent PUB)
   - guide Fable : `https://mxth57360.github.io/GUIDES/fable/` (pour ceux qui commentent FABLE)
   - guide King : `https://mxth57360.github.io/GUIDES/king/` (pour ceux qui commentent KING)

## Ajouter un nouveau guide

Ajoute un dossier à côté de `f1` (par exemple `motion/` avec son `index.html` et son dossier `media/`), puis une carte dans l'index de l'espace privé (le dossier qui commence par `espace-`). Ne mets jamais de carte dans le `index.html` de la racine : il renvoie vers le Skool. Il sera en ligne à `https://mxth57360.github.io/GUIDES/motion/`.

## Modifier un guide

Ouvre le fichier sur github.com, clique sur le crayon, modifie, puis **Commit changes**. Le site se met à jour en une minute.

## Bon à savoir

- Le site reste en ligne tant que le dépôt existe, même si la conversation Claude est supprimée.
- Limites GitHub Pages : 25 Mo par fichier envoyé depuis le navigateur, environ 1 Go par site. Garde les vidéos compressées (le guide F1 pèse 13 Mo).
- Pour un aperçu propre quand le lien est partagé, remplace dans `f1/index.html` la ligne `og:image` par l'adresse complète de l'image, par exemple `https://mxth57360.github.io/GUIDES/f1/media/img/poster_final.jpg`.
- Nom de domaine perso (ex. `guides.tondomaine.fr`) : Settings › Pages › Custom domain, puis un enregistrement CNAME chez ton registrar vers `TON-PSEUDO.github.io`.

## Miniatures de lien

Chaque guide a sa miniature 1200 × 630 (`og.jpg` dans son dossier), celle qui s'affiche quand on envoie le lien en DM, sur WhatsApp ou LinkedIn. Elles sont faites avec le modèle `_outils/miniature.html` (gros titre, sous-titre, pastille, image dans le téléphone, pose de Cerega). Demande à Claude d'en générer une pour chaque nouveau guide.

## Règles pour les prochains guides

- Poses de Cerega : toujours détourées (WebP animé transparent, dans `_assets/cerega/`), jamais de vidéo avec un fond bleu encadré.
- Un titre d'ouverture travaillé et animé (contour décalé, reflet, glitch).
- La vidéo finale en tête de page, avec le son activable.
- Deux CTA, Skool et groupe WhatsApp, répétés plusieurs fois dans la page (grands widgets + bandeaux), plus la barre fixe en bas.

## Confidentialité

- La racine du site et toute adresse qui n'existe pas (`404.html`) renvoient vers le Skool : quelqu'un qui raccourcit le lien d'un guide ne voit pas les autres.
- La liste des guides et le studio sont dans des dossiers au nom impossible à deviner. Ne partage pas ces liens.
- Chaque page porte `noindex` : les moteurs de recherche ne les listent pas.
- Tant que le dépôt est public, ses fichiers restent visibles sur github.com. Pour les cacher, passe le dépôt en privé (Settings › General › Danger Zone › Change visibility). GitHub Pages sur un dépôt privé demande un abonnement payant (GitHub Pro) ; le site, lui, reste en ligne aux mêmes adresses.
