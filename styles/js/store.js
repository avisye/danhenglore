const merchItems = [
    
    {
        img: 'https://basket-28.wbbasket.ru/vol5483/part548329/548329052/images/big/1.webp',
        title: 'Фигурка Дань Хэна',
        desc: 'Детализированная фигурка высотой 20 см',
        price: '2999 руб.',
        category: 'Фигурки'
    },
    {
        img: 'https://basket-17.wbbasket.ru/vol2832/part283291/283291046/images/big/1.webp',
        title: 'Футболка с принтом',
        desc: 'Хлопковая футболка с уникальным дизайном персонажа',
        price: '1299 руб.',
        category: 'Одежда'
    },
    {
        img: 'https://basket-27.wbbasket.ru/vol4971/part497161/497161881/images/big/1.webp',
        title: 'Постер арт',
        desc: 'Качественный постер формата А3 с артом Дань Хэна',
        price: '499 руб.',
        category: 'Аксессуары'
    },
    {
        img: 'https://basket-15.wbbasket.ru/vol2295/part229576/229576562/images/big/1.webp',
        title: 'Брелок',
        desc: 'Акриловый брелок с символикой персонажа',
        price: '399 руб.',
        category: 'Аксессуары'
    },
    {
        img: 'https://basket-18.wbbasket.ru/vol2946/part294650/294650972/images/big/1.webp',
        title: 'Картхолдер',
        desc: 'Картхолдер для карт',
        price: '249 руб.',
        category: 'Аксессуары'
    },
    {
        img: 'https://basket-13.wbbasket.ru/vol1965/part196526/196526639/images/big/1.webp',
        title: 'Кружка керамическая',
        desc: 'Керамическая кружка с принтом',
        price: '799 руб.',
        category: 'Аксессуары'
    },
    {
        img: 'https://basket-25.wbbasket.ru/vol4445/part444571/444571047/images/big/1.webp',
        title: 'Карточки',
        desc: 'Голлографические карточки',
        price: '599 руб.',
        category: 'Карты'
    },
    {
        img: 'https://basket-23.wbbasket.ru/vol4099/part409964/409964526/images/big/1.webp',
        title: 'Значок коллекционный',
        desc: 'Набор из 4 значков с разными образами персонажа',
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