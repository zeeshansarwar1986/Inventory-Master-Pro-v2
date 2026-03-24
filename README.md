<h1 align="center">📊 Inventory Master Pro v2</h1>
<p align="center">
  <strong>The Ultimate Single-Page Application (SPA) for Inventory & Sales Management</strong><br>
  <em>Designed with a Premium Microsoft Excel-Style UI</em>
</p>

<p align="center">
  <a href="#english">🇬🇧 English</a> •
  <a href="#urdu">🇵🇰 اُردو</a> •
  <a href="#arabic">🇸🇦 العربية</a>
</p>

---

<h2 id="english">🇬🇧 English Overview</h2>

**Inventory Master Pro v2** is a modern, ultra-lightweight, and serverless inventory management dashboard. It is built entirely as a Single-Page Application (SPA) using vanilla HTML, CSS, and JavaScript. The UI is heavily inspired by Microsoft Excel, featuring a green ribbon toolbar, formula bar, grid-based data tables, and sheet tabs for seamless navigation.

### ✨ Core Features
- **Excel Aesthetics:** Authentic Grid-cell layout, Ribbon toolbar, and bottom Sheet Tabs.
- **Multilingual Support:** English (LTR), Urdu (RTL with *Jameel Noori Nastaleeq*), and Arabic (RTL).
- **Dynamic Currencies:** Support for `USD ($)`, `PKR (Rs)`, `SAR (﷼)`, and `AED (د.إ)`.
- **Complete CRUD:** Manage Products and Sellers efficiently.
- **Transactions Management:** Track Stock Inwards and Sales with automatic profit calculation.
- **Analytics:** Data visualization using `Chart.js` (Bar arrays & Doughnut charts).
- **Data Persistence:** Uses Browser `localStorage` — No database setup required!
- **Zero Dependencies:** Runs directly from `file:///` without needing a local development server (Node.js/Apache).

### 🛠️ Developer Guide (How to Update)
This project is architected for maximum portability. All logic, styling, and markup are inlined into a single file.

1. **The Core File (`index.html`):**
   - **Styles:** Look for the `<style>` block at the top. Variables control the Excel theme (`--excel-green`, `--cell-border`).
   - **Markup:** The `<!-- SHEET AREA -->` contains all the pages. To add a new page, create a `<div class="page" id="page-new">` block.
   - **Logic & i18n:** The `<script>` block at the bottom handles all state. The `T` object contains language translations. Add new UI strings to `en`, `ur`, and `ar` mapping keys.

2. **To Update the Application:**
   Open `index.html` in your preferred IDE (e.g., VS Code). Modify the JavaScript functions to add new calculation logic or the HTML layout to introduce new columns to the grid tables.

---

<h2 id="urdu">🇵🇰 اُردو تعارف</h2>

**انوینٹری ماسٹر پرو (ورژن 2)** ایک جدید، ہلکی پھلکی اور تیز ترین انوینٹری مینجمنٹ ایپلی کیشن (SPA) ہے۔ اس کا ڈیزائن مائیکروسافٹ ایکسل (Microsoft Excel) کی طرز پر بنایا گیا ہے، جس میں ایکسل جیسا سبز ریبن ٹول بار، فارمولا بار، گرڈ ٹیبلز، اور شیٹ ٹیبز شامل ہیں۔

### ✨ نمایاں خصوصیات
- **ایکسل کا شاندار ڈیزائن:** بالکل ایکسل شیٹ جیسا یوزر انٹرفیس۔
- **کثیر اللسانی سپورٹ:** انگریزی، اُردو (جمیل نوری نستعلیق فونٹ کے ساتھ)، اور عربی زبان۔
- **کرنسی کنٹرول:** ڈالر، پاکستانی روپے، ریال اور درہم میں قیمتوں کا حساب۔
- **مصنوعات اور سیلرز کا انتظام:** پروڈکٹس اور سیلرز کا مکمل ریکارڈ رکھیں۔
- **سیلز اور پرافٹ سسٹم:** سیلز ریکارڈ کریں اور خودکار طریقے سے منافع (Profit) معلوم کریں۔
- **ڈیٹا اور چارٹس:** Chart.js کے ذریعے روزمرہ سیلز اور اسٹاک کی گرافیکل رپورٹس۔
- **لوکل اسٹوریج:** ہوسٹنگ یا ڈیٹا بیس کے بغیر براؤزر کی میموری (localStorage) میں ڈیٹا محفوظ۔

