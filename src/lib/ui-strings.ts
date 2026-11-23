import type { ErrorCode } from "./types";

export interface UiStrings {
  home: string;
  howTo: string;
  blog: string;
  faq: string;
  urlLabel: string;
  placeholder: string;
  paste: string;
  clear: string;
  download: string;
  processing: string;
  downloadVideo: string;
  downloading: string;
  started: string;
  clipboardBlocked: string;
  preview: string;
  notAffiliated: string;
  privacy: string;
  terms: string;
  guides: string;
  languages: string;
  errors: Record<ErrorCode, string>;
}

const en: UiStrings = {
  home: "Home", howTo: "How to Download", blog: "Blog", faq: "FAQ",
  urlLabel: "Instagram Reel URL", placeholder: "Paste Instagram Reel URL here", paste: "Paste", clear: "Clear",
  download: "Download", processing: "Processing…", downloadVideo: "Download Video", downloading: "Downloading…", started: "Download started.",
  clipboardBlocked: "Clipboard access was blocked. Long-press or press Ctrl/⌘+V to paste.",
  preview: "Video preview", notAffiliated: "Not affiliated with Instagram or Meta.", privacy: "Privacy Policy", terms: "Terms of Service",
  guides: "Guides", languages: "Languages",
  errors: {
    EMPTY_INPUT: "Please paste an Instagram Reel link first.",
    INVALID_URL: "That doesn't look like an Instagram Reel link. Use a link like https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "This Reel is private or can't be accessed. Only public Reels you're authorized to download are supported.",
    NOT_FOUND: "This Reel could not be found. It may have been deleted.",
    UNSUPPORTED_MEDIA: "This post isn't a downloadable video Reel.",
    TEMPORARILY_UNAVAILABLE: "The video is temporarily unavailable. Please try again in a few minutes.",
    PROVIDER_NOT_CONFIGURED: "Downloading isn't available yet: no media retrieval provider is configured on this site.",
    RATE_LIMITED: "Too many requests. Please wait a minute and try again.",
    PAYLOAD_TOO_LARGE: "The request was too large.",
    DOWNLOAD_FAILED: "The download failed. Please try again.",
    INTERNAL_ERROR: "Something went wrong. Please try again.",
  },
};

const hi: UiStrings = {
  home: "Home", howTo: "Download Kaise Kare", blog: "Blog", faq: "FAQ",
  urlLabel: "Instagram Reel link", placeholder: "Instagram reel ka link yahan paste karein", paste: "Paste", clear: "Hatayein",
  download: "Download", processing: "Ho raha hai…", downloadVideo: "Download Video", downloading: "Download ho raha hai…", started: "Download shuru ho gaya.",
  clipboardBlocked: "Clipboard access block hai. Box me long-press karke paste karein.",
  preview: "Video preview", notAffiliated: "Instagram ya Meta se juda nahi hai.", privacy: "Privacy Policy", terms: "Terms of Service",
  guides: "Guides", languages: "Bhashayein",
  errors: {
    EMPTY_INPUT: "Pehle Instagram reel ka link paste karein.",
    INVALID_URL: "Yeh Instagram reel ka link nahi lagta. Aisa link use karein: https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Yeh reel private hai ya access nahi ho sakti. Sirf public reels download hoti hain.",
    NOT_FOUND: "Yeh reel nahi mili. Shayad delete ho gayi hai.",
    UNSUPPORTED_MEDIA: "Yeh post download hone wali video reel nahi hai.",
    TEMPORARILY_UNAVAILABLE: "Video abhi uplabdh nahi hai. Kuch minute baad try karein.",
    PROVIDER_NOT_CONFIGURED: "Download abhi uplabdh nahi hai.",
    RATE_LIMITED: "Bahut zyada requests. Ek minute ruk kar dobara try karein.",
    PAYLOAD_TOO_LARGE: "Request bahut badi thi.",
    DOWNLOAD_FAILED: "Download fail ho gaya. Dobara try karein.",
    INTERNAL_ERROR: "Kuch gadbad ho gayi. Dobara try karein.",
  },
};

