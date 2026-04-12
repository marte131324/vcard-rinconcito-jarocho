// Datos del negocio para WhatsApp (Número ficticio para el prototipo o el tuyo)
const WHATSAPP_NUMBER = "522291293657"; // Número oficial de Rinconcito Jarocho

// Base de datos de productos REAL (Categorizada)
const BIN_ID = "69d9331caaba882197e5910b";
const MASTER_KEY = "$2a$10$q9Z//Fah.V6UxECh9kojoORPHn.xNOOWqZR1wiL05zK.7SB2jWp.W";
let globalOverrides = {};
let isEmergencyClosed = false;

const productsDB = [
    {
        "id": 1,
        "title": "Bolsa tipo Tote bag",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 180,
        "category": "souvenirs",
        "img": "assets/products/Bolsa tipo Tote bag $180.jpeg"
    },
    {
        "id": 2,
        "title": "Bolsita pequeña de Manta",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 35,
        "category": "souvenirs",
        "img": "assets/products/Bolsita pequeña de Manta $35.jpeg"
    },
    {
        "id": 3,
        "title": "Destapador Metálico en forma de Botella c/imán",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 60,
        "category": "souvenirs",
        "img": "assets/products/Destapador Metálico en forma de Botella c:imán $60.jpeg"
    },
    {
        "id": 4,
        "title": "Gorra Diferentes Diseños",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 300,
        "category": "gorras",
        "img": "assets/products/Gorra Diferentes Diseños $300.jpeg"
    },
    {
        "id": 5,
        "title": "Gorra Tiburones Rojos",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 250,
        "category": "gorras",
        "img": "assets/products/Gorra Tiburones Rojos $250.jpeg"
    },
    {
        "id": 6,
        "title": "Gorra de Jarocho",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 350,
        "category": "gorras",
        "img": "assets/products/Gorra de Jarocho $350.jpeg"
    },
    {
        "id": 7,
        "title": "Gorra tipo Trucker Bordada",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 180,
        "category": "gorras",
        "img": "assets/products/Gorra tipo Trucker Bordada $180.jpeg"
    },
    {
        "id": 8,
        "title": "Imán Sencillo",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Imán Sencillo $30.jpeg"
    },
    {
        "id": 9,
        "title": "Jaroch(a)  Grande de Tela",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 120,
        "category": "souvenirs",
        "img": "assets/products/Jaroch(a)  Grande de Tela $120.jpeg"
    },
    {
        "id": 10,
        "title": "Jersey Tiburones Rojos",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 500,
        "category": "ropa",
        "img": "assets/products/Jersey Tiburones Rojos $500.jpeg"
    },
    {
        "id": 11,
        "title": "Libro para Colorear",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 130,
        "category": "souvenirs",
        "img": "assets/products/Libro para Colorear $130.jpeg"
    },
    {
        "id": 12,
        "title": "Llavero de Dije",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Llavero de Dije $30.jpeg"
    },
    {
        "id": 13,
        "title": "Llavero de Tela",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 70,
        "category": "souvenirs",
        "img": "assets/products/Llavero de Tela $70 c:u.jpeg"
    },
    {
        "id": 14,
        "title": "Mousepad Diferentes Diseños",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 80,
        "category": "souvenirs",
        "img": "assets/products/Mousepad diferente diseños $80.jpeg"
    },
    {
        "id": 15,
        "title": "Placa de Auto",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 150,
        "category": "souvenirs",
        "img": "assets/products/Placa de Auto $150.jpeg"
    },
    {
        "id": 16,
        "title": "Planilla stickers",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Planilla stickers $30.jpeg"
    },
    {
        "id": 17,
        "title": 'Playera "Barco de Papel"',
        "desc": "Calidad artesanal de Veracruz.",
        "price": 140,
        "category": "ropa",
        "img": "assets/products/Playera Barco de Papel $140.jpeg"
    },
    {
        "id": 18,
        "title": 'Playera "Isla de Sacrificios"',
        "desc": "Calidad artesanal de Veracruz.",
        "price": 140,
        "category": "ropa",
        "img": "assets/products/Playera Isla de Sacrificios $140.jpeg"
    },
    {
        "id": 19,
        "title": "Playera Jarocha Serigrafiada",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 190,
        "category": "ropa",
        "img": "assets/products/Playera Jarocha Serigrafiada $190.jpeg"
    },
    {
        "id": 20,
        "title": "Playera Jarocha Serigrafiada Infantil",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 170,
        "category": "ropa",
        "img": "assets/products/Playera Jarocha Serigrafiada Infantil $170.jpeg"
    },
    {
        "id": 21,
        "title": "Playera Jarocho Serigrafiado",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 190,
        "category": "ropa",
        "img": "assets/products/Playera Jarocho Serigrafiado $190.jpeg"
    },
    {
        "id": 22,
        "title": "Playera Jarocho Serigrafiado Infantil",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 170,
        "category": "ropa",
        "img": "assets/products/Playera Jarocho Serigrafiado Infantil $170.jpeg"
    },
    {
        "id": 23,
        "title": 'Playera "Sólo Veracruz es Bello"',
        "desc": "Calidad artesanal de Veracruz.",
        "price": 140,
        "category": "ropa",
        "img": "assets/products/Playera Solo Veracruz es Bello $140.jpeg"
    },
    {
        "id": 24,
        "title": "Pluma de Jarochos",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Pluma de Jarochos $30 c:u.jpeg"
    },
    {
        "id": 25,
        "title": "Portavasos",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Portavasos $30.jpeg"
    },
    {
        "id": 26,
        "title": "Separador de Libros",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 15,
        "category": "souvenirs",
        "img": "assets/products/Separador de Libros $15 c:u.jpeg"
    },
    {
        "id": 27,
        "title": "Separador de Libros de Acrílico",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 30,
        "category": "souvenirs",
        "img": "assets/products/Separador de Libros de Acrílico $30 c:u.jpeg"
    },
    {
        "id": 28,
        "title": "Stickers",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 10,
        "category": "souvenirs",
        "img": "assets/products/Stickers $10 c:u.jpeg"
    },
    {
        "id": 29,
        "title": "Sudadera",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 500,
        "category": "ropa",
        "img": "assets/products/Sudadera $500.jpeg"
    },
    {
        "id": 30,
        "title": "Tarro Jumbo",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 270,
        "category": "tazas",
        "img": "assets/products/Tarro Jumbo $270.jpeg"
    },
    {
        "id": 31,
        "title": "Tarro Mediano",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 150,
        "category": "tazas",
        "img": "assets/products/Tarro Mediano $150.jpeg"
    },
    {
        "id": 32,
        "title": "Tarro de Cristal en forma de Calavera",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 200,
        "category": "tazas",
        "img": "assets/products/Tarro de Cristal en forma de Calavera $200.jpeg"
    },
    {
        "id": 33,
        "title": "Taza Balón de Fútbol",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 250,
        "category": "tazas",
        "img": "assets/products/Taza Balón de Fútbol $250.jpeg"
    },
    {
        "id": 34,
        "title": "Taza Cónica 17 oz",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 150,
        "category": "tazas",
        "img": "assets/products/Taza Cónica 17 oz $150.jpeg"
    },
    {
        "id": 35,
        "title": "Taza Glitter Jarocha",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 150,
        "category": "tazas",
        "img": "assets/products/Taza Glitter Jarocha $150.jpeg"
    },
    {
        "id": 36,
        "title": "Taza con Cuchara",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 170,
        "category": "tazas",
        "img": "assets/products/Taza con Cuchara $170.jpeg"
    },
    {
        "id": 37,
        "title": "Taza con Vestimenta por debajo de la Taza",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 100,
        "category": "tazas",
        "img": "assets/products/Taza con Vestimenta por debajo de la Taza $100.jpeg"
    },
    {
        "id": 38,
        "title": "Taza sencilla",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 70,
        "category": "tazas",
        "img": "assets/products/Taza sencilla $70.jpeg"
    },
    {
        "id": 39,
        "title": "Tequilero DTF",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 35,
        "category": "tazas",
        "img": "assets/products/Tequilero DTF $35.jpeg"
    },
    {
        "id": 40,
        "title": "Tequilero Grabado",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 50,
        "category": "tazas",
        "img": "assets/products/Tequilero Grabado $50.jpeg"
    },
    {
        "id": 41,
        "title": "Separador de Libro en Forma de Tarjetas de Uno",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 15,
        "category": "souvenirs",
        "img": "assets/products/Tequilero Grabado $50.jpeg.jpeg"
    },
    {
        "id": 42,
        "title": "Vasito Muela Grabado",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 50,
        "category": "tazas",
        "img": "assets/products/Vasito Muela Grabado $50.jpeg"
    },
    {
        "id": 43,
        "title": "Vaso 710 ml",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 250,
        "category": "tazas",
        "img": "assets/products/Vaso 710 ml $250.jpeg"
    },
    {
        "id": 44,
        "title": "Vaso con Asa 1.2 L",
        "desc": "Calidad artesanal de Veracruz.",
        "price": 350,
        "category": "tazas",
        "img": "assets/products/Vaso con Asa 1.2 L $350.jpeg"
    }
];

