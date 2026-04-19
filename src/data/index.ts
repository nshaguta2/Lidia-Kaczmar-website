import { HeroImage, NavItem, Photo, SocialLink } from "@/types";

export const siteMetaData = {
  title: "Lidia Kaczmar | Fotografia kulinarna",
  description:
    "W świecie obrazów, które coraz częściej tylko imitują rzeczywistość, prawdziwa fotografia wciąż potrafi pokazać smak, materię i nastrój.",
  author: "Lidia Kaczmar",
  email: "lidiaka4mar@gmail.com",
  phone: "508624315",
  phoneDisplay: "508 624 315",
  year: new Date().getFullYear(),
};

export const navLinks: NavItem[] = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "O mnie", href: "#about" },
  { name: "Kontakt", href: "#contact" },
];

export const heroImages: HeroImage[] = [
  {
    src: "/images/hero/xt402530.jpg",
    alt: "Fotografia kulinarna - pizza",
  },
  {
    src: "/images/hero/xt402553.jpg",
    alt: "Fotografia kulinarna - świąteczne ciasteczka",
  },
];

export const portfolioPhotos: Photo[] = [
  { id: "dscf0977", src: "/images/portfolio/dscf0977.jpg", alt: "Burger w ciemnej oprawie" },
  { id: "dscf1493", src: "/images/portfolio/dscf1493.jpg", alt: "Drink z limonką i ruchem" },
  { id: "oreo", src: "/images/portfolio/oreo.jpg", alt: "Oreo i mleczny splash" },
  {
    id: "xt404439-enhanced-nr",
    src: "/images/portfolio/xt404439-enhanced-nr.jpg",
    alt: "Mleczny splash z plasterkiem pomarańczy",
  },
  { id: "dscf0844", src: "/images/portfolio/dscf0844.jpg", alt: "Talerz w dłoni" },
  { id: "dscf5431", src: "/images/portfolio/dscf5431.jpg", alt: "Koktajl z różanym wykończeniem" },
  { id: "dscf2706", src: "/images/portfolio/dscf2706.jpg", alt: "Bochen chleba w dłoniach" },
  { id: "dscf4315", src: "/images/portfolio/dscf4315.jpg", alt: "Zupa dyniowa w ujęciu z góry" },
  { id: "dscf2235", src: "/images/portfolio/dscf2235.jpg", alt: "Winogrona i kieliszek w świetle studyjnym" },
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/lidia_kaczmar/" },
];