const es: UiStrings = {
  home: "Inicio", howTo: "Cómo descargar", blog: "Blog", faq: "Preguntas",
  urlLabel: "Enlace del Reel de Instagram", placeholder: "Pega aquí el enlace del Reel de Instagram", paste: "Pegar", clear: "Borrar",
  download: "Descargar", processing: "Procesando…", downloadVideo: "Descargar vídeo", downloading: "Descargando…", started: "Descarga iniciada.",
  clipboardBlocked: "El acceso al portapapeles está bloqueado. Mantén pulsado o usa Ctrl/⌘+V para pegar.",
  preview: "Vista previa del vídeo", notAffiliated: "No está afiliado a Instagram ni a Meta.", privacy: "Privacidad", terms: "Términos",
  guides: "Guías", languages: "Idiomas",
  errors: {
    EMPTY_INPUT: "Primero pega un enlace de un Reel de Instagram.",
    INVALID_URL: "Eso no parece un enlace de Reel. Usa uno como https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Este Reel es privado o no está accesible. Solo se admiten Reels públicos.",
    NOT_FOUND: "No se encontró este Reel. Puede que se haya eliminado.",
    UNSUPPORTED_MEDIA: "Esta publicación no es un Reel de vídeo descargable.",
    TEMPORARILY_UNAVAILABLE: "El vídeo no está disponible temporalmente. Inténtalo en unos minutos.",
    PROVIDER_NOT_CONFIGURED: "La descarga aún no está disponible.",
    RATE_LIMITED: "Demasiadas solicitudes. Espera un minuto e inténtalo de nuevo.",
    PAYLOAD_TOO_LARGE: "La solicitud era demasiado grande.",
    DOWNLOAD_FAILED: "La descarga falló. Inténtalo de nuevo.",
    INTERNAL_ERROR: "Algo salió mal. Inténtalo de nuevo.",
  },
};

const de: UiStrings = {
  home: "Start", howTo: "Anleitung", blog: "Blog", faq: "FAQ",
  urlLabel: "Instagram-Reel-Link", placeholder: "Instagram-Reel-Link hier einfügen", paste: "Einfügen", clear: "Löschen",
  download: "Herunterladen", processing: "Wird verarbeitet…", downloadVideo: "Video herunterladen", downloading: "Wird geladen…", started: "Download gestartet.",
  clipboardBlocked: "Zugriff auf die Zwischenablage blockiert. Lange tippen oder Strg/⌘+V drücken.",
  preview: "Videovorschau", notAffiliated: "Nicht mit Instagram oder Meta verbunden.", privacy: "Datenschutz", terms: "Nutzungsbedingungen",
  guides: "Anleitungen", languages: "Sprachen",
  errors: {
    EMPTY_INPUT: "Bitte zuerst einen Instagram-Reel-Link einfügen.",
    INVALID_URL: "Das sieht nicht nach einem Reel-Link aus. Beispiel: https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Dieses Reel ist privat oder nicht erreichbar. Nur öffentliche Reels werden unterstützt.",
    NOT_FOUND: "Dieses Reel wurde nicht gefunden. Es wurde eventuell gelöscht.",
    UNSUPPORTED_MEDIA: "Dieser Beitrag ist kein herunterladbares Video-Reel.",
    TEMPORARILY_UNAVAILABLE: "Das Video ist vorübergehend nicht verfügbar. Bitte in ein paar Minuten erneut versuchen.",
    PROVIDER_NOT_CONFIGURED: "Downloads sind noch nicht verfügbar.",
    RATE_LIMITED: "Zu viele Anfragen. Bitte eine Minute warten.",
    PAYLOAD_TOO_LARGE: "Die Anfrage war zu groß.",
    DOWNLOAD_FAILED: "Der Download ist fehlgeschlagen. Bitte erneut versuchen.",
    INTERNAL_ERROR: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
  },
};

