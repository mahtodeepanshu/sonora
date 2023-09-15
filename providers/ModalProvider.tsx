"use client"

import { useState, useEffect } from "react"

import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"
import SubscribeModal from "@/components/SubscribeModal"
import { ProductWithPrice } from "@/types"

interface ModalProviderProps {
    products: ProductWithPrice[]
}

const ModalProvider: React.FC<ModalProviderProps> = ({
    products
}) => {
    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
        setisMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
            <SubscribeModal products={products} />
        </>
    )
}

export default ModalProvider