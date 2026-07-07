# 📱 MOLS RB Tech - Premium Electronics Store
**Tugas Project Ujian Akhir Semester (UAS) - Mata Kuliah E-Commerce / Pemrograman Web**

![MOLS RB Tech Preview](images/hero-banner.jpg)

---

## 👨‍🎓 Informasi Mahasiswa
* **Nama:** Moch Lukman Saepul Rajib
* **NIM:** 209250022
* **Kelas:** ABI 1/2025
* **Program Studi:** Administrasi Bisnis 
* **Fakultas:** Sosial & Bisnis
* **Universitas:** International Women University
* **Dosen Pengampu:** Yoki Oktorian Sukardi S.Kom., M.A.B.

---

## 🚀 Deskripsi Proyek
**MOLS RB Tech** adalah sebuah prototipe platform e-commerce katalog ritel modern (*Business-to-Consumer* / B2C) yang dirancang khusus untuk menyajikan pengalaman berbelanja gawai (*gadget*) dan perangkat elektronik premium bergaransi resmi, seperti *Smartphone*, *Laptop*, dan *Aksesoris*.

Website ini dikembangkan menggunakan arsitektur *Single Page Application* (SPA) murni dengan sistem visualisasi berbasis *section view* dinamis, sehingga perpindahan antar-halaman (Beranda, Produk, Promo, Tentang Kami) berlangsung instan tanpa memicu pemuatan ulang halaman (*page reload*).

