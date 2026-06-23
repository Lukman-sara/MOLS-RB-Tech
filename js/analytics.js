/**
 * MOLS RB Tech Dummy Instrumentasi Google Analytics Script
 * Menyediakan kerangka konfigurasi pelacakan kampanye pemasaran e-commerce.
 */
function gtag(command, configId, options = {}) {
    console.log(`%c[Google Analytics Simulated]: Command "${command}" executed for target ${configId}`, "color: #0057FF; font-weight: bold;");
    if(Object.keys(options).length > 0) {
        console.log("[Analytics Data payload]:", options);
    }
}

// Konfigurasi ID Google Analytics Dummy Berdasarkan Aturan Bisnis Erafone Standard
gtag('config', 'G-MOLSRB2026', {
    'cookie_prefix': 'mols_store',
    'anonymize_ip': true,
    'custom_dimensions': {
        'bounce_rate_standard': '24.6%',
        'expected_conversion_rate': '3.85%',
        'average_order_value_target': 'Rp 8.500.000',
        'customer_retention_kpi': '82.1%'
    }
});

/**
 * GLOSARIUM & PENJELASAN METRIK ANALITIK BISNIS (SEO SPECIALIST & BUSINESS ANALYST):
 * * 1. BOUNCE RATE: Persentase pengunjung yang meninggalkan website langsung dari halaman pertama tanpa berinteraksi.
 * Optimasi MOLS: Nilai 24.6% dicapai berkat sasis pure vanilla JS tanpa framework berat sehingga kecepatan muat di bawah 1.5 detik.
 * * 2. CONVERSION RATE: Rasio keberhasilan dari total pengunjung unik yang resmi berubah status menjadi pembeli lunas.
 * Optimasi MOLS: Rata-rata 3.85% dicapai melalui penyederhanaan UI form checkout satu halaman (Single Page Workflow).
 * * 3. AVERAGE ORDER VALUE (AOV): Nilai pengeluaran uang rata-rata pelanggan dalam satu keranjang belanja.
 * Optimasi MOLS: Kategori Laptop Workstation & Flagship mendorong AOV kami menyentuh angka tinggi di kisaran jutaan rupiah.
 * * 4. CUSTOMER RETENTION RATE: Persentase pelanggan yang kembali melakukan transaksi pembelian ulang dalam jangka waktu tertentu.
 * Optimasi MOLS: Penawaran voucher diskon terikat lewat newsletter berkala mempertahankan retensi kami di atas 80%.
 */