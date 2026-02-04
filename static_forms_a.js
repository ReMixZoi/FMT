function generateFormHTMLFromData(item) {
    if (item.fmt === 1) return renderStaticForm01(item);
    if (item.fmt === 2) return renderStaticForm02(item);
    if (item.fmt === 3) return renderStaticForm03(item);
    if (item.fmt === 5) return renderStaticForm05(item);
    if (item.fmt === 6) return renderStaticForm06(item);
    if (item.fmt === 38) return renderStaticForm38(item);
    if (item.fmt === 15) return renderStaticForm15(item);
    if (item.fmt === 7) return renderStaticForm07(item);
    if (item.fmt === 9) return renderStaticForm09(item);
    if (item.fmt === 10) return renderStaticForm10(item);
    if (item.fmt === 11) return renderStaticForm11(item);
    if (item.fmt === 12) return renderStaticForm12(item);
    if (item.fmt === 13) return renderStaticForm13(item);
    if (item.fmt === 14) return renderStaticForm14(item);
    if (item.fmt === 17) return renderStaticForm17(item);
    if (item.fmt === 18) return renderStaticForm18(item);
    if (item.fmt === 20) return renderStaticForm20(item);
    if (item.fmt === 21) return renderStaticForm21(item);
    if (item.fmt === 24) return renderStaticForm24(item);
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
    return renderStaticForm37(item);
}

function renderStaticForm40(item) {
    return renderHistoryBaseStaticForm(item, 40, 'ใบบันทึกประวัติการซ่อมเครื่องจักรและอุปกรณ์สารสนเทศ', '');
}

function renderStaticForm39(item) {
    return renderHistoryBaseStaticForm(item, 39, 'ใบบันทึกประวัติการซ่อมรอกไฟฟ้า', '');
}

// ... existing forms (09, 10 etc) ...

function renderStaticForm11(item) {
    return renderHistoryBaseStaticForm(item, 11, 'ใบบันทึกประวัติการซ่อมเครื่องจักรหม้อไอน้ำไม้สับ', 'ฝ่ายผลิต');
}

