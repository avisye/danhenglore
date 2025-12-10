const merchItems = [
    
    {
        img: 'https://basket-23.wbbasket.ru/vol3972/part397263/397263103/images/big/1.webp',
        title: 'Сережки Дань Хэна',
        desc: 'Модные сережки на каждый день',
        price: '2999 руб.',
        category: 'Украшения'
    },
    {
        img: 'https://basket-13.wbbasket.ru/vol1971/part197108/197108956/images/big/1.webp',
        title: 'Подушка',
        desc: 'Мягкая подушка с уникальным дизайном персонажа',
        price: '1299 руб.',
        category: 'Аксессуары'
    },
    {
        img: 'https://basket-16.wbbasket.ru/vol2450/part245065/245065765/images/big/1.webp',
        title: 'Постер арт',
        desc: 'Качественный постер формата А3 с артом Дань Хэна',
        price: '499 руб.',
        category: 'Аксессуары'
    },


    {
        img: 'https://basket-13.wbbasket.ru/vol1960/part196062/196062374/images/big/1.webp',
        title: 'Значок коллекционный',
        desc: 'Редкий значок с пожирателем луны',
        price: '699 руб.',
        category: 'Аксессуары'
    }
];

// Функция для отображения товаров
function renderCatalog() {
    const catalog = document.getElementById('merch-catalog');
    
    merchItems.forEach(item => {
        catalog.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="merch-card">
                    <img src="${item.img}" class="merch-img" alt="${item.title}">
                    <div class="merch-card-body">
                        <span class="merch-badge">${item.category}</span>
                        <h5 class="merch-card-title">${item.title}</h5>
                        <p class="merch-card-text">${item.desc}</p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="merch-price">${item.price}</span>
                        </div>
                        <div class="merch-quantity-container">
                            <span class="merch-quantity-label">Количество:</span>
                            <input type="number" min="0" value="0" data-name="${item.title}" 
                                   class="merch-quantity">
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
}

// Функция для оформления заказа
function collectOrder() {
    const inputs = document.querySelectorAll('#merch-catalog input[type="number"]');
    const selectedItems = [];
    
    inputs.forEach(inp => {
        const qty = Number(inp.value);
        if (qty > 0) {
            selectedItems.push(`${inp.dataset.name}: ${qty} шт.`);
        }
    });

    if (selectedItems.length === 0) {
        alert('Выберите товары, указав количество больше 0.');
        return;
    }

    const query = encodeURIComponent(selectedItems.join(', '));
    const searchUrl = `https://ya.ru/search/?text=${query}`;
    window.open(searchUrl, '_blank');
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    document.getElementById('orderAll').addEventListener('click', collectOrder);
});