const ja: UiStrings = {
  home: "ホーム", howTo: "保存方法", blog: "ブログ", faq: "よくある質問",
  urlLabel: "インスタのリールURL", placeholder: "インスタのリールのリンクをここに貼り付け", paste: "貼り付け", clear: "クリア",
  download: "ダウンロード", processing: "処理中…", downloadVideo: "動画を保存", downloading: "ダウンロード中…", started: "ダウンロードを開始しました。",
  clipboardBlocked: "クリップボードへのアクセスがブロックされました。長押しまたはCtrl/⌘+Vで貼り付けてください。",
  preview: "動画プレビュー", notAffiliated: "InstagramおよびMetaとは提携していません。", privacy: "プライバシーポリシー", terms: "利用規約",
  guides: "ガイド", languages: "言語",
  errors: {
    EMPTY_INPUT: "まずインスタのリールのリンクを貼り付けてください。",
    INVALID_URL: "リールのリンクではないようです。https://www.instagram.com/reel/… の形式のリンクを使ってください。",
    PRIVATE_OR_INACCESSIBLE: "このリールは非公開か、アクセスできません。公開リールのみ対応しています。",
    NOT_FOUND: "リールが見つかりません。削除された可能性があります。",
    UNSUPPORTED_MEDIA: "この投稿は保存できる動画リールではありません。",
    TEMPORARILY_UNAVAILABLE: "動画は一時的に利用できません。数分後にもう一度お試しください。",
    PROVIDER_NOT_CONFIGURED: "ダウンロードはまだ利用できません。",
    RATE_LIMITED: "リクエストが多すぎます。1分ほど待ってから再度お試しください。",
    PAYLOAD_TOO_LARGE: "リクエストが大きすぎます。",
    DOWNLOAD_FAILED: "ダウンロードに失敗しました。もう一度お試しください。",
    INTERNAL_ERROR: "エラーが発生しました。もう一度お試しください。",
  },
};

const fr: UiStrings = {
  home: "Accueil", howTo: "Comment télécharger", blog: "Blog", faq: "FAQ",
  urlLabel: "Lien du Reel Instagram", placeholder: "Collez ici le lien du Reel Instagram", paste: "Coller", clear: "Effacer",
  download: "Télécharger", processing: "Traitement…", downloadVideo: "Télécharger la vidéo", downloading: "Téléchargement…", started: "Téléchargement lancé.",
  clipboardBlocked: "L’accès au presse-papiers est bloqué. Appui long ou Ctrl/⌘+V pour coller.",
  preview: "Aperçu de la vidéo", notAffiliated: "Non affilié à Instagram ni à Meta.", privacy: "Confidentialité", terms: "Conditions",
  guides: "Guides", languages: "Langues",
  errors: {
    EMPTY_INPUT: "Collez d’abord un lien de Reel Instagram.",
    INVALID_URL: "Ce n’est pas un lien de Reel. Exemple : https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Ce Reel est privé ou inaccessible. Seuls les Reels publics sont pris en charge.",
    NOT_FOUND: "Reel introuvable. Il a peut-être été supprimé.",
    UNSUPPORTED_MEDIA: "Cette publication n’est pas un Reel vidéo téléchargeable.",
    TEMPORARILY_UNAVAILABLE: "La vidéo est temporairement indisponible. Réessayez dans quelques minutes.",
    PROVIDER_NOT_CONFIGURED: "Le téléchargement n’est pas encore disponible.",
    RATE_LIMITED: "Trop de demandes. Patientez une minute puis réessayez.",
    PAYLOAD_TOO_LARGE: "La demande était trop volumineuse.",
    DOWNLOAD_FAILED: "Le téléchargement a échoué. Réessayez.",
    INTERNAL_ERROR: "Une erreur s’est produite. Réessayez.",
  },
};

const pt: UiStrings = {
  home: "Início", howTo: "Como baixar", blog: "Blog", faq: "Perguntas",
  urlLabel: "Link do Reel do Instagram", placeholder: "Cole aqui o link do Reel do Instagram", paste: "Colar", clear: "Limpar",
  download: "Baixar", processing: "Processando…", downloadVideo: "Baixar vídeo", downloading: "Baixando…", started: "Download iniciado.",
  clipboardBlocked: "O acesso à área de transferência foi bloqueado. Toque e segure ou use Ctrl/⌘+V para colar.",
  preview: "Prévia do vídeo", notAffiliated: "Sem afiliação com o Instagram ou a Meta.", privacy: "Privacidade", terms: "Termos",
  guides: "Guias", languages: "Idiomas",
  errors: {
    EMPTY_INPUT: "Cole primeiro um link de Reel do Instagram.",
    INVALID_URL: "Isso não parece um link de Reel. Use um link como https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Este Reel é privado ou inacessível. Apenas Reels públicos são suportados.",
    NOT_FOUND: "Reel não encontrado. Pode ter sido excluído.",
    UNSUPPORTED_MEDIA: "Esta publicação não é um Reel de vídeo que possa ser baixado.",
    TEMPORARILY_UNAVAILABLE: "O vídeo está temporariamente indisponível. Tente novamente em alguns minutos.",
    PROVIDER_NOT_CONFIGURED: "O download ainda não está disponível.",
    RATE_LIMITED: "Muitas solicitações. Aguarde um minuto e tente de novo.",
    PAYLOAD_TOO_LARGE: "A solicitação era grande demais.",
    DOWNLOAD_FAILED: "O download falhou. Tente novamente.",
    INTERNAL_ERROR: "Algo deu errado. Tente novamente.",
  },
};

