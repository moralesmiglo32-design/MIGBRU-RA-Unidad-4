
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    const loadProducts = async () => {
        try {
            const response = await fetch('/api/products');

            if (!response.ok) {
                throw new Error('No se pudieron cargar los productos');
            }

            const products = await response.json();

            if (products.length === 0) {
                productsContainer.innerHTML =
                    '<p>No hay productos disponibles por el momento.</p>';
                return;
            }

            productsContainer.innerHTML = '';

            products.forEach((product) => {
                const productCard = document.createElement('article');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <h3>${product.nombre}</h3>
                    <p>${product.descripcion || 'Sin descripción disponible'}</p>
                    <p class="product-price">$${Number(product.precio).toFixed(2)} MXN</p>
                    <p>Disponibles: ${product.stock}</p>
                `;

                productsContainer.appendChild(productCard);
            });

        } catch (error) {
            productsContainer.innerHTML =
                '<p>No fue posible cargar los productos.</p>';

            console.error(error);
        }
    };

    loadProducts();
});
