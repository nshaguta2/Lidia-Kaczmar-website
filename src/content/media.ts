import { withBasePath } from "@/config/site";
import { HeroImage, Photo, SocialLink } from "@/types";

export const heroImages: HeroImage[] = [
  {
    src: withBasePath("/images/hero/xt402530.jpg"),
    alt: "Fotografia kulinarna - pizza",
  },
  {
    src: withBasePath("/images/hero/xt402553.jpg"),
    alt: "Fotografia kulinarna - \u015Bwi\u0105teczne ciasteczka",
  },
];

export const portfolioPhotos: Photo[] = [
  { id: "dscf0977", src: withBasePath("/images/portfolio/dscf0977.jpg"), alt: "Burger w ciemnej oprawie" },
  { id: "dscf1493", src: withBasePath("/images/portfolio/dscf1493.jpg"), alt: "Drink z limonk\u0105 i ruchem" },
  { id: "oreo", src: withBasePath("/images/portfolio/oreo.jpg"), alt: "Oreo i mleczny splash" },
  {
    id: "xt404439-enhanced-nr",
    src: withBasePath("/images/portfolio/xt404439-enhanced-nr.jpg"),
    alt: "Mleczny splash z plasterkiem pomara\u0144czy",
  },
  { id: "dscf0844", src: withBasePath("/images/portfolio/dscf0844.jpg"), alt: "Talerz w d\u0142oni" },
  { id: "dscf5431", src: withBasePath("/images/portfolio/dscf5431.jpg"), alt: "Koktajl z r\u00F3\u017Canym wyko\u0144czeniem" },
  { id: "dscf2706", src: withBasePath("/images/portfolio/dscf2706.jpg"), alt: "Bochen chleba w d\u0142oniach" },
  { id: "dscf4315", src: withBasePath("/images/portfolio/dscf4315.jpg"), alt: "Zupa dyniowa w uj\u0119ciu z g\u00F3ry" },
  { id: "dscf2235", src: withBasePath("/images/portfolio/dscf2235.jpg"), alt: "Winogrona i kieliszek w \u015Bwietle studyjnym" },
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/lidia_kaczmar/" },
];
