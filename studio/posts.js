/* Les posts du studio, du plus récent au plus ancien.
   Pour ajouter une vidéo : copier un bloc { ... }, le coller en tête de la liste et remplacer les valeurs.
   Champs facultatifs : motCle, ressource, dm (tutos), compte, format ("16:9" pour les vidéos horizontales), alt (texte alternatif Instagram).
   Instagram : 5 hashtags maximum par post.
   Les vidéos vont dans studio/media/<id>/ (100 Mo max par fichier).
   statut : "a-poster" ou une date "2026-10-31" quand c'est publié sur ce réseau. */
window.POSTS = [
  {
    id: "halloween-paris",
    titre: "Halloween à Paris",
    sousTitre: "Les squelettes ont pris la ville",
    compte: "Compte de Cerega",
    format: "16:9",
    date: "2026-10-31",
    apercu: "media/halloween-paris/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "1920 × 1080 · 51 s · 61,5 Mo", src: "media/halloween-paris/Halloween_Paris_1920x1080.mp4", principal: true },
      { label: "Couverture", detail: "Image 1920 × 1080", src: "media/halloween-paris/Halloween_Paris_couverture_1920x1080.jpg" }
    ],
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Halloween à Paris : les squelettes ont pris la ville 💀🔥\n\nCavalier sans tête, squelettes en feu sur les Champs-Élysées, sniper sur les toits face à la tour Eiffel… On a tenu Paris toute la nuit. Un film d'action d'Halloween fait avec l'IA.\n\nTu restes te battre ou tu fuis ? Dis-le en commentaire 👇\n\n#halloween #paris #halloween2026 #ia #filmdaction",
        alt: "Film d'action d'Halloween à Paris la nuit : un cavalier sans tête à la tête en feu, un sniper sur un toit face à la tour Eiffel, des squelettes enflammés qui défilent vers l'Arc de Triomphe et deux héros en tenue de combat."
      },
      {
        nom: "TikTok",
        statut: "a-poster",
        limite: 4000,
        texte: "Halloween à Paris : les squelettes ont pris la ville 💀🔥 Tu restes ou tu fuis ?\n\n#halloween #paris #ia #filmia #pourtoi"
      }
    ]
  },
  {
    id: "halloween-clown",
    titre: "Le clown d'Halloween",
    sousTitre: "Massacre… à la sauce tomate",
    compte: "Compte de Cerega",
    format: "16:9",
    date: "2026-10-31",
    apercu: "media/halloween-clown/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "1920 × 1080 · 15 s · 15,5 Mo", src: "media/halloween-clown/Halloween_Clown_1920x1080.mp4", principal: true },
      { label: "Couverture", detail: "Image 1920 × 1080", src: "media/halloween-clown/Halloween_Clown_couverture_1920x1080.jpg" }
    ],
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Le clown tueur d'Halloween a encore frappé 🔪\n\nUne maison abandonnée, une ampoule qui grésille, du rouge partout… Regarde bien jusqu'à la fin 🍅 Un court film d'horreur fait avec l'IA.\n\nTu l'avais vu venir ? Dis-le en commentaire 👇\n\n#halloween #clown #filmdhorreur #ia #halloween2026",
        alt: "Un clown maquillé en survêtement rouge et lunettes noires s'acharne dans une maison abandonnée sombre : ce n'est pas du sang qui gicle, ce sont des briques de sauce tomate."
      },
      {
        nom: "TikTok",
        statut: "a-poster",
        limite: 4000,
        texte: "Le clown tueur d'Halloween… regarde jusqu'à la fin 🔪🍅\n\n#halloween #clown #horreur #ia #pourtoi"
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
      { label: "Couverture", detail: "Image 1080 × 1920", src: "media/f1/F1_couverture_1080x1920.jpg" }
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
