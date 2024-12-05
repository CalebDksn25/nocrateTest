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
    price: "50",
    variants: [
      { id: "42334850383974", size: "S" },
      { id: "42334850416742", size: "M" },
      { id: "42334850449510", size: "L" },
      { id: "42334850482278", size: "XL" },
    ],
  },
  {
    id: 2,
    name: "White Nocrate Punk Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    image: whitePunkTee,
    price: "50",
    variants: [
      { id: "42334884200550", size: "S" },
      { id: "42334884233318", size: "M" },
      { id: "42334884266086", size: "L" },
      { id: "42334884298854", size: "XL" },
    ],
  },
  {
    id: 3,
    name: "Nocrate Co. 9 Hoodie",
    description:
      "100% French terry cotton. Wash on cold and air dry. Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    image: nocrateHoodie,
    price: "150",
    variants: [
      { id: "42334884462694", size: "S" },
      { id: "42334884495462", size: "M" },
      { id: "42334884528230", size: "L" },
      { id: "42334884560998", size: "XL" },
    ],
  },
  {
    id: 4,
    name: "Black Nocrate Hoodie",
    description:
      "Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    image: blackHoodie,
    price: "150",
    variants: [
      { id: "42334884626534", size: "S" },
      { id: "42334884659302", size: "M" },
      { id: "42334884692070", size: "L" },
      { id: "42334884724838", size: "XL" },
    ],
  },
  {
    id: 5,
    name: "Nocrate Classic Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    image: classicTee,
    price: "50",
    variants: [
      { id: "42334884954214", size: "S" },
      { id: "42334884986982", size: "M" },
      { id: "42334885019750", size: "L" },
      { id: "42334885052518", size: "XL" },
    ],
  },
];

// Optionally export a navigation array for product filtering
export const productCategories = [
  { name: "All" },
  { name: "Tees" },
  { name: "Hoodies" },
];
