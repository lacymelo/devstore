import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";

interface ProductsProps {
    params: {
        slug: string
    }
}

// memoização -> deduplicar

async function getProduct(slug: string): Promise<Product[]> {
    const response = await api(`/products/${slug}`, {
        next: {
            revalidate: 60 * 60, // 1 hour
        }
    })

    const product = await response.json()

    return product
}

export async function generateMetadata({ params }: ProductsProps): Promise<Metadata> {
    const [product] = await getProduct(params.slug)

    return {
        title: product.title
    }
}

export default async function ProductPage({ params }: ProductsProps) {
    const [product] = await getProduct(params.slug)

    return (
        <div className="relative grid max-h-[860px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                    src={product.image}
                    width={1000}
                    height={1000}
                    quality={100}
                    alt=""
                />
            </div>

            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-bold leading-tight">
                    {product.title}
                </h1>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{product.description}</p>

                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block bg-violet-500 py-2.5 px-5 rounded-full font-semibold">
                        {
                            product.price.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            })
                        }
                    </span>
                    <span className="text-sm text-zinc-400">
                        {
                            (product.price / 12).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }
                    </span>
                </div>

                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">Tamanhos</span>

                    <div className="flex gap-2">
                        <button type="button" className="bg-zinc-800 border border-zinc-700 w-14 h-9 rounded-full flex items-center justify-center text-sm font-semibold">P</button>
                        <button type="button" className="bg-zinc-800 border border-zinc-700 w-14 h-9 rounded-full flex items-center justify-center text-sm font-semibold">M</button>
                        <button type="button" className="bg-zinc-800 border border-zinc-700 w-14 h-9 rounded-full flex items-center justify-center text-sm font-semibold">G</button>
                        <button type="button" className="bg-zinc-800 border border-zinc-700 w-14 h-9 rounded-full flex items-center justify-center text-sm font-semibold">GG</button>
                    </div>
                </div>

                <button className="bg-emerald-600 text-white mt-8 h-12 rounded-full flex items-center justify-center font-semibold">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}