const spriteMap = {};

let cart = [];

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
    // Forzar autoplay del video para omitir bloqueos restrictivos en móviles iOS
    const splashVid = document.getElementById('splashVideo');
    if(splashVid) {
        splashVid.muted = true;
        splashVid.play().catch(e => console.log('Autoplay iOS bloqueado:', e));
    }

    async function init() {
        // Cargar datos globales antes de nada
        await loadGlobalData();
        
        updateStoreStatus();
        renderProducts('all');
        setupFilters();
        
        // Splash screen logic
        setTimeout(() => {
            const splash = document.getElementById('splash');
            if(splash) {
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.style.display = 'none';
                    document.body.classList.remove('loading');
                }, 600);
            }
        }, 3200);
    }

    function updateStoreStatus() {
        const statusDot = document.querySelector('.status-dot');
        const statusText = document.getElementById('status-text');
        if(!statusDot || !statusText) return;
        
        const mxTime = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"});
        const hour = new Date(mxTime).getHours();
        
        // Emergencia prevalece sobre horario
        if (isEmergencyClosed) {
            statusDot.className = 'status-dot closed';
            statusText.innerText = 'Cerrado temporalmente';
            return;
        }

        if(hour >= 10 && hour < 20) {
            statusDot.className = 'status-dot open';
            statusText.innerText = 'Abierto ahora';
        } else {
            statusDot.className = 'status-dot closed';
            statusText.innerText = 'Cerrado localmente';
        }
    }

    init();
});
async function loadGlobalData() {
    try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { "X-Master-Key": MASTER_KEY }
        });
        const data = await res.json();
        globalOverrides = data.record.inventoryOverrides || {};
        isEmergencyClosed = data.record.isEmergencyClosed || false;
        console.log("Global data loaded from JSONBin");
    } catch (e) {
        console.error("Error loading JSONBin data, falling back to local store:", e);
        try {
            globalOverrides = JSON.parse(localStorage.getItem('jarocho_inv_overrides') || '{}');
        } catch(err) {}
    }
}

