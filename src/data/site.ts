import logo from "@/assets/logo.png.asset.json";
import book1 from "@/assets/book1.jpeg.asset.json";
import book2 from "@/assets/book2.jpeg.asset.json";
import book3 from "@/assets/book3.jpeg.asset.json";
import book4 from "@/assets/book4.jpeg.asset.json";
import book5 from "@/assets/book5.jpeg.asset.json";
import book6 from "@/assets/book6.jpeg.asset.json";
import book7 from "@/assets/book7.jpeg.asset.json";

export const logoUrl = logo.url;

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

export const navItems = [
  { label: "HOME", id: "home" },
  { label: "ABOUT US", id: "about" },
  { label: "ORGANIZATION DETAILS", id: "organization" },
  { label: "SERVICES", id: "services" },
  { label: "NAVACHITRIKA", id: "navachitrika" },
  { label: "AWARDS", id: "awards" },
  { label: "GALLERY", id: "gallery" },
  { label: "CONTACT", id: "contact" },
];

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
 * To add a new issue: add an entry with the Google Drive link (`url`).
 * Leave `url` as null for upcoming issues — the card renders as "COMING SOON".
 */
export type Issue = {
  monthEn: string;
  titleTe: string;
  cover: string;
  url: string | null;
};

export const issues: Issue[] = [
  {
    monthEn: "AUGUST 2026",
    titleTe: "నవచిత్రిక – ఆగస్టు సంచిక",
    cover: book2.url,
    url: null,
  },
  { monthEn: "SEPTEMBER 2026", titleTe: "నవచిత్రిక – సెప్టెంబరు సంచిక", cover: book5.url, url: null },
  { monthEn: "OCTOBER 2026", titleTe: "నవచిత్రిక – అక్టోబరు సంచిక", cover: book3.url, url: null },
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
