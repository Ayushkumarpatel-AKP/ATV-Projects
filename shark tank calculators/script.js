let salesTaxResult, profitMarginResult, cacResult, breakEvenResult, vatResult, ltvResult;

// Function to calculate Sales Tax
function calculateSalesTax() {
    const salesAmount = parseFloat(document.getElementById('salesAmount').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    if (!isNaN(salesAmount) && !isNaN(taxRate)) {
        salesTaxResult = salesAmount * (taxRate / 100);
        document.getElementById('salesTaxResult').innerText = `Sales Tax: ₹${salesTaxResult.toFixed(2)}`;
    }
}

// Function to calculate Profit Margin
function calculateProfitMargin() {
    const revenue = parseFloat(document.getElementById('revenue').value);
    const cost = parseFloat(document.getElementById('cost').value);
    if (!isNaN(revenue) && !isNaN(cost)) {
        profitMarginResult = ((revenue - cost) / revenue) * 100;
        document.getElementById('profitMarginResult').innerText = `Profit Margin: ${profitMarginResult.toFixed(2)}%`;
    }
}

// Function to  (CAC)
function calculateCAC() {
    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const newCustomers = parseFloat(document.getElementById('newCustomers').value);
    if (!isNaN(totalCost) && !isNaN(newCustomers)) {
        cacResult = totalCost / newCustomers;
        document.getElementById('cacResult').innerText = `CAC: ₹${cacResult.toFixed(2)}`;
    }
}

// Function to calculate Break-even Point
function calculateBreakEven() {
    const fixedCost = parseFloat(document.getElementById('fixedCost').value);
    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value);
    const variableCostPerUnit = parseFloat(document.getElementById('variableCostPerUnit').value);
    if (!isNaN(fixedCost) && !isNaN(pricePerUnit) && !isNaN(variableCostPerUnit)) {
        breakEvenResult = fixedCost / (pricePerUnit - variableCostPerUnit);
        document.getElementById('breakEvenResult').innerText = `Break-even Point: ${breakEvenResult.toFixed(0)} units`;
    }
}

// Function to calculate VAT
function calculateVAT() {
    const saleAmount = parseFloat(document.getElementById('saleAmount').value);
    const vatRate = parseFloat(document.getElementById('vatRate').value);
    if (!isNaN(saleAmount) && !isNaN(vatRate)) {
        vatResult = saleAmount * (vatRate / 100);
        document.getElementById('vatResult').innerText = `VAT: ₹${vatResult.toFixed(2)}`;
    }
}

// Function to calculate  (LTV)
function calculateLTV() {
    const arpu = parseFloat(document.getElementById('arpu').value);
    const retentionRate = parseFloat(document.getElementById('retentionRate').value);
    if (!isNaN(arpu) && !isNaN(retentionRate)) {
        ltvResult = arpu * (retentionRate / 100);
        document.getElementById('ltvResult').innerText = `LTV: ₹${ltvResult.toFixed(2)}`;
    }
}

// Function to download PDF with results
function downloadPDF() {
    const results = `
    Sales Tax: ₹${salesTaxResult ? salesTaxResult.toFixed(2) : 'N/A'}
    Profit Margin: ${profitMarginResult ? profitMarginResult.toFixed(2) : 'N/A'}%
    CAC: ₹${cacResult ? cacResult.toFixed(2) : 'N/A'}
    Break-even Point: ${breakEvenResult ? breakEvenResult.toFixed(0) : 'N/A'} units
    VAT: ₹${vatResult ? vatResult.toFixed(2) : 'N/A'}
    LTV: ₹${ltvResult ? ltvResult.toFixed(2) : 'N/A'}`;

    const pdfWindow = window.open('', '', 'width=600,height=600');
    pdfWindow.document.write(`<pre>${results}</pre>`);
    pdfWindow.document.close();
    pdfWindow.print();
}
// "I categorize all the code according to the website sections for easier understanding."(a.k.p)