const ru: UiStrings = {
  home: "Главная", howTo: "Как скачать", blog: "Блог", faq: "Вопросы",
  urlLabel: "Ссылка на Reels в Instagram", placeholder: "Вставьте ссылку на Reels сюда", paste: "Вставить", clear: "Очистить",
  download: "Скачать", processing: "Обработка…", downloadVideo: "Скачать видео", downloading: "Загрузка…", started: "Загрузка началась.",
  clipboardBlocked: "Доступ к буферу обмена заблокирован. Нажмите и удерживайте или используйте Ctrl/⌘+V.",
  preview: "Предпросмотр видео", notAffiliated: "Не связан с Instagram или Meta.", privacy: "Конфиденциальность", terms: "Условия",
  guides: "Инструкции", languages: "Языки",
  errors: {
    EMPTY_INPUT: "Сначала вставьте ссылку на Reels из Instagram.",
    INVALID_URL: "Это не похоже на ссылку на Reels. Пример: https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Этот Reels закрыт или недоступен. Поддерживаются только публичные Reels.",
    NOT_FOUND: "Reels не найден. Возможно, он удалён.",
    UNSUPPORTED_MEDIA: "Эта публикация не является видео Reels.",
    TEMPORARILY_UNAVAILABLE: "Видео временно недоступно. Попробуйте через несколько минут.",
    PROVIDER_NOT_CONFIGURED: "Скачивание пока недоступно.",
    RATE_LIMITED: "Слишком много запросов. Подождите минуту.",
    PAYLOAD_TOO_LARGE: "Слишком большой запрос.",
    DOWNLOAD_FAILED: "Не удалось скачать. Попробуйте ещё раз.",
    INTERNAL_ERROR: "Что-то пошло не так. Попробуйте ещё раз.",
  },
};

const it: UiStrings = {
  home: "Home", howTo: "Come scaricare", blog: "Blog", faq: "Domande",
  urlLabel: "Link del Reel di Instagram", placeholder: "Incolla qui il link del Reel di Instagram", paste: "Incolla", clear: "Cancella",
  download: "Scarica", processing: "Elaborazione…", downloadVideo: "Scarica video", downloading: "Download in corso…", started: "Download avviato.",
  clipboardBlocked: "Accesso agli appunti bloccato. Tieni premuto o usa Ctrl/⌘+V per incollare.",
  preview: "Anteprima video", notAffiliated: "Non affiliato a Instagram o Meta.", privacy: "Privacy", terms: "Termini",
  guides: "Guide", languages: "Lingue",
  errors: {
    EMPTY_INPUT: "Incolla prima un link di un Reel di Instagram.",
    INVALID_URL: "Non sembra un link di un Reel. Usa un link come https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Questo Reel è privato o non accessibile. Sono supportati solo i Reel pubblici.",
    NOT_FOUND: "Reel non trovato. Potrebbe essere stato eliminato.",
    UNSUPPORTED_MEDIA: "Questo post non è un Reel video scaricabile.",
    TEMPORARILY_UNAVAILABLE: "Il video non è temporaneamente disponibile. Riprova tra qualche minuto.",
    PROVIDER_NOT_CONFIGURED: "Il download non è ancora disponibile.",
    RATE_LIMITED: "Troppe richieste. Attendi un minuto e riprova.",
    PAYLOAD_TOO_LARGE: "La richiesta era troppo grande.",
    DOWNLOAD_FAILED: "Download non riuscito. Riprova.",
    INTERNAL_ERROR: "Qualcosa è andato storto. Riprova.",
  },
};

