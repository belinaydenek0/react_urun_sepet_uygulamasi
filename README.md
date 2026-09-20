# 🛒 React Ürün ve Sepet Uygulaması

React kullanılarak geliştirilmiş basit bir **ürün listeleme ve alışveriş sepeti uygulamasıdır**.

Bu projede React'in temel özellikleri kullanılarak component oluşturma, props kullanımı, koşullu render işlemleri, `useState` ile state yönetimi ve dizi işlemleri öğrenilmiştir.

## 🚀 Proje Özellikleri

* 📦 Ürünlerin listelenmesi
* 💰 Ürün fiyatlarının gösterilmesi
* 🟢 Stokta olan ürünlerin belirtilmesi
* 🔴 Stokta olmayan ürünlerin belirtilmesi
* 🛒 Stokta bulunan ürünleri sepete ekleme
* 🔢 Sepetteki ürün sayısının gösterilmesi
* 📋 Sepette bulunan ürünlerin listelenmesi
* 🗑️ Sepeti tamamen temizleme
* 🎨 CSS ile ürün kartlarının ve sayfanın stillendirilmesi
* 📱 Responsive yapıya uygun temel tasarım

## 🛠️ Kullanılan Teknolojiler

* **React**
* **JavaScript**
* **HTML**
* **CSS**
* **Vite**
* **ESLint**

## 📂 Proje Yapısı

```text
urun-projesi/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── Urun.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🧩 Kullanılan React Konuları

### Component

Ürün kartı için ayrı bir `Urun` component'i oluşturulmuştur.

```jsx
<Urun
    baslik="Laptop"
    fiyat={25000}
    stoktaVarMi={true}
/>
```

### Props

`Urun` component'ine ürün bilgileri props aracılığıyla gönderilmektedir.

* `baslik`
* `fiyat`
* `stoktaVarMi`
* `sepeteEkle`

### Conditional Rendering

Ürünün stok durumuna göre farklı içerikler gösterilmektedir.

```jsx
{stoktaVarMi ? (
    <p>Stokta Var</p>
) : (
    <p>Tükendi</p>
)}
```

### useState

Sepette bulunan ürünleri yönetmek için React'in `useState` hook'u kullanılmıştır.

```jsx
const [sepet, setSepet] = useState([]);
```

### Array ve map()

Sepetteki ürünleri ekranda göstermek için `map()` kullanılmıştır.

```jsx
sepet.map((urun, index) => (
    <li key={index}>
        {urun.baslik} - {urun.fiyat} TL
    </li>
))
```

## 🛒 Sepet Sistemi

Kullanıcı stokta bulunan bir ürünün **Sepete Ekle** butonuna bastığında ürün sepete eklenir.

Örneğin:

```text
🛒 Sepet: 3

Sepetteki Ürünler

Laptop - 25000 TL
Telefon - 30000 TL
Laptop - 25000 TL
```

Kullanıcı **Sepeti Temizle** butonuna bastığında sepette bulunan tüm ürünler kaldırılır.

## 💻 Kurulum

Projeyi bilgisayarınızda çalıştırmak için öncelikle repository'yi klonlayın:

```bash
git clone https://github.com/KULLANICI_ADINIZ/urun-projesi.git
```

Proje klasörüne girin:

```bash
cd urun-projesi
```

Gerekli paketleri yükleyin:

```bash
npm install
```

Projeyi çalıştırın:

```bash
npm run dev
```

Daha sonra terminalde gösterilen `localhost` adresini tarayıcıda açabilirsiniz.

## 🎯 Projenin Amacı

Bu proje, React öğrenme sürecinde temel React konularını uygulamalı olarak öğrenmek amacıyla geliştirilmiştir.

Proje sayesinde:

* Component oluşturma
* Props kullanımı
* State yönetimi
* Event handling
* Conditional rendering
* Array işlemleri
* `map()` kullanımı
* Componentler arasında veri aktarımı

konularında pratik yapılmıştır.

## 🔮 Gelecekte Eklenebilecek Özellikler

* ➕ Ürün adedini artırma/azaltma
* ❌ Sepetten tek bir ürünü silme
* 💵 Toplam sepet tutarını hesaplama
* 🔍 Ürün arama
* 🏷️ Kategori filtreleme
* ❤️ Favorilere ekleme
* 📦 Ürün görselleri
* 🌙 Dark Mode
* 💳 Ödeme sayfası
* 💾 LocalStorage ile sepeti kaydetme

---

### 👩‍💻 Geliştirici

**Belinay Denek**

React öğrenme sürecinde geliştirilmiştir. 🚀