// Función de Ayuda para las imágenes mágicas 
function getProductImageHTML(product, cssClass) {
    const sprite = spriteMap[product.id];
    if (sprite) {
        if (sprite.pos === 'single') {
            return `<div class="${cssClass}" style="background: url('${sprite.file}') center/cover;"></div>`;
        } else {
            const bgPos = sprite.pos * 33.3333;
            return `<div class="${cssClass}" style="background: url('${sprite.file}'); background-size: 400% 100%; background-position: ${bgPos}% 0%;"></div>`;
        }
    } else if (product.img) {
        return `<img src="${encodeURI(product.img)}" alt="${product.title}" class="${cssClass}">`;
    }
    return `<div class="${cssClass} product-placeholder"><i class="ri-image-add-line"></i></div>`;
}

// ================= RENDER COMPONENTS =================
function renderProducts(categoryFilter) {
    const grid = document.getElementById('products-grid');
    if (!grid) return; // Prevent error in admin.html

    grid.innerHTML = '';
    
    // Filtro base de categoría
    let filteredProducts = categoryFilter === 'all' 
        ? productsDB 
        : productsDB.filter(p => p.category === categoryFilter);

    // Ocultar productos sin foto temporalmente
    filteredProducts = filteredProducts.filter(p => spriteMap[p.id] || p.img);
    
    // Cargar configuraciones del Administrador (Precios y Stock)
    const ovrs = globalOverrides;

    filteredProducts.forEach(product => {
        // Aplicar configuraciones del Admin
        const ovr = ovrs[product.id];
        const currentPrice = ovr && ovr.price !== undefined ? ovr.price : product.price;
        const outOfStock = ovr && ovr.inStock === false;

        const card = document.createElement('div');
        card.className = 'product-card' + (outOfStock ? ' out-of-stock' : '');
        
        const imageHTML = getProductImageHTML(product, 'product-img');
            
        card.innerHTML = `
            ${imageHTML}
            ${outOfStock ? '<div class="stock-badge">AGOTADO</div>' : ''}
            <div class="product-info">
                <div class="product-info-text">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-desc">${product.desc}</p>
                </div>
                <div class="product-action">
                    <span class="product-price">$${currentPrice.toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})" ${outOfStock ? 'disabled' : ''}>
                        ${outOfStock ? 'NO DISPONIBLE' : 'AGREGAR'}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupFilters() {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class
            buttons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');
            // Render
            const filter = e.target.getAttribute('data-filter');
            renderProducts(filter);
            
            // Animación suave de scroll al filter
            e.target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
    });
}

// ================= CART LOGIC =================
function addToCart(productId) {
    const ovr = JSON.parse(localStorage.getItem('jarocho_inv_overrides') || '{}')[productId];
    if (ovr && ovr.inStock === false) return; // Prevent adding if out of stock
    
    const product = productsDB.find(p => p.id === productId);
    if(!product) return;
    
    const currentPrice = ovr && ovr.price !== undefined ? ovr.price : product.price;

    const existing = cart.find(i => i.id === productId);
    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({...product, price: currentPrice, qty: 1});
    }
    
    updateCartUI();
    showToast();
}

function updateCartUI() {
        const countBadge = document.getElementById('header-cart-count');
    const floatBadge = document.getElementById('floating-cart-count');
    const floatBtn = document.getElementById('floating-btn');

    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    countBadge.innerText = totalItems;
    if(floatBadge) floatBadge.innerText = totalItems;
    
    // Show or hide floating button dynamically
    if (totalItems > 0 && floatBtn) {
        floatBtn.classList.add('visible');
    } else if (floatBtn) {
        floatBtn.classList.remove('visible');
    }

    const cartContainer = document.getElementById('cart-items');
    const checkoutForm = document.getElementById('checkout-form');
    const btnCheckout = document.getElementById('btn-checkout');
    const totalPriceEl = document.getElementById('cart-total-price');
    
    if(cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío 🥺<br>¡Agrega unos souvenirs jarochos!</div>';
        checkoutForm.style.display = 'none';
        btnCheckout.disabled = true;
        totalPriceEl.innerText = '$0.00';
        return;
    }
    
    // Render items
    cartContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += (item.price * item.qty);
        const el = document.createElement('div');
        el.className = 'cart-item';

        // Solución al Bug de la Foto en el Carrito
        const cartImageHTML = getProductImageHTML(item, 'cart-item-img');

        el.innerHTML = `
            ${cartImageHTML}
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
            </div>
            <div class="cart-qty-ctrl">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        `;
        cartContainer.appendChild(el);
    });
    
    totalPriceEl.innerText = '$' + total.toFixed(2);
    checkoutForm.style.display = 'block';
    
    // Habilitar / deshabilitar botón de checkout basado en si hay nombre (Opcional, pero para VCard de venta rápida mejor no forzar nombre estricto o hacerlo en el input)
    checkFormStatus();
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if(!item) return;
    
    item.qty += delta;
    if(item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

// ================= UTILS & WHATSAPP =================
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    // Si vibración está disponible (funciona en PWA)
    if(navigator.vibrate) navigator.vibrate(50);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Logic for Gift module
function toggleGiftNote() {
    const isGift = document.getElementById('is-gift').checked;
    const note = document.getElementById('gift-note');
    note.style.display = isGift ? 'block' : 'none';
    if(isGift) note.focus();
}

// Controlar validación de nombre
document.getElementById('client-name').addEventListener('input', checkFormStatus);

function checkFormStatus() {
    const name = document.getElementById('client-name').value.trim();
    const btn = document.getElementById('btn-checkout');
    btn.disabled = name.length < 2 || cart.length === 0;
}

function sendWhatsAppOrder() {
    const name = document.getElementById('client-name').value.trim();
    if(name.length < 2 || cart.length === 0) return;

    const isGift = document.getElementById('is-gift').checked;
    const giftNote = document.getElementById('gift-note').value.trim();

    let total = 0;
    
    // Generar el mensaje en texto limpio puro para evitar errores de UTF-8 ()
    let msg = `*Hola Rinconcito Jarocho*\n`;
    msg += `Soy *${name}*, me gustaría hacer el siguiente pedido desde su catálogo digital:\n\n`;
    
    cart.forEach(item => {
        const lineTotal = item.price * item.qty;
        total += lineTotal;
        msg += `- ${item.qty}x *${item.title}* ($${lineTotal.toFixed(2)})\n`;
    });
    
    msg += `\n*Total del pedido: $${total.toFixed(2)}*\n`;

    if (isGift) {
        msg += `\n*Este pedido es para REGALO*\n`;
        if (giftNote) {
            msg += `*Dedicatoria incluida:* "${giftNote}"\n`;
        }
    }
    
    msg += `\n¿Me indicas métodos de pago e información de entrega? Gracias.`;
    
    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    
    // Redirigir a WhatsApp
    window.open(whatsappUrl, '_blank');
}
