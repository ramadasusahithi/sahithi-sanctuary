import logo from "@/assets/logo.png.png";
import navachitrikaHero from "@/assets/navachitrika-hero.jpg";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
import event5 from "@/assets/event5.jpeg";
import event6 from "@/assets/event6.jpeg";
import event7 from "@/assets/event7.jpeg";
import event8 from "@/assets/event8.jpeg";
import event9 from "@/assets/event9.jpeg";
import event10 from "@/assets/event10.jpeg";
import event11 from "@/assets/event11.jpeg";
import event12 from "@/assets/event12.jpeg";
import event13 from "@/assets/event13.jpeg";
import event14 from "@/assets/event14.jpeg";
import event15 from "@/assets/event15.jpeg";
import event16 from "@/assets/event16.jpeg";
import event17 from "@/assets/event17.jpeg";
import book1 from "@/assets/book1.jpeg";
import book2 from "@/assets/book2.jpeg";
import book3 from "@/assets/book3.jpeg";
import book4 from "@/assets/book4.jpeg";
import book5 from "@/assets/book5.jpeg";
import book6 from "@/assets/book6.jpeg";
import book7 from "@/assets/book7.jpeg";

export const logoUrl = logo;

/** Original decorative artwork representing the Navachitrika magazine section (not a real cover). */
export const navachitrikaHeroUrl = navachitrikaHero;

/** Organization event, award ceremony and cultural programme photographs. */
export const galleryPhotos = [
  { url: event1, alt: "Award presentation at a literary felicitation programme" },
  { url: event2, alt: "Book launch festival (పుస్తక ఆవిష్కరణ మహోత్సవము) with honoured guests" },
  { url: event3, alt: "Group felicitation with commemorative memento at a literary programme" },
  { url: event4, alt: "Writer receiving a national record certificate and trophy" },
  { url: event5, alt: "Organizers with a young awardee at a literary event" },
  { url: event6, alt: "Presentation of organization publications to police officials" },
  { url: event7, alt: "Certificate of participation presented at national literary celebrations" },
  { url: event8, alt: "Felicitation ceremony at Kala Sangeetha Natya Vedika auditorium" },
  { url: event9, alt: "Organization members presenting a publication to a senior official" },
  { url: event10, alt: "Book launch festival of Ramadasu Sahithi Kala Seva Samstha in Khammam district" },
  { url: event11, alt: "Felicitation of a writer with shawl and honour badge at a literary programme" },
  { url: event12, alt: "Second annual celebration (ద్వితీయ వార్షికోత్సవం) and book launch felicitation" },
  { url: event13, alt: "Presentation of the book 'నాలుగో సింహం' to a senior police official" },
  { url: event14, alt: "Organization representative honoured with a shawl by a police official" },
  { url: event15, alt: "Organizers seated on the dais at an annual literary celebration" },
  { url: event16, alt: "Group photograph at the 'త్రిగుణ' book launch mahotsavam" },
  { url: event17, alt: "Organizational literary event and public felicitation photograph" },
];

export const org = {
  nameEn: "RAMADASU SAHITHI KALA SEVA SAMSTHA",
  nameTe: "రామదాసు సాహితీ కళా సేవా సంస్థ",
  regNo: "435/2024",
  isoTe: "ISO గుర్తింపు పొందిన సంస్థ",
  aboutTe:
    "రామదాసు సాహితీ కళా సేవా సంస్థ సాహిత్యం, కళలు మరియు సాహిత్య సేవా కార్యక్రమాలను ప్రోత్సహించడానికి పనిచేస్తున్న సంస్థ. కవులు, రచయితలు మరియు సాహిత్యాభిమానులను ప్రోత్సహిస్తూ వివిధ సాహిత్య కార్యక్రమాలు, పోటీలు, పురస్కారాలు మరియు ప్రచురణ కార్యక్రమాలను నిర్వహిస్తోంది.",
  phone: "8886910899",
  email: "navachitrika@gmail.com",
  addressTe: ["రామదాసు సాహితీ కళా సేవా సంస్థ", "సుర్ధేపల్లి, నేలకొండపల్లి,", "ఖమ్మం జిల్లా, తెలంగాణ."],
};

