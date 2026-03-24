// ── STATE ──────────────────────────────────
let products = JSON.parse(localStorage.getItem('im_products')) || [
  { name: 'Laptop', cat: 'Electronics', purchase: 800, sale: 1200, stock: 15 },
  { name: 'Smartphone', cat: 'Electronics', purchase: 400, sale: 600, stock: 25 },
  { name: 'Wireless Mouse', cat: 'Accessories', purchase: 15, sale: 35, stock: 120 },
  { name: 'USB-C Hub', cat: 'Accessories', purchase: 25, sale: 55, stock: 80 },
  { name: 'Monitor 27"', cat: 'Electronics', purchase: 300, sale: 450, stock: 8 }
];
let sellers = JSON.parse(localStorage.getItem('im_sellers')) || [
  { name: 'Usman Ali', mobile: '+92 300 1234567', sales: 45000 },
  { name: 'Ahmed Khan', mobile: '+92 321 7654321', sales: 32000 },
  { name: 'Sara Malik', mobile: '+92 333 9876543', sales: 18500 }
];
let stockInLog = JSON.parse(localStorage.getItem('im_stockin')) || [];
let salesLog = JSON.parse(localStorage.getItem('im_sales')) || [];
let currentLang = localStorage.getItem('im_lang') || 'en';
let currentCurr = localStorage.getItem('im_curr') || 'USD';

const T = {
  en: { appName: "Inventory Master", tagline: "PRO EDITION V2.0", menuMain: "Main", menuTrans: "Transactions", menuMgmt: "Management", navDash: "Dashboard", navProducts: "Products", navStockin: "Stock In", navSales: "Sales", navSellers: "Sellers", navSettings: "Settings", dashTitle: "Dashboard Overview", dashSub: "Real-time inventory and sales metrics", kpiProducts: "Total Products", kpiSales: "Total Sales", kpiProfit: "Total Profit", kpiLow: "Low Stock", prodTitle: "Products", sellTitle: "Sellers", setTitle: "Settings", thId: "ID", thName: "Name", thCat: "Category", thPP: "Purchase", thSP: "Sale", thStock: "Stock", thAct: "Actions", btnReport: "Print Report", btnAddP: "Add Product", btnAddS: "Add Seller", setLang: "Language", setCurr: "Currency", cancel: "Cancel", save: "Save", lblPN: "Name", lblPC: "Category", lblPP: "Purchase Price", lblSP: "Sale Price", lblPS: "Stock", lblSN: "Name", lblSM: "Mobile", siTitle: "Stock In", saleTitle: "Sales", btnAddStock: "Add Stock", chartSales: "Sales Performance", chartStock: "Stock Overview" },
  ur: { appName: "انوینٹری ماسٹر", tagline: "پرو ایڈیشن V2.0", menuMain: "مین مینو", menuTrans: "لین دین", menuMgmt: "انتظامیہ", navDash: "ڈیش بورڈ", navProducts: "مصنوعات", navStockin: "اسٹاک آمد", navSales: "فروخت", navSellers: "سیلرز", navSettings: "سیٹنگز", dashTitle: "ڈیش بورڈ کا جائزہ", dashSub: "انوینٹری اور فروخت کے تازہ ترین اعدادوشمار", kpiProducts: "کل مصنوعات", kpiSales: "کل فروخت", kpiProfit: "کل منافع", kpiLow: "کم اسٹاک", prodTitle: "مصنوعات", sellTitle: "سیلرز", setTitle: "سیٹنگز", thId: "آئی ڈی", thName: "نام", thCat: "کیٹیگری", thPP: "خریداری قیمت", thSP: "فروخت قیمت", thStock: "اسٹاک", thAct: "کارروائی", btnReport: "رپورٹ پرنٹ", btnAddP: "پروڈکٹ شامل کریں", btnAddS: "سیلر شامل کریں", setLang: "زبان", setCurr: "کرنسی", cancel: "منسوخ", save: "محفوظ کریں", lblPN: "پروڈکٹ کا نام", lblPC: "کیٹیگری", lblPP: "خریداری قیمت", lblSP: "فروخت قیمت", lblPS: "موجودہ اسٹاک", lblSN: "سیلر کا نام", lblSM: "موبائل نمبر", siTitle: "اسٹاک آمد", saleTitle: "فروخت", btnAddStock: "اسٹاک شامل کریں", chartSales: "فروخت کی کارکردگی", chartStock: "اسٹاک کا جائزہ" },
  ar: { appName: "سيد المخزون", tagline: "نسخة برو V2.0", menuMain: "الرئيسية", menuTrans: "المعاملات", menuMgmt: "الإدارة", navDash: "لوحة التحكم", navProducts: "المنتجات", navStockin: "توريد", navSales: "المبيعات", navSellers: "البائعين", navSettings: "الإعدادات", dashTitle: "نظرة عامة", dashSub: "مقاييس المخزون والمبيعات", kpiProducts: "إجمالي المنتجات", kpiSales: "إجمالي المبيعات", kpiProfit: "إجمالي الربح", kpiLow: "مخزون منخفض", prodTitle: "المنتجات", sellTitle: "البائعين", setTitle: "الإعدادات", thId: "معرف", thName: "الاسم", thCat: "الفئة", thPP: "سعر الشراء", thSP: "سعر البيع", thStock: "المخزون", thAct: "إجراءات", btnReport: "طباعة التقرير", btnAddP: "إضافة منتج", btnAddS: "إضافة بائع", setLang: "اللغة", setCurr: "العملة", cancel: "إلغاء", save: "حفظ", lblPN: "الاسم", lblPC: "الفئة", lblPP: "سعر الشراء", lblSP: "سعر البيع", lblPS: "المخزون", lblSN: "اسم البائع", lblSM: "رقم الجوال", siTitle: "توريد المخزون", saleTitle: "المبيعات", btnAddStock: "إضافة مخزون", chartSales: "أداء المبيعات", chartStock: "نظرة المخزون" }
};