### 🛠️ ڈیولپر گائیڈ (اپڈیٹ کرنے کا طریقہ)
یہ پروجیکٹ انتہائی سادہ آرکیٹیکچر پر مبنی ہے۔ تمام کوڈ ایک ہی فائل میں موجود ہے۔

1. **مرکزی فائل (`index.html`):**
   - آپ کو صرف `index.html` فائل میں ترامیم کرنی ہیں۔
   - **نیا پیج شامل کرنا:** `<!-- SHEET AREA -->` کے اندر ایک نیا `div` شامل کریں۔
   - **زبان یا الفاظ بدلنا (Translation):** سب سے نیچے جاوا اسکرپٹ (Script) میں موجود `var T = { ... }` کے اندر نئے الفاظ شامل کریں یا تبدیل کریں۔

2. **کوڈ میں تبدیلی کیسے کریں؟**
   `index.html` کو کسی بھی کوڈ ایڈیٹر میں کھولیں۔ مزید فیچرز شامل کرنے کے لیے جاوا اسکرپٹ کے فنکشنز میں تبدیلی کریں یا گرڈ لے آؤٹ میں نئے کالمز (کالمز) بڑھائیں۔

---

<h2 id="arabic">🇸🇦 نظرة عامة بالعربية</h2>

**سيد المخزون الاحترافي (الإصدار الثاني)** هو تطبيق ويب حديث وخفيف (SPA) لإدارة المخزون والمبيعات. تم تصميمه بواجهة مشابهة لبرنامج **مايكروسوفت إكسل**، حيث يحتوي على شريط أدوات أخضر، شريط صيغ، جداول شبكية، وعلامات تبويب للأوراق.

### ✨ أهم المميزات
- **تصميم إكسل:** واجهة احترافية شبيهة بالجداول الإلكترونية.
- **دعم اللغات:** الإنجليزية، الأردية، والعربية (مع دعم كامل لاتجاه النص من اليمين لليسار RTL).
- **العملات:** دعم الدولار الأمريكي ($)، الروبية الباكستانية (Rs)، الريال السعودي (﷼)، والدرهم الإماراتي (د.إ).
- **إدارة كاملة:** إضافة وتعديل وحذف المنتجات والبائعين بسهولة.
- **تتبع المبيعات والمخزون:** تسجيل المبيعات مع حساب الأرباح تلقائياً.
- **الإحصائيات التحليلية:** أدوات مرئية ومخططات بيانية باستخدام (Chart.js).
- **قاعدة بيانات محلية:** تخزين البيانات داخل متصفح المستخدم (localStorage) دون الحاجة لخادم.

### 🛠️ دليل المطور (كيفية التحديث)
هذا المشروع مصمم ليكون بسيطاً ومباشراً. تم دمج كافة الأكواد في ملف واحد.

1. **الملف الرئيسي (`index.html`):**
   - **الواجهة:** عدّل ألوان إكسل باستخدام المتغيرات الموجودة في `<style>`.
   - **الصفحات الجديدة:** أضف `<div class="page">` داخل قسم `<!-- SHEET AREA -->`.
   - **الترجمة:** في نهاية الملف، ابحث عن كائن الجافاسكريبت `var T` المخصص للترجمات (`en`, `ur`, `ar`).

---

<h2 align="center">👨‍💻 Creator & Head Developer</h2>
<p align="center">
  <b>Zeeshan Sarwar (زیشان سرور)</b><br>
  <i>Idea, Architecture & UI/UX Director</i><br>
  📱 WhatsApp / Phone: <b>+923336003596</b><br>
  🔗 GitHub: <a href="https://github.com/zeeshansarwar1986">zeeshansarwar1986</a>
</p>
<hr>
<p align="center"><i>© 2026 Zeeshan Sarwar. Engineered for simplicity, built for scale.</i></p>
