"use client";

import { useEffect, useState } from "react";
import SingleProduct from "@/components/layout/Product/SingleProduct";
import { fetchProduct } from "@/lib/store-api/api-calls";

type ProductId = {
    params: {
        id: string;
    };
};

export default function Page({ params }: ProductId) {
    const { id } = params;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct(id).then((data) => setProduct(data));
    }, [id]);

    return (
        <div className="lg:w-4/5 mx-auto py-8 flex flex-col">
            {product ? <SingleProduct product={product} /> : <h1>Loading...</h1>}
        </div>
    );
}