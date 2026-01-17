# Technical Architecture - Delicia Kebab 2 Landing Page

## 1. Overview
This project is a Single Page Application (SPA) built with React and TypeScript. It utilizes Tailwind CSS for styling and Framer Motion for animations.

## 2. Tech Stack
- **Framework:** React (Vite template)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Package Manager:** pnpm (preferred) or npm

## 3. Project Structure
```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx    # Navigation bar with Logo and Halal badge
│   ├── Hero.tsx      # Hero section
│   ├── OfferCard.tsx # Component for individual offers
│   ├── MenuList.tsx  # Pizza menu list
│   └── Footer.tsx    # Footer with contact info
├── App.tsx           # Main application entry point
├── main.tsx          # React DOM rendering
└── index.css         # Global styles and Tailwind directives
```

## 4. Component Details
- **Navbar:** Sticky or fixed top. Contains links to sections and the Halal badge.
- **Hero:** Full viewport height or large banner. Background image with overlay.
- **OfferCard:** Displays title, price, and description. Uses Grid layout in the parent container.
- **MenuList:** Renders a list of pizza items. Data will be stored in a constant array.
- **Footer:** Contains address, phone number button, and social links if any.

## 5. Data Model (Frontend)
### Pizza Item
```typescript
interface Pizza {
  name: string;
  ingredients: string;
  price: number;
}
```

### Offer Item
```typescript
interface Offer {
  title: string;
  price: number;
  description?: string;
}
```