function renderStaticForm12(item) {
    return renderHistoryBaseStaticForm(item, 12, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มลม', 'แท่นปั๊มลม');
}

function renderStaticForm13(item) {
    return renderHistoryBaseStaticForm(item, 13, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มน้ำ', 'ฝ่ายผลิต');
}

function renderStaticForm14(item) {
    return renderHistoryBaseStaticForm(item, 14, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มสูญญากาศ', 'ฝ่ายผลิต');
}

function renderStaticForm17(item) {
    return renderHistoryBaseStaticForm(item, 17, 'ใบบันทึกประวัติการซ่อมเครื่องจักรเครื่องบดโฟม', 'แผนกบด');
}

function renderStaticForm18(item) {
    return renderHistoryBaseStaticForm(item, 18, 'ใบบันทึกประวัติการซ่อมเครื่องจักรคูลลิ่งทาวเวอร์', 'ชั้นดาดฟ้า');
}

function renderStaticForm20(item) {
    return renderHistoryBaseStaticForm(item, 20, 'ใบบันทึกประวัติการซ่อมโครงสร้างพื้นฐาน', 'ฝ่ายผลิต');
}

function renderStaticForm21(item) {
    return renderHistoryBaseStaticForm(item, 21, 'ใบบันทึกประวัติการซ่อมเครื่องกรองน้ำ', 'ฝ่ายผลิต');
}

function renderStaticForm24(item) {
    return renderHistoryBaseStaticForm(item, 24, 'ใบบันทึกประวัติการซ่อมเครื่องกลึง', 'ฝ่ายผลิต');
}

function renderStaticForm25(item) {
    return renderHistoryBaseStaticForm(item, 25, 'ใบบันทึกประวัติการซ่อมเครื่องมิลลิ่ง', 'ฝ่ายผลิต');
}

function renderHistoryBaseStaticForm(item, fmtNum, title, defaultLoc) {
    let rowsHtml = '';
    let logIndex = 0;

    for (let i = 0; i < 28; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            let align = (j === 1 || j === 5) ? 'left' : 'center';
            let padding = (j === 1 || j === 5) ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding}">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 28px;">${cells}</tr>`;
    }

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const loc = (item.metadata && item.metadata.loc) ? item.metadata.loc : defaultLoc;

    return `
        <div class="sheet-container portrait-sheet" style="page-break-after: always; margin: 0; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ${title}
                    </div>
                    
                    <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                        <div style="font-weight: bold;">FMT-${fmtNum < 10 ? '0' + fmtNum : fmtNum} Re#0</div>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">
                        <b>Machine No</b> ${mNo}
                    </div>
                    <div style="flex: 1; padding: 6px 10px; font-weight: bold;">
                        <b>Location</b> ${loc}
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ว/ด/ป</th>
                        <th style="border: 1px solid #000; background: #fff;">รายละเอียด</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ซ่อม</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">PM</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ผู้ปฏิบัติ</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
                <div style="width: 320px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm37(item) {
    let fullHTML = '';
    const ranges = [1, 21, 41];

    ranges.forEach(start => {
        let machineHeaders = '';
        for (let i = 0; i < 20; i++) {
            let num = start + i;
            let isExist = num <= 54;
            machineHeaders += `<th style="width: 28px; text-align: center; border: 1px solid #000;">${isExist ? num : ''}</th>`;
        }

        let rowsHtml = '';
        const itemsCount = checklistData37.reduce((a, g) => a + g.items.length, 0);
        let cellIndexOffset = 0;
        if (start == 21) cellIndexOffset = itemsCount * 20;
        if (start == 41) cellIndexOffset = itemsCount * 40;

        checklistData37.forEach(group => {
            group.items.forEach((chkItem, idx) => {
                const rowIdxInGroup = checklistData37.flatMap(g => g.items).indexOf(chkItem);
                const tableIdx = ranges.indexOf(start);
                const overallRowIdx = tableIdx * itemsCount + rowIdxInGroup;
                const rowRemarkText = (item.rowRemarks && item.rowRemarks[overallRowIdx]) ? item.rowRemarks[overallRowIdx] : "";

                rowsHtml += `<tr>
                    ${idx === 0 ? `<td rowspan="${group.items.length}" class="category-cell" style="width: 30px; border: 1px solid #000;"><div class="vertical-text" style="font-weight:bold; width: 20px;">${group.category}</div></td>` : ''}
                    <td class="col-item" style="font-size:0.75rem; width: 150px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.name}</td>
                    <td class="col-std" style="font-size:0.7rem; width: 220px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.std}</td>`;

                for (let i = 0; i < 20; i++) {
                    let num = start + i;
                    let isExist = num <= 54;
                    let state = 0;
                    if (isExist) {
                        const cellIdxInItemData = cellIndexOffset + (rowIdxInGroup * 20) + i;
                        state = item.data[cellIdxInItemData] ? parseInt(item.data[cellIdxInItemData].state) : 0;
                    }

                    let content = "";
                    let cls = "";
                    if (state === 1) { content = "/"; cls = "status-ok"; }
                    else if (state === 2) { content = "X"; cls = "status-bad"; }
                    else if (state === 3) { content = "-"; cls = "status-na"; }

                    rowsHtml += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width: 28px;">${content}</td>`;
                }
                rowsHtml += `<td style="border: 1px solid #000; font-size: 0.7rem; width: 60px;">${rowRemarkText}</td></tr>`;
            });
        });

        const rangeIdx = ranges.indexOf(start);

        fullHTML += `
        <div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 0;">
                <tr>
                    <td style="width: 25%; border: 1px solid #000; padding: 5px; text-align: center;">
                        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <img src="Logo.png" alt="Logo" style="height: 30px;">
                            <b style="font-size: 0.85rem;">POLYFOAM HIGH-TECH (PFH)</b>
                        </div>
                    </td>
                    <td style="width: 55%; border: 1px solid #000; padding: 5px; text-align: center; font-size: 1.1rem; font-weight: bold;">
                        ตารางการตรวจเช็คเครื่องจักรและอุปกรณ์ในระบบสารสนเทศ
                    </td>
                    <td style="width: 20%; border: 1px solid #000; padding: 5px; text-align: right; font-size: 0.7rem;">
                        สัปดาห์ที่.. FMT-37Re#0
                    </td>
                </tr>
            </table>

            <table class="main-table" style="margin-top: 0; border-top: none; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width: 30px; border: 1px solid #000;">รายการ</th>
                        <th rowspan="2" style="width: 150px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width: 220px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="20" style="text-align: center; border: 1px solid #000;">หมายเลขเครื่อง</th>
                        <th rowspan="2" style="width: 60px; border: 1px solid #000;">หมายเหตุ</th>
                    </tr>
                    <tr>${machineHeaders}</tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
                รายละเอียดการแก้ไข
                <div style="min-height: 40px; border-bottom: 1px dashed #ccc; margin-top: 4px; padding: 4px;">${item.remarks[rangeIdx] || ''}</div>
            </div>

            <div style="display: flex; border: 1px solid #000; border-top: none;">
                <div style="flex: 2; padding: 10px;">
                    <div style="font-weight: bold; margin-bottom: 8px;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.5; border-left: 1px solid #000;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border-bottom: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ลายเซ็น</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                            <td style="border-bottom: 1px solid #000;"></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${item.sigNames ? (item.sigNames[rangeIdx * 3] || "") : ""}</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${item.sigNames ? (item.sigNames[rangeIdx * 3 + 1] || "") : ""}</td>
                            <td style="border-bottom: 1px solid #000; text-align: center;">${item.sigNames ? (item.sigNames[rangeIdx * 3 + 2] || "") : ""}</td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates ? toThaiDateStr(item.sigDates[rangeIdx * 3] || "") : ""}</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates ? toThaiDateStr(item.sigDates[rangeIdx * 3 + 1] || "") : ""}</td>
                            <td style="text-align: center;">${item.sigDates ? toThaiDateStr(item.sigDates[rangeIdx * 3 + 2] || "") : ""}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>`;
    });
    return fullHTML;
}

function renderStaticForm02(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData02.forEach(group => {
        // Category Header Row
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData02.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                rowsHtml += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width:22px;">${content}</td>`;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' ' + mData.year : '................../..................';


    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 2px solid #000; margin-bottom: 0;">
            <div class="form-header" style="border: none; border-bottom: 2px solid #000;">
                <div class="logo-box" style="border-right: 2px solid #000; padding: 8px 15px; width: auto; flex: 1; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 38px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรฉีดโฟมประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-02</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">INJECTION MOLDING FOAM</span></div>
                <div style="flex: 0.5; padding: 6px 10px; border-right: 1px solid #000;">พื้นที่ติดตั้ง: ${mData.area || ''}</div>
                <div style="flex: 0.5; padding: 6px 10px;">แผนกผลิต: ${mData.dept || ''}</div>
            </div>
        </div>

        <table class="main-table" style="font-size:0.6rem; width:100%; border-top: none;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:120px;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:120px;">มาตรฐานการตรวจ</th>
                    <th colspan="31">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>
        <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คแล้วเจอสภาพไม่ปกติพนักงานสำรองทันที ถ้าเป็นงานงานใช้เวลา ให้ลวไหลหลั่งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-top: none; text-align: center; width: 60px;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-right: none; border-top: none; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000; border-right: none;"></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm03(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData03.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData03.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                rowsHtml += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width:22px;">${content}</td>`;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 2px solid #000; margin-bottom: 0;">
            <div class="form-header" style="border: none; border-bottom: 2px solid #000;">
                <div class="logo-box" style="border-right: 2px solid #000; padding: 8px 15px; width: auto; flex: 1; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 38px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรนิ่งเม็ดประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-03</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">PREEXPANDER FOAM</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: อาคารผลิต 2</div>
            </div>
        </div>

        <table class="main-table" style="font-size:0.6rem; width:100%; border-top: none;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:120px;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:120px;">มาตรฐานการตรวจ</th>
                    <th colspan="31">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>
        <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-top: none; text-align: center; width: 60px;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-right: none; border-top: none; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000; border-right: none;"></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm07(item) {
    let rowsHtml = '';
    let logIndex = 0;

    for (let i = 0; i < 20; i++) {
        let cells = '';
        // 7 columns per row
        for (let j = 0; j < 7; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            let align = (j === 2 || j === 6) ? 'left' : 'center';
            let padding = (j === 2 || j === 6) ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding}">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 30px;">${cells}</tr>`;
    }

    const workType = (item.metadata && item.metadata.workType) ? item.metadata.workType : '';
    const dept = (item.metadata && item.metadata.dept) ? item.metadata.dept : '';
    const machine = (item.metadata && item.metadata.machine) ? item.metadata.machine : '';
    const month = (item.metadata && item.metadata.month) ? item.metadata.month : '';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 1.5; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ใบรายงานการทำงาน
                    </div>
                    
                    <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem; gap: 2px;">
                        <div><b>FMT-07</b> <b>Re#0</b></div>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">
                        <b>ลักษณะงาน</b> ${workType}
                    </div>
                    <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">
                        <b>แผนก</b> ${dept}
                    </div>
                    <div style="flex: 1; padding: 6px 10px;">
                        <b>เครื่อง</b> ${machine}
                    </div>
                </div>
                
                <div style="font-size: 0.8rem; padding: 6px 10px;">
                    <b>เดือน</b> ${month} / ${year}
                </div>
            </div>

            <table class="main-table" style="font-size: 0.7rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; width: 40px;">วันที่</th>
                        <th style="border: 1px solid #000; width: 100px;">รายละเอียดงาน</th>
                        <th style="border: 1px solid #000;">ใบสั่งซ่อม</th>
                        <th style="border: 1px solid #000; width: 80px;">วันที่เรียก</th>
                        <th style="border: 1px solid #000; width: 100px;">ใบสั่งการผลิต</th>
                        <th style="border: 1px solid #000; width: 100px;">ระยะเวลาซ่อม</th>
                        <th style="border: 1px solid #000; width: 90px;">หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="display: flex; border: 1px solid #000; border-top: none;">
                <div style="flex: 2; padding: 8px; border-right: 1px solid #000;">
                    <div style="font-size: 0.75rem; font-weight: bold;">หมายเหตุ</div>
                    <div style="min-height: 60px; margin-top: 4px; padding: 4px;">${(item.remarks && item.remarks[0]) || ''}</div>
                </div>
                <div style="flex: 3;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem; height: 100%;">
                        <tr style="height: 28px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้บันทึก</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้ตรวจสอบ</td>
                            <td style="border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                            <td style="border-bottom: 1px solid #000;"></td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? item.sigDates[0] : ''}</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? item.sigDates[1] : ''}</td>
                            <td style="text-align: center;">${(item.sigDates && item.sigDates[2]) ? item.sigDates[2] : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm09(item) {
    let rowsHtml = '';
    let logIndex = 0;

    for (let i = 0; i < 28; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            let align = (j === 1 || j === 5) ? 'left' : 'center';
            let padding = (j === 1 || j === 5) ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding}">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 28px;">${cells}</tr>`;
    }

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const loc = (item.metadata && item.metadata.loc) ? item.metadata.loc : 'ฝ่ายผลิต';

    return `
        <div class="sheet-container portrait-sheet" style="page-break-after: always; margin: 0; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ใบบันทึกประวัติการซ่อมเครื่องจักรนิ่มมัด
                    </div>
                    
                    <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                        <div style="font-weight: bold;">FMT-10 Re#0</div>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">
                        <b>Machine No</b> ${mNo}
                    </div>
                    <div style="flex: 1; padding: 6px 10px; font-weight: bold;">
                        <b>Location</b> ${loc}
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ว/ด/ป</th>
                        <th style="border: 1px solid #000; background: #fff;">รายละเอียด</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ซ่อม</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">PM</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ผู้ปฏิบัติ</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
                <div style="width: 320px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm10(item) {
    let rowsHtml = '';
    let logIndex = 0;

    for (let i = 0; i < 28; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            let align = (j === 1 || j === 5) ? 'left' : 'center';
            let padding = (j === 1 || j === 5) ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding}">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 28px;">${cells}</tr>`;
    }

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const loc = (item.metadata && item.metadata.loc) ? item.metadata.loc : 'ฝ่ายผลิต';

    return `
        <div class="sheet-container portrait-sheet" style="page-break-after: always; margin: 0; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ใบบันทึกประวัติการซ่อมเครื่องจักรนิ่มมัด
                    </div>
                    
                    <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                        <div style="font-weight: bold;">FMT-10 Re#0</div>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">
                        <b>Machine No</b> ${mNo}
                    </div>
                    <div style="flex: 1; padding: 6px 10px; font-weight: bold;">
                        <b>Location</b> ${loc}
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ว/ด/ป</th>
                        <th style="border: 1px solid #000; background: #fff;">รายละเอียด</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ซ่อม</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">PM</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">ผู้ปฏิบัติ</th>
                        <th style="border: 1px solid #000; width: 80px; background: #fff;">หมายเหตุ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
                <div style="width: 320px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}
