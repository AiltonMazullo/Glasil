import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "mab-90-balmer",
    name: "Máscara de Solda Automática MAB-90 Balmer",
    description: "Proteção e conforto para trabalhos de solda no dia a dia.",
    price: 139,
    imageUrl: "/window.svg",
    category: "Proteção",
    isFeatured: true,
  },
  {
    id: "lavadora-alta-pressao",
    name: "Lavadora de Alta Pressão 1800W",
    description: "Ideal para limpeza pesada em áreas externas.",
    price: 899,
    imageUrl: "/globe.svg",
    category: "Limpeza",
    isFeatured: true,
  },
  {
    id: "furadeira-impacto-650w",
    name: "Furadeira de Impacto 650W",
    description: "Versátil para uso profissional e doméstico.",
    price: 329,
    imageUrl: "/file.svg",
    category: "Ferramentas",
  },
  {
    id: "parafusadeira-bateria-12v",
    name: "Parafusadeira a Bateria 12V",
    description: "Praticidade e mobilidade para montagens rápidas.",
    price: 279,
    imageUrl: "/vercel.svg",
    category: "Ferramentas",
  },
  {
    id: "luminaria-led-industrial-100w",
    name: "Luminária LED Industrial 100W",
    description: "Alto rendimento e economia de energia.",
    price: 459,
    imageUrl: "/next.svg",
    category: "Iluminação",
  },
];

