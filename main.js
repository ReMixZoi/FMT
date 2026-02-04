// Global State
let currentFMT = 1;
let currentLoadedId = null;
let pendingLoadItem = null;

// Drag-to-fill variables for cells
let isDragging = false;
let dragStartState = 0;
let dragStartCell = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderAllTables();
    renderHistoryList();
});

// Cell Drag Logic
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('check-cell')) {
        toggle(e.target);
        isDragging = true;
        dragStartCell = e.target;
        dragStartState = parseInt(e.target.dataset.state);
        e.preventDefault(); // Prevent text selection
    }
});

document.addEventListener('mouseover', (e) => {
    if (isDragging && e.target.classList.contains('check-cell')) {
        // Only fill if it's same column (machine) ? Or allow cross-column? 
        // Usually drag-to-fill is vertical or horizontal. 
        // Logic in Index.HTML allowed any check-cell.
        if (dragStartCell && e.target !== dragStartCell) {
            // Check if same FMT/Table? 
            // We just apply the state
            setCellState(e.target, dragStartState);
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    dragStartCell = null;
});


// History & Modal Logic

function saveToHistory() {
    document.getElementById('modalInput').value = "รอบตรวจ " + new Date().toLocaleDateString('th-TH');
    document.getElementById('saveModal').style.display = 'flex';
}

function confirmSaveHistory() {
    const label = document.getElementById('modalInput').value.trim();
    if (!label) return alert("กรุณาระบุชื่อ");

    const cellStates = Array.from(document.querySelectorAll('.check-cell')).map(c => ({ num: c.dataset.num, state: c.dataset.state }));
    const logData = Array.from(document.querySelectorAll('.log-cell')).map(c => {
        if (c.tagName === 'INPUT') return c.value;
        return c.textContent;
    });
    const summaryWater = document.querySelector('.summary-water')?.textContent || '';
    const fmt01Date = document.querySelector('.fmt01-date')?.value || '';
    const rowRemarks = Array.from(document.querySelectorAll('.row-remark')).map(el => el.textContent);
    const remarks = Array.from(document.querySelectorAll('.correction-input')).map(el => el.textContent);
    const sigDates = Array.from(document.querySelectorAll('.date-input')).map(el => el.value);
    const sigNames = Array.from(document.querySelectorAll('.sig-name')).map(el => el.textContent);

    let metadata = {};
    if (currentFMT === 2 || currentFMT === 3 || currentFMT === 5 || currentFMT === 6 || currentFMT === 38 || currentFMT === 15 || currentFMT === 16 || currentFMT === 7 || currentFMT === 22 || currentFMT === 23 || currentFMT === 26 || currentFMT === 27 || currentFMT === 28 || currentFMT === 30 || currentFMT === 31 || currentFMT === 32 || currentFMT === 36 || currentFMT === 39 || currentFMT === 40 || currentFMT === 44 || (currentFMT >= 9 && currentFMT <= 14) || currentFMT === 17 || currentFMT === 18 || currentFMT === 20 || currentFMT === 21 || currentFMT === 24 || currentFMT === 25) {
        const monthSelect = document.querySelector('.fmt02-month-select');
        const yearSelect = document.querySelector('.fmt02-year-select');

        if (currentFMT === 7) {
            metadata = {
                workType: document.querySelector('.fmt07-work-type')?.textContent || '',
                dept: document.querySelector('.fmt07-dept')?.textContent || '',
                machine: document.querySelector('.fmt07-machine')?.textContent || '',
                month: document.querySelector('.fmt07-month')?.textContent || '',
                year: document.querySelector('.fmt07-year')?.textContent || ''
            };
        } else if (currentFMT === 9) {
            metadata = {
                mNo: document.querySelector('.fmt09-m-no')?.textContent || '',
                loc: document.querySelector('.fmt09-loc')?.textContent || ''
            };
        } else if (currentFMT === 10) {
            metadata = {
                mNo: document.querySelector('.fmt10-m-no')?.textContent || '',
                loc: document.querySelector('.fmt10-loc')?.textContent || ''
            };
        } else if (currentFMT === 11) {
            metadata = {
                mNo: document.querySelector('.fmt11-m-no')?.textContent || '',
                loc: document.querySelector('.fmt11-loc')?.textContent || ''
            };
        } else if (currentFMT === 12) {
            metadata = {
                mNo: document.querySelector('.fmt12-m-no')?.textContent || '',
                loc: document.querySelector('.fmt12-loc')?.textContent || ''
            };
        } else if (currentFMT === 13) {
            metadata = {
                mNo: document.querySelector('.fmt13-m-no')?.textContent || '',
                loc: document.querySelector('.fmt13-loc')?.textContent || ''
            };
        } else if (currentFMT === 14) {
            metadata = {
                mNo: document.querySelector('.fmt14-m-no')?.textContent || '',
                loc: document.querySelector('.fmt14-loc')?.textContent || ''
            };
        } else if (currentFMT === 17) {
            metadata = {
                mNo: document.querySelector('.fmt17-m-no')?.textContent || '',
                loc: document.querySelector('.fmt17-loc')?.textContent || ''
            };
        } else if (currentFMT === 18) {
            metadata = {
                mNo: document.querySelector('.fmt18-m-no')?.textContent || '',
                loc: document.querySelector('.fmt18-loc')?.textContent || ''
            };
        } else if (currentFMT === 20) {
            metadata = {
                mNo: document.querySelector('.fmt20-m-no')?.textContent || '',
                loc: document.querySelector('.fmt20-loc')?.textContent || ''
            };
        } else if (currentFMT === 21) {
            metadata = {
                mNo: document.querySelector('.fmt21-m-no')?.textContent || '',
                loc: document.querySelector('.fmt21-loc')?.textContent || ''
            };
        } else if (currentFMT === 24) {
            metadata = {
                mNo: document.querySelector('.fmt24-m-no')?.textContent || '',
                loc: document.querySelector('.fmt24-loc')?.textContent || ''
            };
        } else if (currentFMT === 25) {
            metadata = {
                mNo: document.querySelector('.fmt25-m-no')?.textContent || '',
                loc: document.querySelector('.fmt25-loc')?.textContent || ''
            };
        } else if (currentFMT === 39) {
            metadata = {
                mNo: document.querySelector('.fmt39-m-no')?.textContent || '',
                loc: document.querySelector('.fmt39-loc')?.textContent || ''
            };
        } else if (currentFMT === 40) {
            metadata = {
                mNo: document.querySelector('.fmt40-m-no')?.textContent || '',
                loc: document.querySelector('.fmt40-loc')?.textContent || ''
            };
        } else if (currentFMT === 30) {
            metadata = {
                date: document.querySelector('.fmt30-date')?.textContent || '',
                mName: document.querySelector('.fmt30-m-name')?.textContent || '',
                model: document.querySelector('.fmt30-model')?.textContent || '',
                subject: document.querySelector('.fmt30-subject')?.textContent || '',
                week: document.querySelector('.fmt30-week')?.textContent || '',
                month: document.querySelector('.fmt30-month')?.textContent || '',
                performer: document.querySelector('.fmt30-performer')?.textContent || ''
            };
        } else if (currentFMT === 31) {
            metadata = {
                day: document.querySelector('.fmt31-day')?.textContent || '',
                month: document.querySelector('.fmt31-month')?.textContent || '',
                wkPending: document.querySelector('.fmt31-wk-pending')?.textContent || '',
                wkCurrent: document.querySelector('.fmt31-wk-current')?.textContent || ''
            };
        } else if (currentFMT === 32) {
            metadata = {
                day: document.querySelector('.fmt32-day')?.textContent || '',
                month: document.querySelector('.fmt32-month')?.textContent || '',
                wkPending: document.querySelector('.fmt32-wk-pending')?.textContent || '',
                wkCurrent: document.querySelector('.fmt32-wk-current')?.textContent || ''
            };
        } else if (currentFMT === 36) {
            metadata = {
                hDay: document.querySelector('.fmt36-h-day')?.textContent || '',
                hMonth: document.querySelector('.fmt36-h-month')?.textContent || '',
                hYear: document.querySelector('.fmt36-h-year')?.textContent || '',
                date: document.querySelector('.fmt36-date')?.textContent || '',
                subject: document.querySelector('.fmt36-subject')?.textContent || '',
                to: document.querySelector('.fmt36-to')?.textContent || '',
                reason: document.querySelector('.fmt36-reason')?.textContent || ''
            };
        } else {
            metadata = {
                month: monthSelect ? monthSelect.value : '',
                year: yearSelect ? yearSelect.value : '',
                mNo: document.querySelector('.fmt02-m-no')?.textContent || '',
                mName: document.querySelector('.fmt02-m-name') ? document.querySelector('.fmt02-m-name').textContent : '',
                area: document.querySelector('.fmt02-area') ? document.querySelector('.fmt02-area').textContent : '',
                dept: document.querySelector('.fmt02-dept') ? document.querySelector('.fmt02-dept').textContent : ''
            };
        }
    }

    const entry = {
        id: Date.now(),
        fmt: currentFMT,
        label,
        timestamp: new Date().toLocaleString('th-TH'),
        data: cellStates,
        logData,
        summaryWater,
        fmt01Date,
        rowRemarks,
        remarks,
        sigDates,
        sigNames,
        metadata
    };
    let history = JSON.parse(localStorage.getItem('fmt_history') || '[]');
    history.unshift(entry);
    localStorage.setItem('fmt_history', JSON.stringify(history));

    // Prepare data for Google Sheet (Flat Format)
    const checksArr = cellStates.map(c => parseInt(c.state));
    const sheetData = {
        id: entry.id,
        fmt: entry.fmt,
        date: new Date().toLocaleDateString('th-TH'),
        inspector: entry.label,
        checks: checksArr,
        corrections: remarks,
        dates: sigDates,
        rowRemarks: rowRemarks,
        jobName: entry.label,
        metadata: entry.metadata
    };
    sendToGoogleSheet(sheetData);

    document.getElementById('saveModal').style.display = 'none';
    renderHistoryList();
}

function renderHistoryList() {
    const container = document.getElementById('history-list');
    if (!container) return;

    let history = JSON.parse(localStorage.getItem('fmt_history') || '[]');
    // Filter by current FMT
    history = history.filter(h => h.fmt === currentFMT || (currentFMT === 37 && !h.fmt));
    container.innerHTML = history.length === 0 ? '<div style="color:#94a3b8; font-size:0.8rem; text-align:center; padding:20px;">ยังไม่มีข้อมูล</div>' : '';
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <input type="checkbox" class="item-checkbox" data-id="${item.id}" onclick="event.stopPropagation(); handleSelectionChange()">
            <div class="date">${toThaiDigits(item.label)}</div>
            <div class="timestamp">${toThaiDigits(item.timestamp)}</div>
            <button class="delete-btn" onclick="deleteHistory(${item.id}, event)">&times;</button>
        `;
        div.onclick = () => {
            viewHistoryItem(item);
        };
        container.appendChild(div);
    });
    handleSelectionChange();
}

function toggleSelectAll(cb) {
    document.querySelectorAll('.item-checkbox').forEach(item => {
        item.checked = cb.checked;
    });
    handleSelectionChange();
}

function handleSelectionChange() {
    const checkedCount = document.querySelectorAll('.item-checkbox:checked').length;
    const totalCount = document.querySelectorAll('.item-checkbox').length;
    const printBtn = document.getElementById('printSelectedBtn');

    if (printBtn) {
        if (checkedCount > 0) {
            printBtn.style.display = 'flex';
            printBtn.innerHTML = `<span>🖨️ พิมพ์รายการที่เลือก (${checkedCount})</span>`;
        } else {
            printBtn.style.display = 'none';
        }
    }

    const selectAllCheck = document.getElementById('selectAll');
    if (selectAllCheck) {
        selectAllCheck.checked = checkedCount === totalCount && totalCount > 0;
    }
}

function printSelected() {
    const checkedIds = Array.from(document.querySelectorAll('.item-checkbox:checked')).map(cb => parseInt(cb.dataset.id));
    if (checkedIds.length === 0) return;

    const history = JSON.parse(localStorage.getItem('fmt_history') || '[]');
    const selectedItems = history.filter(h => checkedIds.includes(h.id));

    const printArea = document.getElementById('print-area');
    printArea.innerHTML = '';

    selectedItems.forEach(item => {
        const formHTML = generateFormHTMLFromData(item);
        printArea.innerHTML += formHTML;
    });

    window.print();
    printArea.innerHTML = '';
}

function generateFormHTMLFromData(item) {
    if (item.fmt === 1) return renderStaticForm01(item);
    if (item.fmt === 2) return renderStaticForm02(item);
    if (item.fmt === 3) return renderStaticForm03(item);
    if (item.fmt === 5) return renderStaticForm05(item);
    if (item.fmt === 6) return renderStaticForm06(item);
    if (item.fmt === 7) return renderStaticForm07(item);
    if (item.fmt === 15) return renderStaticForm15(item);
    if (item.fmt === 37) return renderStaticForm37(item);
    if (item.fmt === 38) return renderStaticForm38(item);
    if (item.fmt === 16) return renderStaticForm16(item);
    if (item.fmt === 22) return renderStaticForm22(item);
    if (item.fmt === 23) return renderStaticForm23(item);
    if (item.fmt === 25) return renderStaticForm25(item);
    if (item.fmt === 26) return renderStaticForm26(item);
    if (item.fmt === 27) return renderStaticForm27(item);
    if (item.fmt === 28) return renderStaticForm28(item);
    if (item.fmt === 29) return renderStaticForm29(item);
    if (item.fmt === 30) return renderStaticForm30(item);
    if (item.fmt === 31) return renderStaticForm31(item);
    if (item.fmt === 32) return renderStaticForm32(item);
    if (item.fmt === 33) return renderStaticForm33(item);
    if (item.fmt === 35) return renderStaticForm35(item);
    if (item.fmt === 36) return renderStaticForm36(item);
    if (item.fmt === 39) return renderStaticForm39(item);
    if (item.fmt === 40) return renderStaticForm40(item);
    if (item.fmt === 44) return renderStaticForm44(item);
    return '<div>Form format not found</div>';
}

function viewHistoryItem(item) {
    applyHistoryState(item);
    currentLoadedId = item.id;

    const badge = document.getElementById('statusBadge');
    badge.style.display = 'block';
    badge.style.background = '#e0f2fe';
    badge.style.color = '#0369a1';
    badge.style.borderColor = '#bae6fd';
    badge.innerText = `👀 Viewing: ${item.label}`;

    document.getElementById('editToggleBtn').style.display = 'flex';
    document.getElementById('updateBtn').style.display = 'none';
}

function applyHistoryState(item) {
    clearAll();
    const cells = document.querySelectorAll('.check-cell');
    item.data.forEach((d, i) => { if (cells[i]) setCellState(cells[i], parseInt(d.state)); });

    if (item.logData) {
        const logCells = document.querySelectorAll('.log-cell');
        item.logData.forEach((val, i) => {
            if (logCells[i]) {
                if (logCells[i].tagName === 'INPUT') logCells[i].value = val;
                else logCells[i].textContent = val;
            }
        });
    }
    if (document.querySelector('.summary-water')) document.querySelector('.summary-water').textContent = item.summaryWater || '';
    if (document.querySelector('.fmt01-date')) document.querySelector('.fmt01-date').value = item.fmt01Date || '';
    const remarks = document.querySelectorAll('.correction-input');
    item.remarks.forEach((txt, i) => { if (remarks[i]) remarks[i].textContent = txt; });

    const sigNames = document.querySelectorAll('.sig-name');
    if (item.sigNames) {
        item.sigNames.forEach((val, i) => { if (sigNames[i]) sigNames[i].textContent = val; });
    }

    const dates = document.querySelectorAll('.date-input');
    item.sigDates.forEach((val, i) => {
        if (dates[i]) {
            dates[i].value = val;
            if (dates[i].previousElementSibling) {
                dates[i].previousElementSibling.innerText = toThaiDateStr(val);
            }
        }
    });

    const rowRemarks = document.querySelectorAll('.row-remark');
    if (item.rowRemarks) {
        item.rowRemarks.forEach((txt, i) => { if (rowRemarks[i]) rowRemarks[i].textContent = txt; });
    }

    if ((item.fmt === 2 || item.fmt === 3 || item.fmt === 5 || item.fmt === 6 || item.fmt === 38 || item.fmt === 15 || item.fmt === 16 || item.fmt === 22 || item.fmt === 23 || item.fmt === 26 || item.fmt === 27 || item.fmt === 28 || item.fmt === 44) && item.metadata) {
        if (document.querySelector('.fmt02-month-select')) document.querySelector('.fmt02-month-select').value = item.metadata.month || '';
        if (document.querySelector('.fmt02-year-select')) document.querySelector('.fmt02-year-select').value = item.metadata.year || '';
        if (document.querySelector('.fmt02-m-no')) document.querySelector('.fmt02-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt02-m-name')) document.querySelector('.fmt02-m-name').textContent = item.metadata.mName || '';
        if (document.querySelector('.fmt02-area')) document.querySelector('.fmt02-area').textContent = item.metadata.area || '';
        if (document.querySelector('.fmt02-dept')) document.querySelector('.fmt02-dept').textContent = item.metadata.dept || '';
    }
    if (item.fmt === 7 && item.metadata) {
        if (document.querySelector('.fmt07-work-type')) document.querySelector('.fmt07-work-type').textContent = item.metadata.workType || '';
        if (document.querySelector('.fmt07-dept')) document.querySelector('.fmt07-dept').textContent = item.metadata.dept || '';
        if (document.querySelector('.fmt07-machine')) document.querySelector('.fmt07-machine').textContent = item.metadata.machine || '';
        if (document.querySelector('.fmt07-month')) document.querySelector('.fmt07-month').textContent = item.metadata.month || '';
        if (document.querySelector('.fmt07-year')) document.querySelector('.fmt07-year').textContent = item.metadata.year || '';
    }
    if (item.fmt === 30 && item.metadata) {
        if (document.querySelector('.fmt30-date')) document.querySelector('.fmt30-date').textContent = item.metadata.date || '';
        if (document.querySelector('.fmt30-m-name')) document.querySelector('.fmt30-m-name').textContent = item.metadata.mName || '';
        if (document.querySelector('.fmt30-model')) document.querySelector('.fmt30-model').textContent = item.metadata.model || '';
        if (document.querySelector('.fmt30-subject')) document.querySelector('.fmt30-subject').textContent = item.metadata.subject || '';
        if (document.querySelector('.fmt30-week')) document.querySelector('.fmt30-week').textContent = item.metadata.week || '';
        if (document.querySelector('.fmt30-month')) document.querySelector('.fmt30-month').textContent = item.metadata.month || '';
        if (document.querySelector('.fmt30-performer')) document.querySelector('.fmt30-performer').textContent = item.metadata.performer || '';
    }
    if (item.fmt === 31 && item.metadata) {
        if (document.querySelector('.fmt31-day')) document.querySelector('.fmt31-day').textContent = item.metadata.day || '';
        if (document.querySelector('.fmt31-month')) document.querySelector('.fmt31-month').textContent = item.metadata.month || '';
        if (document.querySelector('.fmt31-wk-pending')) document.querySelector('.fmt31-wk-pending').textContent = item.metadata.wkPending || '';
        if (document.querySelector('.fmt31-wk-current')) document.querySelector('.fmt31-wk-current').textContent = item.metadata.wkCurrent || '';
    }
    if (item.fmt === 32 && item.metadata) {
        if (document.querySelector('.fmt32-day')) document.querySelector('.fmt32-day').textContent = item.metadata.day || '';
        if (document.querySelector('.fmt32-month')) document.querySelector('.fmt32-month').textContent = item.metadata.month || '';
        if (document.querySelector('.fmt32-wk-pending')) document.querySelector('.fmt32-wk-pending').textContent = item.metadata.wkPending || '';
        if (document.querySelector('.fmt32-wk-current')) document.querySelector('.fmt32-wk-current').textContent = item.metadata.wkCurrent || '';
    }
    if (item.fmt === 36 && item.metadata) {
        if (document.querySelector('.fmt36-h-day')) document.querySelector('.fmt36-h-day').textContent = item.metadata.hDay || '';
        if (document.querySelector('.fmt36-h-month')) document.querySelector('.fmt36-h-month').textContent = item.metadata.hMonth || '';
        if (document.querySelector('.fmt36-h-year')) document.querySelector('.fmt36-h-year').textContent = item.metadata.hYear || '';
        if (document.querySelector('.fmt36-date')) document.querySelector('.fmt36-date').textContent = item.metadata.date || '';
        if (document.querySelector('.fmt36-subject')) document.querySelector('.fmt36-subject').textContent = item.metadata.subject || '';
        if (document.querySelector('.fmt36-to')) document.querySelector('.fmt36-to').textContent = item.metadata.to || '';
        if (document.querySelector('.fmt36-reason')) document.querySelector('.fmt36-reason').textContent = item.metadata.reason || '';
    }
    if (item.fmt === 9 && item.metadata) {
        if (document.querySelector('.fmt09-m-no')) document.querySelector('.fmt09-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt09-loc')) document.querySelector('.fmt09-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 10 && item.metadata) {
        if (document.querySelector('.fmt10-m-no')) document.querySelector('.fmt10-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt10-loc')) document.querySelector('.fmt10-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 11 && item.metadata) {
        if (document.querySelector('.fmt11-m-no')) document.querySelector('.fmt11-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt11-loc')) document.querySelector('.fmt11-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 12 && item.metadata) {
        if (document.querySelector('.fmt12-m-no')) document.querySelector('.fmt12-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt12-loc')) document.querySelector('.fmt12-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 13 && item.metadata) {
        if (document.querySelector('.fmt13-m-no')) document.querySelector('.fmt13-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt13-loc')) document.querySelector('.fmt13-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 14 && item.metadata) {
        if (document.querySelector('.fmt14-m-no')) document.querySelector('.fmt14-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt14-loc')) document.querySelector('.fmt14-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 17 && item.metadata) {
        if (document.querySelector('.fmt17-m-no')) document.querySelector('.fmt17-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt17-loc')) document.querySelector('.fmt17-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 18 && item.metadata) {
        if (document.querySelector('.fmt18-m-no')) document.querySelector('.fmt18-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt18-loc')) document.querySelector('.fmt18-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 20 && item.metadata) {
        if (document.querySelector('.fmt20-m-no')) document.querySelector('.fmt20-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt20-loc')) document.querySelector('.fmt20-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 21 && item.metadata) {
        if (document.querySelector('.fmt21-m-no')) document.querySelector('.fmt21-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt21-loc')) document.querySelector('.fmt21-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 24 && item.metadata) {
        if (document.querySelector('.fmt24-m-no')) document.querySelector('.fmt24-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt24-loc')) document.querySelector('.fmt24-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 25 && item.metadata) {
        if (document.querySelector('.fmt25-m-no')) document.querySelector('.fmt25-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt25-loc')) document.querySelector('.fmt25-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 39 && item.metadata) {
        if (document.querySelector('.fmt39-m-no')) document.querySelector('.fmt39-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt39-loc')) document.querySelector('.fmt39-loc').textContent = item.metadata.loc || '';
    }
    if (item.fmt === 40 && item.metadata) {
        if (document.querySelector('.fmt40-m-no')) document.querySelector('.fmt40-m-no').textContent = item.metadata.mNo || '';
        if (document.querySelector('.fmt40-loc')) document.querySelector('.fmt40-loc').textContent = item.metadata.loc || '';
    }
}

function toggleEditMode() {
    if (!currentLoadedId) return;
    const badge = document.getElementById('statusBadge');
    badge.style.background = '#fee2e2';
    badge.style.color = '#991b1b';
    badge.style.borderColor = '#fecaca';
    badge.innerText = `✏️ Editing: ${document.getElementById('statusBadge').innerText.replace('👀 Viewing: ', '')}`;

    document.getElementById('editToggleBtn').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'flex';
}

function updateCurrentHistory() {
    if (!currentLoadedId) return;
    let history = JSON.parse(localStorage.getItem('fmt_history') || '[]');
    const idx = history.findIndex(h => h.id === currentLoadedId);
    if (idx === -1) return;

    history[idx].data = Array.from(document.querySelectorAll('.check-cell')).map(c => ({ num: c.dataset.num, state: c.dataset.state }));
    history[idx].rowRemarks = Array.from(document.querySelectorAll('.row-remark')).map(el => el.textContent);
    history[idx].remarks = Array.from(document.querySelectorAll('.correction-input')).map(el => el.textContent);
    history[idx].sigDates = Array.from(document.querySelectorAll('.date-input')).map(el => el.value);
    history[idx].timestamp = new Date().toLocaleString('th-TH') + " (Updated)";

    localStorage.setItem('fmt_history', JSON.stringify(history));

    // Send to Google Sheet
    const checksArr = history[idx].data.map(c => parseInt(c.state));
    const sheetData = {
        id: history[idx].id,
        fmt: history[idx].fmt,
        date: new Date().toLocaleDateString('th-TH'),
        inspector: history[idx].label,
        checks: checksArr,
        corrections: history[idx].remarks,
        dates: history[idx].sigDates,
        rowRemarks: history[idx].rowRemarks,
        jobName: history[idx].label,
        metadata: history[idx].metadata
    };
    sendToGoogleSheet(sheetData);

    alert("อัปเดตข้อมูลสำเร็จ");
    renderHistoryList();
    document.getElementById('updateBtn').style.display = 'none';
    document.getElementById('statusBadge').style.display = 'none';
    document.getElementById('editToggleBtn').style.display = 'none';
    currentLoadedId = null;
    clearAll();
}

function deleteHistory(id, event) {
    event.stopPropagation();
    if (!confirm("ลบข้อมูลนี้?")) return;
    let history = JSON.parse(localStorage.getItem('fmt_history') || '[]');
    history = history.filter(h => h.id !== id);
    localStorage.setItem('fmt_history', JSON.stringify(history));
    renderHistoryList();
    if (currentLoadedId === id) {
        currentLoadedId = null;
        document.getElementById('statusBadge').style.display = 'none';
        document.getElementById('updateBtn').style.display = 'none';
    }
}

function markAllNormal() {
    document.querySelectorAll('.check-cell').forEach(c => {
        if (currentFMT === 37) {
            const num = parseInt(c.dataset.num);
            if (num <= 54 && c.dataset.state == '0') setCellState(c, 1);
        } else {
            if (c.dataset.state == '0') setCellState(c, 1);
        }
    });
}

function clearAll() {
    document.querySelectorAll('.check-cell').forEach(c => setCellState(c, 0));
    document.querySelectorAll('.correction-input').forEach(el => el.textContent = '');
    document.querySelectorAll('.date-input').forEach(el => el.value = '');
}


// Sync Logic
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbytCloKMouYV4Mdkp_Ar0yyjIloCz4VRCbdSkNKDhf8fEkV5Bym9Cthz9-XX4uNkEsd/exec";

async function syncFromCloud() {
    const btn = document.querySelector('button[title="ดึงข้อมูลจาก Cloud"]');
    if (btn) {
        btn.innerHTML = '⏳...';
        btn.disabled = true;
    }

    try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        if (!response.ok) throw new Error("Network response was not ok");
        const cloudData = await response.json();

        if (!Array.isArray(cloudData)) throw new Error("Invalid data format");

        let localHistory = JSON.parse(localStorage.getItem('fmt_history') || '[]');
        let newCount = 0;

        cloudData.forEach(cItem => {
            if (!localHistory.some(h => h.id == cItem.id)) {
                try {
                    const appItem = {
                        id: parseInt(cItem.id) || Date.now(),
                        fmt: parseInt(cItem.fmt) || 2,
                        label: cItem.jobName || cItem.inspector || "No Name",
                        timestamp: cItem.date || new Date().toLocaleString('th-TH'),
                        data: (cItem.checks || []).map(s => ({ state: s })),
                        rowRemarks: cItem.rowRemarks || [],
                        remarks: cItem.corrections || [],
                        sigDates: cItem.dates || [],
                        sigNames: [],
                        metadata: cItem.metadata || {}
                    };
                    localHistory.push(appItem);
                    newCount++;
                } catch (e) {
                    console.error("Error parsing item:", cItem, e);
                }
            }
        });

        if (newCount > 0) {
            localHistory.sort((a, b) => b.id - a.id);
            localStorage.setItem('fmt_history', JSON.stringify(localHistory));
            renderHistoryList();
            alert(`✅ ดึงข้อมูลสำเร็จ: เพิ่ม ${newCount} รายการใหม่`);
        } else {
            alert("ข้อมูลเป็นปัจจุบันแล้ว");
        }

    } catch (err) {
        console.error(err);
        alert("❌ เกิดข้อผิดพลาดในการดึงข้อมูล: " + err.message);
    } finally {
        if (btn) {
            btn.innerHTML = '☁️ Sync';
            btn.disabled = false;
        }
    }
}

async function sendToGoogleSheet(data) {
    const saveBtn = document.querySelector('.btn-primary');
    try {
        if (saveBtn) saveBtn.disabled = true;
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(data)
        });
        alert("✅ บันทึกข้อมูลลง Google Sheet สำเร็จ");
    } catch (err) {
        alert("❌ เกิดข้อผิดพลาด: " + err.message);
    } finally {
        if (saveBtn) saveBtn.disabled = false;
    }
}

// Draggable Controls
const controls = document.querySelector('.controls');
if (controls) {
    let isDraggingControls = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    controls.addEventListener('mousedown', (e) => {
        if (!e.target.closest('.drag-handle-bar')) return;
        isDraggingControls = true;
        const rect = controls.getBoundingClientRect();
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
        controls.style.right = 'auto';
        controls.style.left = rect.left + 'px';
        controls.style.top = rect.top + 'px';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDraggingControls) return;
        e.preventDefault();
        const x = e.clientX - dragOffsetX;
        const y = e.clientY - dragOffsetY;
        const maxX = window.innerWidth - controls.offsetWidth;
        const maxY = window.innerHeight - controls.offsetHeight;
        controls.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        controls.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDraggingControls = false;
    });

    // Touch support
    controls.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.drag-handle-bar')) return;
        isDraggingControls = true;
        const touch = e.touches[0];
        const rect = controls.getBoundingClientRect();
        dragOffsetX = touch.clientX - rect.left;
        dragOffsetY = touch.clientY - rect.top;
        controls.style.right = 'auto';
        controls.style.left = rect.left + 'px';
        controls.style.top = rect.top + 'px';
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
        if (!isDraggingControls) return;
        const touch = e.touches[0];
        if (e.cancelable) e.preventDefault();
        const x = touch.clientX - dragOffsetX;
        const y = touch.clientY - dragOffsetY;
        const maxX = window.innerWidth - controls.offsetWidth;
        const maxY = window.innerHeight - controls.offsetHeight;
        controls.style.left = Math.max(0, Math.min(x, maxX)) + 'px';
        controls.style.top = Math.max(0, Math.min(y, maxY)) + 'px';
    }, { passive: false });

    document.addEventListener('touchend', () => {
        isDraggingControls = false;
    });
}
