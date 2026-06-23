/**
 * Checkout Constraints Validation Engine Core Engine Module
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('checkout-form')) {
        CheckoutModule.init();
    }
});

const CheckoutModule = {
    init() {
        this.form = document.getElementById('checkout-form');
        this.previewContainer = document.getElementById('checkout-items-preview');
        this.totalPanel = document.getElementById('checkout-total-panel');
        
        this.renderReviewItems();
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    },

    renderReviewItems() {
        const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        if(cart.length === 0) {
            window.location.href = "cart.html";
            return;
        }

        let subtotal = 0;
        this.previewContainer.innerHTML = cart.map(item => {
            subtotal += (item.harga * item.qty);
            return `
                <div class="checkout-item-preview-card">
                    <img src="${item.gambar}" alt="${item.nama}">
                    <div class="preview-card-info">
                        <h4>${item.nama}</h4>
                        <p>${item.qty} x Rp ${item.harga.toLocaleString('id-ID')}</p>
                    </div>
                </div>
            `;
        }).join('');

        const tax = Math.round(subtotal * 0.11);
        const grandtotal = subtotal + tax;

        this.totalPanel.innerHTML = `
            <div class="summary-line"><span>Subtotal:</span><span>Rp ${subtotal.toLocaleString('id-ID')}</span></div>
            <div class="summary-line"><span>PPN (11%):</span><span>Rp ${tax.toLocaleString('id-ID')}</span></div>
            <hr class="divider">
            <div class="summary-line font-bold"><span>Grand Total:</span><span style="color:var(--color-primary); font-size:1.2rem;">Rp ${grandtotal.toLocaleString('id-ID')}</span></div>
        `;
    },

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateInputs()) {
            // Ambil data form input buyer
            const buyerProfile = {
                nama: document.getElementById('full-name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone-number').value.trim(),
                alamat: document.getElementById('address').value.trim(),
                kota: document.getElementById('city').value.trim(),
                provinsi: document.getElementById('province').value.trim(),
                kodepos: document.getElementById('postal-code').value.trim()
            };

            // Simpan profile sementara ke state Session/Local Storage untuk dipakai portal payment invoice
            localStorage.setItem('mols_active_buyer', JSON.stringify(buyerProfile));
            window.location.href = "payment.html";
        }
    },

    validateInputs() {
        let isValid = true;
        
        const nameInput = document.getElementById('full-name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone-number');
        const addressInput = document.getElementById('address');

        // Regex Standar Validasi Industri
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,13}$/;

        // Validasi Nama
        if (nameInput.value.trim() === "") {
            this.markInvalid(nameInput);
            isValid = false;
        } else { this.markValid(nameInput); }

        // Validasi Email
        if (!emailRegex.test(emailInput.value.trim())) {
            this.markInvalid(emailInput);
            isValid = false;
        } else { this.markValid(emailInput); }

        // Validasi Nomor HP
        if (!phoneRegex.test(phoneInput.value.trim())) {
            this.markInvalid(phoneInput);
            isValid = false;
        } else { this.markValid(phoneInput); }

        // Validasi Alamat Rumah
        if (addressInput.value.trim() === "") {
            this.markInvalid(addressInput);
            isValid = false;
        } else { this.markValid(addressInput); }

        return isValid;
    },

    markInvalid(el) {
        el.parentElement.classList.add('invalid');
    },

    markValid(el) {
        el.parentElement.classList.remove('invalid');
    }
};