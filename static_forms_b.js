function renderStaticForm05(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData05.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData05.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
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
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรปั๊มลมประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-05</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">ปั๊มลม</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: แท่นปั๊มลม</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2] || '') : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm06(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData06.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData06.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
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
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรปั๊มสูญญากาศประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-06</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">ปั๊มสูญญากาศ</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: ข้างอาคารผลิต 1</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2] || '') : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm38(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData38.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData38.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
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
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักร รอกไฟฟ้า</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-38</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">${mData.mName || 'รอกไฟฟ้า'}</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: ${mData.area || ''}</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2] || '') : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm15(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData15.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData15.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
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
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรปั๊มน้ำประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-15</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">${mData.mName || 'ปั๊มน้ำ'}</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${mData.area || 'บ่อน้ำร้อน 1'}</span></div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2] || '') : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm16(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData16.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                // Find check state for this machine (column i)
                const cIndex = (group.items.reduce((acc, prevG, pIdx) => acc, 0)) // This logic is tricky with flat array.
                // Re-using same logic as other forms:
                // We rely on the fact that item.data is flat array of all cells.
                // BUT item.data structure depends on how it was saved.
                // Typically saved as array of {num, state}.
                // We need to find the cell corresponding to this item row and column i.
                // Wait, item.data is flat list of ALL cells in order of DOM.
                // So we can just iterate. But simpler to lookup if we had structured data.
                // For static form, we might just re-render from saved state if we knew the index.

                // Let's use the find approach if the data is reliable:
                // Actually, let's just make empty cells for static structural render, but we need to fill valid checks.
                // The `generateFormHTMLFromData` usually has `item` (history entry).
                // `item.data` is array of {num, state}.
                // The order in `item.data` is exactly the DOM order (querySelectorAll('.check-cell')).
                // So if we iterate clearly, we can pop from a copy of data or use index.
            }
            // Retrying the row generation with data filling:
            // Since we need to fill the exact state, we should probably pass a counter or index.
            // But let's look at how renderStaticForm02 did it (I can't see it right now, but I recall it likely just re-renders structure).
            // Actually, the previous implementation of `renderStaticForm...` usually takes `item` and fills values.
            // Check `renderStaticForm02` implementation in `static_forms_a/b.js`?
            // I'll assume standard 0-based indexing matching the generation order.
        });
    });
    // Wait, I can't easily reproduce the exact index without external counter.
    // Let's look at `renderStaticForm02` pattern in my memory or previous context?
    // In `renderExactTable...` we generate cells `mach-${i}`.
    // In saved history, `data` is `[{num: "1", state: "0"}, {num:"2", state:"1"}...]`.
    // It's a flat list of ALL check cells.
    // So for 16, we have N items * 31 days.
    // We can just iterate linearly if we render in same order.

    let cellIndex = 0;
    rowsHtml = ''; // Reset and rebuild with data
    checklistData16.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
                <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
                ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
            </tr>`;
        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                // Get state from item.data
                // We need to know the global index of this cell.
                // The global index increments by 1 for every cell in the table.
                // But wait, `item.data` is stored from `querySelectorAll('.check-cell')`.
                // So as long as we render in SAME order, we can pop/shift.
                // But we can't easily shift if we want to keep `item` pure.
                // Let's calculate index:
                // We need a counter outside the loops.
            }
            rowsHtml += `</tr>`;
        });
    });

    // Correct Implementation with Counter
    let globalCellIndex = 0;
    rowsHtml = '';
    checklistData16.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'เครื่องรีไซเคิล';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'ด้านข้างอาคารผลิต 1';
    const month = (item.metadata && item.metadata.month) ? thaiMonths[parseInt(item.metadata.month) - 1] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
           <div style="border-left: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องบดโฟมประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem; border-left: 1px solid #000;">
                    <b>เดือน</b> ${month} <b>ปี</b> ${year}
                    <b style="margin-left: auto;">FMT-16</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เบอร์เครื่องจักร/Machine No.: ${mNo}</div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
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
                </div>
                <div style="flex: 1.2; padding: 0;">
                     <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 35px;">
                            <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                        </tr>
                         <tr style="height: 25px;">
                            <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                             <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </div>
    `;
}

