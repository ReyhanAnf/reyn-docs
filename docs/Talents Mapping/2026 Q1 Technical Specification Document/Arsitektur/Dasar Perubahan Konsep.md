---
title: 'Dasar Perubahan Konsep'
slug: /talents-mapping/2026-q1-technical-specification-document/arsitektur/dasar-perubahan-konsep
---

### Pilar 1: *Context-Aware Acquisition* (Sistem yang "Sadar Konteks")

**Masalah Lama (As-Is):** Sistem memperlakukan semua pengunjung sama. Homepage adalah satu-satunya pintu gerbang utama. Pembeda hanya di *tracking* (UTM), tapi pengalaman (*experience*) user tetap sama.

**Konsep Baru (To-Be):** Sistem harus memiliki "Otak" di depan gerbang yang mendeteksi: *"Siapa yang datang?"* sebelum menampilkan konten.

- **Penerapan Konsep:** Kita harus memisahkan **Katalog Produk Utama** (Master Product) dengan **Penawaran Kontekstual** (Contextual Offering).

    - Jika **Organik** datang -> Tampilkan Landing Page Edukasi -> Katalog Umum (TMA Personal).

    - Jika **via Praktisi** datang -> **SKIP** Landing Page -> Tampilkan Profil Praktisi -> Tampilkan Produk Eksklusif (PSS GRIT) & Bundling Otomatis.

    - Jika **via Member Affiliate** datang -> Tampilkan Katalog Umum -> Tapi **Harga** otomatis dicoret (Diskon 8%).


**Implikasi Arsitektur:** Database tidak boleh lagi menempelkan harga "mati" atau visibilitas "mati" pada satu produk. Produk harus memiliki *Availability Rules* (Aturan Ketersediaan) yang bergantung pada *Channel Entry*.

* * *

### Pilar 2: *Decoupled Pricing Engine* (Mesin Harga yang Terpisah)

**Masalah Lama:** Harga diskon biasanya diatur manual lewat input kode voucher atau mengubah harga master produk. Ini tidak *scalable* jika Anda punya 1.000 Affiliator dengan persentase komisi berbeda-beda.

**Konsep Baru:** Kita butuh **Dynamic Pricing Engine**. Harga akhir bukan lagi satu angka statis, melainkan hasil kalkulasi *real-time*: `Harga Akhir = Harga Base + (Aturan Channel) + (Aturan User) + (Aturan Bundling)`

- **Kasus Skalabilitas:**

    - Di dokumen Anda disebutkan: *"Notes diskon bisa dicustom per affiliator"*.

    - Jika besok Anda ingin Affiliator "Top Tier" memberi diskon 10% dan "Newbie" hanya 5%, sistem tidak perlu diubah kodenya. Kita hanya mengubah konfigurasi di *Pricing Engine*.

    - Sistem lama (Voucher Code) menuntut user mengingat kode. Sistem baru (Auto-Apply Link) menuntut sistem mengenali User ID Affiliator dari URL dan langsung memotong harga di *Checkout*.


* * *

### Pilar 3: *Product Bundling & Exclusivity Strategy*

**Masalah Lama:** Produk A dan Produk B adalah entitas terpisah. Jika mau dijual paket, biasanya dibuat "Produk C" (Paket A+B). Ini membuat inventori berantakan dan *reporting* kacau (susah melacak berapa Produk A yang terjual via paket).

**Konsep Baru:** Adopsi konsep **Hard Bundling vs Soft Bundling**.

- **Hard Bundle (Flow Praktisi):** User tidak bisa beli eceran. Masuk lewat praktisi A, otomatis keranjang terisi "TMA + Konsultasi". Ini bukan produk baru, tapi *packaging* penjualan.

- **Exclusivity (Produk Hantu):** Produk seperti "PSS GRIT" ada di database, tapi ditandai *restricted*. Hanya *Context* Praktisi yang punya kunci untuk membuka produk ini. User organik tidak akan pernah melihatnya walau mengubek-ubek website.


* * *

### Pilar 4: *Lifecycle Upselling Orchestration* (Pengawal Siklus Hidup)

**Masalah Lama:** Transaksi selesai saat pembayaran lunas (`Paid`). Hubungan dengan user putus sampai mereka inisiatif beli lagi.

**Konsep Baru:** Dokumen Anda menyebutkan **Upselling 1** (Immediate) dan **Upselling 2** (Long-term/Retention). Sistem harus punya "State Machine" (Mesin Status) untuk setiap User.

- **State 1 (New):** Baru beli TMA Personal.

    - *System Action:* Tawarkan "Add-on Konsultasi" di halaman *Checkout* atau *Thank You Page*.
- **State 2 (Result Received):** Sudah terima hasil asesmen.

    - *System Action:* (Upselling 2) Tawarkan "Product Digital Training" atau "Upgrade ke TMA Profesional".
- **Scalability:** Ini membuka pintu untuk produk masa depan Anda seperti "Certification Path" atau "E-Learning". Jika sistem hanya mencatat transaksi jual-beli asesmen, Anda akan kesulitan menjual produk *training* nanti.


* * *

### Kesimpulan Tahap Konsep

Rekan, jika kita setuju dengan konsep di atas, maka perubahan desain sistemnya adalah:

1.  Kita akan berhenti melihat tabel `products` sebagai satu-satunya pusat kebenaran. Kita akan membuat **Layer Penawaran (Offering Layer)** di atasnya.

2.  Kita akan membuang logika "Satu Alur untuk Semua". Kita ganti dengan **Alur Berbasis Kanal (Channel-Based Flow)**.

3.  Kita persiapkan database untuk menyimpan **Digital Product & Learning** (bukan hanya Asesmen), karena di *Upselling 2* Anda sudah menargetkan "Training".


**Pertanyaan Kritis untuk Mematangkan Konsep:** Di dokumen *Retail Update* kolom "Upselling 2", tertulis **"Product Digital Training"**. Apakah "Training" ini nanti berupa: A. Video Course yang ditonton di website kita (butuh fitur LMS/Learning Management System)? B. Tiket Webinar (via Zoom/Gmeet)? C. Hanya E-book PDF?
