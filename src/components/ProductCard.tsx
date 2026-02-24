// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Heart, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// interface ProductCardProps {
//   product: {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     category: string;
//   };
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
//       {/* Product Image */}
//       <div className="relative h-64 bg-muted overflow-hidden">
//         <Image
//           src={product.image || "/placeholder.svg"}
//           alt={product.name}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-300"
//           crossOrigin="anonymous"
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

//         {/* Favorite Button */}
//         <button
//           onClick={() => setIsFavorite(!isFavorite)}
//           className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-all shadow-md hover:shadow-lg"
//           aria-label="Add to favorites"
//         >
//           <Heart
//             className={`w-5 h-5 transition-colors ${
//               isFavorite ? "fill-accent text-accent" : "text-foreground"
//             }`}
//           />
//         </button>

//         {/* Category Badge */}
//         <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
//           {product.category}
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="p-4 flex flex-col h-full">
//         <Link href={`/product/${product.id}`}>
//           <h3 className="font-semibold text-foreground hover:text-accent transition-colors line-clamp-2 mb-2">
//             {product.name}
//           </h3>
//         </Link>

//         <div className="flex-1" />

//         {/* Price and Action */}
//         <div className="space-y-3 mt-4">
//           <div className="flex items-center justify-between">
//             <span className="text-2xl font-bold text-primary">
//               ${product.price}
//             </span>
//           </div>

//           <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2">
//             <ShoppingCart className="w-4 h-4" />
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
