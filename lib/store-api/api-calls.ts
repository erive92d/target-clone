export const fetchAll = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        return await response.json()

    } catch (error) {
        console.error("Internal Error on Fetch All", error)
    }
}

export const fetchProduct = async (id: string) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        return await response.json()

    } catch (error) {
        console.error("Internal Error on Fetch All", error)
    }
}

export const fetchCategories = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        return await response.json()
    } catch (error) {
        console.error("Internal Error on Categories", error)
    }
}