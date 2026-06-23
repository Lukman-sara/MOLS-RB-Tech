/**
 * Master Catalog Filter Engine Controller Script
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('catalog-grid')) {
        CatalogModule.init();
    }
});

const CatalogModule = {
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.checkURLParams();
        this.filterProducts();
    },

    cacheDOM() {
        this.grid = document.getElementById('catalog-grid');
        this.searchInput = document.getElementById('search-input');
        this.categoryCheckboxes = document.querySelectorAll('.filter-category');
        this.priceRadios = document.querySelectorAll('input[name="filter-price"]');
        this.sortSelect = document.getElementById('sort-select');
        this.counter = document.getElementById('products-counter');
    },

    bindEvents() {
        this.searchInput.addEventListener('input', () => this.filterProducts());
        this.categoryCheckboxes.forEach(cb => cb.addEventListener('change', () => this.filterProducts()));
        this.priceRadios.forEach(rd => rd.addEventListener('change', () => this.filterProducts()));
        this.sortSelect.addEventListener('change', () => this.filterProducts());
    },

    checkURLParams() {
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('category');
        if (categoryParam) {
            this.categoryCheckboxes.forEach(cb => {
                if (cb.value === categoryParam) cb.checked = true;
            });
        }
    },

    filterProducts() {
        let filtered = [...productsData];

        // 1. Filter Kata Kunci Pencarian
        const keyword = this.searchInput.value.toLowerCase().trim();
        if (keyword !== "") {
            filtered = filtered.filter(p => 
                p.nama.toLowerCase().includes(keyword) || 
                p.brand.toLowerCase().includes(keyword) || 
                p.kategori.toLowerCase().includes(keyword)
            );
        }

        // 2. Filter Kategori Multi-Checkboxes
        const activeCategories = Array.from(this.categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        if (activeCategories.length > 0) {
            filtered = filtered.filter(p => activeCategories.includes(p.kategori));
        }

        // 3. Filter Range Tingkatan Harga
        const selectedPriceRange = Array.from(this.priceRadios).find(rd => rd.checked).value;
        if (selectedPriceRange !== "all") {
            filtered = filtered.filter(p => {
                if (selectedPriceRange === "under-5m") return p.harga < 5000000;
                if (selectedPriceRange === "5m-10m") return p.harga >= 5000000 && p.harga <= 10000000;
                if (selectedPriceRange === "10m-20m") return p.harga >= 10000000 && p.harga <= 20000000;
                if (selectedPriceRange === "above-20m") return p.harga > 20000000;
                return true;
            });
        }

        // 4. Kriteria Pengurutan (Sorting)
        const sortingType = this.sortSelect.value;
        if (sortingType === "price-asc") filtered.sort((a, b) => a.harga - b.harga);
        if (sortingType === "price-desc") filtered.sort((a, b) => b.harga - a.harga);
        if (sortingType === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

        this.renderCatalog(filtered);
    },

    renderCatalog(items) {
        this.counter.innerText = `Menampilkan ${items.length} dari ${productsData.length} Produk`;
        if (items.length === 0) {
            this.grid.innerHTML = `<div style="grid-column: 1/-1; padding:5rem 0;" class="text-center"><h4>Maaf, tidak ada produk yang cocok dengan filter pencarian Anda.</h4></div>`;
            return;
        }

        this.grid.innerHTML = items.map(p => `
            <article class="product-card">
                <div class="product-image-container">
                    <img src="${p.gambar}" alt="${p.nama}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-brand">${p.brand}</span>
                    <h3 class="product-name">${p.nama}</h3>
                    <div class="product-meta">
                        <span class="rating"><i class="fa-solid fa-star"></i> ${p.rating}</span>
                        <span class="stock">Stok: ${p.stok}</span>
                    </div>
                    <div class="product-price">Rp ${p.harga.toLocaleString('id-ID')}</div>
                    <div class="product-actions">
                        <a href="product-detail.html?id=${p.id}" class="btn-detail" title="Lihat rincian detail spesifikasi"><i class="fa-solid fa-eye"></i></a>
                        <button class="btn-add-cart-main" onclick="CartModule.add(${p.id})"><i class="fa-solid fa-cart-plus"></i> Tambah</button>
                    </div>
                </div>
            </article>
        `).join('');
    }
};