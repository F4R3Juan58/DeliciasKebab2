export interface Product {
  name: string;
  price: string;
  description?: string;
}

export interface Category {
  id: string;
  title: string;
  items: Product[];
}

export const superOffers = [
  {
    title: "Menú para 2 Personas",
    price: "16,00€",
    description: "1 Rollo, 1 Pan Kebab, Patatas con Carne, Salsa y 2 Bebidas"
  },
  {
    title: "Menú Pareja",
    price: "15,00€",
    description: "1 Rollo, 1 Pan Kebab, Patatas Pequeñas, 2 Bebidas",
    image: "https://media.discordapp.net/attachments/1456263492762992883/1462125518345339016/2Q.png?ex=696d0e00&is=696bbc80&hm=2e36e92d2f8f0ae369e9a74404f7fcb7ad09592fa27ec7f85959c3d6fbefac8e&=&format=webp&quality=lossless"
  },
  {
    title: "Menú Familiar",
    price: "24,50€",
    description: "4 Rollos, Patatas Grandes y Coca Cola 2L"
  }
];

export const menuCategories: Category[] = [
  {
    id: "menus",
    title: "Menús",
    items: [
      { name: "Menú Rollo Kebab", price: "7,50€", description: "Con patatas y bebida" },
      { name: "Menú Kebab Pan", price: "6,50€", description: "Con patatas y bebida" },
      { name: "Menú Burger", price: "7,50€", description: "Con patatas y bebida" },
      { name: "Menú Alitas de Pollo", price: "6,50€", description: "6 Unidades, patatas y bebida" },
      { name: "Menú Nuggets", price: "6,50€", description: "6 Unidades, patatas y bebida" },
      { name: "Menú Pizza Turca", price: "8,50€", description: "Con patatas y bebida" },
      { name: "Menú Falafel Rollo", price: "7,50€", description: "Con patatas y bebida" },
      { name: "Plato Kebab con Arroz", price: "8,50€", description: "Con bebida" },
      { name: "Tiras de Pollo con Patatas", price: "4,00€", description: "4 Unidades" },
      { name: "Croquetas de Pollo con Patatas", price: "4,00€", description: "5 Unidades" },
      { name: "Palomitas de Pollo con Patatas", price: "4,00€", description: "" }
    ]
  },
  {
    id: "entrantes",
    title: "Entrantes",
    items: [
      { name: "Alitas de Pollo", price: "4,00€", description: "6 Unidades" },
      { name: "Nuggets", price: "3,50€", description: "6 Unidades" },
      { name: "Ensalada Kebab de Atún", price: "5,50€" },
      { name: "Samosa", price: "1,50€", description: "Vegetal o Carne" },
      { name: "Arroz Blanco", price: "3,50€" },
      { name: "Patatas Bravas", price: "4,50€" },
      { name: "Patatas Fritas, Grande", price: "3,50€" },
      { name: "Patatas Fritas, Pequeña", price: "1,80€" }
    ]
  },
  {
    id: "kebab",
    title: "Kebab",
    items: [
      { name: "Rollo Kebab", price: "5,00€", description: "Ensalada y salsa" },
      { name: "Kebab Pan", price: "4,50€", description: "Ensalada y salsa" },
      { name: "Falafel Rollo", price: "5,00€", description: "Falafel, ensalada y salsa" }
    ]
  },
  {
    id: "otros",
    title: "Otros Platos",
    items: [
      { name: "Pizza Turca", price: "6,00€", description: "Ensalada y salsa" },
      { name: "Burger Pollo", price: "4,50€", description: "Crujiente" }
    ]
  },
  {
    id: "platos",
    title: "Platos",
    items: [
      { name: "Plato Kebab para 2 Personas", price: "16,00€", description: "Incluye 2 pan de pita" },
      { name: "Plato Rebozado", price: "8,50€", description: "Patatas, queso, carne y salsa" },
      { name: "Plato Kebab sin Arroz", price: "8,50€", description: "Pollo, ternera o mixto, patatas, ensalada y salsa" },
      { name: "Patatas con Carne, Grande", price: "6,50€", description: "Patatas, pollo, ternera y salsa especial" },
      { name: "Arroz con Carne", price: "6,50€", description: "Arroz, carne y salsa" },
      { name: "Patatas con Carne, Pequeña", price: "3,50€", description: "Patatas, pollo, ternera y salsa especial" }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Coca Cola Original", price: "1,50€" },
      { name: "Coca Cola Zero", price: "1,50€" },
      { name: "Fanta Naranja", price: "1,50€" },
      { name: "Aquarius Limón", price: "1,50€" },
      { name: "Nestea Maracuyá", price: "1,50€" },
      { name: "Coca Cola Original 2L", price: "3,00€" },
      { name: "Coca Cola Zero 2L", price: "3,00€" },
      { name: "Fanta Naranja 2L", price: "3,00€" }
    ]
  }
];
