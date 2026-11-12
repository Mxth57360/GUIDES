/* Les posts du studio, du plus récent au plus ancien.
   Pour ajouter une vidéo : copier un bloc { ... }, le coller en tête de la liste et remplacer les valeurs.
   Champs facultatifs : motCle, ressource, dm (tutos), compte, format ("16:9" ou "4:3" pour les vidéos non verticales), lecture (version légère pour le lecteur du studio).
   Instagram : 5 hashtags maximum par post.
   Les vidéos vont dans studio/media/<id>/ (100 Mo max par fichier).
   statut : "a-poster" ou une date "2026-10-31" quand c'est publié sur ce réseau. */
window.POSTS = [
  {
    id: "king",
    titre: "King",
    sousTitre: "Le cinématique en IA, de l'image à Seedance",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-12",
    motCle: "KING",
    ressource: "https://mxth57360.github.io/GUIDES/king/",
    apercu: "media/king/apercu.jpg",
    lecture: "../king/media/king_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 39 s · 34,7 Mo", src: "media/king/KING_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/king/KING_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/king/KING_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour pousser le cinématique dans tes images et tes prompts Seedance : la tribu, les planches, le chevalier, le décor, la scène et le combat, avec les 13 prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/king/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Il débarque au milieu de nulle part… et une tribu lui fonce dessus. 👑\n\nTout est généré en IA : les portraits, les planches, le décor, la scène et le combat.\n\nCommente « KING » et je t'envoie en DM le guide complet pour pousser le cinématique dans tes images et tes prompts Seedance, avec tous les prompts prêts à copier.\n\nTu l'aurais joué comment, toi ? 👇\n\n#ia #seedance #midjourney #cinema #videoia"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Tout le monde peut générer une vidéo avec l'IA. Ce qui fait la différence, c'est le rendu de film.\n\nCette scène est entièrement générée : une tribu en portraits Midjourney, une planche par personnage, un décor sur Nano Banana, puis deux prompts Seedance de 30 et 16 secondes.\n\nTrois réflexes qui changent tout :\n1. Un sujet simple, filmé comme un film : la lumière, la matière et la caméra font le rendu.\n2. Une planche par personnage, de face, de dos et en gros plan : l'identité ne bouge plus.\n3. Une caméra dans l'action, minutée plan par plan : un seul gros mouvement par plan, et personne ne regarde l'objectif.\n\nJ'ai tout mis dans un guide, avec les 13 prompts prêts à copier.\nCommente « KING » et je te l'envoie.\n\n#IA #VideoIA #Seedance #CreationDeContenu #Cinema"
      }
    ]
  },
  {
    id: "fable",
    titre: "Fable",
    sousTitre: "Claude Fable 5.2 décortiqué",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-11",
    motCle: "FABLE",
    ressource: "https://mxth57360.github.io/GUIDES/fable/",
    apercu: "media/fable/apercu.jpg",
    lecture: "../fable/media/fable_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 31 s · 38,5 Mo", src: "media/fable/Fable_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/fable/Fable_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/fable/Fable_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet de Claude Fable 5.2 : l'analyse du modèle, comment régler son effort, et nos six exemples (l'appli, la DA, les carrousels, la pub animée, le tuto motion et la 3D) avec tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/fable/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Claude Fable 5.2 vient de sortir, et il est complètement dingue. 🔴\n\nUne appli montée de A à Z, tous ses visuels marketing jusqu'à la pub animée, et de la 3D toujours plus réaliste.\n\nCommente « FABLE » et je t'envoie en DM le guide complet de ce nouveau modèle : ce qu'il vaut, comment il raisonne, comment le régler, et tous les prompts prêts à copier.\n\nTu le testes sur quoi en premier ? 👇\n\n#ia #claude #anthropic #fable #intelligenceartificielle"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Anthropic vient de sortir Claude Fable 5.2, son modèle le plus puissant ouvert à tous.\n\nSur les tests publiés par Anthropic, il passe devant Opus 5.5 en code (49,1 % contre 45,5 % sur FrontierCode 2.0). Il écrit jusqu'à 30 % plus vite que la version précédente, et il coûte 20 % moins cher en API.\n\nMais le plus utile, c'est de savoir le régler :\n1. Opus 5.5 pour le quotidien, Fable pour les gros chantiers.\n2. L'effort à la hauteur de la tâche : Medium pour créer, High pour une appli, Extra high pour les plus gros projets.\n3. Un brief complet, avec ce que veut dire « fini », et la consigne d'aller jusqu'au bout.\n\nJ'ai tout mis dans un guide : l'analyse du modèle, son raisonnement, et six exemples, de l'appli à la pub animée et à la 3D, avec leurs prompts prêts à copier.\nCommente « FABLE » et je te l'envoie.\n\n#IA #Claude #Anthropic #IntelligenceArtificielle #CreationDeContenu"
      }
    ]
  },
  {
    id: "pokemon",
    titre: "Pokémon",
    sousTitre: "Cerega et sa famille Pokémon",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-09",
    apercu: "media/pokemon/apercu.jpg",
    lecture: "media/pokemon/Pokemon_lecture.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 28 s · 33,2 Mo", src: "media/pokemon/Pokemon_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/pokemon/Pokemon_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/pokemon/Pokemon_miniature-cine_1080x1920.jpg" }
    ],
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Le quotidien du parrain. 🔴\n\nChaque Pokémon a son rôle dans la famille.\n\nLequel tu prends dans ton équipe ? 👇\n\n#ia #pokemon #cinema #seedance #higgsfield"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Et si les Pokémon faisaient partie de la famille ?\n\nUn barbier, un tireur d'élite, un gros mangeur de pizza, un bras droit dans la voiture… Chaque plan de cette vidéo est généré en IA, avec le même personnage du début à la fin.\n\nLequel tu engagerais ?\n\n#IA #VideoIA #Pokemon #CreationDeContenu #Cinema"
      }
    ]
  },
  {
    id: "pub",
    titre: "Pub",
    sousTitre: "Le branding de ta marque avec l'IA",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-09",
    motCle: "PUB",
    ressource: "https://mxth57360.github.io/GUIDES/pub/",
    apercu: "media/pub/apercu.jpg",
    lecture: "../pub/media/pub_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 43 s · 23,9 Mo", src: "media/pub/Pub_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/pub/Pub_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/pub/Pub_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour développer le branding de ta marque avec l'IA, avec les deux planches, les 15 affiches et les prompts de la pub vidéo prêts à copier :\nhttps://mxth57360.github.io/GUIDES/pub/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Une marque de burger inventée de A à Z avec l'IA. 🍔\n\nLe nom, le logo, le packaging, 15 affiches et la pub vidéo, à partir d'une seule image produit.\n\nCommente « PUB » et je t'envoie le guide complet pour développer le branding de ta marque avec l'IA, avec tous les prompts prêts à copier.\n\nTu croques ou pas ?\n\n#ia #branding #publicite #seedance #higgsfield"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Une marque, ce n'est pas un logo. C'est un système qui se répète partout.\n\nPour cette vidéo, j'ai inventé une marque de smash burgers de A à Z avec l'IA : CEREGAL. Le nom, le logo, les trois couleurs, le packaging, le burger, quinze affiches et une pub vidéo de 22 secondes.\n\nLa méthode tient en trois étapes :\n1. Une planche marque : le logo, le slogan, les couleurs et le packaging.\n2. Une planche produit : le burger sous six angles.\n3. Ces deux planches en référence pour tout le reste : les affiches en image, la pub en vidéo avec Seedance 2.5.\n\nUne fois que l'IA a ce système sous les yeux, tu peux décliner ta marque à l'infini.\n\nJ'ai mis toutes les étapes et tous les prompts dans un guide.\nCommente « PUB » et je te l'envoie.\n\n#IA #Branding #Publicite #CreationDeContenu #Prompting"
      }
    ]
  },
  {
    id: "cinema",
    titre: "Cinéma",
    sousTitre: "Le réalisme avec l'IA, en 7 séquences",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-06",
    motCle: "CINÉMA",
    ressource: "https://mxth57360.github.io/GUIDES/cinema/",
    apercu: "media/cinema/apercu.jpg",
    lecture: "../cinema/media/cinema_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 41 s · 42,4 Mo", src: "media/cinema/Cinema_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/cinema/Cinema_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/cinema/Cinema_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet sur le réalisme avec l'IA, avec les références et les 7 prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/cinema/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Un coffre, un poker, un animé, une baignoire et un lance-roquette. 🎬\n\nAucun décor en référence : juste deux planches persos, et un prompt écrit comme un chef op.\n\nCommente « CINÉMA » et je t'envoie le guide complet sur le réalisme avec l'IA, avec les 7 prompts prêts à copier.\n\nTa scène préférée ?\n\n#ia #cinema #seedance #higgsfield #creationdecontenu"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Le réalisme en vidéo IA ne vient pas de l'outil. Il vient de la façon d'écrire.\n\nPour cette vidéo, je n'ai donné que deux images à Seedance 2.5 : les planches de mes personnages. Tout le reste est écrit dans le prompt : le décor couche par couche, l'angle de caméra, l'optique, ce qui est net et ce qui est flou, la lumière et la palette de couleurs.\n\nSept séquences, sept univers : un coffre de voiture, une partie de poker, un combat en animé, un shooting photo, une soirée, une baignoire et un lance-roquette.\n\nJ'ai mis les références et les sept prompts dans un guide.\nCommente « CINÉMA » et je te l'envoie.\n\n#IA #VideoIA #Cinema #CreationDeContenu #Prompting"
      }
    ]
  },
  {
    id: "focale",
    titre: "Focale",
    sousTitre: "Les focales en IA, de 24 à 200 mm",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-06",
    motCle: "FOCALE",
    ressource: "https://mxth57360.github.io/GUIDES/focales/",
    apercu: "media/focale/apercu.jpg",
    lecture: "../focales/media/focale_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 41 s · 45,3 Mo", src: "media/focale/Focale_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/focale/Focale_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/focale/Focale_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet des focales en IA, avec les captures, les prompts et le générateur de ligne optique :\nhttps://mxth57360.github.io/GUIDES/focales/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Gros plan, plan serré, portrait… l'IA s'en fiche. Elle veut des chiffres. 🎥\n\nCommente « FOCALE » et je t'envoie le guide : les 5 focales, ce qu'elles font, et la ligne exacte à mettre dans ton prompt.\n\nTa focale préférée ?\n\n#ia #focale #cinema #seedance #higgsfield"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "« Gros plan » ne veut rien dire de précis pour une IA. « 135 mm », si.\n\nLa focale règle le cadre, le flou du fond et la façon dont le décor se rapproche. C'est le réglage le plus simple pour faire passer une génération de « correcte » à « cinéma ».\n\nJ'ai mis les 5 focales dans un guide, avec des captures, les prompts et un générateur de ligne optique.\nCommente « FOCALE » et je te l'envoie.\n\n#IA #VideoIA #Cinema #CreationDeContenu #Prompting"
      }
    ]
  },
  {
    id: "blender",
    titre: "Blender",
    sousTitre: "Contrôle ta caméra à 100 % avec Claude, Blender et Seedance",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-06",
    motCle: "BLENDER",
    ressource: "https://mxth57360.github.io/GUIDES/blender/",
    apercu: "media/blender/apercu.jpg",
    lecture: "../blender/media/blender_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 50 s · 60,5 Mo", src: "media/blender/Blender_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/blender/Blender_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/blender/Blender_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour contrôler ta caméra à 100 % avec Claude, Blender et Seedance 2.5, avec tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/blender/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "La caméra fait exactement ce que j'ai prévu. 🎬\n\nCommente « BLENDER » et je t'envoie le guide : le prompt pour Claude, le playblast Blender et le prompt Seedance 2.5, prêts à copier.\n\nFinis le hasard.\n\n#ia #blender #claude #seedance #creationdecontenu"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Le vrai problème de la vidéo IA, ce n'est pas la qualité. C'est le contrôle : tu demandes un mouvement de caméra, tu en obtiens un autre.\n\nMa méthode : je décris la scène et la caméra à Claude Opus 5.5, seconde par seconde. Il construit tout dans Blender, en volumes simples, et me sort un playblast. Je donne ce playblast à Seedance 2.5 avec mes images de référence.\n\nRésultat : la caméra fait exactement ce que j'ai prévu, et l'image respecte mes références.\nCommente « BLENDER » et je t'envoie le guide, avec tous les prompts.\n\n#IA #VideoIA #Blender #Claude #CreationDeContenu"
      }
    ]
  },
  {
    id: "matrix",
    titre: "Matrix",
    sousTitre: "Prompt basique ou prompt travaillé",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-05",
    motCle: "MATRIX",
    ressource: "https://mxth57360.github.io/GUIDES/matrix/",
    apercu: "media/matrix/apercu.jpg",
    lecture: "../matrix/media/matrix_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 38 s · 46,0 Mo", src: "media/matrix/Matrix_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/matrix/Matrix_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/matrix/Matrix_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour passer d'un prompt basique à un prompt travaillé, en image et en vidéo, avec tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/matrix/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Le même outil, deux prompts. 💊\n\nCommente « MATRIX » et je t'envoie le guide : trois scènes en image et en vidéo, le prompt basique et le prompt travaillé, prêts à copier.\n\nBleue ou rouge ?\n\n#ia #prompt #higgsfield #seedance #creationdecontenu"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Ce qui sépare une image IA générique d'une image qui a une intention, ce n'est pas l'outil. C'est le prompt.\n\nUne caméra, une lumière, une palette, un instant précis : quatre choses qu'un prompt basique ne dit jamais, et que l'IA remplit au hasard.\n\nJ'ai mis trois exemples côte à côte, en image et en vidéo : le prompt que tout le monde écrit, et le prompt travaillé.\nCommente « MATRIX » et je t'envoie le guide.\n\n#IA #VideoIA #Prompting #CreationDeContenu #Cinema"
      }
    ]
  },
  {
    id: "jutsu",
    titre: "Jutsu",
    sousTitre: "Change tout avec Genjutsu",
    compte: "Compte de Cerega",
    format: "4:3",
    date: "2026-11-05",
    motCle: "JUTSU",
    ressource: "https://mxth57360.github.io/GUIDES/jutsu/",
    apercu: "media/jutsu/apercu.jpg",
    lecture: "../jutsu/media/jutsu_final.mp4",
    fichiers: [
      { label: "Vidéo à poster", detail: "1440 × 1080 · 28 s · 33,7 Mo", src: "media/jutsu/Jutsu_1440x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta · 1080 × 1920", src: "media/jutsu/Jutsu_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta · 1080 × 1920", src: "media/jutsu/Jutsu_miniature-cine_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour changer ta montre, ta coupe ou ton décor avec Genjutsu, avec tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/jutsu/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "J'ai le pouvoir de tout changer 🥷\n\nCommente « JUTSU » et je t'envoie le guide complet, avec tous les prompts prêts à copier.\n\nTu changerais quoi en premier ?\n\n#ia #higgsfield #genjutsu #vfx #creationdecontenu"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Changer un détail d'une vidéo sans la retourner.\n\nUne phrase, une image de référence, et Genjutsu de Higgsfield change un seul élément en gardant tout le reste : le visage, les gestes, la lumière, le cadre. Ensuite, tu recommences autant de fois que tu veux.\n\nJ'ai mis toute la méthode dans un guide, avec les prompts prêts à copier.\nCommente « JUTSU » et je te l'envoie.\n\n#IA #VideoIA #Higgsfield #CreationDeContenu #PostProduction"
      }
    ]
  },
  {
    id: "halloween-paris",
    titre: "Halloween à Paris",
    sousTitre: "Film d'action",
    compte: "Compte de Cerega",
    format: "16:9",
    date: "2026-10-31",
    apercu: "media/halloween-paris/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "1920 × 1080 · 51 s · 61,5 Mo", src: "media/halloween-paris/Halloween_Paris_1920x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/halloween-paris/Halloween_Paris_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/halloween-paris/Halloween_Paris_miniature-cine_1080x1920.jpg" },
      { label: "Couverture 16:9", detail: "Image 1920 × 1080", src: "media/halloween-paris/Halloween_Paris_couverture_1920x1080.jpg" }
    ],
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Halloween à Paris 💀🔥\n\nTu restes ou tu fuis ? 👇\n\n#halloween #paris #halloween2026 #ia #filmdaction"
      },
      {
        nom: "TikTok",
        statut: "a-poster",
        limite: 4000,
        texte: "Halloween à Paris 💀🔥 Tu restes ou tu fuis ?\n\n#halloween #paris #ia #filmia #pourtoi"
      }
    ]
  },
  {
    id: "halloween-clown",
    titre: "Le clown d'Halloween",
    sousTitre: "Court film d'horreur",
    compte: "Compte de Cerega",
    format: "16:9",
    date: "2026-10-31",
    apercu: "media/halloween-clown/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "1920 × 1080 · 15 s · 15,5 Mo", src: "media/halloween-clown/Halloween_Clown_1920x1080.mp4", principal: true },
      { label: "Miniature 9:16 avec titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/halloween-clown/Halloween_Clown_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/halloween-clown/Halloween_Clown_miniature-cine_1080x1920.jpg" },
      { label: "Couverture 16:9", detail: "Image 1920 × 1080", src: "media/halloween-clown/Halloween_Clown_couverture_1920x1080.jpg" }
    ],
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Joyeux Halloween 🔪\n\nRegarde jusqu'à la fin.\n\n#halloween #clown #filmdhorreur #ia #halloween2026"
      },
      {
        nom: "TikTok",
        statut: "a-poster",
        limite: 4000,
        texte: "Joyeux Halloween 🔪 Regarde jusqu'à la fin.\n\n#halloween #clown #horreur #ia #pourtoi"
      }
    ]
  },
  {
    id: "f1",
    titre: "Formule 1",
    sousTitre: "De la table vide à la course IA",
    date: "2026-10-30",
    motCle: "FORMULE 1",
    ressource: "https://mxth57360.github.io/GUIDES/f1/",
    apercu: "media/f1/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "Habillée Skool · 1080 × 1920 · 25 s · 19,8 Mo", src: "media/f1/F1_Skool_pret-a-poster_v2_1080x1920.mp4", principal: true },
      { label: "Version sans habillage", detail: "1080 × 1920 · 25 s · 29,3 Mo", src: "media/f1/F1_sans-habillage_v2_1080x1920.mp4" },
      { label: "Miniature 9:16 avec titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/f1/F1_miniature-titre_1080x1920.jpg" },
      { label: "Miniature 9:16 sans titre", detail: "Insta et TikTok · 1080 × 1920", src: "media/f1/F1_miniature-cine_1080x1920.jpg" },
      { label: "Couverture habillée", detail: "Image 1080 × 1920", src: "media/f1/F1_couverture_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour refaire la vidéo F1, avec toutes les étapes et tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/f1/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Une table vide qui devient une course de F1 🏁\n\nUn seul vrai plan, filmé au téléphone au-dessus d'une table. Les villes en hologramme viennent de Blender, la course de Seedance 2.5, et la transition en cubes du montage.\n\nCommente « FORMULE 1 » et je t'envoie le guide complet : toutes les étapes et tous les prompts, prêts à copier.\n\nTu aurais choisi quel circuit, toi ?\nAbonne-toi pour le prochain tuto.\n\n#formule1 #ia #seedance #blender #vfx"
      },
      {
        nom: "TikTok",
        statut: "a-poster",
        limite: 4000,
        texte: "Une table vide → une course de F1 en IA 🏁\n\nCommente « FORMULE 1 » et je t'envoie le guide avec tous les prompts.\n\nTu aurais choisi quel circuit ? Abonne-toi pour la suite.\n\n#ia #f1 #formule1 #vfx #seedance #blender #iavideo #tutoia #pourtoi"
      },
      {
        nom: "LinkedIn",
        statut: "a-poster",
        limite: 3000,
        texte: "Une table vide. Un iPhone. Et 25 secondes plus tard, une course de F1 de nuit à Abu Dhabi.\n\nDans cette vidéo, il n'y a qu'un seul vrai plan. Tout le reste s'empile dessus :\n→ trois villes en hologramme construites dans Blender, collées sur la table grâce au tracking caméra\n→ une course de 30 secondes générée avec Seedance 2.5, à partir de planches pilotes et voitures\n→ une transition en cubes holographiques pour passer de la maquette au vrai circuit\n\nLe plus important ne se voit pas : la course se prépare avant même de filmer. La dernière maquette est dessinée d'après la première image de la course, et c'est ce qui rend le raccord invisible.\n\nJ'ai mis tout le process dans un guide, avec les réglages et tous les prompts.\nCommente « FORMULE 1 » et je te l'envoie.\n\n#IA #IntelligenceArtificielle #VFX #CreationDeContenu #Production"
      },
      {
        nom: "YouTube Shorts",
        statut: "a-poster",
        titre: "Une table vide devient une course de F1 (IA + Blender) #shorts",
        limiteTitre: 100,
        limite: 5000,
        texte: "Un seul plan filmé au téléphone, des villes en hologramme dans Blender et une course générée avec Seedance 2.5.\n\nCommente « FORMULE 1 » pour recevoir le guide complet, ou ouvre-le directement :\nhttps://mxth57360.github.io/GUIDES/f1/\n\nAbonne-toi pour le prochain tuto.\n\n#ia #f1 #formule1 #blender #vfx #seedance #shorts"
      }
    ]
  }
];