const whatsappMessage = `🙏 నమస్కారం!

రామదాసు సాహితీ కళా సేవా సంస్థ
&
నవచిత్రిక మాస పత్రిక

కు సంబంధించిన సమాచారం కోసం సంప్రదిస్తున్నాను.
దయచేసి నాకు అవసరమైన వివరాలను తెలియజేయగలరు.

ధన్యవాదాలు🙏
---

Hello!

I am contacting you regarding Ramadasu Sahiti Kala Seva Samstha and Navachitrika Monthly Magazine.

Please share the required information.

Thank You 🙏`;

export const whatsappUrl = `https://wa.me/918886910899?text=${encodeURIComponent(whatsappMessage)}`;

export const navItems = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "ORGANIZATION DETAILS", to: "/organization" },
  { label: "SERVICES", to: "/services" },
  { label: "NAVACHITRIKA", to: "/navachitrika" },
  { label: "AWARDS", to: "/awards" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
] as const;

export const services = [
  {
    te: "సాహిత్య కార్యక్రమాలు",
    icon: "feather",
    description: [
      "రామదాసు సాహితీ కళా సేవా సంస్థ విభిన్నమైన కార్యక్రమాలను నిర్వహిస్తూ, కవుల్లో దాగి ఉన్న ప్రతిభను వెలికితీయాలనే సదుద్దేశంతో “సాహిత్య సంగ్రామం” అనే వినూత్న కార్యక్రమానికి శ్రీకారం చుట్టింది.",
      "కార్యక్రమం ప్రారంభంలో పాల్గొనే ప్రతి ఒక్కరికీ పెన్, నోట్‌బుక్ అందజేయడం జరుగుతుంది. అనంతరం వేదిక వద్ద ఒక అంశాన్ని ప్రకటిస్తారు. అంశం ప్రకటించిన సమయం నుండి 30 నిమిషాల వ్యవధిలో, ఆ అంశానికి అనుగుణంగా కవితను రచించాలి. అనంతరం అదే కవితలతో కవి సమ్మేళనం నిర్వహిస్తారు.",
      "ఈ కార్యక్రమంలో ప్రతిభ కనబరిచిన కవుల్లో “టాప్ 5”గా నిలిచిన వారికి నగదు బహుమతులు అందజేయడం జరుగుతుంది. ఇప్పటివరకు “సాహిత్య సంగ్రామం” కార్యక్రమాన్ని నాలుగు సార్లు విజయవంతంగా నిర్వహించడం జరిగింది.",
      "కవుల్లోని సృజనాత్మకతను, ఆలోచనా శక్తిని, తక్షణ కవితా రచనా ప్రతిభను వెలికితీయడమే ఈ కార్యక్రమం ప్రధాన ఉద్దేశ్యం.",
    ],
  },
  {
    te: "కవితా పోటీలు",
    icon: "pen",
    description: [
      "రామదాసు సాహితీ కళా సేవా సంస్థ ఆధ్వర్యంలో ప్రతి సోమవారం నుండి శనివారం వరకు ప్రతిరోజూ ఒక అంశాన్ని ప్రకటించి, ఆ అంశంపై కవితలు రచించేలా కవితా పోటీలు నిర్వహించడం జరుగుతోంది.",
      "సంస్థ స్థాపించబడిన నాటి నుండి ఇప్పటివరకు ఈ కవితా పోటీలను నిర్విరామంగా కొనసాగిస్తూ, ప్రతిభ కనబరిచిన కవులకు పురస్కార ప్రశంసా పత్రాలను అందజేస్తోంది.",
      "పండుగలు, జాతీయ మరియు అంతర్జాతీయ ప్రాముఖ్యత కలిగిన ప్రత్యేక సందర్భాల్లో నిర్వహించే పోటీలలో విజేతలకు నగదు బహుమతులను కూడా అందజేయడం జరుగుతోంది.",
      "ప్రతి కవిని ప్రోత్సహించడం, వారి సృజనాత్మకతను వెలికితీయడం, కొత్తగా రచనలు చేస్తున్న వారికి అవకాశాలను కల్పించడం సంస్థ యొక్క ముఖ్య ఉద్దేశ్యం.",
    ],
  },
  { te: "కథా రచన పోటీలు", icon: "scroll" },
  {
    te: "సాహితీ పురస్కారాలు",
    icon: "award",
    description: [
      "రామదాసు సాహితీ కళా సేవా సంస్థ 06 ఏప్రిల్ 2023న స్థాపించబడింది. ప్రతి సంవత్సరం సంస్థ వార్షికోత్సవం సందర్భంగా సాహిత్య రంగంలో విశిష్ట సేవలు అందిస్తున్న కవులు, రచయితలు మరియు ప్రతిభావంతులను గుర్తించి వారికి బిరుదులు, పురస్కారాలను అందజేయడం జరుగుతోంది.",
      "సాహిత్య రంగంలో వారు అందిస్తున్న సేవలకు, వారి ప్రతిభకు తగిన గుర్తింపు లభించేలా చేయడం సంస్థ యొక్క బాధ్యతగా భావిస్తోంది.",
      "ముఖ్యంగా, ఈ పురస్కారాల కోసం సంస్థ ఎటువంటి రుసుమును స్వీకరించదు. ప్రతిభను, సాహిత్య సేవను మాత్రమే ప్రామాణికంగా తీసుకొని అర్హులైన కవులు, రచయితలు మరియు ప్రతిభావంతులను గుర్తించి పురస్కారాలతో సత్కరించడం జరుగుతోంది.",
    ],
  },
  {
    te: "కవి సమ్మేళనాలు",
    icon: "users",
    description: [
      "రామదాసు సాహితీ కళా సేవా సంస్థ మరియు విశ్వ విఖ్యాత సాహిత్య సామాజిక సేవా సమితి సంయుక్త ఆధ్వర్యంలో ఎన్నో కవి సమ్మేళనాలను నిర్వహించడం జరుగుతోంది.",
      "ప్రతిభను గుర్తించడానికి ప్రతి కవికి ఒక వేదిక అవసరం. అలాంటి వేదికను కల్పిస్తూ, కవులు తమ ప్రతిభను ప్రదర్శించేలా ప్రోత్సహించడం, వారిని సాహిత్య రంగంలో మరింత ముందుకు నడిపించడం సంస్థల ముఖ్య లక్ష్యం.",
      "కవిత్వాన్ని ప్రజలకు చేరువ చేయడం, కవుల మధ్య సాహితీ స్నేహాన్ని పెంపొందించడం, కొత్త కవులకు అవకాశాలను కల్పించడం ద్వారా సాహిత్య అభివృద్ధికి సంస్థలు తమ వంతు కృషి చేస్తున్నాయి.",
    ],
  },
  {
    te: "రచయితల పరిచయాలు",
    icon: "mic",
    description: [
      "నేటి యువతరానికి గత తరాల రచయితలు, కవులు మరియు వారి రచనా ప్రయాణం గురించి పూర్తిస్థాయిలో అవగాహన లేకపోవడం కొంత బాధాకరం.",
      "ఈ నేపథ్యంలో, ప్రముఖ కవులు, రచయితలు, వ్యాపారవేత్తలు, ఆచార్యులు మరియు వివిధ రంగాల్లో తమదైన ముద్ర వేసిన వ్యక్తుల జీవిత ప్రయాణాన్ని పరిచయం చేయాలనే ఉద్దేశంతో “నవచిత్రిక మాస పత్రిక”లో ప్రత్యేక కాలమ్‌ను ప్రారంభించడం జరిగింది.",
      "ఆ కాలమ్‌కు “ఎక్కిన మెట్లెన్ని!” అనే పేరును పెట్టడం జరిగింది.",
      "ఇందులో భాగంగా ఆగస్టు 2026 వరకు 13 మంది కవులు, వ్యాపారవేత్తలు, ఆచార్యులు మరియు ప్రతిభావంతుల పరిచయాలను ప్రచురించడం జరిగింది. ఈ కార్యక్రమం ప్రతి నెలా కొనసాగుతోంది.",
      "ఒక వ్యక్తి ఈరోజు ఏ స్థాయిలో ఉన్నాడో మాత్రమే కాదు, ఆ స్థాయికి చేరుకోవడానికి ఆయన/ఆమె అధిగమించిన కష్టాలు, కన్నీళ్లు, పోరాటాలు, అనుభవాలు మరియు విజయాల వెనుక ఉన్న ప్రయాణాన్ని కూడా సమాజానికి పరిచయం చేయాలన్నదే “ఎక్కిన మెట్లెన్ని!” ప్రధాన ఉద్దేశ్యం.",
    ],
  },
  {
    te: "సాహిత్య ప్రచురణలు",
    icon: "book",
    description: [
      "రామదాసు సాహితీ కళా సేవా సంస్థ ఇప్పటివరకు 42 పుస్తకాలను ప్రచురించింది.",
      "సమాజానికి ఉపయోగపడే, ప్రజల్లో ఆలోచనను రేకెత్తించే, మంచి సందేశాన్ని అందించే రచనలను కవులు మరియు రచయితల చేత రూపొందించి, వాటిని పుస్తక రూపంలో ప్రచురించడం సంస్థ ప్రత్యేకత.",
      "“ప్రత్యక్ష దేవతలు”, “సర్వేజనా సుఖినోభవంతు”, “నాలుగవ సింహం”, “ఆపరేషన్ సింధూర్”, “భక్తికి మార్గం ఇదేనా!” వంటి ఎన్నో పుస్తకాలను ఇప్పటివరకు ప్రచురించడం జరిగింది.",
      "ఈ సాహిత్య ప్రచురణ కార్యక్రమంలో విశ్వ విఖ్యాత సాహిత్య సామాజిక సేవా సమితి కూడా భాగస్వామ్యమై, కవులు మరియు రచయితలను ప్రోత్సహిస్తూ సాహిత్య ప్రచురణకు తన వంతు సహకారాన్ని అందిస్తోంది.",
      "సమాజానికి ఉపయోగపడే సాహిత్యాన్ని సృష్టించడం, కవులు మరియు రచయితలకు ప్రచురణ అవకాశాలను కల్పించడం, మంచి ఆలోచనలను పుస్తకాల రూపంలో భవిష్యత్ తరాలకు అందించడం సంస్థ యొక్క ప్రధాన లక్ష్యం.",
    ],
  },
  { te: "సాహిత్య సేవా కార్యక్రమాలు", icon: "heart" },
] as const;

