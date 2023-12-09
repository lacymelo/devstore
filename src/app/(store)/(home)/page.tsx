import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

// Cache e memoization
// memoization evita requisições duplicadas

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60 // 1 hour
    }
  })

  const products = await response.json()

  return products
}

export default async function Home() {

  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative items-end justify-center bg-zinc-900 col-span-6 row-span-6 rounded-lg overflow-hidden"
      >
        <Image
          src={highlightedProduct.image}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 p-1 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 pl-1">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="bg-violet-500 px-4 h-full flex items-center justify-between rounded-full font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>
      </Link>

      {
        otherProducts.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative items-end justify-center bg-zinc-900 col-span-3 row-span-3 rounded-lg overflow-hidden"
          >
            <Image
              src={product.image}
              width={860}
              height={860}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-10 right-10 h-12 p-1 max-w-[280px] flex items-center gap-2 border-2 border-zinc-500 rounded-full bg-black/60 pl-1">
              <span className="text-sm truncate">{product.title}</span>
              <span className="bg-violet-500 px-4 h-full flex items-center justify-between rounded-full font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </span>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
