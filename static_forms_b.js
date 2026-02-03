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
