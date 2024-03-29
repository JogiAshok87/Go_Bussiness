const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetInput = document.querySelector(button.dataset.target);
        targetInput.select();
        document.execCommand('copy');

        // Optional: Provide visual feedback
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 1000);
    });
});
const data = [{
        name: "Pranjal",
        serviceName: "PM",
        date: "2011/11/28",
        profit: "$162,700"
    },
    {
        name: "paritosh",
        serviceName: "PM",
        date: "2007/10/09",
        profit: "$1,200,000"
    },
    // ... (Add remaining rows in the same format)
];

// Create a table element
const table = document.createElement("table");

// Create table header
const headerRow = document.createElement("tr");
const headers = ["Name", "Service Name", "Date", "Profit"];
headers.forEach(header => {
    const headerCell = document.createElement("th");
    headerCell.textContent = header;
    headerRow.appendChild(headerCell);
});
table.appendChild(headerRow);

// Create table body and populate with data
const tbody = document.createElement("tbody");
data.forEach(row => {
    const tableRow = document.createElement("tr");
    const cells = [row.name, row.serviceName, row.date, row.profit];
    cells.forEach(cellData => {
        const tableCell = document.createElement("td");
        tableCell.textContent = cellData;
        tableRow.appendChild(tableCell);
    });
    tbody.appendChild(tableRow);
});
table.appendChild(tbody);