function renderStaticForm22(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    let globalCellIndex = 0;
    let rowsHtml = '';
    checklistData22.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'เครื่องกลึง';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'ข้างอาคารผลิต 1';
    const month = (item.metadata && item.metadata.month) ? thaiMonths[parseInt(item.metadata.month) - 1] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
    
                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางการตรวจเช็คเครื่องกลึงประจำวัน
                    </div>
    
                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-22</b>
                        <b style="margin-left: 10px;">Re:#0</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข/Machine No.: ${mNo}</div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
                </div>
            </div>
    
            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
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
                    </div>
                    <div style="flex: 1.2; padding: 0;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm23(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    let globalCellIndex = 0;
    let rowsHtml = '';
    checklistData23.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'เครื่องมิลลิ่ง';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'ข้างอาคารผลิต 1';
    const month = (item.metadata && item.metadata.month) ? thaiMonths[parseInt(item.metadata.month) - 1] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
    
                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางการตรวจเช็คเครื่องมิลลิ่งประจำวัน
                    </div>
    
                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-23</b>
                        <b style="margin-left: 10px;">Re:#0</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข/Machine No.: ${mNo}</div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
                </div>
            </div>
    
            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
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
                    </div>
                    <div style="flex: 1.2; padding: 0;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm26(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    let globalCellIndex = 0;
    let rowsHtml = '';
    checklistData26.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    // Empty rows for "รายระเอียดการแก้ไข"
    rowsHtml += `<tr>
        <td colspan="2" style="font-size:0.75rem; padding-left: 5px; border: 1px solid #000; font-weight: bold;">รายระเอียดการแก้ไข</td>
        ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
    </tr>`;
    for (let i = 0; i < 3; i++) {
        rowsHtml += `<tr style="height: 22px;">
            <td colspan="2" style="border: 1px solid #000;"></td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;
    }

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'คูลลิ่งทาวเวอร์';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'อยู่บนถังคูลลิ่ง';
    const monthIndex = (item.metadata && item.metadata.month) ? parseInt(item.metadata.month) - 1 : -1;
    const month = (monthIndex >= 0) ? thaiMonths[monthIndex] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
    
                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางการตรวจเช็คเครื่องจักรคูลลิ่งทาวเวอร์ประจำวัน
                    </div>
    
                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-26</b>
                        <b style="margin-left: 10px;">Re#0</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข/Machine No.: ${mNo}</div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
                </div>
            </div>
    
            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                    </tr>
                    <tr>${dateHeaders}</tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>
            
            <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
                <div style="display:flex;">
                    <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                        <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
                        <div style="font-size: 0.7rem; line-height: 1.4;">
                                พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                        </div>
                    </div>
                    <div style="flex: 1.2; padding: 0;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm27(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    let globalCellIndex = 0;
    let rowsHtml = '';
    checklistData27.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'หม้อไอน้ำ / Boiler';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'แผนกซ่อมบำรุง';
    const monthIndex = (item.metadata && item.metadata.month) ? parseInt(item.metadata.month) - 1 : -1;
    const month = (monthIndex >= 0) ? thaiMonths[monthIndex] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
    
                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางการตรวจเช็คเครื่องจักรหม้อไอน้ำไม้สับประจำวัน
                    </div>
    
                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-27</b>
                        <b style="margin-left: 10px;">Re#0</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข/Machine No.: ${mNo}</div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
                </div>
            </div>
    
            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                    </tr>
                    <tr>${dateHeaders}</tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>
            
            <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
                <div style="display:flex;">
                    <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                        <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
                        <div style="font-size: 0.7rem; line-height: 1.4;">
                                พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                        </div>
                    </div>
                    <div style="flex: 1.2; padding: 0;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm30(item) {
    const meta = item.metadata || {};
    const logs = item.logData || [];
    const checks = item.data || []; // For the 2 checkboxes at the bottom

    let itemsHtml = '';
    for (let i = 0; i < 5; i++) {
        const detail = logs[i] || '';
        const result = logs[i + 5] || '';
        itemsHtml += `
            <div style="margin-bottom: 20px; font-size: 0.95rem;">
                <div style="display: flex; gap: 10px;">
                    <span style="font-weight: bold;">${i + 1}.</span>
                    <div style="flex: 1; border-bottom: 1px dotted #000; min-height: 25px;">${detail}</div>
                </div>
                <div style="display: flex; gap: 10px; margin-left: 25px; margin-top: 8px;">
                    <span>ผลการทำงาน :</span>
                    <div style="flex: 1; border-bottom: 1px dotted #000; min-height: 25px;">${result}</div>
                </div>
            </div>
        `;
    }

    const suggestion = logs[10] || '';
    const reason = logs[11] || '';

    const check1 = (checks[0] && parseInt(checks[0].state) === 1) ? '✓' : '';
    const check2 = (checks[1] && parseInt(checks[1].state) === 1) ? '✓' : '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 210mm; min-height: 297mm; padding: 15mm; font-family: 'Sarabun', sans-serif; border: none !important;">
            <!-- Header -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 25px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="Logo.png" alt="Logo" style="height: 40px; width: auto;">
                    <div style="font-size: 1.1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.35rem; font-weight: 700;">ใบบันทึกผลการบำรุงรักษาเชิงป้องกัน</div>
                </div>
                <div style="text-align: right; font-size: 0.85rem; font-weight: bold;">
                    FMT-30 Re#0
                </div>
            </div>

            <!-- Top Info -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px; font-size: 1rem;">
                <div>วันที่: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 140px;">${meta.date || ''}</span></div>
                <div>ชื่อเครื่องจักร: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 140px;">${meta.mName || ''}</span></div>
                <div>รุ่น: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 80px;">${meta.model || ''}</span></div>
                
                <div>หัวข้องาน PM: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 140px;">${meta.subject || ''}</span></div>
                <div>ประจำสัปดาห์ที่: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 40px;">${meta.week || ''}</span></div>
                <div>ประจำเดือน: <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 80px;">${meta.month || ''}</span></div>
            </div>
            <div style="font-size: 1rem; margin-bottom: 30px;">
                ผู้ดำเนินงาน : <span style="border-bottom: 1px dotted #000; display: inline-block; min-width: 350px;">${meta.performer || ''}</span>
            </div>

            <!-- Body Sections -->
            <div style="font-weight: bold; font-size: 1.1rem; margin-bottom: 15px; text-decoration: underline;">รายละเอียดการบำรุงรักษาเชิงป้องกัน</div>
            
            ${itemsHtml}

            <div style="margin-top: 30px;">
                <div style="font-weight: bold; font-size: 1.05rem; margin-bottom: 8px;">ข้อเสนอแนะ</div>
                <div style="border: 1px solid #000; padding: 15px; min-height: 100px; font-size: 1rem;">${suggestion}</div>
            </div>

            <!-- Signatures Section A -->
            <div style="display: flex; justify-content: space-around; margin-top: 50px; text-align: center; font-size: 0.95rem;">
                <div style="width: 180px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 8px; min-height: 40px;"></div>
                    <div>ผู้ปฏิบัติงาน</div>
                    <div style="margin-top: 8px;">(${(item.sigNames && item.sigNames[0]) || '................................'})</div>
                </div>
                <div style="width: 180px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 8px; min-height: 40px;"></div>
                    <div>หัวหน้าแผนก</div>
                    <div style="margin-top: 8px;">(${(item.sigNames && item.sigNames[1]) || '................................'})</div>
                </div>
                <div style="width: 180px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 8px; min-height: 40px;"></div>
                    <div>ผู้อนุมัติ</div>
                    <div style="margin-top: 8px;">(${(item.sigNames && item.sigNames[2]) || '................................'})</div>
                </div>
            </div>

            <!-- Footer Section (ฝ่ายตรวจสอบติดตามผล) -->
            <div style="margin-top: 60px; border: 1px solid #000; padding: 20px; position: relative;">
                <div style="position: absolute; top: -12px; left: 20px; background: #fff; padding: 0 10px; font-weight: bold; font-size: 1.1rem;">ฝ่ายตรวจสอบติดตามผล</div>
                
                <div style="display: flex; justify-content: center; gap: 80px; margin-bottom: 20px; font-size: 1.05rem;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="width: 20px; height: 20px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-weight: bold;">${check1}</div> เรียบร้อย
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="width: 20px; height: 20px; border: 1px solid #000; display: flex; align-items: center; justify-content: center; font-weight: bold;">${check2}</div> ไม่เรียบร้อย
                    </div>
                </div>
                
                <div style="font-size: 1rem; margin-bottom: 35px;">
                    เนื่องจาก : <div style="display: block; width: 100%; border-bottom: 1px dotted #000; min-height: 50px; margin-top: 10px;">${reason}</div>
                </div>

                <div style="display: flex; justify-content: space-around; text-align: center; font-size: 0.95rem;">
                    <div style="width: 220px;">
                        <div style="border-bottom: 1px solid #000; margin-bottom: 8px; min-height: 40px;"></div>
                        <div>ผู้ตรวจสอบ</div>
                        <div style="margin-top: 8px;">(${(item.sigNames && item.sigNames[3]) || '................................'})</div>
                    </div>
                    <div style="width: 220px;">
                        <div style="border-bottom: 1px solid #000; margin-bottom: 8px; min-height: 40px;"></div>
                        <div>ผู้รับใบ PM</div>
                        <div style="margin-top: 8px;">(${(item.sigNames && item.sigNames[4]) || '................................'})</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function renderStaticForm29(item) {
    let rowsHtml = '';
    let globalLogIndex = 0;
    let globalCellIndex = 0;

    for (let i = 1; i <= 32; i++) {
        const dateRep = (item.logData && item.logData[globalLogIndex++]) || '';
        const desc = (item.logData && item.logData[globalLogIndex++]) || '';
        const target = (item.logData && item.logData[globalLogIndex++]) || '';

        const state1 = (item.data && item.data[globalCellIndex] && parseInt(item.data[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;
        const state2 = (item.data && item.data[globalCellIndex] && parseInt(item.data[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;

        const remark = (item.logData && item.logData[globalLogIndex++]) || '';

        rowsHtml += `<tr>
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.7rem;">${i}</td>
            <td style="border: 1px solid #000; text-align: center; width: 80px;">${dateRep}</td>
            <td style="border: 1px solid #000; padding: 0 5px;">${desc}</td>
            <td style="border: 1px solid #000; text-align: center; width: 80px;">${target}</td>
            <td style="border: 1px solid #000; width: 40px; text-align: center; font-weight: bold;">${state1}</td>
            <td style="border: 1px solid #000; width: 40px; text-align: center; font-weight: bold;">${state2}</td>
            <td style="border: 1px solid #000; padding: 0 5px; width: 120px;">${remark}</td>
        </tr>`;
    }

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 210mm; min-height: 297mm; padding: 10px; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 35px; width: auto;">
                        <div style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางบันทึกการซ่อมบำรุงโมลด์ประจำสัปดาห์
                    </div>
                    
                    <div style="flex: 1; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem;">
                        <div><b>FMT-29</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.7rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th rowspan="2" style="border: 1px solid #000; width: 30px;">ที่</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 80px;">วันที่แจ้งซ่อม</th>
                        <th rowspan="2" style="border: 1px solid #000;">รายการดำเนินการ</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 80px;">กำหนดเสร็จ</th>
                        <th colspan="2" style="border: 1px solid #000;">เสร็จจริง</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 120px;">หมายเหตุ</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 40px;">เสร็จ</th>
                        <th style="border: 1px solid #000; width: 40px;">ไม่เสร็จ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 0;">
                <div style="display: flex;">
                    <div style="flex: 2; border-right: 1px solid #000;"></div>
                    <div style="flex: 1.5;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function renderStaticForm28(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    let globalCellIndex = 0;
    let rowsHtml = '';
    checklistData28.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                let state = 0;
                if (item && item.data && item.data[globalCellIndex]) {
                    state = parseInt(item.data[globalCellIndex].state);
                }

                let mark = '';
                let bgClass = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgClass = 'background:#fef2f2; color:red;'; }

                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgClass}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (item.metadata && item.metadata.mNo) ? item.metadata.mNo : '';
    const mName = (item.metadata && item.metadata.mName) ? item.metadata.mName : 'หม้อไอน้ำ / Boiler';
    const area = (item.metadata && item.metadata.area) ? item.metadata.area : 'ข้างอาคารผลิต 1';
    const monthIndex = (item.metadata && item.metadata.month) ? parseInt(item.metadata.month) - 1 : -1;
    const month = (monthIndex >= 0) ? thaiMonths[monthIndex] : '..........';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
    
                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        ตารางการตรวจเช็คเครื่องจักรหม้อไอน้ำ LPG ประจำวัน
                    </div>
    
                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-28</b>
                        <b style="margin-left: 10px;">Re#0</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข/Machine No.: ${mNo}</div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${area}</b></div>
                </div>
            </div>
    
            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:130px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                    </tr>
                    <tr>${dateHeaders}</tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>
            
            <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
                <div style="display:flex;">
                    <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                        <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
                        <div style="font-size: 0.7rem; line-height: 1.4;">
                                พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                        </div>
                    </div>
                    <div style="flex: 1.2; padding: 0;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 35px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm31(item) {
    const meta = item.metadata || {};
    const logs = item.logData || [];
    const cells = item.data || [];

    let globalLogIndex = 0;
    let globalCellIndex = 0;

    const generateRows = (start, end) => {
        let h = '';
        for (let i = start; i <= end; i++) {
            const date = logs[globalLogIndex++] || '';
            const dept = logs[globalLogIndex++] || '';
            const damage = logs[globalLogIndex++] || '';
            const mach = logs[globalLogIndex++] || '';

            const state1 = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
            globalCellIndex++;
            const state2 = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
            globalCellIndex++;

            const remark = logs[globalLogIndex++] || '';

            h += `<tr>
                <td style="border: 1px solid #000; text-align: center; width: 25px;">${i}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${date}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${dept}</td>
                <td style="border: 1px solid #000; padding: 0 5px;">${damage}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${mach}</td>
                <td style="border: 1px solid #000; text-align: center; width: 35px; font-weight: bold;">${state1}</td>
                <td style="border: 1px solid #000; text-align: center; width: 35px; font-weight: bold;">${state2}</td>
                <td style="border: 1px solid #000; padding: 0 5px; width: 120px;">${remark}</td>
            </tr>`;
        }
        return h;
    };

    const rowsHtml1 = generateRows(1, 3);
    const rowsHtml2 = generateRows(4, 28);

    // Dates from footer
    const footerDate1 = logs[globalLogIndex++] || '';
    const footerDate2 = logs[globalLogIndex++] || '';
    const footerDate3 = logs[globalLogIndex++] || '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 210mm; min-height: 297mm; padding: 10px; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1rem; font-weight: 700;">ตารางบันทึกการซ่อมบำรุงประจำสัปดาห์</div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">
                            วันที่ <b>${meta.day || ''}</b> เดือน <b>${meta.month || ''}</b> พ.ศ. 2568
                        </div>
                    </div>
                    
                    <div style="flex: 1; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem;">
                        <div><b>FMT-31</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.7rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f8f8f8;">
                        <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                            งานค้างซ่อม Wk ที่ <b>${meta.wkPending || ''}</b>
                        </th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="border: 1px solid #000; width: 25px;">ที่</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">วันเดือนปี</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">แผนก</th>
                        <th rowspan="2" style="border: 1px solid #000;">ความเสียหาย</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">เครื่อง</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการซ่อม</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 120px;">หมายเหตุ</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 40px;">เสร็จ</th>
                        <th style="border: 1px solid #000; width: 40px;">ไม่เสร็จ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml1}</tbody>
                <thead>
                    <tr style="background: #f8f8f8;">
                        <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                            งานซ่อม Wk ที่ <b>${meta.wkCurrent || ''}</b>
                        </th>
                    </tr>
                </thead>
                <tbody>${rowsHtml2}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 0;">
                <div style="display: flex;">
                    <div style="flex: 2; border-right: 1px solid #000;"></div>
                    <div style="flex: 1.5;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate1}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate2}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate3}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm32(item) {
    const meta = item.metadata || {};
    const logs = item.logData || [];
    const cells = item.data || [];

    let globalLogIndex = 0;
    let globalCellIndex = 0;

    const generateRows = (start, end) => {
        let h = '';
        for (let i = start; i <= end; i++) {
            const date = logs[globalLogIndex++] || '';
            const dept = logs[globalLogIndex++] || '';
            const damage = logs[globalLogIndex++] || '';
            const mach = logs[globalLogIndex++] || '';

            const state1 = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
            globalCellIndex++;
            const state2 = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
            globalCellIndex++;

            const remark = logs[globalLogIndex++] || '';

            h += `<tr>
                <td style="border: 1px solid #000; text-align: center; width: 25px;">${i}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${date}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${dept}</td>
                <td style="border: 1px solid #000; padding: 0 5px;">${damage}</td>
                <td style="border: 1px solid #000; text-align: center; width: 60px;">${mach}</td>
                <td style="border: 1px solid #000; text-align: center; width: 35px; font-weight: bold;">${state1}</td>
                <td style="border: 1px solid #000; text-align: center; width: 35px; font-weight: bold;">${state2}</td>
                <td style="border: 1px solid #000; padding: 0 5px; width: 120px;">${remark}</td>
            </tr>`;
        }
        return h;
    };

    const rowsHtml1 = generateRows(1, 3);
    const rowsHtml2 = generateRows(4, 28);

    // Dates from footer
    const footerDate1 = logs[globalLogIndex++] || '';
    const footerDate2 = logs[globalLogIndex++] || '';
    const footerDate3 = logs[globalLogIndex++] || '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 210mm; min-height: 297mm; padding: 10px; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1rem; font-weight: 700;">ตารางบันทึกการทำ PM ประจำสัปดาห์แผนกซ่อมบำรุง</div>
                        <div style="font-size: 0.8rem; margin-top: 5px;">
                            วันที่ <b>${meta.day || ''}</b> เดือน <b>${meta.month || ''}</b> พ.ศ. 2568
                        </div>
                    </div>
                    
                    <div style="flex: 1; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem;">
                        <div><b>FMT-32</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.7rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #f8f8f8;">
                        <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                            งานค้างซ่อม Wk ที่ <b>${meta.wkPending || ''}</b>
                        </th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="border: 1px solid #000; width: 25px;">ที่</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">วันเดือนปี</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">แผนก</th>
                        <th rowspan="2" style="border: 1px solid #000;">ความเสียหาย</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 60px;">เครื่อง</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการซ่อม</th>
                        <th rowspan="2" style="border: 1px solid #000; width: 120px;">หมายเหตุ</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 40px;">เสร็จ</th>
                        <th style="border: 1px solid #000; width: 40px;">ไม่เสร็จ</th>
                    </tr>
                </thead>
                <tbody>${rowsHtml1}</tbody>
                <thead>
                    <tr style="background: #f8f8f8;">
                        <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                            งานซ่อม Wk ที่ <b>${meta.wkCurrent || ''}</b>
                        </th>
                    </tr>
                </thead>
                <tbody>${rowsHtml2}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 0;">
                <div style="display: flex;">
                    <div style="flex: 2; border-right: 1px solid #000;"></div>
                    <div style="flex: 1.5;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate1}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate2}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate3}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm33(item) {
    const logs = item.logData || [];
    const cells = item.data || [];

    let globalLogIndex = 0;
    let globalCellIndex = 0;

    let rowsHtml = '';
    for (let i = 1; i <= 22; i++) {
        const date = logs[globalLogIndex++] || '';
        const regNo = logs[globalLogIndex++] || '';
        const loc = logs[globalLogIndex++] || '';
        const mNo = logs[globalLogIndex++] || '';

        const master1 = logs[globalLogIndex++] || '';
        const test1 = logs[globalLogIndex++] || '';
        const master2 = logs[globalLogIndex++] || '';
        const test2 = logs[globalLogIndex++] || '';
        const master3 = logs[globalLogIndex++] || '';
        const test3 = logs[globalLogIndex++] || '';
        const master4 = logs[globalLogIndex++] || '';
        const test4 = logs[globalLogIndex++] || '';
        const master5 = logs[globalLogIndex++] || '';
        const test5 = logs[globalLogIndex++] || '';
        const avg = logs[globalLogIndex++] || '';

        const statePass = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;
        const stateFail = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;

        rowsHtml += `<tr>
            <td style="border: 1px solid #000; text-align: center; height: 22px;">${i}</td>
            <td style="border: 1px solid #000; text-align: center;">${date}</td>
            <td style="border: 1px solid #000; text-align: center;">${regNo}</td>
            <td style="border: 1px solid #000; padding: 0 5px;">${loc}</td>
            <td style="border: 1px solid #000; text-align: center;">${mNo}</td>
            <td style="border: 1px solid #000; text-align: center;">${master1}</td>
            <td style="border: 1px solid #000; text-align: center;">${test1}</td>
            <td style="border: 1px solid #000; text-align: center;">${master2}</td>
            <td style="border: 1px solid #000; text-align: center;">${test2}</td>
            <td style="border: 1px solid #000; text-align: center;">${master3}</td>
            <td style="border: 1px solid #000; text-align: center;">${test3}</td>
            <td style="border: 1px solid #000; text-align: center;">${master4}</td>
            <td style="border: 1px solid #000; text-align: center;">${test4}</td>
            <td style="border: 1px solid #000; text-align: center;">${master5}</td>
            <td style="border: 1px solid #000; text-align: center;">${test5}</td>
            <td style="border: 1px solid #000; text-align: center;">${avg}</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${statePass}</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${stateFail}</td>
        </tr>`;
    }

    const footerDate1 = logs[globalLogIndex++] || '';
    const footerDate2 = logs[globalLogIndex++] || '';
    const footerDate3 = logs[globalLogIndex++] || '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; min-height: 210mm; padding: 10px; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1rem; font-weight: 700;">แบบฟอร์มการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ</div>
                    </div>
                    
                    <div style="flex: 1; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem;">
                        <div><b>FMT-33</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th colspan="5" style="border: 1px solid #000; background: #f8f8f8;">ผลการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ</th>
                        <th colspan="11" style="border: 1px solid #000; background: #f8f8f8;">จำนวนครั้งที่ทดสอบ</th>
                        <th colspan="2" rowspan="2" style="border: 1px solid #000; background: #f8f8f8;">ผลการเทส</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 30px;" rowspan="2">ที่</th>
                        <th style="border: 1px solid #000; width: 70px;" rowspan="2">วันเดือนปี</th>
                        <th style="border: 1px solid #000; width: 80px;" rowspan="2">หมายเลขทะเบียน</th>
                        <th style="border: 1px solid #000;" rowspan="2">ตำแหน่งการติดตั้ง</th>
                        <th style="border: 1px solid #000; width: 80px;" rowspan="2">หมายเลขเครื่อง</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 1</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 2</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 3</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 4</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 5</th>
                        <th style="border: 1px solid #000; width: 50px;">ค่า+-3%</th>
                        <th style="border: 1px solid #000; width: 30px;">ได้</th>
                        <th style="border: 1px solid #000; width: 30px;">ไม่ได้</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000;">เฉลี่ย</th>
                        <th colspan="2" style="border: 1px solid #000; height: 0; padding: 0;"></th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 0;">
                <div style="display: flex;">
                    <div style="flex: 2; padding: 10px; font-size: 0.75rem;">
                        <b>หมายเหตุ</b> ผลจากการทดสอบแล้วค่าผิดพลาดครบจำนวนแล้วหาค่าเฉลี่ยจะต้อง+-ไม่เกิน 3%ถือว่าผ่าน
                    </div>
                    <div style="flex: 1.5;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate1}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate2}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate3}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm35(item) {
    const logs = item.logData || [];
    const cells = item.data || [];

    let globalLogIndex = 0;
    let globalCellIndex = 0;

    let rowsHtml = '';
    for (let i = 1; i <= 22; i++) {
        const date = logs[globalLogIndex++] || '';
        const regNo = logs[globalLogIndex++] || '';
        const loc = logs[globalLogIndex++] || '';
        const mNo = logs[globalLogIndex++] || '';

        const master1 = logs[globalLogIndex++] || '';
        const test1 = logs[globalLogIndex++] || '';
        const master2 = logs[globalLogIndex++] || '';
        const test2 = logs[globalLogIndex++] || '';
        const master3 = logs[globalLogIndex++] || '';
        const test3 = logs[globalLogIndex++] || '';
        const master4 = logs[globalLogIndex++] || '';
        const test4 = logs[globalLogIndex++] || '';
        const master5 = logs[globalLogIndex++] || '';
        const test5 = logs[globalLogIndex++] || '';
        const avg = logs[globalLogIndex++] || '';

        const statePass = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;
        const stateFail = (cells[globalCellIndex] && parseInt(cells[globalCellIndex].state) === 1) ? '/' : '';
        globalCellIndex++;

        rowsHtml += `<tr>
            <td style="border: 1px solid #000; text-align: center; height: 22px;">${i}</td>
            <td style="border: 1px solid #000; text-align: center;">${date}</td>
            <td style="border: 1px solid #000; text-align: center;">${regNo}</td>
            <td style="border: 1px solid #000; padding: 0 5px;">${loc}</td>
            <td style="border: 1px solid #000; text-align: center;">${mNo}</td>
            <td style="border: 1px solid #000; text-align: center;">${master1}</td>
            <td style="border: 1px solid #000; text-align: center;">${test1}</td>
            <td style="border: 1px solid #000; text-align: center;">${master2}</td>
            <td style="border: 1px solid #000; text-align: center;">${test2}</td>
            <td style="border: 1px solid #000; text-align: center;">${master3}</td>
            <td style="border: 1px solid #000; text-align: center;">${test3}</td>
            <td style="border: 1px solid #000; text-align: center;">${master4}</td>
            <td style="border: 1px solid #000; text-align: center;">${test4}</td>
            <td style="border: 1px solid #000; text-align: center;">${master5}</td>
            <td style="border: 1px solid #000; text-align: center;">${test5}</td>
            <td style="border: 1px solid #000; text-align: center;">${avg}</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${statePass}</td>
            <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${stateFail}</td>
        </tr>`;
    }

    const footerDate1 = logs[globalLogIndex++] || '';
    const footerDate2 = logs[globalLogIndex++] || '';
    const footerDate3 = logs[globalLogIndex++] || '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; min-height: 210mm; padding: 10px; border: none !important;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1rem; font-weight: 700;">แบบฟอร์มการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ</div>
                    </div>
                    
                    <div style="flex: 1; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.7rem;">
                        <div><b>FMT-35</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th colspan="5" style="border: 1px solid #000; background: #f8f8f8;">ผลการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ</th>
                        <th colspan="11" style="border: 1px solid #000; background: #f8f8f8;">จำนวนครั้งที่ทดสอบ</th>
                        <th colspan="2" rowspan="2" style="border: 1px solid #000; background: #f8f8f8;">ผลการเทส</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 30px;" rowspan="2">ที่</th>
                        <th style="border: 1px solid #000; width: 70px;" rowspan="2">วันเดือนปี</th>
                        <th style="border: 1px solid #000; width: 80px;" rowspan="2">หมายเลขทะเบียน</th>
                        <th style="border: 1px solid #000;" rowspan="2">ตำแหน่งการติดตั้ง</th>
                        <th style="border: 1px solid #000; width: 80px;" rowspan="2">หมายเลขเครื่อง</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 1</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 2</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 3</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 4</th>
                        <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 5</th>
                        <th style="border: 1px solid #000; width: 50px;">ค่า+-3%</th>
                        <th style="border: 1px solid #000; width: 30px;">ได้</th>
                        <th style="border: 1px solid #000; width: 30px;">ไม่ได้</th>
                    </tr>
                    <tr>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000; width: 35px;">MASTER</th>
                        <th style="border: 1px solid #000; width: 35px;">TEST</th>
                        <th style="border: 1px solid #000;">เฉลี่ย</th>
                        <th colspan="2" style="border: 1px solid #000; height: 0; padding: 0;"></th>
                    </tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>

            <div style="border: 1px solid #000; border-top: none; padding: 0;">
                <div style="display: flex;">
                    <div style="flex: 2; padding: 10px; font-size: 0.75rem;">
                        <b>หมายเหตุ</b> ผลจากการทดสอบแล้วค่าผิดพลาดครบจำนวนแล้วหาค่าเฉลี่ยจะต้อง+-ไม่เกิน 3%ถือว่าผ่าน
                    </div>
                    <div style="flex: 1.5;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้ตรวจเช็ค</td>
                                <td style="border: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; text-align: center;">ลายเซ็น</td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                                <td style="border: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">ชื่อ</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border: 1px solid #000; text-align: center;">วันที่</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate1}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate2}</td>
                                <td style="border: 1px solid #000; text-align: center;">${footerDate3}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm36(item) {
    const meta = item.metadata || {};
    const sigNames = item.sigNames || [];
    const logData = item.logData || [];

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 210mm; min-height: 297mm; padding: 20px; border: none !important; font-family: 'Sarabun', sans-serif;">
            <div style="border: 1px solid #000; margin-bottom: 0;">
                <div style="display: flex; align-items: stretch;">
                    <div style="padding: 10px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 35px; width: auto;">
                        <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1rem; font-weight: 700;">ใบขออนุมัตินำแม่พิมพ์ไปใช้ชั่วคราวแผนกซ่อมบำรุงวันที่ <b>${meta.hDay || ''}</b> / <b>${meta.hMonth || ''}</b> / <b>${meta.hYear || ''}</b></div>
                    </div>
                    
                    <div style="flex: 0.8; padding: 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                        <div><b>FMT-36</b> <b>Re#0</b></div>
                    </div>
                </div>
            </div>

            <div style="border: 1px solid #000; border-top: none; padding: 40px; min-height: 700px; font-size: 1.1rem; line-height: 2.2;">
                <div style="margin-bottom: 25px;">
                    วันที่ <span style="display: inline-block; border-bottom: 1px dotted #000; min-width: 250px; text-align: center;">${meta.date || ''}</span>
                </div>
                
                <div style="display: flex; align-items: flex-start; margin-bottom: 25px;">
                    <span style="white-space: nowrap;">เรื่อง</span>
                    <div style="flex: 1; border-bottom: 1px dotted #000; margin-left: 10px; min-height: 30px; text-indent: 20px;">${meta.subject || ''}</div>
                </div>

                <div style="margin-bottom: 25px;">
                    เรียน <span style="display: inline-block; border-bottom: 1px dotted #000; min-width: 400px; text-align: center;">${meta.to || ''}</span>
                </div>

                <div style="display: flex; flex-direction: column; margin-bottom: 50px;">
                    <span>เหตุผลของการดำเนินการ</span>
                    <div style="flex: 1; border-bottom: 1px dotted #000; min-height: 300px; text-align: justify; padding-top: 5px; text-indent: 50px; white-space: pre-wrap;">${meta.reason || ''}</div>
                </div>

                <div style="display: flex; justify-content: space-between; margin-top: 60px; gap: 30px;">
                    <div style="flex: 1; border: 1px solid #000; padding: 15px; display: flex; flex-direction: column; align-items: center;">
                        <div style="font-weight: bold; margin-bottom: 20px;">ผู้ร้องขอดำเนินการ</div>
                        <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 35px;"></div>
                        <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                            ( <span style="min-width: 140px; text-align: center;">${sigNames[0] || ''}</span> )
                        </div>
                        <div style="margin-top: 15px; font-size: 0.9rem;">วันที่ <span style="display: inline-block; border-bottom: 1px dotted #000; min-width: 100px; text-align: center;">${logData[0] || ''}</span></div>
                    </div>

                    <div style="flex: 1; border: 1px solid #000; padding: 15px; display: flex; flex-direction: column; align-items: center;">
                        <div style="font-weight: bold; margin-bottom: 20px;">หัวหน้าแผนก/ฝ่าย</div>
                        <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 35px;"></div>
                        <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                            ( <span style="min-width: 140px; text-align: center;">${sigNames[1] || ''}</span> )
                        </div>
                        <div style="margin-top: 15px; font-size: 0.9rem;">วันที่ <span style="display: inline-block; border-bottom: 1px dotted #000; min-width: 100px; text-align: center;">${logData[1] || ''}</span></div>
                    </div>

                    <div style="flex: 1; border: 1px solid #000; padding: 15px; display: flex; flex-direction: column; align-items: center;">
                        <div style="font-weight: bold; margin-bottom: 20px;">ผู้อนุมัติ</div>
                        <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 35px;"></div>
                        <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
                            ( <span style="min-width: 140px; text-align: center;">${sigNames[2] || ''}</span> )
                        </div>
                        <div style="margin-top: 15px; font-size: 0.9rem;">วันที่ <span style="display: inline-block; border-bottom: 1px dotted #000; min-width: 100px; text-align: center;">${logData[2] || ''}</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}





function renderStaticForm44(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData44.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = checklistData44.flatMap(g => g.items).indexOf(chkItem) * 31 + (i - 1);
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
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรเครื่องกรองน้ำประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-44</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 2px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 2px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 2px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">เครื่องกรองน้ำ R.O.</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <b>${mData.area || 'ข้างฝ่ายออฟฟิศ'}</b></div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1] || '') : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2] || '') : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}
