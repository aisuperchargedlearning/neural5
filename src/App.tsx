import React from 'react';
import { FoodSection } from './components/FoodSection';

const foodItems = [
  {
    id: 1,
    name: "PAELLA MIXTA",
    description: "Spanish chorizo, Manila clams, chicken, and prawns, simmered in a rich saffron broth with paprika and rice. Topped with a dollop of house-made aioli for a silky finish. A slow-crafted dish layered with deep, coastal Spanish flavor. Please allow 45–60 minutes — worth every second.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapas%20images/PaellaMixta(small).jpg"
  },
  {
    id: 2,
    name: "CHICKEN SHAWARMA",
    description: "Slow-roasted, spice-marinated free-range chicken, served over fragrant rice and charred veggies. Finished with smoky harissa and a cool swirl of tzatziki for perfect balance. Bold, satisfying, and rooted in the flavors of Middle Eastern street food. A vibrant dish, every bite layered in depth and warmth.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapas%20images/ChickenSchwarma.jpg"
  },
  {
    id: 4,
    name: "TOUR DE ESPAÑA FOR 2",
    description: "A culinary journey through Spain for two to share: velvety mushroom soup, marinated olives, jamón serrano, spiced empanadas, crispy patatas bravas, a hearty paella mixta, and crema catalana to finish. A table filled with bold flavors, rustic charm, and shared delight.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Spanishtapasfor2.jpg"
  },
  {
    id: 5,
    name: "EMPANADAS",
    description: "Flaky pastry pockets filled with spiced ground beef, melted four-cheese blend, and a hint of harissa — warm, rich, and irresistibly bold.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Empanadas1.jpg"
  },
  {
    id: 6,
    name: "PINCHO MORUNO",
    description: "Juicy skewered pork, marinated in smoky spices and flame-grilled, served with a luscious blue cheese sauce for a sharp, creamy contrast. A rustic Spanish classic, reimagined.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Grilledporkskewer1.jpg"
  },
  {
    id: 7,
    name: "SPANAKOPITA",
    description: "Delicate phyllo folds embrace a savory mix of spinach and feta, crisped to golden perfection and paired with cool, herb-kissed tzatziki.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Spanakopita1.jpg"
  },
  {
    id: 8,
    name: "LAMB MINI PITAS",
    description: "Tender braised lamb nestled in warm mini pitas, layered with sweet onion, fiery harissa, and salty feta — a perfect bite of Mediterranean soul.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Minipitas1.jpg"
  },
  {
    id: 9,
    name: "LAMB TAGINE",
    description: "Slow-braised Moroccan lamb, richly spiced with ras el hanout, simmered with sweet dried apricots, root vegetables, and served over rice. A swirl of harissa adds warmth to every earthy, aromatic bite.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Moroccanlamb1.jpg"
  },
  {
    id: 10,
    name: "LOMO AL ROMESCO",
    description: "Grilled beef striploin, tender and juicy, served with roasted potatoes and seasonal vegetables. Finished with a bold, smoky Romesco sauce that brings Spanish soul to every bite.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/beefstriploinsliced1.jpg"
  },
  {
    id: 11,
    name: "CAULIFLOWER",
    description: "Charred roasted cauliflower with bright lemon, smoky paprika, toasted almonds, and a bold romesco — rustic, vibrant, and satisfying.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Roastedcauliflower1.jpg"
  },
  {
    id: 12,
    name: "GAMBAS AL AJILLO",
    description: "Garlic-sautéed shrimp in smoky paprika and sherry, served bubbling with crusty bread — a classic Spanish tapa that speaks in bold flavor.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Garlicshrimp.jpg"
  },
  {
    id: 13,
    name: "LAMB CHOPS",
    description: "Juicy grilled lamb chops paired with crisp roasted potatoes and finished with smoky harissa — simple, bold, and flame-kissed.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/grilledlambchops1.jpg"
  },
  {
    id: 14,
    name: "CLAMS CON CHORIZO",
    description: "Fresh clams and smoky chorizo simmered in brava sauce, served with rustic bread — spicy, savory, and deeply satisfying.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Steamingclams1.jpg"
  },
  {
    id: 15,
    name: "SCALLOPS CON TOCINO",
    description: "Seared scallops with local mushrooms, caramelized onions, smoky paprika, and cream — rich, velvety, and indulgent.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Searedscallops1.jpg"
  },
  {
    id: 16,
    name: "PATATAS BRAVAS",
    description: "Crispy roasted potatoes with bold brava sauce and aioli — fiery, creamy, and perfect for sharing.",
    imageUrl: "https://ik.imagekit.io/a7tech/Patatasbravas.jpg"
  },
  {
    id: 17,
    name: "FALAFITAS",
    description: "Crisp garbanzo patties served with cooling tzatziki — a Mediterranean-inspired bite that's fresh, herbaceous, and craveable.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Falafelpatties1.jpg"
  },
  {
    id: 18,
    name: "WILD MUSHROOMS CAZUELA",
    description: "An earthy mix of fresh local wild mushrooms, sautéed with garlic and sherry, served bubbling with crusty bread — rustic and deeply flavorful.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/wildmushrooms1.jpg"
  },
  {
    id: 19,
    name: "ENSALADA GRIEGA",
    description: "A crisp and colorful medley of tomatoes, cucumbers, olives, red onion, and feta — the essence of a traditional Greek salad, fresh and bracing.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Greeksalad1.jpg"
  },
  {
    id: 20,
    name: "MANCHEGO & MEMBRILLO",
    description: "A timeless pairing of aged Manchego cheese and sweet quince paste, served with artisan bread and a drizzle of olive oil.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Agedmachegocheese.jpg"
  },
  {
    id: 21,
    name: "HUMMUS",
    description: "Creamy, house-made hummus served with warm, pillowy pita — earthy, smooth, and endlessly shareable.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Creamyhummus1.jpg"
  },
  {
    id: 22,
    name: "BOQUERONES",
    description: "Spanish white anchovies marinated in olive oil, served with tomatoes and rustic bread — bright, briny, and deeply traditional.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/whiteanchovies.jpg"
  },
  {
    id: 23,
    name: "JAMÓN SERRANO",
    description: "Thin slices of Fermin jamón serrano, served with crusty bread and tomato pulp — a Spanish staple, savory and sublime",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/slicedjamo%CC%81nserrano1.jpg"
  },
  {
    id: 24,
    name: "OLIVES MEDLEY",
    description: "A vibrant bowl of manzanilla, castelvetrano, and cerignola olives tossed with fresh herbs — salty, juicy, and full of character.",
    imageUrl: "https://ik.imagekit.io/a7tech/Tapasnewsiteapril2025/Mixedolives1.jpg"
  }
];

function App() {
  return (
    <div className="bg-black">
      <div className="min-h-screen flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">Bainbridge Tapas Menu Items</h1>
          <p className="text-gray-400 text-lg">
            Descriptions Accurate:<br />
            Images may differ slightly from your serving.<br />
            (This is a guide for the Tapas Uninitiated)
          </p>
        </div>
      </div>
      {foodItems.map((item) => (
        <FoodSection
          key={item.id}
          name={item.name}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;