const nl: UiStrings = {
  home: "Home", howTo: "Zo download je", blog: "Blog", faq: "Vragen",
  urlLabel: "Instagram Reel-link", placeholder: "Plak hier de Instagram Reel-link", paste: "Plakken", clear: "Wissen",
  download: "Downloaden", processing: "Bezig…", downloadVideo: "Video downloaden", downloading: "Downloaden…", started: "Download gestart.",
  clipboardBlocked: "Toegang tot het klembord is geblokkeerd. Houd ingedrukt of gebruik Ctrl/⌘+V.",
  preview: "Videovoorbeeld", notAffiliated: "Niet verbonden aan Instagram of Meta.", privacy: "Privacy", terms: "Voorwaarden",
  guides: "Handleidingen", languages: "Talen",
  errors: {
    EMPTY_INPUT: "Plak eerst een Instagram Reel-link.",
    INVALID_URL: "Dat lijkt geen Reel-link. Gebruik een link zoals https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Deze Reel is privé of niet bereikbaar. Alleen openbare Reels worden ondersteund.",
    NOT_FOUND: "Reel niet gevonden. Mogelijk is hij verwijderd.",
    UNSUPPORTED_MEDIA: "Dit bericht is geen downloadbare videoreel.",
    TEMPORARILY_UNAVAILABLE: "De video is tijdelijk niet beschikbaar. Probeer het over een paar minuten opnieuw.",
    PROVIDER_NOT_CONFIGURED: "Downloaden is nog niet beschikbaar.",
    RATE_LIMITED: "Te veel verzoeken. Wacht een minuut en probeer opnieuw.",
    PAYLOAD_TOO_LARGE: "Het verzoek was te groot.",
    DOWNLOAD_FAILED: "Downloaden mislukt. Probeer het opnieuw.",
    INTERNAL_ERROR: "Er ging iets mis. Probeer het opnieuw.",
  },
};

const pl: UiStrings = {
  home: "Start", howTo: "Jak pobrać", blog: "Blog", faq: "Pytania",
  urlLabel: "Link do rolki z Instagrama", placeholder: "Wklej tutaj link do rolki z Instagrama", paste: "Wklej", clear: "Wyczyść",
  download: "Pobierz", processing: "Przetwarzanie…", downloadVideo: "Pobierz film", downloading: "Pobieranie…", started: "Pobieranie rozpoczęte.",
  clipboardBlocked: "Dostęp do schowka zablokowany. Przytrzymaj lub użyj Ctrl/⌘+V, aby wkleić.",
  preview: "Podgląd filmu", notAffiliated: "Nie jest powiązany z Instagramem ani Metą.", privacy: "Prywatność", terms: "Regulamin",
  guides: "Poradniki", languages: "Języki",
  errors: {
    EMPTY_INPUT: "Najpierw wklej link do rolki z Instagrama.",
    INVALID_URL: "To nie wygląda na link do rolki. Użyj linku jak https://www.instagram.com/reel/…",
    PRIVATE_OR_INACCESSIBLE: "Ta rolka jest prywatna lub niedostępna. Obsługiwane są tylko publiczne rolki.",
    NOT_FOUND: "Nie znaleziono rolki. Mogła zostać usunięta.",
    UNSUPPORTED_MEDIA: "Ten post nie jest rolką wideo do pobrania.",
    TEMPORARILY_UNAVAILABLE: "Film jest chwilowo niedostępny. Spróbuj za kilka minut.",
    PROVIDER_NOT_CONFIGURED: "Pobieranie nie jest jeszcze dostępne.",
    RATE_LIMITED: "Zbyt wiele żądań. Poczekaj minutę i spróbuj ponownie.",
    PAYLOAD_TOO_LARGE: "Żądanie było zbyt duże.",
    DOWNLOAD_FAILED: "Pobieranie nie powiodło się. Spróbuj ponownie.",
    INTERNAL_ERROR: "Coś poszło nie tak. Spróbuj ponownie.",
  },
};

export const UI: Record<string, UiStrings> = { en, hi, es, de, ja, fr, pt, ru, it, nl, pl };
export const ui = (lang: string) => UI[lang] ?? en;
