module.exports = () => {
    const data = {
        products: []
    }
    for (i = 0; i < 1000; i++) {
        data.products[i] = {
            id: String(i),
            img : 'https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: String('Product') + i,
            price : 100
        }
    }

    return data
}