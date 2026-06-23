/**
 * Main Global Application Orchestrator Module
 * Menangani fungsi UI fundamental seperti tema, hamburger menu, dan update badge keranjang.
 */
document.addEventListener('DOMContentLoaded', () => {
    AppModule.init();
});

const AppModule = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.renderGlobalCartBadge();
        this.initTheme();
        this.initFlashSaleCountdown();
    },

    cacheDOM() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.hamburgerBtn = document.getElementById('hamburger-menu');
        this.mainNav = document.getElementById('main-nav');
        this.cartCountBadge = document.getElementById('cart-count');
        this.newsletterForm = document.getElementById('newsletter-form');
    },

    bindEvents() {
        if (this.themeToggleBtn) this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        if (this.hamburgerBtn) this.hamburgerBtn.addEventListener('click', () => this.toggleMenu());
        if (this.newsletterForm) this.newsletterForm.addEventListener('submit', (e) => this.handleNewsletter(e));
    },

    initTheme() {
        const savedTheme = localStorage.getItem('mols_theme') || 'light';
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }
    },

    toggleTheme() {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('mols_theme', 'light');
            this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            this.showToast("Switched to Light Presentation View Mode");
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('mols_theme', 'dark');
            this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            this.showToast("Switched to Ultra Dark Premium View Mode");
        }
    },

    toggleMenu() {
        if (this.mainNav) this.mainNav.classList.toggle('open');
    },

    renderGlobalCartBadge() {
        if (!this.cartCountBadge) return;
        const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        const totalItemsQty = cart.reduce((acc, current) => acc + current.qty, 0);
        this.cartCountBadge.innerText = totalItemsQty;
    },

    initFlashSaleCountdown() {
        const timerElement = document.getElementById('countdown');
        if (!timerElement) return;

        // Hitung target 24 jam ke depan secara dinamis demi menjaga konsistensi demo web portfolio
        let targetTime = parseInt(localStorage.getItem('mols_sale_target'));
        if (!targetTime || targetTime < Date.now()) {
            targetTime = Date.now() + (24 * 60 * 60 * 1000);
            localStorage.setItem('mols_sale_target', targetTime);
        }

        setInterval(() => {
            const distance = targetTime - Date.now();
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.innerText = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    },

    handleNewsletter(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        this.showToast(`Sukses! Kode Voucher diskon telah dikirim ke: ${email}`, "success");
        document.getElementById('newsletter-email').value = "";
    },

    showToast(message, type = "info") {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 3500);
    }
};

// Global Bridge Interface Module untuk diakses via inline attribute HTML onclick handler
const CartModule = {
    add(id) {
        let cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        const existingItemIndex = cart.findIndex(item => item.id === id);
        
        // Cari data mentah produk asli dari file data internal
        const rawProduct = productsData.find(p => p.id === id);
        if (!rawProduct) return;

        if (existingItemIndex > -1) {
            if(cart[existingItemIndex].qty >= rawProduct.stok) {
                AppModule.showToast("Gagal! Batas pembelian maksimal melebihi stok yang tersedia.");
                return;
            }
            cart[existingItemIndex].qty += 1;
        } else {
            cart.push({ id: rawProduct.id, nama: rawProduct.nama, harga: rawProduct.harga, gambar: rawProduct.gambar, brand: rawProduct.brand, qty: 1 });
        }

        localStorage.setItem('mols_cart', JSON.stringify(cart));
        AppModule.renderGlobalCartBadge();
        AppModule.showToast(`Berhasil menambahkan ${rawProduct.nama} ke keranjang!`, "success");
        
        // Custom Hook callback if active on dynamic cart page view state context
        if(window.CartPageModule) window.CartPageModule.renderCart();
    }
};