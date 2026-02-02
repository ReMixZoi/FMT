function switchFMT(val) {
    currentFMT = parseInt(val);
    renderAllTables();
    renderHistoryList();
}

function renderAllTables() {
    document.getElementById('forms-container').innerHTML = '';
    if (currentFMT === 1) {
        renderExactTable01();
    } else if (currentFMT === 37) {
        renderExactTable37(1);
        renderExactTable37(21);
        renderExactTable37(41);
    } else if (currentFMT === 2) {
        renderExactTable02();
    } else if (currentFMT === 3) {
        renderExactTable03();
    } else if (currentFMT === 5) {
        renderExactTable05();
    } else if (currentFMT === 6) {
        renderExactTable06();
    } else if (currentFMT === 38) {
        renderExactTable38();
    } else if (currentFMT === 15) {
        renderExactTable15();
    } else if (currentFMT === 16) {
        renderExactTable16();
    } else if (currentFMT === 19) {
        renderExactTable19()
    }
}

function toggle(cell) {
    if (!isDragging) {
        setCellState(cell, (parseInt(cell.dataset.state) + 1) % 4);
    }
}

function setCellState(cell, state) {
    cell.dataset.state = state;
    cell.classList.remove('status-ok', 'status-bad', 'status-na');
    if (state === 1) { cell.textContent = "/"; cell.classList.add('status-ok'); }
    else if (state === 2) { cell.textContent = "X"; cell.classList.add('status-bad'); }
    else { cell.textContent = ""; }
}

function toggleColumn(num) {
    const cells = document.querySelectorAll(`.mach-${num}`);
    if (!cells.length) return;
    let nextState = (parseInt(cells[0].dataset.state) + 1) % 4;
    cells.forEach(cell => setCellState(cell, nextState));
}
