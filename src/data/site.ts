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
  { te: "సాహిత్య కార్యక్రమాలు", icon: "feather" },
  { te: "కవితా పోటీలు", icon: "pen" },
  { te: "కథా రచన పోటీలు", icon: "scroll" },
  { te: "సాహితీ పురస్కారాలు", icon: "award" },
  { te: "కవి సమ్మేళనాలు", icon: "users" },
  { te: "రచయితల పరిచయాలు", icon: "mic" },
  { te: "సాహిత్య ప్రచురణలు", icon: "book" },
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
