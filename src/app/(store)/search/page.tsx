import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
    searchParams: {
        q: string
    }
}

async function searchProducts(query: string): Promise<Product[]> {
    const response = await api(`/products/search?q=${query}`, {
        next: {
            revalidate: 60 * 60 // 1 hour
        }
    })

    const products = await response.json()

    return products
}

export default async function Search({ searchParams }: SearchProps) {
    const { q: query } = searchParams

    if (!query) {
        redirect('/')
    }

    const products = await searchProducts(query)

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para: <span className="font-semibold">{query}</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
                {
                    products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            className="group relative items-end justify-center bg-zinc-900 rounded-lg overflow-hidden"
                        >
                            <Image
                                src={product.image}
                                width={480}
                                height={480}
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
        </div>
    )
}