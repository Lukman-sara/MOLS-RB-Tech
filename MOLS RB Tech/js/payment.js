/**
 * Payment Portal Gateway Router Core Processor Engine Module
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('payment-selection-panel')) {
        PaymentGatewayProcessor.init();
    }
});

const PaymentGatewayProcessor = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.calculateBillingAmount();
    },

    cacheDOM() {
        this.selectionPanel = document.getElementById('payment-selection-panel');
        this.invoicePanel = document.getElementById('invoice-panel');
        this.billingText = document.getElementById('billing-amount');
        this.executeBtn = document.getElementById('btn-execute-payment');
        this.gatewayOptions = document.querySelectorAll('.gateway-option');
        this.selectedChannel = null;
    },

    bindEvents() {
        this.gatewayOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                this.gatewayOptions.forEach(opt => opt.classList.remove('selected'));
                const targetedCard = e.target.closest('.gateway-option');
                targetedCard.classList.add('selected');
                this.selectedChannel = targetedCard.dataset.method;
            });
        });

        this.executeBtn.addEventListener('click', () => this.processTransactionExecution());
    },

    calculateBillingAmount() {
        const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
        const subtotal = cart.reduce((acc, current) => acc + (current.harga * current.qty), 0);
        this.grandTotal = subtotal + Math.round(subtotal * 0.11);
        this.billingText.innerText = `Rp ${this.grandTotal.toLocaleString('id-ID')}`;
    },

    processTransactionExecution() {
        if (!this.selectedChannel) {
            alert("Silakan pilih salah satu opsi channel pembayaran formal.");
            return;
        }

        // Simulasi Delay Loading Memproses Keamanan Transaksi Aman
        this.executeBtn.disabled = true;
        this.executeBtn.innerText = "Processing Secure Vault Handshake Transactions...";

        setTimeout(() => {
            const cart = JSON.parse(localStorage.getItem('mols_cart') || '[]');
            const buyer = JSON.parse(localStorage.getItem('mols_active_buyer') || '{}');
            const generatedInvoiceId = `INV-${Date.now().toString().slice(-8).toUpperCase()}`;

            // Buat Objek Rekaman Invoice Resmi untuk database lokal
            const invoiceObject = {
                invoiceId: generatedInvoiceId,
                buyerDetails: buyer,
                itemsBought: cart,
                grandTotal: this.grandTotal,
                paymentMethod: this.selectedChannel,
                timestamp: new Date().toLocaleString('id-ID')
            };

            // Simpan invoice ke dalam riwayat lokal
            const history = JSON.parse(localStorage.getItem('mols_invoices') || '[]');
            history.push(invoiceObject);
            localStorage.setItem('mols_invoices', JSON.stringify(history));

            // Perlihatkan Faktur Bersih PAID Ke Pelanggan
            this.selectionPanel.classList.add('d-none');
            this.invoicePanel.classList.remove('d-none');
            this.renderFinalInvoice(invoiceObject);
        }, 2200);
    },

    renderFinalInvoice(inv) {
        document.getElementById('inv-id').innerText = inv.invoiceId;
        document.getElementById('inv-name').innerText = inv.buyerDetails.nama;
        document.getElementById('inv-phone').innerText = inv.buyerDetails.phone;
        document.getElementById('inv-address').innerText = `${inv.buyerDetails.alamat}, ${inv.buyerDetails.kota}, ${inv.buyerDetails.provinsi} (${inv.buyerDetails.kodepos})`;
        document.getElementById('inv-method').innerText = inv.paymentMethod;
        document.getElementById('inv-grandtotal').innerText = `Rp ${inv.grandTotal.toLocaleString('id-ID')}`;

        const itemsListWrapper = document.getElementById('inv-items-list');
        itemsListWrapper.innerHTML = inv.itemsBought.map(item => `
            <div class="invoice-item-mini">
                <span>${item.nama} (x${item.qty})</span>
                <span>Rp ${(item.harga * item.qty).toLocaleString('id-ID')}</span>
            </div>
        `).join('');
    }
};