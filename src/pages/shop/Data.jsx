// Import your image assets for easy access
import lexyTee from "../../assets/tee1.png";
import whitePunkTee from "../../assets/tee2.png";
import nocrateHoodie from "../../assets/tee3.png";
import blackHoodie from "../../assets/tee4.png";
import classicTee from "../../assets/tee5.png";

// Export your product data as an array
export const productData = [
  {
    id: 1,
    name: "Lexy Tee",
    description:
      "Inspired by one of our favorite vintage tees in the vault. Timeless and elegant double screen on our single stitch, raw hem cut, black tee. Please note, distressing throughout. Wash cold and hang dry.",
    image: lexyTee, // Referencing the imported asset
    price: 50,
    variants: [
      { id: "variant1", size: "S" },
      { id: "variant2", size: "M" },
      { id: "variant3", size: "L" },
      { id: "variant4", size: "XL" },
    ],
  },
  {
    id: 2,
    name: "White Nocrate Punk Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    image: whitePunkTee,
    price: 50,
    variants: [
      { id: "variant5", size: "S" },
      { id: "variant6", size: "M" },
      { id: "variant7", size: "L" },
      { id: "variant8", size: "XL" },
    ],
  },
  {
    id: 3,
    name: "Nocrate Co. 9 Hoodie",
    description:
      "100% French terry cotton. Wash on cold and air dry. Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    image: nocrateHoodie,
    price: 150,
    variants: [
      { id: "variant9", size: "S" },
      { id: "variant10", size: "M" },
      { id: "variant11", size: "L" },
      { id: "variant12", size: "XL" },
    ],
  },
  {
    id: 4,
    name: "Black Nocrate Hoodie",
    description:
      "Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    image: blackHoodie,
    price: 150,
    variants: [
      { id: "variant13", size: "S" },
      { id: "variant14", size: "M" },
      { id: "variant15", size: "L" },
      { id: "variant16", size: "XL" },
    ],
  },
  {
    id: 5,
    name: "Nocrate Classic Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    image: classicTee,
    price: 50,
    variants: [
      { id: "variant17", size: "S" },
      { id: "variant18", size: "M" },
      { id: "variant19", size: "L" },
      { id: "variant20", size: "XL" },
    ],
  },
];

// Optionally export a navigation array for product filtering
export const productCategories = [
  { name: "All" },
  { name: "Tees" },
  { name: "Hoodies" },
];
