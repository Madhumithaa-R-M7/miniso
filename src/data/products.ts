import { Product } from '../types';

export const products: Product[] = [
  // Mini Phones
  {
    id: 1,
    name: "Aesthetic Pink Mini Phone",
    category: "mini-phones",
    price: 12.99,
    image: "https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Adorable mini phone with realistic design and cute pink finish",
    colors: ["pink", "white", "lavender"],
    inStock: true
  },
  {
    id: 2,
    name: "Retro Mini Flip Phone",
    category: "mini-phones",
    price: 15.99,
    image: "https://images.pexels.com/photos/1138655/pexels-photo-1138655.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Nostalgic flip phone design in miniature form",
    colors: ["silver", "gold", "rose-gold"],
    inStock: true
  },
  {
    id: 3,
    name: "Pastel Mini Smartphone",
    category: "mini-phones",
    price: 18.99,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Modern smartphone design in soft pastel colors",
    colors: ["mint", "peach", "lilac"],
    inStock: true
  },

  // Mini Cameras
  {
    id: 4,
    name: "Vintage Mini Polaroid",
    category: "mini-cameras",
    price: 22.99,
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Miniature vintage-style instant camera with authentic details",
    colors: ["cream", "mint", "coral"],
    inStock: true
  },
  {
    id: 5,
    name: "Kawaii Film Camera",
    category: "mini-cameras",
    price: 19.99,
    image: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Adorable mini film camera with cute pastel finish",
    colors: ["pink", "yellow", "blue"],
    inStock: true
  },
  {
    id: 6,
    name: "Mini DSLR Camera",
    category: "mini-cameras",
    price: 25.99,
    image: "https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Professional DSLR design in miniature with realistic details",
    colors: ["black", "white", "gray"],
    inStock: false
  },

  // Mini Dolls
  {
    id: 7,
    name: "Pastel Hair Mini Doll",
    category: "mini-dolls",
    price: 16.99,
    image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Cute mini doll with colorful pastel hair and adorable outfit",
    colors: ["pink-hair", "blue-hair", "purple-hair"],
    inStock: true
  },
  {
    id: 8,
    name: "Kawaii Bear Mini Doll",
    category: "mini-dolls",
    price: 14.99,
    image: "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Adorable bear-themed mini doll with soft plush feel",
    colors: ["brown", "white", "cream"],
    inStock: true
  },
  {
    id: 9,
    name: "Fairy Tale Mini Doll",
    category: "mini-dolls",
    price: 21.99,
    image: "https://images.pexels.com/photos/1462635/pexels-photo-1462635.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Magical fairy tale character in miniature with intricate details",
    colors: ["princess-pink", "fairy-blue", "magic-purple"],
    inStock: true
  }
];