export const navachitrikaHighlights = [
  "కవితలు",
  "కథలు",
  "వ్యాసాలు",
  "సాహిత్య విశేషాలు",
  "రచయితల పరిచయాలు",
  "సాహిత్య కార్యక్రమాల సమాచారం",
  "ప్రతి నెలా కొత్త సంచిక",
];

/**
 * Monthly issues of Navachitrika.
 * To publish a new issue: add an entry with `available: true` and its Google Drive
 * link in `driveUrl`. Upcoming issues use `available: false` and render "COMING SOON".
 */
export type Issue = {
  month: string;
  year: number;
  title: string;
  driveUrl: string | null;
  available: boolean;
};

export const issues: Issue[] = [
  {
    month: "AUGUST",
    year: 2026,
    title: "నవచిత్రిక – ఆగస్టు సంచిక",
    driveUrl: "https://drive.google.com/file/d/1lskfCOb9FgUDIIHFna1rmTs9TYzJVj49/view?usp=drivesdk",
    available: true,
  },
  {
    month: "SEPTEMBER",
    year: 2026,
    title: "నవచిత్రిక – సెప్టెంబరు సంచిక",
    driveUrl: null,
    available: false,
  },
  {
    month: "OCTOBER",
    year: 2026,
    title: "నవచిత్రిక – అక్టోబరు సంచిక",
    
    driveUrl: null,
    available: false,
  },
];


export const publications = [
  { url: book1, alt: "Telugu book cover: ఆలా మొదలైంది" },
  { url: book2, alt: "Telugu book cover: రామదూత రామకథ" },
  { url: book3, alt: "Telugu book cover: సన్యాస్ కృష్ణ" },
  { url: book4, alt: "Telugu book cover: నాలుగో సింహం" },
  { url: book5, alt: "Telugu book cover: జీవన వేదం" },
  { url: book6, alt: "Telugu book cover: ఎక్కిన మెట్లెన్ని?" },
  { url: book7, alt: "Telugu book cover: పాలేరు నుంచి పర్ణశాల వరకు" },
];

export const socials = [
  { label: "rama_kallu_139", kind: "instagram", url: "https://www.instagram.com/rama_kallu_139" },
  { label: "ramadasu_skss_23", kind: "instagram", url: "https://www.instagram.com/ramadasu_skss_23" },
  { label: "Aksharaduta", kind: "youtube", url: "https://www.youtube.com/@Aksharaduta" },
] as const;
