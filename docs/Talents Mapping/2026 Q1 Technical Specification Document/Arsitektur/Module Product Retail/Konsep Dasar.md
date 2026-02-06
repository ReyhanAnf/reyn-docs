---
title: Konsep Dasar
slug: /talents-mapping/module-product-retail/konsep-dasar
updated: 2026-02-05 09:24:07Z
created: 2026-02-05 04:36:42Z
latitude: -6.29573950
longitude: 107.82284590
altitude: 0.0000
---

# Strategi **"Expand & Deprecate"**.

## Tahap 1: Split "Konsep" vs "Barang Jualan" (Handling Multi-Variant)

Pisahkan **Produk Marketing** (Nama, Deskripsi, Gambar) dengan **SKU/Varian** (Barang yang masuk keranjang).

- **Tabel Lama (`product`):** Tetap dipakai sebagai "Parent/Header".
    
    - Perubahan
        - Kolom yang tidak akan dipakai di berikan komentar
- **Tabel Baru (`product_variants`):** berisi pecahan dari produk lama.
    
    - Contoh:
        
        - Parent: "Asesmen Talents Mapping" (ID: 101)
            
        - Variant A: "TMA Personal" (ID: SKU-01, Parent: 101)
            
        - Variant B: "TMA Profesional" (ID: SKU-02, Parent: 101)
            

&nbsp;

## Tahap 2: Decouple Pricing (Handling Dynamic Price & Commission)

- **Tabel Baru (`product_prices`):**
    
    - Menyimpan aturan: "Jika user datang dari Affiliate X, beli Varian Y, maka Harga = Z dan Komisi = K".

&nbsp;

## Tahap 3: Definisi Fulfillment (Handling Outsourcing vs Engine)

- Di tabel `product_variants`, tambah kolom `fulfillment_type` untuk "peruntukan produk ini".