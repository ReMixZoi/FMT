function generateFormHTMLFromData(item) {
    if (item.fmt === 1) return renderStaticForm01(item);
    if (item.fmt === 2) return renderStaticForm02(item);
    if (item.fmt === 3) return renderStaticForm03(item);
    if (item.fmt === 5) return renderStaticForm05(item);
    if (item.fmt === 6) return renderStaticForm06(item);
    if (item.fmt === 38) return renderStaticForm38(item);
    if (item.fmt === 15) return renderStaticForm15(item);
    return renderStaticForm37(item);
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
