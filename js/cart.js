/**
 * Interactive Shopping Cart Core State Synchronizer Script
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-table-wrapper')) {
        window.CartPageModule.init();
    }
});

window.CartPageModule = {
    init() {
        this.wrapper = document.getElementById('cart-table-wrapper');
        this.bindEvents();
        this.renderCart();
    },

    bindEvents() {
        document.getElementById('btn-goto-checkout').addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
            if(cart.length === 0) {
                AppModule.showToast("Gagal! Keranjang kosong. Silakan belanja terlebih dahulu.");
                return;
            }
            window.location.href = "checkout.html";
        });
    },

    renderCart() {
        const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        if (cart.length === 0) {
            this.wrapper.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <h3>Keranjang Belanja Anda Kosong</h3>
                    <p>Temukan gawai elektronik idaman Anda sekarang di katalog toko kami.</p>
                    <a href="products.html" class="btn btn-primary">Mulai Belanja Elektronik</a>
                </div>
            `;
            this.updateSummaryCosts(0, 0, 0, 0);
            return;
        }

        let htmlString = "";
        let totalItemsQty = 0;
        let subtotalCost = 0;

        cart.forEach(item => {
            totalItemsQty += item.qty;
            subtotalCost += (item.harga * item.qty);

            htmlString += `
                <div class="cart-item-row">
                    <div class="cart-item-img"><img src="${item.gambar}" alt="${item.nama}"></div>
                    <div class="cart-item-name">
                        <h4>${item.nama}</h4>
                        <p>Brand Vendor: ${item.brand}</p>
                    </div>
                    <div class="cart-item-price">Rp ${item.harga.toLocaleString('id-ID')}</div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="CartPageModule.updateQty(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="CartPageModule.updateQty(${item.id}, 1)">+</button>
                    </div>
                    <div>
                        <button class="btn-remove-item" onclick="CartPageModule.removeItem(${item.id})" title="Hapus produk dari daftar"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
            `;
        });

        this.wrapper.innerHTML = htmlString;
        
        // Kalkulasi Keuangan Otomatis (PPN Terbuka 11%)
        const taxCost = Math.round(subtotalCost * 0.11);
        const grandTotalCost = subtotalCost + taxCost;

        this.updateSummaryCosts(totalItemsQty, subtotalCost, taxCost, grandTotalCost);
    },

    updateQty(id, modifier) {
        let cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        const idx = cart.findIndex(item => item.id === id);
        if (idx === -1) return;

        const originalProduct = productsData.find(p => p.id === id);
        
        cart[idx].qty += modifier;

        if (cart[idx].qty > originalProduct.stok) {
            AppModule.showToast(`Batas maksimal! Pembelian tidak boleh melebihi total stok sisa (${originalProduct.stok} unit).`);
            return;
        }

        if (cart[idx].qty <= 0) {
            cart = cart.filter(item => item.id !== id);
        }

        localStorage.setItem('mols_cart', JSON.stringify(cart));
        this.renderCart();
        if(typeof AppModule !== 'undefined') AppModule.renderGlobalCartBadge();
    },

    removeItem(id) {
        let cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem('mols_cart', JSON.stringify(cart));
        this.renderCart();
        if(typeof AppModule !== 'undefined') AppModule.renderGlobalCartBadge();
        AppModule.showToast("Item berhasil dikeluarkan dari keranjang belanja.");
    },

    updateSummaryCosts(qty, subtotal, tax, grandtotal) {
        document.getElementById('sum-items-qty').innerText = `${qty} Barang`;
        document.getElementById('sum-subtotal').innerText = `Rp ${subtotal.toLocaleString('id-ID')}`;
        document.getElementById('sum-tax').innerText = `Rp ${tax.toLocaleString('id-ID')}`;
        document.getElementById('sum-grandtotal').innerText = `Rp ${grandtotal.toLocaleString('id-ID')}`;
    }
};