# Inventory Master Pro v2 📊

Inventory Master Pro v2 is a modern, responsive, and fully-featured single-page web application (SPA) for inventory and sales management. It features a premium **Microsoft Excel-style UI** with a green ribbon toolbar, formula bar, and grid-based tables.

---

## 🌟 خصوصیات (Features & Options)

- **ایکسل اسٹائل ڈیش بورڈ (Excel-Style UI):** ایکسل کی طرح ٹائٹل بار، ربن ٹول بار، فارمولا بار اور شیٹ ٹیبز۔
- **متعدد زبانیں (Multi-Language):** انگریزی، اردو (جمیل نوری نستعلیق فونٹ کے ساتھ)، اور عربی زبان کی سپورٹ (RTL/LTR آٹو سوئچ)۔
- **کرنسی سپورٹ:** USD ($), PKR (Rs), SAR (﷼), AED (د.إ) میں سے انتخاب کریں۔
- **پروڈکٹس مینجمنٹ (Products CRUD):** نئی مصنوعات شامل کریں، ایڈیٹ کریں یا ڈیلیٹ کریں۔ خریداری اور فروخت کی قیمتیں سیٹ کریں۔
- **اسٹاک مینجمنٹ (Stock In):** نیا اسٹاک آنے پر آسانی سے مقدار اپڈیٹ کریں۔ تمام لاگ محفوظ رہتے ہیں۔
- **سیلز ماڈیول (Sales):** سیلز ریکارڈ کریں، آٹو پرافٹ کیلکولیشن کے ساتھ۔
- **سیلرز مینجمنٹ (Sellers):** سیلرز کا ڈیٹا اور ان کی کل سیلز کو ٹریک کریں۔
- **رپورٹس اور چارٹس:** Chart.js کی مدد سے سیلز اور اسٹاک کے خوبصورت گرافیکل چارٹس۔
- **پرنٹ کی سہولت:** ایک کلک پر موجودہ اسکرین/رپورٹ پرنٹ کریں۔

---

## 🛠️ ڈیولپر گائیڈ (Developer Guide - How to Update)

یہ ایپلی کیشن نہایت آسان اور ہلکے پھلکے آرکیٹیکچر پر بنائی گئی ہے۔ تمام کوڈ ایک ہی فائل میں ضم (inline) کر دیا گیا ہے تاکہ `file:///` پروٹوکول پر بھی بغیر کسی لوکل سرور کے چل سکے۔

### 1. فائلز کا اسٹرکچر
اس پروجیکٹ میں صرف ایک ہی اہم فائل ہے جسے آپ کو ایڈیٹ کرنا ہے:
- **`index.html`**: یہی مین فائل ہے جس میں HTML اسٹرکچر، CSS اسٹائلز اور تمام JavaScript لاجک (CRUD، ملٹی لینگوئج، چارٹس) موجود ہے۔

### 2. ایپ کو کیسے اپڈیٹ کریں؟ (How to edit)
کسی بھی نئی تبدیلی کے لیے آپ کو `index.html` کو کسی بھی کوڈ ایڈیٹر (جیسے VS Code) میں کھولنا ہوگا۔

**A. نیا فیچر یا ٹیب (Page) شامل کرنا:**
1. HTML کے `<!-- SHEET AREA -->` حصے میں ایک نیا `<div class="page" id="page-new">...</div>` شامل کریں۔
2. نیچے `<!-- SHEET TABS -->` میں نیا بٹن بنائیں:
   `<button class="sheet-tab" onclick="switchPage('new', this)"><span class="mdi mdi-star"></span> New Tab</button>`
3. ٹاپ `<!-- RIBBON -->` میں بٹن شامل کریں۔

**B. زبانوں میں الفاظ کا اضافہ (Update Languages):**
جاوا اسکرپٹ (Script ٹیگ کے اندر) `var T = { ... }` آبجیکٹ ڈھونڈیں۔
وہاں `en` (انگریزی)، `ur` (اردو)، اور `ar` (عربی) میں نئے الفاظ شامل کریں۔ پھر `updateLocale()` فنکشن کے `map` آبجیکٹ میں اس کی ID میپ کریں۔

**C. ڈیٹا اسٹوریج (Data Storage):**
ایپ کا تمام ڈیٹا براؤزر کی **`localStorage`** میں محفوظ ہوتا ہے۔
استعمال ہونے والی کیز: `im_products`, `im_sellers`, `im_stockin`, `im_sales`, `im_lang`, `im_curr`.

**D. ڈیزائن میں تبدیلی (Styling):**
اسٹائلنگ کے لیے `<style>` ٹیگ میں CSS موجود ہے۔ ایکسل گرین کلر `var(--excel-green)` سے کنٹرول ہوتا ہے۔

---

## 👨‍💻 کریڈٹ (Credits / Creator)

اس ایپلی کیشن کے آئیڈیا، ڈیزائن اور ڈیولپمنٹ میں بنیادی کردار:

**Name:** Zeeshan Sarwar (زیشان سرور)  
**WhatsApp / Phone:** +923336003596  
**GitHub:** [zeeshansarwar1986](https://github.com/zeeshansarwar1986)

---
*Created with dedication for seamless inventory management.*