const CURR = { USD: { s: '$', p: 'prefix' }, PKR: { s: 'Rs', p: 'prefix' }, SAR: { s: '﷼', p: 'suffix' }, AED: { s: 'د.إ', p: 'suffix' } };

function fmt(v) { const c = CURR[currentCurr]; v = parseFloat(v || 0).toLocaleString(); return c.p === 'prefix' ? `${c.s} ${v}` : `${v} ${c.s}` }

function updateLocale() {
  currentLang = document.getElementById('set-lang').value;
  localStorage.setItem('im_lang', currentLang);
  const dir = (currentLang === 'ur' || currentLang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('data-lang', currentLang);
  const t = T[currentLang];
  const map = { 'txt-app-name': 'appName', 'txt-tagline': 'tagline', 'txt-menu-main': 'menuMain', 'txt-menu-trans': 'menuTrans', 'txt-menu-mgmt': 'menuMgmt', 'txt-nav-dash': 'navDash', 'txt-nav-products': 'navProducts', 'txt-nav-stockin': 'navStockin', 'txt-nav-sales': 'navSales', 'txt-nav-sellers': 'navSellers', 'txt-nav-settings': 'navSettings', 'txt-dash-title': 'dashTitle', 'txt-dash-subtitle': 'dashSub', 'txt-kpi-products': 'kpiProducts', 'txt-kpi-sales': 'kpiSales', 'txt-kpi-profit': 'kpiProfit', 'txt-kpi-lowstock': 'kpiLow', 'txt-prod-title': 'prodTitle', 'txt-sell-title': 'sellTitle', 'txt-set-title': 'setTitle', 'th-id': 'thId', 'th-name': 'thName', 'th-cat': 'thCat', 'th-pprice': 'thPP', 'th-sprice': 'thSP', 'th-stock': 'thStock', 'th-actions': 'thAct', 'txt-btn-report': 'btnReport', 'txt-btn-add-prod': 'btnAddP', 'txt-btn-add-seller': 'btnAddS', 'txt-set-lang': 'setLang', 'txt-set-curr': 'setCurr', 'btn-cancel': 'cancel', 'btn-save': 'save', 'btn-cancel-s': 'cancel', 'btn-save-s': 'save', 'lbl-pname': 'lblPN', 'lbl-pcat': 'lblPC', 'lbl-pprice': 'lblPP', 'lbl-sprice': 'lblSP', 'lbl-pstock': 'lblPS', 'lbl-sname': 'lblSN', 'lbl-smobile': 'lblSM', 'txt-si-title': 'siTitle', 'txt-sale-title': 'saleTitle', 'txt-btn-add-stock': 'btnAddStock', 'txt-chart-sales': 'chartSales', 'txt-chart-stock': 'chartStock' };
  for (const [id, key] of Object.entries(map)) { const el = document.getElementById(id); if (el) el.innerText = t[key] }
  document.getElementById('language-display').innerText = document.getElementById('set-lang').options[document.getElementById('set-lang').selectedIndex].text;
  refreshAll();
}

function updateCurrency() {
  currentCurr = document.getElementById('set-curr').value;
  localStorage.setItem('im_curr', currentCurr);
  document.getElementById('currency-display').innerText = `${currentCurr} (${CURR[currentCurr].s})`;
  refreshAll();
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open') }
function switchPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('txt-current-page').innerText = btn.innerText.trim();
  if (window.innerWidth < 1024) toggleSidebar();
  if (id === 'stockin' || id === 'sales') populateDropdowns();
}

function populateDropdowns() {
  const sp = document.getElementById('si_product'), slp = document.getElementById('sale_product'), sls = document.getElementById('sale_seller');
  if (sp) { sp.innerHTML = '<option value="">--</option>'; products.forEach((p, i) => sp.innerHTML += `<option value="${i}">${p.name}</option>`) }
  if (slp) { slp.innerHTML = '<option value="">--</option>'; products.forEach((p, i) => slp.innerHTML += `<option value="${i}">${p.name}</option>`) }
  if (sls) { sls.innerHTML = '<option value="">--</option>'; sellers.forEach((s, i) => sls.innerHTML += `<option value="${i}">${s.name}</option>`) }
}

// Products
function renderProducts() {
  const c = document.getElementById('product-list'); c.innerHTML = '';
  products.forEach((p, i) => { c.innerHTML += `<tr><td><span class="badge badge-blue">P-${String(i + 1).padStart(3, '0')}</span></td><td style="font-weight:700">${p.name}</td><td><span class="badge badge-orange">${p.cat}</span></td><td>${fmt(p.purchase)}</td><td>${fmt(p.sale)}</td><td><span class="badge ${p.stock < 10 ? 'badge-red' : 'badge-green'}">${p.stock}</span></td><td><button class="btn btn-secondary btn-icon" onclick="openProductModal(${i})"><span class="mdi mdi-pencil"></span></button> <button class="btn btn-danger btn-icon" onclick="deleteProduct(${i})"><span class="mdi mdi-delete"></span></button></td></tr>` });
}
function openProductModal(i = -1) {
  document.getElementById('modal-product').classList.add('active');
  if (i > -1) { document.getElementById('p-index').value = i; document.getElementById('p-name').value = products[i].name; document.getElementById('p-cat').value = products[i].cat; document.getElementById('p-purchase').value = products[i].purchase; document.getElementById('p-sale').value = products[i].sale; document.getElementById('p-stock').value = products[i].stock }
  else { document.getElementById('p-index').value = '';['p-name', 'p-cat', 'p-purchase', 'p-sale', 'p-stock'].forEach(id => document.getElementById(id).value = '') }
}
function saveProduct() {
  const i = document.getElementById('p-index').value, d = { name: document.getElementById('p-name').value, cat: document.getElementById('p-cat').value, purchase: +document.getElementById('p-purchase').value, sale: +document.getElementById('p-sale').value, stock: +document.getElementById('p-stock').value };
  if (!d.name) return; i === '' ? products.push(d) : products[i] = d;
  localStorage.setItem('im_products', JSON.stringify(products)); closeModals(); refreshAll();
}
function deleteProduct(i) { if (confirm('Delete?')) { products.splice(i, 1); localStorage.setItem('im_products', JSON.stringify(products)); refreshAll() } }

// Sellers
function renderSellers() {
  const c = document.getElementById('seller-list'); c.innerHTML = '';
  sellers.forEach((s, i) => { c.innerHTML += `<tr><td style="font-weight:700">${s.name}</td><td><span class="badge badge-blue">${s.mobile || 'N/A'}</span></td><td style="font-weight:700;color:var(--green)">${fmt(s.sales || 0)}</td><td><button class="btn btn-secondary btn-icon" onclick="openSellerModal(${i})"><span class="mdi mdi-pencil"></span></button> <button class="btn btn-danger btn-icon" onclick="deleteSeller(${i})"><span class="mdi mdi-delete"></span></button></td></tr>` });
}
function openSellerModal(i = -1) {
  document.getElementById('modal-seller').classList.add('active');
  if (i > -1) { document.getElementById('s-index').value = i; document.getElementById('s-name').value = sellers[i].name; document.getElementById('s-mobile').value = sellers[i].mobile || '' }
  else { document.getElementById('s-index').value = ''; document.getElementById('s-name').value = ''; document.getElementById('s-mobile').value = '' }
}
function saveSeller() {
  const i = document.getElementById('s-index').value, n = document.getElementById('s-name').value, m = document.getElementById('s-mobile').value;
  if (!n) return; i === '' ? sellers.push({ name: n, mobile: m, sales: 0 }) : (sellers[i].name = n, sellers[i].mobile = m);
  localStorage.setItem('im_sellers', JSON.stringify(sellers)); closeModals(); refreshAll();
}
function deleteSeller(i) { if (confirm('Delete?')) { sellers.splice(i, 1); localStorage.setItem('im_sellers', JSON.stringify(sellers)); refreshAll() } }

// Stock In
function addStockIn() {
  const pi = document.getElementById('si_product').value, qty = +document.getElementById('si_qty').value;
  if (pi === '' || !qty) return; products[pi].stock += qty;
  stockInLog.push({ date: new Date().toLocaleDateString(), product: products[pi].name, qty });
  localStorage.setItem('im_products', JSON.stringify(products)); localStorage.setItem('im_stockin', JSON.stringify(stockInLog));
  document.getElementById('si_qty').value = ''; refreshAll();
}
function renderStockIn() {
  const c = document.getElementById('stockin-list'); c.innerHTML = '';
  stockInLog.slice(-20).reverse().forEach(s => { c.innerHTML += `<tr><td>${s.date}</td><td>${s.product}</td><td><span class="badge badge-green">+${s.qty}</span></td></tr>` });
}

// Sales
function fillSalePrice() { const i = document.getElementById('sale_product').value; if (i !== '') document.getElementById('sale_price').value = products[i].sale }
function calcSaleTotal() { }
function addSale() {
  const pi = document.getElementById('sale_product').value, qty = +document.getElementById('sale_qty').value, price = +document.getElementById('sale_price').value, si = document.getElementById('sale_seller').value;
  if (pi === '' || !qty || !price) return;
  const p = products[pi], profit = (price - p.purchase) * qty;
  p.stock = Math.max(0, p.stock - qty);
  if (si !== '') sellers[si].sales = (sellers[si].sales || 0) + price * qty;
  salesLog.push({ date: new Date().toLocaleDateString(), product: p.name, qty, price, seller: si !== '' ? sellers[si].name : '—', total: price * qty, profit });
  localStorage.setItem('im_products', JSON.stringify(products)); localStorage.setItem('im_sellers', JSON.stringify(sellers)); localStorage.setItem('im_sales', JSON.stringify(salesLog));
  ['sale_qty', 'sale_price'].forEach(id => document.getElementById(id).value = ''); refreshAll();
}
function renderSales() {
  const c = document.getElementById('sales-list'); c.innerHTML = '';
  salesLog.slice(-20).reverse().forEach(s => { c.innerHTML += `<tr><td>${s.date}</td><td>${s.product}</td><td>${s.qty}</td><td>${fmt(s.price)}</td><td>${s.seller}</td><td style="font-weight:700">${fmt(s.total)}</td><td style="color:${s.profit >= 0 ? 'var(--green)' : 'var(--red)'};font-weight:700">${fmt(s.profit)}</td></tr>` });
}

function closeModals() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active')) }

// Charts
let sChart = null, stChart = null;
function initCharts() {
  const ctx1 = document.getElementById('salesChart').getContext('2d'), ctx2 = document.getElementById('stockChart').getContext('2d');
  if (sChart) sChart.destroy(); if (stChart) stChart.destroy();
  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#EF4444'];
  sChart = new Chart(ctx1, { type: 'bar', data: { labels: products.map(p => p.name), datasets: [{ label: 'Stock', data: products.map(p => p.stock), backgroundColor: colors.slice(0, products.length), borderRadius: 8, borderSkipped: false }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(75,85,99,0.3)' }, ticks: { color: '#9CA3AF' } }, x: { grid: { display: false }, ticks: { color: '#9CA3AF' } } } } });
  stChart = new Chart(ctx2, { type: 'doughnut', data: { labels: products.map(p => p.name), datasets: [{ data: products.map(p => p.stock), backgroundColor: colors.slice(0, products.length), borderWidth: 0, hoverOffset: 8 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'bottom', labels: { color: '#9CA3AF', padding: 12, usePointStyle: true, pointStyleWidth: 8 } } } } });
}

function refreshAll() {
  renderProducts(); renderSellers(); renderStockIn(); renderSales();
  document.getElementById('val-total-products').innerText = products.length;
  const ts = sellers.reduce((a, s) => a + (s.sales || 0), 0);
  document.getElementById('val-total-sales').innerText = fmt(ts);
  const tp = salesLog.reduce((a, s) => a + (s.profit || 0), 0);
  document.getElementById('val-total-profit').innerText = fmt(tp || ts * 0.35);
  document.getElementById('val-low-stock').innerText = products.filter(p => p.stock < 10).length;
  initCharts(); populateDropdowns();
}

window.onload = () => {
  document.getElementById('set-lang').value = currentLang;
  document.getElementById('set-curr').value = currentCurr;
  updateLocale(); updateCurrency();
};
