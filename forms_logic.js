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
    } else if (currentFMT === 7) {
        renderExactTable07();
    } else if (currentFMT === 9) {
        renderExactTable09();
    } else if (currentFMT === 10) {
        renderExactTable10();
    } else if (currentFMT === 11) {
        renderExactTable11();
    } else if (currentFMT === 12) {
        renderExactTable12();
    } else if (currentFMT === 13) {
        renderExactTable13();
    } else if (currentFMT === 14) {
        renderExactTable14();
    } else if (currentFMT === 17) {
        renderExactTable17();
    } else if (currentFMT === 18) {
        renderExactTable18();
    } else if (currentFMT === 20) {
        renderExactTable20();
    } else if (currentFMT === 21) {
        renderExactTable21();
    } else if (currentFMT === 19) {
        renderExactTable19()
    } else if (currentFMT === 22) {
        renderExactTable22();
    } else if (currentFMT === 23) {
        renderExactTable23();
    } else if (currentFMT === 24) {
        renderExactTable24();
    } else if (currentFMT === 25) {
        renderExactTable25();
    } else if (currentFMT === 26) {
        renderExactTable26();
    } else if (currentFMT === 27) {
        renderExactTable27();
    } else if (currentFMT === 28) {
        renderExactTable28();
    } else if (currentFMT === 29) {
        renderExactTable29();
    } else if (currentFMT === 30) {
        renderExactTable30();
    } else if (currentFMT === 31) {
        renderExactTable31();
    } else if (currentFMT === 32) {
        renderExactTable32();
    } else if (currentFMT === 33) {
        renderExactTable33();
    } else if (currentFMT === 35) {
        renderExactTable35();
    } else if (currentFMT === 36) {
        renderExactTable36();
    } else if (currentFMT === 39) {
        renderExactTable39();
    } else if (currentFMT === 40) {
        renderExactTable40();
    } else if (currentFMT === 44) {
        renderExactTable44();
    }
}

function toggle(cell) {
    if (!isDragging) {
        setCellState(cell, (parseInt(cell.dataset.state) + 1) % 3);
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
