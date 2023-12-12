'use client'

import { useCart } from "@/contexts/cart-context"

export interface AddToCartButtonProps {
    productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart()

    function handleAddProductToCart() {
        addToCart(productId)
    }

    return (
        <button
            className="bg-emerald-600 text-white mt-8 h-12 rounded-full flex items-center justify-center font-semibold"
            onClick={handleAddProductToCart}
        >Adicionar ao carrinho
        </button>
    )
}