🌐 **Live Website (GitHub Pages):** [Tautan GitHub Pages Anda, misal: https://username.github.io/mols-rb-tech/]

---

## 📸 Screenshot Tampilan (UI/UX)
Berikut adalah antarmuka website premium yang dirancang responsif untuk berbagai resolusi layar (Desktop, Tablet, & Mobile):

## 📋 Panduan Fitur & Operasional Website

### 🏠 1. Halaman Beranda (Home Page)
<img width="951" height="506" alt="Screenshot 2026-07-07 012939" src="https://github.com/user-attachments/assets/23630020-1c76-4e78-a4f8-b7a3ce876245" />

![Halaman Beranda](images/screenshot1.jpg)
Halaman utama dirancang sebagai *landing page* premium bertema *Glassmorphic* untuk memberikan impresi mewah kepada calon konsumen.
* **Komponen Visual:**
  * **Hero Banner & Tagline:** Judul persuasif yang memosisikan toko sebagai penyedia gawai (*gadget*) orisinal bergaransi resmi.
  * **Statistik Toko (Live Stats):** Menampilkan data pencapaian toko (jumlah produk aktif, tingkat kepuasan pelanggan, dan brand mitra).
  * **Tombol Call-to-Action (CTA):** Tombol interaktif untuk mengarahkan pengguna langsung ke katalog belanja atau konsultasi.
* **Aksi Pengguna:** * Melakukan navigasi instan antar-halaman tanpa memicu pemuatan ulang (*page reload*).
  * Meninjau sekilas reputasi toko dan keunggulan layanan sebelum berbelanja.

### 🛒 2. Katalog Produk
<img width="944" height="528" alt="Screenshot 2026-07-07 013013" src="https://github.com/user-attachments/assets/26331074-218e-4e4f-99ea-c9165da7eaef" />

![Katalog Produk](images/screenshot2.jpg)
Pusat etalase interaktif yang memuat hingga 51 item produk elektronik yang dikelola secara dinamis melalui JavaScript.
* **🔍 Fitur Pencarian (Search Bar):** Pengguna dapat mengetik kata kunci berupa nama produk atau brand (misal: *iPhone, ASUS, Tecno*). Sistem akan menyaring dan menampilkan hasil yang cocok secara *real-time* tanpa perlu menekan tombol cari.
* **🗂️ Menu Kategori (Category Tabs):** Menyaring produk secara instan berdasarkan kelompoknya hanya dengan sekali klik pada tab: **Semua**, **Smartphone**, **Laptop**, atau **Aksesoris**.
* **📉 Menu Urutkan (Sorting Dropdown):** Mengatur ulang urutan kartu produk pada layar berdasarkan preferensi finansial dan popularitas:
  * *Terbaru:* Diurutkan berdasarkan indeks ID produk masuk.
  * *Harga Terendah & Harga Tertinggi:* Mengurutkan nominal harga dari murah ke mahal atau sebaliknya.
  * *Rating Terbaik:* Menampilkan produk dengan ulasan bintang tertinggi di posisi teratas.

### 🏷️ 3. Menu Promo
<img width="950" height="518" alt="Screenshot 2026-07-07 013123" src="https://github.com/user-attachments/assets/4f60d979-b2d2-49ba-b855-64e7bc873d4b" />

![Promo Produk](images/screenshot2.jpg)
Bagian khusus yang dirancang menggunakan strategi psikologi penjualan (*scarcity & urgency*) untuk merangsang keputusan transaksi kilat.
* **Countdown Timer:** Kotak penunjuk waktu dinamis yang menampilkan sisa jam, menit, dan detik promo secara *real-time* menggunakan fungsi hitung mundur otomatis.
* **Etalase Produk Diskon:** Menyajikan barisan produk pilihan yang sedang dalam masa pemotongan harga dari harga normal.
* **Aksi Pengguna:** Memantau durasi validitas promo dan membeli produk dengan harga khusus sebelum penghitung waktu menyentuh angka nol.

### 🛍️ 4. Detail Produk & Sistem Keranjang Belanja (3 Tahap)
<img width="799" height="459" alt="Screenshot 2026-07-07 013846" src="https://github.com/user-attachments/assets/21ec025c-6b5f-4f1b-b18c-1f672a6189ba" />
<img width="773" height="523" alt="Screenshot 2026-07-07 014122" src="https://github.com/user-attachments/assets/7d87da83-9597-4ef6-ab92-ab689987009e" />
<img width="709" height="455" alt="Screenshot 2026-07-07 014156" src="https://github.com/user-attachments/assets/6393dd81-69ed-423b-b522-11befabcef60" />
<img width="785" height="512" alt="Screenshot 2026-07-07 014213" src="https://github.com/user-attachments/assets/2acb2b9a-7f9f-4fac-91ce-0e8f69ac4b1b" />
![Halaman Detail & Cart](images/screenshot3.jpg)
Alur transaksi konsumen dirancang sangat mulus, aman, dan terintegrasi lewat tiga tahapan utama:
1. **Tahap 1: Eksplorasi Detail (Trigger Modal):** Saat kartu produk diklik, sistem memunculkan jendela *pop-up* (*Modal Detail*) yang menyajikan spesifikasi teknis mendalam, deskripsi, rating bintang, sisa stok gudang, serta tombol *"Tambah ke Keranjang"*.
2. **Tahap 2: Manajemen Keranjang (Review State):** Ketika produk ditambahkan, lencana (*badge*) jumlah item pada ikon navigasi atas akan bertambah secara otomatis. Di dalam menu keranjang, pengguna dapat menambah/mengurangi kuantitas barang (`+` / `-`), melihat kalkulasi total harga otomatis, atau menghapus item yang batal dibeli.
3. **Tahap 3: Validasi Form & Checkout WhatsApp:** Setelah menekan tombol checkout, pengguna diwajibkan mengisi formulir data pengiriman (Nama, Alamat, Nomor HP). JavaScript kemudian merangkum manifes belanjaan menjadi pesan teks terformat rapi dan mengalihkan (*redirect*) pengguna langsung ke **WhatsApp Business** toko untuk penyelesaian pembayaran personal.

### 🔑 5. Menu Admin (Portal Admin Backend)
<img width="666" height="458" alt="Screenshot 2026-07-07 014246" src="https://github.com/user-attachments/assets/f1aeb5e6-24fb-435c-9713-c5daca1adeba" />
<img width="917" height="525" alt="Screenshot 2026-07-07 063200" src="https://github.com/user-attachments/assets/e63f228f-ea81-41d5-b3c7-60b896e5bdce" />
<img width="881" height="508" alt="Screenshot 2026-07-07 063223" src="https://github.com/user-attachments/assets/68fdfdb3-189e-4d08-a3d6-f049462f91a9" />
<img width="941" height="488" alt="Screenshot 2026-07-07 063248" src="https://github.com/user-attachments/assets/607dcfd6-e8a6-4853-8445-31066226b8ff" />
![Panel Admin CRUD](images/screenshot5.jpg)
Halaman backend khusus bagi pengurus toko untuk memantau performa penjualan dan melakukan pengelolaan inventaris gudang.
* **📊 Dashboard Analitik:** Menampilkan metrik data penting (Total produk aktif, sisa stok keseluruhan, dan target omzet). Dilengkapi dengan **Grafik Batang Tren Penjualan** dinamis yang digambar manual via HTML5 Canvas API (tanpa *library* luar) menggunakan gradasi warna linear modern.
* **📦 Manajemen Produk (Sistem CRUD):** Kendali penuh atas manipulasi katalog yang terhubung langsung ke memori `localStorage` browser:
  * *Create:* Menambahkan produk elektronik baru ke sistem lewat form modal.
  * *Read:* Memantau daftar seluruh produk aktif beserta sisa unitnya pada tabel interaktif.
  * *Update:* Memperbarui detail nama, brand, harga, stok, deskripsi teknis, hingga tautan URL gambar produk.
  * *Delete:* Menghapus produk lama dari etalase jika barang sudah diskontinu.
* **🚚 Pesanan & Logistik:** Menyajikan data pelacakan manifes pesanan masuk yang berkorelasi dengan pemotongan kuantitas stok di gudang, memudahkan pengurus dalam mempersiapkan logistik pengiriman barang.
---

## 🎥 Video Demonstrasi
Untuk meninjau mekanisme interaktivitas (Add to Cart, Manajemen CRUD Produk, Sinkronisasi Grafik Canvas) secara *real-time*, silakan tonton video demo singkat berikut:

### 🎥 Video Demonstrasi MOLS RB Tech
[![Klik untuk menonton video demo MOLS RB Tech](https://img.youtube.com/vi/example/0.jpg)](https://www.youtube.com/watch?v=example)

---

## 💼 Dokumentasi Bisnis & Strategi E-Commerce

### 1. Landasan Teori Perdagangan Ritel Digital
Proyek ini mengadopsi konsep dasar bisnis **Business-to-Consumer (B2C) Electronic Commerce**. Dalam dunia retail elektronik, faktor penentu konversi adalah kepercayaan konsumen atas keaslian produk dan kenyamanan eksplorasi visual. MOLS RB Tech memotong jalur distribusi rumit dengan memosisikan diri sebagai toko terpusat tepercaya yang menawarkan produk bersertifikat orisinal.

### 2. Target Market & Segmentasi Pelanggan
* **Segmentasi Geografis:** Konsumen urban domestik (Indonesia) yang melek digital dan berlokasi di area dengan jangkauan ekspedisi logistik cepat.
* **Segmentasi Demografis & Ekonomi:** Kelompok usia produktif (18–45 tahun), profesional muda, mahasiswa, serta tech enthusiast yang memiliki tingkat daya beli menengah hingga ke atas.
* **Karakteristik Psikografis:** Konsumen yang mengutamakan orisinalitas produk, garansi resmi, kecepatan performa website, dan kemudahan akses melalui perangkat genggam (*mobile oriented*).

### 3. Analisis Pasar & Kompetitor
* **Masalah (Pain Points):** Maraknya peredaran barang tiruan (*black market*) di marketplace umum, tampilan antarmuka yang terlalu padat (*cluttered*), serta lambatnya performa aplikasi di area dengan sinyal kurang stabil.
* **Keunggulan Kompetitif MOLS RB Tech:** Desain antarmuka mewah bertema *Glassmorphic*, kecepatan pemuatan ultra tinggi karena mengoptimalkan kode *Vanilla JavaScript*, transparansi ketersediaan stok, serta tombol aksi WhatsApp yang terintegrasi langsung untuk pelayanan *Customer Service* personal.

### 4. Model Bisnis, Harga & Promosi
* **Model Bisnis:** Direct B2C Retail & Digital Brand Catalog.
* **Strategi Harga (Pricing Strategy):** *Value-based pricing* yang mencerminkan kualitas gawai kelas premium, dipadukan dengan modul diskon potongan harga langsung pada menu khusus "Promo Terbatas".
* **Promosi:** Optimalisasi pemicu konversi melalui strategi *visual scarcity* (seperti penyematan komponen *countdown timer* pada section promo) serta penerapan taktik *on-page SEO* terstruktur lewat meta deskripsi dan kata kunci.

### 5. Alur Transaksi & Simulasi Checkout
Proses *checkout* dirancang seminimalis mungkin guna menekan angka pembatalan keranjang belanja (*cart abandonment*):
* Pelanggan meninjau item di menu keranjang interaktif.
* Pengguna mengisi kelengkapan alamat kirim secara instan.
* Saat tombol checkout ditekan, sistem otomatis mengalihkan pengguna ke WhatsApp dengan format teks yang rapi dan berisi detail rincian produk, harga, dan instruksi pembayaran lanjutan.

---

## 💻 Technical & Deployment Documentation

### 🛠️ Tech Stack yang Digunakan (Pure Vanilla Architecture)
* **HTML5:** Struktur semantik semacam `<header>`, `<nav>`, `<section>`, dan modal popup yang ramah untuk optimasi SEO.
* **CSS3 Advanced System:** Pemanfaatan *CSS Variables* untuk konsistensi tema warna (*Midnight Navy* & *Pink Accent*), layout *Flexbox* dan *CSS Grid*, efek *Glassmorphism* menggunakan `backdrop-filter: blur()`, serta *keyframe animations* untuk efek elemen mengambang halus.
* **Vanilla JavaScript (ES6+):** Logika manajemen penyimpanan lokal (*Local Storage*) dengan kunci `'s_products'`, sinkronisasi lencana jumlah item keranjang, penyaringan data (*filtering system*), pencarian teks produk, dan pengaturan siklus tampilan layar pemuatan awal (*loading screen fade-out*).
* **HTML5 Canvas 2D API:** Berbeda dengan proyek e-commerce standar yang bergantung pada pustaka eksternal (seperti Chart.js), platform ini menggunakan fungsi gambar *custom* `drawAdminChart()` untuk memproses visualisasi grafik batang tren penjualan toko murni menggunakan manipulasi Canvas Context 2D.

### 📱 Responsiveness (Cross-Device Compatibility)
Menggunakan pendekatan *Media Queries* pada dua titik henti utama (`992px` dan `768px`). Pada resolusi di bawah `992px`, tata letak grid produk dikompresi menjadi satu kolom tunggal dan susunan menu panel admin bertransisi menjadi susunan horizontal yang ramah gulir. Pada layar di bawah `768px`, baris navigasi dikemas menjadi drop-down berbasis kliping poligon (*clip-path*) interaktif.

### ⚙️ Instruksi Pengujian Khusus (Akses Fitur Admin)
Sistem inventaris MOLS RB Tech dilengkapi panel admin lokal untuk manipulasi katalog:
1. Buka navigasi atas website, lalu klik menu **Portal Admin**.
2. Sistem akan memuat panel khusus admin dan menginisialisasi bagan analitik grafik batang canvas otomatis dari data dummy penjualan.
3. Klik tombol **Tambah Produk Baru** untuk memicu munculnya form modal CRUD.
4. Isi data produk (Nama, Kategori, Brand, Harga, Stok, URL Gambar, Deskripsi) lalu simpan. Perubahan stok, penambahan item katalog, dan pembaruan jumlah inventaris akan terbarui secara langsung di memori lokal peramban (`localStorage`).

### 📂 Struktur Folder Proyek
```text
📦 mols-rb-tech-store
 ┣ 📂 images/         # (Aset gambar banner, produk premium, logo toko)
 ┣ 📜 index.html      # (Kerangka utama halaman SPA, metadata SEO, & struktur modal)
 ┣ 📜 style.css       # (Pengaturan variabel warna, glassmorphism card, & media queries)
 ┣ 📜 script.js       # (Logika data 51 item produk, mesin pencari, keranjang, & chart canvas)
 ┗ 📜 README.md       # (Dokumentasi utama proyek)
