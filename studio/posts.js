/* Les posts du studio, du plus récent au plus ancien.
   Pour ajouter un tuto : copier un bloc { ... }, le coller en tête de la liste et remplacer les valeurs.
   Les vidéos vont dans studio/media/<id>/ (100 Mo max par fichier).
   statut : "a-poster" ou une date "2026-10-31" quand c'est publié sur ce réseau. */
window.POSTS = [
  {
    id: "f1",
    titre: "Formule 1",
    sousTitre: "De la table vide à la course IA",
    date: "2026-10-30",
    motCle: "FORMULE 1",
    ressource: "https://mxth57360.github.io/GUIDES/f1/",
    apercu: "media/f1/apercu.jpg",
    fichiers: [
      { label: "Vidéo à poster", detail: "Habillée Skool · 1080 × 1920 · 25 s · 21,6 Mo", src: "media/f1/F1_Skool_pret-a-poster_1080x1920.mp4", principal: true },
      { label: "Version sans habillage", detail: "1080 × 1920 · 25 s · 29,3 Mo", src: "media/f1/F1_sans-habillage_1080x1920.mp4" },
      { label: "Couverture", detail: "Image 1080 × 1920", src: "media/f1/F1_couverture_1080x1920.jpg" }
    ],
    dm: "Hello ! Voici le guide complet pour refaire la vidéo F1, avec toutes les étapes et tous les prompts prêts à copier :\nhttps://mxth57360.github.io/GUIDES/f1/\n\nTu y trouveras aussi le lien du Skool et du groupe WhatsApp pour toutes les autres ressources.",
    reseaux: [
      {
        nom: "Instagram",
        statut: "a-poster",
        limite: 2200,
        texte: "Une table vide qui devient une course de F1 🏁\n\nUn seul vrai plan, filmé au téléphone au-dessus d'une table. Les villes en hologramme viennent de Blender, la course de Seedance 2.5, et la transition en cubes du montage.\n\nCommente « FORMULE 1 » et je t'envoie le guide complet : toutes les étapes et tous les prompts, prêts à copier.\n\nTu aurais choisi quel circuit, toi ?\nAbonne-toi pour le prochain tuto.\n\n#ia #intelligenceartificielle #formule1 #f1 #seedance #higgsfield #blender #vfx #iavideo #montagevideo #createurdecontenu #abudhabi"
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
