export type Topic = "iphone" | "android" | "watermark";

export interface LocaleGuide {
  lang: string;
  topic: Topic;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  steps: string[];
  tips: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
}

const g = (lang: string, topic: Topic, slug: string, rest: Omit<LocaleGuide, "lang" | "topic" | "slug">): LocaleGuide => ({ lang, topic, slug, ...rest });

export const LOCALE_GUIDES: LocaleGuide[] = [
  // ───────── Español ─────────
  g("es", "iphone", "descargar-reels-instagram-iphone", {
    title: "Cómo Descargar Reels de Instagram en iPhone",
    description: "Guía paso a paso para descargar Reels de Instagram en iPhone y guardarlos en la app Fotos, gratis, con audio y sin app.",
    keywords: ["descargar reels iphone", "guardar reels en iphone", "descargar videos de instagram iphone", "como guardar reels en la galeria iphone"],
    intro: "En iPhone no hace falta instalar ninguna app: Safari descarga el Reel y luego lo pasas a Fotos con dos toques.",
    steps: ["Abre el Reel en Instagram, toca Compartir (✈️) y luego «Copiar enlace».", "Abre ReelSave en Safari y pega el enlace en el cuadro.", "Toca «Descargar vídeo» y confirma la descarga.", "Abre Archivos › Descargas, toca el vídeo, pulsa Compartir y elige «Guardar vídeo».", "El Reel ya está en la app Fotos, con audio."],
    tips: [
      { h: "¿No aparece el botón de descarga en Safari?", p: "Actualiza iOS a la última versión: desde iOS 13 Safari tiene un gestor de descargas integrado. Usa Safari en lugar de navegadores dentro de otras apps." },
      { h: "Atajo para la próxima vez", p: "En Safari, toca Compartir › «Añadir a pantalla de inicio» para abrir ReelSave como una app." },
    ],
    faqs: [
      { q: "¿Funciona en iPad?", a: "Sí, los pasos son los mismos en iPad con Safari." },
      { q: "¿Necesito una app de terceros?", a: "No. Solo Safari y la app Archivos, que vienen con el iPhone." },
      { q: "¿El vídeo se guarda con sonido?", a: "Sí, conservas la música y el audio originales." },
    ],
  }),
  g("es", "android", "descargar-reels-instagram-android", {
    title: "Cómo Descargar Reels de Instagram en Android",
    description: "Descarga Reels de Instagram en Android y guárdalos en la Galería en segundos. Gratis, en HD y sin instalar apps.",
    keywords: ["descargar reels android", "guardar reels en galeria", "descargar videos de instagram android", "descargar reels en el celular"],
    intro: "En Android el Reel se descarga directamente con Chrome y aparece solo en la Galería o en Google Fotos.",
    steps: ["En Instagram, abre el Reel y toca Compartir (✈️) › «Copiar enlace».", "Abre ReelSave en Chrome y pega el enlace.", "Toca «Descargar vídeo».", "Abre la Galería o Google Fotos: el Reel está en la carpeta Descargas."],
    tips: [
      { h: "¿No ves el vídeo en la Galería?", p: "Abre la app Archivos › Descargas. Algunas galerías tardan unos segundos en mostrar archivos nuevos." },
      { h: "Úsalo como una app", p: "En Chrome toca ⋮ › «Añadir a pantalla de inicio» para tener ReelSave a un toque." },
    ],
    faqs: [
      { q: "¿Funciona en Samsung, Xiaomi y Motorola?", a: "Sí, en cualquier Android con un navegador moderno." },
      { q: "¿Necesito instalar un APK?", a: "No. Evita APKs desconocidos; ReelSave funciona en el navegador." },
      { q: "¿Cuánto ocupa un Reel?", a: "Normalmente entre 2 y 20 MB según la duración." },
    ],
  }),
  g("es", "watermark", "descargar-reels-sin-marca-de-agua", {
    title: "Descargar Reels de Instagram Sin Marca de Agua",
    description: "Cómo descargar Reels de Instagram sin marca de agua ni logo, en calidad original y con audio. Gratis y sin app.",
    keywords: ["descargar reels sin marca de agua", "reels sin marca de agua", "descargar reels sin logo", "quitar marca de agua reels"],
    intro: "La opción «Descargar» de Instagram añade su logo y el @usuario sobre el vídeo. Con ReelSave obtienes el archivo original, limpio.",
    steps: ["Copia el enlace del Reel desde Compartir (✈️).", "Pégalo en ReelSave.", "Toca «Descargar vídeo»: obtienes el MP4 original, sin marcas añadidas."],
    tips: [
      { h: "¿Por qué Instagram añade marca de agua?", p: "Para proteger a los creadores cuando se republica el contenido. Si reutilizas un Reel ajeno, pide permiso y da crédito." },
      { h: "Mejor que recortar o difuminar", p: "Recortar o difuminar la marca baja la calidad. Descargar el original es más limpio." },
    ],
    faqs: [
      { q: "¿Es legal?", a: "Descargar para uso personal o tu propio contenido es habitual; republicar contenido ajeno requiere permiso." },
      { q: "¿Pierde calidad?", a: "No, es el mismo archivo que reproduce Instagram." },
      { q: "¿Mantiene la música?", a: "Sí, el audio original se conserva." },
    ],
  }),

  // ───────── Deutsch ─────────
  g("de", "iphone", "instagram-reels-iphone-speichern", {
    title: "Instagram Reels auf dem iPhone Speichern (in die Fotos-App)",
    description: "So speicherst du Instagram Reels auf dem iPhone in der Fotos-App – kostenlos, mit Ton und ohne zusätzliche App.",
    keywords: ["instagram reels iphone speichern", "reels auf iphone herunterladen", "instagram video iphone speichern", "reels in fotos speichern"],
    intro: "Auf dem iPhone brauchst du keine App: Safari lädt das Reel herunter, danach landet es mit zwei Tipps in der Fotos-App.",
    steps: ["Reel in Instagram öffnen, auf Teilen (✈️) und „Link kopieren“ tippen.", "ReelSave in Safari öffnen und den Link einfügen.", "Auf „Video herunterladen“ tippen und bestätigen.", "In Dateien › Downloads das Video öffnen, Teilen › „Video sichern“ wählen.", "Fertig – das Reel ist mit Ton in deinen Fotos."],
    tips: [
      { h: "Kein Download-Button in Safari?", p: "Aktualisiere iOS. Ab iOS 13 hat Safari einen eingebauten Download-Manager. Nutze Safari statt In-App-Browsern." },
      { h: "Schneller Zugriff", p: "Teilen › „Zum Home-Bildschirm“ – dann öffnest du ReelSave wie eine App." },
    ],
    faqs: [
      { q: "Funktioniert das auch auf dem iPad?", a: "Ja, die Schritte sind identisch." },
      { q: "Brauche ich eine Drittanbieter-App?", a: "Nein, nur Safari und die Dateien-App." },
      { q: "Ist der Ton dabei?", a: "Ja, Musik und Originalton bleiben erhalten." },
    ],
  }),
  g("de", "android", "instagram-reels-android-herunterladen", {
    title: "Instagram Reels auf Android Herunterladen (in die Galerie)",
    description: "Instagram Reels auf Android herunterladen und in der Galerie speichern – kostenlos, in HD, ohne App.",
    keywords: ["instagram reels android herunterladen", "reels in galerie speichern", "instagram video android speichern", "reels auf handy speichern"],
    intro: "Auf Android lädt Chrome das Reel direkt herunter. Es erscheint automatisch in der Galerie oder Google Fotos.",
    steps: ["In Instagram auf Teilen (✈️) › „Link kopieren“ tippen.", "ReelSave in Chrome öffnen und Link einfügen.", "Auf „Video herunterladen“ tippen.", "Galerie oder Google Fotos öffnen – das Reel liegt im Ordner Downloads."],
    tips: [
      { h: "Video nicht in der Galerie?", p: "Öffne die Dateien-App › Downloads. Manche Galerien zeigen neue Dateien erst nach ein paar Sekunden." },
      { h: "Wie eine App nutzen", p: "In Chrome ⋮ › „Zum Startbildschirm hinzufügen“." },
    ],
    faqs: [
      { q: "Geht das mit Samsung, Xiaomi, Pixel?", a: "Ja, auf jedem Android-Gerät mit aktuellem Browser." },
      { q: "Muss ich eine APK installieren?", a: "Nein. Meide unbekannte APKs – ReelSave läuft im Browser." },
      { q: "Wie groß ist ein Reel?", a: "Meist 2–20 MB, je nach Länge." },
    ],
  }),
  g("de", "watermark", "instagram-reels-ohne-wasserzeichen", {
    title: "Instagram Reels Ohne Wasserzeichen Herunterladen",
    description: "Instagram Reels ohne Wasserzeichen und Logo herunterladen – in Originalqualität mit Ton. Kostenlos und ohne App.",
    keywords: ["instagram reels ohne wasserzeichen", "reels ohne wasserzeichen herunterladen", "instagram video ohne logo", "wasserzeichen entfernen reels"],
    intro: "Der eingebaute Download von Instagram blendet Logo und @Benutzernamen ein. ReelSave liefert dir die saubere Originaldatei.",
    steps: ["Reel-Link über Teilen (✈️) kopieren.", "In ReelSave einfügen.", "„Video herunterladen“ tippen – du erhältst die Original-MP4 ohne zusätzliche Markierung."],
    tips: [
      { h: "Warum setzt Instagram ein Wasserzeichen?", p: "Zum Schutz der Urheber beim Weiterverbreiten. Fremde Reels nur mit Erlaubnis und Quellenangabe nutzen." },
      { h: "Besser als Zuschneiden", p: "Zuschneiden oder Verwischen kostet Qualität – die Originaldatei ist sauberer." },
    ],
    faqs: [
      { q: "Ist das legal?", a: "Für private Nutzung und eigene Inhalte üblich; fremde Inhalte neu zu posten braucht Erlaubnis." },
      { q: "Verliert das Video Qualität?", a: "Nein, es ist dieselbe Datei, die Instagram abspielt." },
      { q: "Bleibt die Musik erhalten?", a: "Ja, der Originalton bleibt." },
    ],
  }),

  // ───────── 日本語 ─────────
  g("ja", "iphone", "insta-reel-hozon-iphone", {
    title: "iPhoneでインスタのリールを保存する方法（写真アプリに保存）",
    description: "iPhoneでインスタのリール動画を写真アプリに保存する手順。無料・音声付き・アプリ不要。",
    keywords: ["インスタ リール 保存 iphone", "iphone リール 保存 方法", "インスタ 動画 保存 iphone", "リール カメラロール 保存"],
    intro: "iPhoneならアプリは不要です。Safariでリールをダウンロードし、2タップで写真アプリ（カメラロール）に移せます。",
    steps: ["Instagramでリールを開き、シェア（✈️）›「リンクをコピー」をタップ。", "SafariでReelSaveを開き、リンクを貼り付け。", "「動画を保存」をタップしてダウンロード。", "「ファイル」›「ダウンロード」で動画を開き、共有 ›「ビデオを保存」。", "カメラロールに音声付きで保存されます。"],
    tips: [
      { h: "Safariでダウンロードできない場合", p: "iOSを最新版にしてください。iOS 13以降のSafariにはダウンロード機能があります。アプリ内ブラウザではなくSafariを使いましょう。" },
      { h: "ホーム画面に追加", p: "Safariの共有 ›「ホーム画面に追加」で、ReelSaveをアプリのように使えます。" },
    ],
    faqs: [
      { q: "iPadでも使えますか？", a: "はい、手順は同じです。" },
      { q: "専用アプリは必要？", a: "いいえ。Safariと「ファイル」アプリだけで保存できます。" },
      { q: "音声も保存されますか？", a: "はい、元の音楽・音声がそのまま残ります。" },
    ],
  }),
  g("ja", "android", "insta-reel-hozon-android", {
    title: "Androidでインスタのリールを保存する方法（ギャラリーに保存）",
    description: "Androidでインスタのリールをダウンロードしてギャラリーに保存。無料・高画質・アプリ不要。",
    keywords: ["インスタ リール 保存 android", "アンドロイド リール 保存", "インスタ 動画 保存 android", "リール ギャラリー 保存"],
    intro: "AndroidではChromeでそのままダウンロードでき、ギャラリーやGoogleフォトに自動で表示されます。",
    steps: ["Instagramでシェア（✈️）›「リンクをコピー」。", "ChromeでReelSaveを開き、リンクを貼り付け。", "「動画を保存」をタップ。", "ギャラリーまたはGoogleフォトの「Download」フォルダを確認。"],
    tips: [
      { h: "ギャラリーに表示されない場合", p: "「ファイル」アプリ ›「ダウンロード」を確認してください。反映に数秒かかることがあります。" },
      { h: "アプリのように使う", p: "Chromeの ⋮ ›「ホーム画面に追加」。" },
    ],
    faqs: [
      { q: "Galaxy、Xperia、AQUOSでも使える？", a: "はい、最新のブラウザがあるAndroid端末なら使えます。" },
      { q: "APKのインストールは必要？", a: "不要です。不明なAPKは避け、ブラウザで使ってください。" },
      { q: "1本の容量は？", a: "長さによりますが、通常2〜20MBです。" },
    ],
  }),
  g("ja", "watermark", "insta-reel-hozon-sukashi-nashi", {
    title: "インスタのリールを透かし（ロゴ）なしで保存する方法",
    description: "インスタのリールをロゴ・ユーザー名の透かしなしで、元の画質・音声付きで保存する方法。無料・アプリ不要。",
    keywords: ["インスタ リール 保存 透かしなし", "リール ロゴなし 保存", "インスタ 動画 透かし 消す", "リール ウォーターマーク なし"],
    intro: "Instagram標準の「ダウンロード」ではロゴと@ユーザー名が入ります。ReelSaveなら元の動画ファイルをそのまま保存できます。",
    steps: ["シェア（✈️）からリールのリンクをコピー。", "ReelSaveに貼り付け。", "「動画を保存」で、透かしを追加しない元のMP4を保存。"],
    tips: [
      { h: "なぜ透かしが入るの？", p: "再投稿時に投稿者を守るためです。他人のリールを使う場合は許可を取り、クレジットを記載しましょう。" },
      { h: "トリミングより高画質", p: "透かしを切り取ったりぼかしたりすると画質が落ちます。元ファイルの保存が一番きれいです。" },
    ],
    faqs: [
      { q: "保存すると相手にバレますか？", a: "いいえ。リンクから動画を取得するだけなので通知は届きません。" },
      { q: "画質は落ちますか？", a: "いいえ。Instagramで再生されるのと同じファイルです。" },
      { q: "音楽も残りますか？", a: "はい、元の音声が残ります。" },
    ],
  }),

  // ───────── Français ─────────
  g("fr", "iphone", "telecharger-reels-instagram-iphone", {
    title: "Télécharger un Reel Instagram sur iPhone",
    description: "Comment télécharger les Reels Instagram sur iPhone et les enregistrer dans Photos – gratuit, avec le son, sans appli.",
    keywords: ["télécharger reel instagram iphone", "enregistrer reel iphone", "télécharger vidéo instagram iphone", "reel dans la pellicule iphone"],
    intro: "Sur iPhone, aucune appli n’est nécessaire : Safari télécharge le Reel, puis deux touches suffisent pour l’envoyer dans Photos.",
    steps: ["Ouvrez le Reel, touchez Partager (✈️) puis « Copier le lien ».", "Ouvrez ReelSave dans Safari et collez le lien.", "Touchez « Télécharger la vidéo ».", "Dans Fichiers › Téléchargements, ouvrez la vidéo, Partager › « Enregistrer la vidéo ».", "Le Reel est dans Photos, avec le son."],
    tips: [
      { h: "Pas de bouton de téléchargement ?", p: "Mettez iOS à jour : Safari gère les téléchargements depuis iOS 13. Utilisez Safari plutôt qu’un navigateur intégré." },
      { h: "Raccourci", p: "Partager › « Sur l’écran d’accueil » pour ouvrir ReelSave comme une appli." },
    ],
    faqs: [
      { q: "Ça marche sur iPad ?", a: "Oui, mêmes étapes." },
      { q: "Faut-il une appli tierce ?", a: "Non, Safari et l’app Fichiers suffisent." },
      { q: "Le son est-il conservé ?", a: "Oui, musique et son d’origine inclus." },
    ],
  }),
  g("fr", "android", "telecharger-reels-instagram-android", {
    title: "Télécharger un Reel Instagram sur Android (dans la Galerie)",
    description: "Téléchargez les Reels Instagram sur Android et retrouvez-les dans la Galerie. Gratuit, HD, sans appli.",
    keywords: ["télécharger reel instagram android", "enregistrer reel galerie", "télécharger vidéo instagram android", "reel sur téléphone"],
    intro: "Sur Android, Chrome télécharge directement le Reel, qui apparaît dans la Galerie ou Google Photos.",
    steps: ["Dans Instagram : Partager (✈️) › « Copier le lien ».", "Ouvrez ReelSave dans Chrome et collez le lien.", "Touchez « Télécharger la vidéo ».", "Ouvrez la Galerie ou Google Photos, dossier Download."],
    tips: [
      { h: "Vidéo absente de la Galerie ?", p: "Regardez dans Fichiers › Téléchargements ; certaines galeries mettent quelques secondes." },
      { h: "Comme une appli", p: "Chrome ⋮ › « Ajouter à l’écran d’accueil »." },
    ],
    faqs: [
      { q: "Compatible Samsung, Xiaomi, Pixel ?", a: "Oui, tout Android avec un navigateur récent." },
      { q: "Faut-il installer un APK ?", a: "Non. Évitez les APK inconnus : ReelSave fonctionne dans le navigateur." },
      { q: "Quelle taille fait un Reel ?", a: "Généralement 2 à 20 Mo." },
    ],
  }),
  g("fr", "watermark", "telecharger-reels-sans-filigrane", {
    title: "Télécharger des Reels Instagram Sans Filigrane",
    description: "Téléchargez les Reels Instagram sans filigrane ni logo, en qualité d’origine avec le son. Gratuit, sans appli.",
    keywords: ["télécharger reels sans filigrane", "reel instagram sans logo", "enlever filigrane reel", "reels sans watermark"],
    intro: "Le bouton « Télécharger » d’Instagram ajoute le logo et le @pseudo. ReelSave vous donne le fichier original, propre.",
    steps: ["Copiez le lien du Reel via Partager (✈️).", "Collez-le dans ReelSave.", "Touchez « Télécharger la vidéo » : vous obtenez le MP4 d’origine, sans marque ajoutée."],
    tips: [
      { h: "Pourquoi un filigrane ?", p: "Pour protéger les créateurs. Pour réutiliser le Reel d’un autre, demandez l’autorisation et créditez-le." },
      { h: "Mieux que recadrer", p: "Recadrer ou flouter dégrade l’image ; le fichier d’origine est plus net." },
    ],
    faqs: [
      { q: "Est-ce légal ?", a: "Pour un usage personnel ou vos propres contenus, oui ; republier le contenu d’autrui nécessite une autorisation." },
      { q: "Perte de qualité ?", a: "Non, c’est le fichier lu par Instagram." },
      { q: "La musique est-elle conservée ?", a: "Oui." },
    ],
  }),

  // ───────── Português ─────────
  g("pt", "iphone", "baixar-reels-instagram-iphone", {
    title: "Como Baixar Reels do Instagram no iPhone (Salvar na Galeria)",
    description: "Passo a passo para baixar Reels do Instagram no iPhone e salvar no app Fotos – grátis, com áudio e sem app.",
    keywords: ["baixar reels iphone", "salvar reels no iphone", "baixar vídeo do instagram iphone", "salvar reels na galeria iphone"],
    intro: "No iPhone você não precisa de app: o Safari baixa o Reel e com dois toques ele vai para o app Fotos.",
    steps: ["Abra o Reel, toque em Compartilhar (✈️) › “Copiar link”.", "Abra o ReelSave no Safari e cole o link.", "Toque em “Baixar vídeo”.", "Em Arquivos › Downloads, abra o vídeo e toque em Compartilhar › “Salvar Vídeo”.", "Pronto: o Reel está no Fotos, com áudio."],
    tips: [
      { h: "Não aparece o botão de download?", p: "Atualize o iOS: o Safari tem gerenciador de downloads desde o iOS 13. Use o Safari, não o navegador de outros apps." },
      { h: "Atalho", p: "Compartilhar › “Adicionar à Tela de Início” para abrir o ReelSave como app." },
    ],
    faqs: [
      { q: "Funciona no iPad?", a: "Sim, os passos são os mesmos." },
      { q: "Preciso de app de terceiros?", a: "Não, só Safari e o app Arquivos." },
      { q: "Salva com som?", a: "Sim, com música e áudio originais." },
    ],
  }),
  g("pt", "android", "baixar-reels-instagram-android", {
    title: "Como Baixar Reels do Instagram no Android",
    description: "Baixe Reels do Instagram no Android e salve na Galeria em segundos. Grátis, em HD e sem instalar app.",
    keywords: ["baixar reels android", "salvar reels na galeria", "baixar vídeo do instagram no celular", "baixar reels no celular"],
    intro: "No Android o Chrome baixa o Reel direto, e ele aparece na Galeria ou no Google Fotos.",
    steps: ["No Instagram: Compartilhar (✈️) › “Copiar link”.", "Abra o ReelSave no Chrome e cole o link.", "Toque em “Baixar vídeo”.", "Abra a Galeria ou o Google Fotos, pasta Download."],
    tips: [
      { h: "O vídeo não aparece na Galeria?", p: "Veja em Arquivos › Downloads; algumas galerias demoram alguns segundos." },
      { h: "Use como app", p: "Chrome ⋮ › “Adicionar à tela inicial”." },
    ],
    faqs: [
      { q: "Funciona em Samsung, Motorola, Xiaomi?", a: "Sim, em qualquer Android com navegador atualizado." },
      { q: "Preciso instalar APK?", a: "Não. Evite APKs desconhecidos; o ReelSave roda no navegador." },
      { q: "Quanto ocupa um Reel?", a: "Normalmente de 2 a 20 MB." },
    ],
  }),
  g("pt", "watermark", "baixar-reels-sem-marca-dagua", {
    title: "Baixar Reels do Instagram Sem Marca d'Água",
    description: "Como baixar Reels do Instagram sem marca d'água nem logo, em qualidade original e com áudio. Grátis e sem app.",
    keywords: ["baixar reels sem marca d'água", "reels sem marca d'água", "baixar reels sem logo", "tirar marca d'água reels"],
    intro: "O “Baixar” do próprio Instagram coloca o logo e o @usuário no vídeo. Com o ReelSave você recebe o arquivo original, limpo.",
    steps: ["Copie o link do Reel em Compartilhar (✈️).", "Cole no ReelSave.", "Toque em “Baixar vídeo”: você recebe o MP4 original, sem marca adicionada."],
    tips: [
      { h: "Por que o Instagram põe marca d'água?", p: "Para proteger os criadores. Ao reutilizar Reels de outras pessoas, peça permissão e dê os créditos." },
      { h: "Melhor que cortar", p: "Cortar ou desfocar a marca reduz a qualidade; o original é mais limpo." },
    ],
    faqs: [
      { q: "É legal?", a: "Para uso pessoal ou seu próprio conteúdo, sim; repostar conteúdo alheio exige permissão." },
      { q: "Perde qualidade?", a: "Não, é o mesmo arquivo que o Instagram reproduz." },
      { q: "Mantém a música?", a: "Sim." },
    ],
  }),

  // ───────── Русский ─────────
  g("ru", "iphone", "skachat-rils-iphone", {
    title: "Как Скачать Рилс из Инстаграма на iPhone (Сохранить в Фото)",
    description: "Пошаговая инструкция: как скачать Reels из Instagram на iPhone и сохранить в «Фото» — бесплатно, со звуком, без приложений.",
    keywords: ["скачать рилс на айфон", "сохранить рилс iphone", "скачать видео из инстаграма на айфон", "рилс в галерею айфон"],
    intro: "На iPhone приложение не нужно: Safari скачает Reels, а затем в два касания видео окажется в «Фото».",
    steps: ["Откройте Reels, нажмите «Поделиться» (✈️) › «Копировать ссылку».", "Откройте ReelSave в Safari и вставьте ссылку.", "Нажмите «Скачать видео».", "В «Файлы» › «Загрузки» откройте видео: «Поделиться» › «Сохранить видео».", "Готово — Reels в «Фото» со звуком."],
    tips: [
      { h: "Нет кнопки загрузки в Safari?", p: "Обновите iOS: менеджер загрузок есть в Safari начиная с iOS 13. Используйте Safari, а не встроенный браузер других приложений." },
      { h: "Ярлык", p: "«Поделиться» › «На экран „Домой“» — ReelSave будет открываться как приложение." },
    ],
    faqs: [
      { q: "Работает на iPad?", a: "Да, шаги те же." },
      { q: "Нужно стороннее приложение?", a: "Нет, только Safari и «Файлы»." },
      { q: "Звук сохраняется?", a: "Да, оригинальная музыка и звук." },
    ],
  }),
  g("ru", "android", "skachat-rils-android", {
    title: "Как Скачать Рилс из Инстаграма на Android (в Галерею)",
    description: "Скачивайте Reels из Instagram на Android и сохраняйте в Галерею. Бесплатно, в HD, без установки приложений.",
    keywords: ["скачать рилс на андроид", "сохранить рилс в галерею", "скачать видео из инстаграма на телефон", "скачать рилс на телефон"],
    intro: "На Android Chrome сразу скачивает Reels, и видео появляется в Галерее или Google Фото.",
    steps: ["В Instagram: «Поделиться» (✈️) › «Копировать ссылку».", "Откройте ReelSave в Chrome и вставьте ссылку.", "Нажмите «Скачать видео».", "Откройте Галерею или Google Фото, папка Download."],
    tips: [
      { h: "Видео нет в Галерее?", p: "Проверьте «Файлы» › «Загрузки»; некоторым галереям нужно несколько секунд." },
      { h: "Как приложение", p: "Chrome ⋮ › «Добавить на главный экран»." },
    ],
    faqs: [
      { q: "Работает на Samsung, Xiaomi, Honor?", a: "Да, на любом Android с современным браузером." },
      { q: "Нужно ставить APK?", a: "Нет. Избегайте неизвестных APK — ReelSave работает в браузере." },
      { q: "Сколько весит Reels?", a: "Обычно 2–20 МБ." },
    ],
  }),
  g("ru", "watermark", "skachat-rils-bez-vodyanogo-znaka", {
    title: "Скачать Рилс без Водяного Знака (Оригинальное Качество)",
    description: "Как скачать Reels из Instagram без водяного знака и логотипа, в оригинальном качестве со звуком. Бесплатно.",
    keywords: ["скачать рилс без водяного знака", "рилс без логотипа", "убрать водяной знак рилс", "скачать reels без watermark"],
    intro: "Встроенная загрузка Instagram добавляет логотип и @имя. ReelSave даёт чистый оригинальный файл.",
    steps: ["Скопируйте ссылку через «Поделиться» (✈️).", "Вставьте её в ReelSave.", "Нажмите «Скачать видео» — получите оригинальный MP4 без добавленных отметок."],
    tips: [
      { h: "Зачем Instagram добавляет знак?", p: "Чтобы защитить авторов. Чужие Reels используйте только с разрешением и указанием автора." },
      { h: "Лучше, чем обрезка", p: "Обрезка или размытие портят качество; оригинал чище." },
    ],
    faqs: [
      { q: "Это законно?", a: "Для личного использования и своего контента — да; повторная публикация чужого требует разрешения." },
      { q: "Качество теряется?", a: "Нет, это тот же файл, что воспроизводит Instagram." },
      { q: "Музыка остаётся?", a: "Да." },
    ],
  }),

  // ───────── Italiano ─────────
  g("it", "iphone", "scaricare-reel-instagram-iphone", {
    title: "Come Scaricare Reel di Instagram su iPhone (Salvare in Foto)",
    description: "Guida per scaricare i Reel di Instagram su iPhone e salvarli in Foto: gratis, con audio e senza app.",
    keywords: ["scaricare reel iphone", "salvare reel su iphone", "scaricare video instagram iphone", "salvare reel nel rullino"],
    intro: "Su iPhone non serve nessuna app: Safari scarica il Reel e con due tocchi finisce in Foto.",
    steps: ["Apri il Reel, tocca Condividi (✈️) › “Copia link”.", "Apri ReelSave in Safari e incolla il link.", "Tocca “Scarica video”.", "In File › Download apri il video, poi Condividi › “Salva video”.", "Il Reel è in Foto, con audio."],
    tips: [
      { h: "Nessun pulsante di download?", p: "Aggiorna iOS: Safari gestisce i download da iOS 13. Usa Safari, non il browser interno di altre app." },
      { h: "Scorciatoia", p: "Condividi › “Aggiungi alla schermata Home”." },
    ],
    faqs: [
      { q: "Funziona su iPad?", a: "Sì, stessi passaggi." },
      { q: "Serve un’app di terze parti?", a: "No, bastano Safari e l’app File." },
      { q: "C’è l’audio?", a: "Sì, musica e audio originali." },
    ],
  }),
  g("it", "android", "scaricare-reel-instagram-android", {
    title: "Come Scaricare Reel di Instagram su Android (nella Galleria)",
    description: "Scarica i Reel di Instagram su Android e trovali nella Galleria. Gratis, HD, senza app.",
    keywords: ["scaricare reel android", "salvare reel in galleria", "scaricare video instagram android", "scaricare reel sul telefono"],
    intro: "Su Android Chrome scarica direttamente il Reel, che compare nella Galleria o in Google Foto.",
    steps: ["In Instagram: Condividi (✈️) › “Copia link”.", "Apri ReelSave in Chrome e incolla il link.", "Tocca “Scarica video”.", "Apri la Galleria o Google Foto, cartella Download."],
    tips: [
      { h: "Il video non è in Galleria?", p: "Controlla File › Download; alcune gallerie impiegano qualche secondo." },
      { h: "Come un’app", p: "Chrome ⋮ › “Aggiungi a schermata Home”." },
    ],
    faqs: [
      { q: "Funziona su Samsung, Xiaomi, Oppo?", a: "Sì, su qualsiasi Android con browser aggiornato." },
      { q: "Devo installare un APK?", a: "No. Evita APK sconosciuti: ReelSave funziona nel browser." },
      { q: "Quanto pesa un Reel?", a: "Di solito 2–20 MB." },
    ],
  }),
  g("it", "watermark", "scaricare-reel-senza-filigrana", {
    title: "Scaricare Reel di Instagram Senza Filigrana",
    description: "Come scaricare i Reel di Instagram senza filigrana né logo, in qualità originale con audio. Gratis e senza app.",
    keywords: ["scaricare reel senza filigrana", "reel senza logo", "togliere filigrana reel", "reel instagram senza watermark"],
    intro: "Il download integrato di Instagram aggiunge logo e @nomeutente. ReelSave ti dà il file originale, pulito.",
    steps: ["Copia il link del Reel da Condividi (✈️).", "Incollalo su ReelSave.", "Tocca “Scarica video”: ottieni l’MP4 originale senza marchi aggiunti."],
    tips: [
      { h: "Perché la filigrana?", p: "Per tutelare i creatori. Per riusare Reel altrui chiedi il permesso e cita l’autore." },
      { h: "Meglio che ritagliare", p: "Ritagliare o sfocare riduce la qualità; l’originale è più nitido." },
    ],
    faqs: [
      { q: "È legale?", a: "Per uso personale o contenuti tuoi sì; ripubblicare contenuti altrui richiede permesso." },
      { q: "Si perde qualità?", a: "No, è lo stesso file riprodotto da Instagram." },
      { q: "Resta la musica?", a: "Sì." },
    ],
  }),

  // ───────── Nederlands ─────────
  g("nl", "iphone", "instagram-reels-downloaden-iphone", {
    title: "Instagram Reels Downloaden op iPhone (Opslaan in Foto’s)",
    description: "Zo download je Instagram Reels op je iPhone en bewaar je ze in Foto’s – gratis, met geluid, zonder app.",
    keywords: ["instagram reels downloaden iphone", "reels opslaan iphone", "instagram video opslaan iphone", "reels in foto’s zetten"],
    intro: "Op de iPhone heb je geen app nodig: Safari downloadt de Reel en met twee tikken staat hij in Foto’s.",
    steps: ["Open de Reel, tik op Delen (✈️) › ‘Link kopiëren’.", "Open ReelSave in Safari en plak de link.", "Tik op ‘Video downloaden’.", "Open in Bestanden › Downloads de video en kies Deel › ‘Bewaar video’.", "Klaar: de Reel staat met geluid in Foto’s."],
    tips: [
      { h: "Geen downloadknop in Safari?", p: "Werk iOS bij: Safari heeft sinds iOS 13 een downloadbeheerder. Gebruik Safari, niet de ingebouwde browser van andere apps." },
      { h: "Snelkoppeling", p: "Deel › ‘Zet op beginscherm’." },
    ],
    faqs: [
      { q: "Werkt het op iPad?", a: "Ja, dezelfde stappen." },
      { q: "Heb ik een extra app nodig?", a: "Nee, alleen Safari en Bestanden." },
      { q: "Zit het geluid erbij?", a: "Ja, originele muziek en geluid." },
    ],
  }),
  g("nl", "android", "instagram-reels-downloaden-android", {
    title: "Instagram Reels Downloaden op Android (in de Galerij)",
    description: "Download Instagram Reels op Android en bewaar ze in je Galerij. Gratis, HD, zonder app.",
    keywords: ["instagram reels downloaden android", "reels opslaan in galerij", "instagram video downloaden android", "reels op telefoon opslaan"],
    intro: "Op Android downloadt Chrome de Reel direct; hij verschijnt in de Galerij of Google Foto’s.",
    steps: ["In Instagram: Delen (✈️) › ‘Link kopiëren’.", "Open ReelSave in Chrome en plak de link.", "Tik op ‘Video downloaden’.", "Open de Galerij of Google Foto’s, map Download."],
    tips: [
      { h: "Video niet in de Galerij?", p: "Kijk in Bestanden › Downloads; sommige galerijen hebben een paar seconden nodig." },
      { h: "Gebruik als app", p: "Chrome ⋮ › ‘Toevoegen aan startscherm’." },
    ],
    faqs: [
      { q: "Werkt het op Samsung, Pixel, Xiaomi?", a: "Ja, op elke Android met een moderne browser." },
      { q: "Moet ik een APK installeren?", a: "Nee. Vermijd onbekende APK’s; ReelSave werkt in de browser." },
      { q: "Hoe groot is een Reel?", a: "Meestal 2–20 MB." },
    ],
  }),
  g("nl", "watermark", "instagram-reels-downloaden-zonder-watermerk", {
    title: "Instagram Reels Downloaden Zonder Watermerk",
    description: "Download Instagram Reels zonder watermerk of logo, in originele kwaliteit met geluid. Gratis en zonder app.",
    keywords: ["instagram reels downloaden zonder watermerk", "reels zonder watermerk", "watermerk verwijderen reels", "reels zonder logo"],
    intro: "De ingebouwde download van Instagram zet er het logo en de @gebruikersnaam op. ReelSave geeft je het originele, schone bestand.",
    steps: ["Kopieer de Reel-link via Delen (✈️).", "Plak hem in ReelSave.", "Tik op ‘Video downloaden’: je krijgt de originele MP4 zonder extra markering."],
    tips: [
      { h: "Waarom een watermerk?", p: "Om makers te beschermen. Hergebruik Reels van anderen alleen met toestemming en bronvermelding." },
      { h: "Beter dan bijsnijden", p: "Bijsnijden of vervagen kost kwaliteit; het origineel is scherper." },
    ],
    faqs: [
      { q: "Is het legaal?", a: "Voor eigen gebruik of eigen content wel; content van anderen opnieuw plaatsen vraagt toestemming." },
      { q: "Verlies je kwaliteit?", a: "Nee, het is hetzelfde bestand dat Instagram afspeelt." },
      { q: "Blijft de muziek erin?", a: "Ja." },
    ],
  }),

  // ───────── Polski ─────────
  g("pl", "iphone", "jak-pobrac-rolke-z-instagrama-iphone", {
    title: "Jak Pobrać Rolkę z Instagrama na iPhone (Zapisz w Zdjęciach)",
    description: "Krok po kroku: jak pobrać rolki z Instagrama na iPhone i zapisać w Zdjęciach – za darmo, z dźwiękiem, bez aplikacji.",
    keywords: ["jak pobrać rolkę z instagrama na iphone", "pobierz rolki iphone", "zapisz rolkę na iphone", "pobierz film z instagrama iphone"],
    intro: "Na iPhonie nie potrzebujesz aplikacji: Safari pobierze rolkę, a dwoma dotknięciami trafi ona do Zdjęć.",
    steps: ["Otwórz rolkę, dotknij Udostępnij (✈️) › „Kopiuj link”.", "Otwórz ReelSave w Safari i wklej link.", "Dotknij „Pobierz film”.", "W Pliki › Pobrane otwórz film i wybierz Udostępnij › „Zachowaj wideo”.", "Gotowe – rolka jest w Zdjęciach, z dźwiękiem."],
    tips: [
      { h: "Brak przycisku pobierania w Safari?", p: "Zaktualizuj iOS – Safari ma menedżer pobierania od iOS 13. Używaj Safari, nie przeglądarki wbudowanej w inne aplikacje." },
      { h: "Skrót", p: "Udostępnij › „Do ekranu początkowego”." },
    ],
    faqs: [
      { q: "Czy działa na iPadzie?", a: "Tak, kroki są takie same." },
      { q: "Czy potrzebuję aplikacji?", a: "Nie, wystarczą Safari i Pliki." },
      { q: "Czy jest dźwięk?", a: "Tak, oryginalna muzyka i dźwięk." },
    ],
  }),
  g("pl", "android", "jak-pobrac-rolke-z-instagrama-android", {
    title: "Jak Pobrać Rolkę z Instagrama na Androida (do Galerii)",
    description: "Pobieraj rolki z Instagrama na Androida i zapisuj w Galerii. Za darmo, w HD, bez instalowania aplikacji.",
    keywords: ["jak pobrać rolkę z instagrama na androida", "pobierz rolki android", "zapisz rolkę w galerii", "pobierz film z instagrama na telefon"],
    intro: "Na Androidzie Chrome od razu pobiera rolkę, a ta pojawia się w Galerii lub Zdjęciach Google.",
    steps: ["W Instagramie: Udostępnij (✈️) › „Kopiuj link”.", "Otwórz ReelSave w Chrome i wklej link.", "Dotknij „Pobierz film”.", "Otwórz Galerię lub Zdjęcia Google, folder Download."],
    tips: [
      { h: "Nie ma filmu w Galerii?", p: "Sprawdź Pliki › Pobrane; niektóre galerie potrzebują kilku sekund." },
      { h: "Jak aplikacja", p: "Chrome ⋮ › „Dodaj do ekranu głównego”." },
    ],
    faqs: [
      { q: "Czy działa na Samsungu, Xiaomi, Motoroli?", a: "Tak, na każdym Androidzie z nowoczesną przeglądarką." },
      { q: "Czy muszę instalować APK?", a: "Nie. Unikaj nieznanych plików APK – ReelSave działa w przeglądarce." },
      { q: "Ile waży rolka?", a: "Zwykle 2–20 MB." },
    ],
  }),
  g("pl", "watermark", "pobierz-rolki-bez-znaku-wodnego", {
    title: "Pobierz Rolki z Instagrama Bez Znaku Wodnego",
    description: "Jak pobrać rolki z Instagrama bez znaku wodnego i logo, w oryginalnej jakości z dźwiękiem. Za darmo, bez aplikacji.",
    keywords: ["pobierz rolki bez znaku wodnego", "rolki bez logo", "usunąć znak wodny rolki", "instagram reels bez znaku wodnego"],
    intro: "Wbudowane pobieranie Instagrama dodaje logo i @nazwę. ReelSave daje czysty, oryginalny plik.",
    steps: ["Skopiuj link do rolki przez Udostępnij (✈️).", "Wklej go w ReelSave.", "Dotknij „Pobierz film” – otrzymasz oryginalny MP4 bez dodanych oznaczeń."],
    tips: [
      { h: "Dlaczego Instagram dodaje znak wodny?", p: "Aby chronić twórców. Cudze rolki wykorzystuj tylko za zgodą i z oznaczeniem autora." },
      { h: "Lepsze niż przycinanie", p: "Przycinanie lub rozmywanie obniża jakość; oryginał jest ostrzejszy." },
    ],
    faqs: [
      { q: "Czy to legalne?", a: "Do użytku osobistego i własnych treści – tak; ponowna publikacja cudzych wymaga zgody." },
      { q: "Czy tracę jakość?", a: "Nie, to ten sam plik, który odtwarza Instagram." },
      { q: "Czy muzyka zostaje?", a: "Tak." },
    ],
  }),
];

export const guidesFor = (lang: string) => LOCALE_GUIDES.filter((x) => x.lang === lang);
export const getLocaleGuide = (lang: string, slug: string) => LOCALE_GUIDES.find((x) => x.lang === lang && x.slug === slug);
/** hreflang map: same topic across all languages (+ English device guide where it exists). */
export const topicLanguages = (topic: Topic): Record<string, string> => {
  const en: Partial<Record<Topic, string>> = { iphone: "/download-instagram-reels-iphone", android: "/download-instagram-reels-android", watermark: "/blog/download-instagram-reels-without-watermark" };
  return { ...(en[topic] ? { en: en[topic]! } : {}), ...Object.fromEntries(LOCALE_GUIDES.filter((x) => x.topic === topic).map((x) => [x.lang, `/${x.lang}/${x.slug}`])) };
};
