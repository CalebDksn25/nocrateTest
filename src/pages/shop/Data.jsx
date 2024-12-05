// Import your image assets for easy access
import tee1 from "../../assets/tee1.png";
import tee2 from "../../assets/tee2.png";
import nocrateHoodie from "../../assets/tee3.png";
import blackHoodie from "../../assets/tee4.png";
import classicTee from "../../assets/tee5.png";
import nocrate9hoodie from "../../assets/nocrate9hoodie.webp";
import nocrate9hoodie2 from "../../assets/nocrate9hoodie2.webp";
import nocrate9hoodie3 from "../../assets/nocrate9hoodie3.webp";
import nocrate9hoodie4 from "../../assets/nocrate9hoodie4.webp";
import nocrateblackhoodie from "../../assets/nocrateblackhoodie.webp";
import nocrateblackhoodie2 from "../../assets/nocrateblackhoodie2.webp";
import nocrateblackhoodie3 from "../../assets/nocrateblackhoodie3.jpg";
import nocrateblackhoodie4 from "../../assets/nocrateblackhoodie4.webp";
import nocratelexytee from "../../assets/nocratelexytee.jpg";
import nocratelexytee2 from "../../assets/nocratelexytee2.webp";
import nocratelexytee3 from "../../assets/nocratelexytee3.jpg";
import nocrateloristee from "../../assets/nocrateloristee.webp";
import nocrateloristee2 from "../../assets/nocrateloristee2.jpg";
import nocrateloristee3 from "../../assets/nocrateloristee3.webp";
import nocratepunktee from "../../assets/nocratepunktee.webp";
import nocratepunktee2 from "../../assets/nocratepunktee2.webp";
import nocratepunktee3 from "../../assets/nocratepunktee3.webp";

// Export your product data as an array
export const productData = [
  {
    id: 1,
    name: "Lexy Tee",
    description: "Timeless and elegant double screen...",
    images: [tee1, nocratelexytee, nocratelexytee2, nocratelexytee3],
    price: 50,
    variants: [
      { id: "gid://shopify/ProductVariant/42334850383974", size: "S" },
      { id: "gid://shopify/ProductVariant/42334850416742", size: "M" },
      { id: "gid://shopify/ProductVariant/42334850449510", size: "L" },
      { id: "gid://shopify/ProductVariant/42334850482278", size: "XL" },
    ],
  },
  {
    id: 2,
    name: "White Nocrate Punk Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    images: [tee2, nocratepunktee, nocratepunktee2, nocratepunktee3],
    price: 50,
    variants: [
      { id: "gid://shopify/ProductVariant/42334884200550", size: "S" },
      { id: "gid://shopify/ProductVariant/42334884233318", size: "M" },
      { id: "gid://shopify/ProductVariant/42334884266086", size: "L" },
      { id: "gid://shopify/ProductVariant/42334884298854", size: "XL" },
    ],
  },
  {
    id: 3,
    name: "Nocrate Co. 9 Hoodie",
    description:
      "100% French terry cotton. Wash on cold and air dry. Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    images: [
      nocrateHoodie,
      nocrate9hoodie,
      nocrate9hoodie2,
      nocrate9hoodie3,
      nocrate9hoodie4,
    ],
    price: 150,
    variants: [
      { id: "gid://shopify/ProductVariant/42334884462694", size: "S" },
      { id: "gid://shopify/ProductVariant/42334884495462", size: "M" },
      { id: "gid://shopify/ProductVariant/42334884528230", size: "L" },
      { id: "gid://shopify/ProductVariant/42334884560998", size: "XL" },
    ],
  },
  {
    id: 4,
    name: "Black Nocrate Hoodie",
    description:
      "Our hoodies are intentionally distressed to achieve a true vintage look. Variations in distressing, such as frayed edges or faded areas, are part of the design and add to the unique character of each piece. These features are not defects but are intentional elements that contribute to the overall style of the hoodie.",
    images: [
      blackHoodie,
      nocrateblackhoodie,
      nocrateblackhoodie2,
      nocrateblackhoodie3,
      nocrateblackhoodie4,
    ],
    price: 150,
    variants: [
      { id: "gid://shopify/ProductVariant/42334884626534", size: "S" },
      { id: "gid://shopify/ProductVariant/42334884659302", size: "M" },
      { id: "gid://shopify/ProductVariant/42334884692070", size: "L" },
      { id: "gid://shopify/ProductVariant/42334884724838", size: "XL" },
    ],
  },
  {
    id: 5,
    name: "Nocrate Classic Tee",
    description:
      "Our take on the perfect vintage white tee, crafted from 100% cotton. Minimal distressing around the sleeve edges and collar gives it that authentic worn-in look. Raw hem cut at the bottom for the ideal crop at the waist. Hand screen-printed and designed to fade beautifully, this tee is a staple.",
    images: [classicTee, nocrateloristee, nocrateloristee2, nocrateloristee3],
    price: 50,
    variants: [
      { id: "gid://shopify/ProductVariant/42334884954214", size: "S" },
      { id: "gid://shopify/ProductVariant/42334884986982", size: "M" },
      { id: "gid://shopify/ProductVariant/42334885019750", size: "L" },
      { id: "gid://shopify/ProductVariant/42334885052518", size: "XL" },
    ],
  },
];

// Optionally export a navigation array for product filtering
export const productCategories = [
  { name: "All" },
  { name: "Tees" },
  { name: "Hoodies" },
];
