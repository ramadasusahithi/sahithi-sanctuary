import logo from "@/assets/logo.png.asset.json";
import navachitrikaHero from "@/assets/navachitrika-hero.jpg";
import event1 from "@/assets/event1.png.asset.json";
import event2 from "@/assets/event2.png.asset.json";
import event3 from "@/assets/event3.png.asset.json";
import event4 from "@/assets/event4.png.asset.json";
import event5 from "@/assets/event5.png.asset.json";
import event6 from "@/assets/event6.png.asset.json";
import event7 from "@/assets/event7.png.asset.json";
import event8 from "@/assets/event8.png.asset.json";
import event9 from "@/assets/event9.png.asset.json";
import event10 from "@/assets/event10.png.asset.json";
import event11 from "@/assets/event11.png.asset.json";
import event12 from "@/assets/event12.png.asset.json";
import event13 from "@/assets/event13.png.asset.json";
import event14 from "@/assets/event14.png.asset.json";
import event15 from "@/assets/event15.png.asset.json";
import event16 from "@/assets/event16.png.asset.json";
import book1 from "@/assets/book1.jpeg.asset.json";
import book2 from "@/assets/book2.jpeg.asset.json";
import book3 from "@/assets/book3.jpeg.asset.json";
import book4 from "@/assets/book4.jpeg.asset.json";
import book5 from "@/assets/book5.jpeg.asset.json";
import book6 from "@/assets/book6.jpeg.asset.json";
import book7 from "@/assets/book7.jpeg.asset.json";

export const logoUrl = logo.url;

/** Original decorative artwork representing the Navachitrika magazine section (not a real cover). */
export const navachitrikaHeroUrl = navachitrikaHero;

/** Organization event, award ceremony and cultural programme photographs. */
export const galleryPhotos = [
  { url: event1.url, alt: "Award presentation at a literary felicitation programme" },
  { url: event2.url, alt: "Book launch festival (పుస్తక ఆవిష్కరణ మహోత్సవము) with honoured guests" },
  { url: event3.url, alt: "Group felicitation with commemorative memento at a literary programme" },
  { url: event4.url, alt: "Writer receiving a national record certificate and trophy" },
  { url: event5.url, alt: "Organizers with a young awardee at a literary event" },
  { url: event6.url, alt: "Presentation of organization publications to police officials" },
  { url: event7.url, alt: "Certificate of participation presented at national literary celebrations" },
  { url: event8.url, alt: "Felicitation ceremony at Kala Sangeetha Natya Vedika auditorium" },
  { url: event9.url, alt: "Organization members presenting a publication to a senior official" },
  { url: event10.url, alt: "Book launch festival of Ramadasu Sahithi Kala Seva Samstha in Khammam district" },
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

export const whatsappUrl = "https://wa.me/918886910899";

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
  { url: book1.url, alt: "Telugu book cover: ఆలా మొదలైంది" },
  { url: book2.url, alt: "Telugu book cover: రామదూత రామకథ" },
  { url: book3.url, alt: "Telugu book cover: సన్యాస్ కృష్ణ" },
  { url: book4.url, alt: "Telugu book cover: నాలుగో సింహం" },
  { url: book5.url, alt: "Telugu book cover: జీవన వేదం" },
  { url: book6.url, alt: "Telugu book cover: ఎక్కిన మెట్లెన్ని?" },
  { url: book7.url, alt: "Telugu book cover: పాలేరు నుంచి పర్ణశాల వరకు" },
];

export const socials = [
  { label: "rama_kallu_139", kind: "instagram", url: "https://www.instagram.com/rama_kallu_139" },
  { label: "ramadasu_skss_23", kind: "instagram", url: "https://www.instagram.com/ramadasu_skss_23" },
  { label: "Aksharaduta", kind: "youtube", url: "https://www.youtube.com/@Aksharaduta" },
] as const;
