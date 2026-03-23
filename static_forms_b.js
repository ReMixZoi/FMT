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
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรปั๊มน้ำประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-15</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">${mData.mName || 'ปั๊มน้ำ'}</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${mData.area || 'บ่อน้ำร้อน'}</span></div>
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

        <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
            รายละเอียดการแก้ไข
            <div style="margin-top: 5px;">
                <table style="width: 100%; border-collapse: collapse;">
                    ${(item.remarks && item.remarks.length > 0) ?
            item.remarks.map(c => `<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;">${c}</td></tr>`).join('') :
            Array(5).fill('<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;">&nbsp;</td></tr>').join('')
        }
                </table>
            </div>
        </div>

        <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${cItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const state = (item.data && item.data[globalCellIndex]) ? parseInt(item.data[globalCellIndex].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                rowsHtml += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width:22px;">${content}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });
    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 2px solid #000; margin-bottom: 0;">
            <div class="form-header" style="border: none; border-bottom: 2px solid #000;">
                <div class="logo-box" style="border-right: 2px solid #000; padding: 8px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องบดโฟมประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-16</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 1px solid #000;">เบอร์เครื่องจักร/Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mNo}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">${mName}</span></div>
                <div style="flex: 1.2; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${area}</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size:0.6rem; width:100%; border-top: none;">
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

        <div style="border: 2px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
            รายละเอียดการแก้ไข
            <div style="margin-top: 5px;">
                <table style="width: 100%; border-collapse: collapse;">
                    ${(item.remarks && item.remarks.length > 0) ?
            item.remarks.map(c => `<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;">${c}</td></tr>`).join('') :
            Array(5).fill('<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;">&nbsp;</td></tr>').join('')
        }
                </table>
            </div>
        </div>

        <div style="border: 2px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
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

    const times = [
        "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
        "20:00", "21:00", "22:00", "23:00", "24:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"
    ];

    let rowsHtml = '';
    let globalLogIndex = 0;
    times.forEach(time => {
        rowsHtml += `
            <tr style="height: 22px;">
                <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${time}</td>
                ${Array(21).fill(0).map(() => `<td style="border: 1px solid #000; text-align: center;">${logs[globalLogIndex++] || ''}</td>`).join('')}
            </tr>
        `;
    });

    const dust1 = logs[globalLogIndex++] || '';
    const dust2 = logs[globalLogIndex++] || '';
    const dust3 = logs[globalLogIndex++] || '';

    let blowdownsHtml = '';
    for (let i = 1; i <= 6; i++) {
        blowdownsHtml += `
            <tr>
                <td style="border-bottom: 1px solid #000; border-right: 1px solid #000; padding: 5px; width: 60%;">Blowdown ครั้งที่ ${i}</td>
                <td style="border-bottom: 1px solid #000; padding: 5px;">เวลา <span style="border-bottom: 1px dotted #000; min-width: 40px; display: inline-block;">${logs[globalLogIndex++] || ''}</span> น.</td>
            </tr>
        `;
    }

    const sigDate1 = logs[globalLogIndex++] || '';
    const sigDate2 = logs[globalLogIndex++] || '';
    const sigDate3 = logs[globalLogIndex++] || '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 210mm; font-family: 'Sarabun', sans-serif; border: none !important;">
            <div style="border: 1px solid #000;">
                <!-- Header -->
                <div style="display: flex; border-bottom: 2px solid #000; align-items: stretch;">
                    <div style="flex: 1; padding: 5px 15px; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 35px; width: auto;">
                        <div style="font-size: 0.8rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1.2rem; font-weight: 700;">ใบรายงานการตรวจเช็คหม้อไอน้ำไม้สับประจำวัน</div>
                        <div style="font-size: 1rem; margin-top: 5px;">วันที่ <b>${meta.date || ''}</b></div>
                    </div>
                    <div style="flex: 0.8; padding: 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.85rem; font-weight: bold;">
                        <div>FMT-30 Re#0</div>
                    </div>
                </div>

                <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th rowspan="3" style="border: 1px solid #000; width: 40px;">เวลา</th>
                            <th style="border: 1px solid #000; width: 45px;">แรงดันไอน้ำ</th>
                            <th style="border: 1px solid #000; width: 45px;">ระดับน้ำใน</th>
                            <th colspan="2" style="border: 1px solid #000;">น้ำเข้า Boiler</th>
                            <th colspan="3" style="border: 1px solid #000;">อุณหภูมิ</th>
                            <th colspan="3" style="border: 1px solid #000;">ความถี่มอเตอร์</th>
                            <th style="border: 1px solid #000; width: 45px;">จำนวนรอบ</th>
                            <th style="border: 1px solid #000; width: 45px;">ระดับการ</th>
                            <th rowspan="3" style="border: 1px solid #000; width: 35px;">ค่า TDS<br>(PPM)</th>
                            <th style="border: 1px solid #000; width: 45px;">เชื้อเพลิงถ่าน</th>
                            <th style="border: 1px solid #000; width: 45px;">เชื้อเพลิงไม้</th>
                            <th style="border: 1px solid #000; width: 45px;">อุณหภูมิน้ำ</th>
                            <th style="border: 1px solid #000; width: 45px;">อุณหภูมิ</th>
                            <th style="border: 1px solid #000; width: 45px;">อุณหภูมิ</th>
                            <th style="border: 1px solid #000; width: 45px;">อุณหภูมิ</th>
                            <th rowspan="3" style="border: 1px solid #000;">หมายเหตุ</th>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #000; height: 35px;">7 - 10 (bar)</th>
                            <th style="border: 1px solid #000;">หลอดแก้วที่ 1</th>
                            <th style="border: 1px solid #000;">แรงดันปั๊มน้ำ</th>
                            <th style="border: 1px solid #000;">เลขมิเตอร์</th>
                            <th style="border: 1px solid #000;">ห้องเผาไหม้</th>
                            <th style="border: 1px solid #000;">ออกห้องเผาไหม้</th>
                            <th style="border: 1px solid #000;">น้ำ D-Air</th>
                            <th style="border: 1px solid #000;">พัดลมลูก</th>
                            <th style="border: 1px solid #000;">พัดลมเป่า</th>
                            <th style="border: 1px solid #000;">สายพาน</th>
                            <th style="border: 1px solid #000;">เตาเกรด</th>
                            <th style="border: 1px solid #000;">ปล่อยไม้สับ</th>
                            <th style="border: 1px solid #000;">หิน</th>
                            <th style="border: 1px solid #000;">สับ</th>
                            <th style="border: 1px solid #000;">ฮีต</th>
                            <th style="border: 1px solid #000;">อากาศเข้า</th>
                            <th style="border: 1px solid #000;">อากาศออก</th>
                            <th style="border: 1px solid #000;">ปล่อง Wet</th>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #000;"></th>
                            <th style="border: 1px solid #000;">> 3/4</th>
                            <th style="border: 1px solid #000;">8 - 11 (bar)</th>
                            <th style="border: 1px solid #000;">m³</th>
                            <th style="border: 1px solid #000;">(200 - 500 °C)</th>
                            <th style="border: 1px solid #000;">(150 - 300 °C)</th>
                            <th style="border: 1px solid #000;">(70 - 95 °C)</th>
                            <th style="border: 1px solid #000;">(HZ)</th>
                            <th style="border: 1px solid #000;">(HZ)</th>
                            <th style="border: 1px solid #000;">(HZ)</th>
                            <th style="border: 1px solid #000;">(รอบ/ชั่วโมง)</th>
                            <th style="border: 1px solid #000;">(เซนติเมตร)</th>
                            <th style="border: 1px solid #000;">(กิโลกรัม)</th>
                            <th style="border: 1px solid #000;">(กิโลกรัม)</th>
                            <th style="border: 1px solid #000;">(°C)</th>
                            <th style="border: 1px solid #000;">(°C)</th>
                            <th style="border: 1px solid #000;">(°C)</th>
                            <th style="border: 1px solid #000;">(°C)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>

                <!-- Bottom Section -->
                <div style="display: flex; border-top: 1px solid #000; font-size: 0.7rem; border-collapse: collapse;">
                    <!-- Left: Metadata and Logs -->
                    <div style="flex: 3.5; border-right: 1px solid #000; padding: 5px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
                            <div style="grid-column: span 2;">Boiler Start................................................ Stop................................................ น.
                                <div style="position: relative; margin-top: -18px; margin-left: 60px;">
                                    <b>${meta.start || ''}</b>
                                    <span style="margin-left: 140px;"></span>
                                    <b>${meta.stop || ''}</b>
                                </div>
                            </div>
                            
                            <div style="grid-column: span 2; margin-top: 5px;">ปริมาณน้ำที่ใช้.......................................................................................... m³
                                <div style="position: relative; margin-top: -18px; margin-left: 80px;">
                                    <b>${meta.water || ''}</b>
                                </div>
                            </div>

                            <div style="margin-top: 5px;">ปริมาณถ่านหินที่ใช้.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 90px;">
                                    <b>${meta.coalU || ''}</b>
                                </div>
                            </div>
                            <div style="margin-top: 5px;">ปริมาณถ่านหินที่เหลือ.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 100px;">
                                    <b>${meta.coalR || ''}</b>
                                </div>
                            </div>

                            <div>ปริมาณไม้สับที่ใช้.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 80px;">
                                    <b>${meta.woodU || ''}</b>
                                </div>
                            </div>
                            <div>ปริมาณไม้สับที่เหลือ.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 90px;">
                                    <b>${meta.woodR || ''}</b>
                                </div>
                            </div>

                            <div>ปริมาณแก๊สLPGที่ใช้.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 95px;">
                                    <b>${meta.lpgU || ''}</b>
                                </div>
                            </div>
                            <div>ปริมาณแก๊สLPGที่เหลือ.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 105px;">
                                    <b>${meta.lpgR || ''}</b>
                                </div>
                            </div>

                            <div>ปริมาณกะลาปาล์มที่ใช้.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 105px;">
                                    <b>${meta.palmU || ''}</b>
                                </div>
                            </div>
                            <div>ปริมาณกะลาปาล์มที่เหลือ.................................... ตัน
                                <div style="position: relative; margin-top: -18px; margin-left: 115px;">
                                    <b>${meta.palmR || ''}</b>
                                </div>
                            </div>

                            <div>ตรวจสอบ Safety Valve เมื่อเวลา........................ น.
                                <div style="position: relative; margin-top: -18px; margin-left: 135px;">
                                    <b>${meta.svTime || ''}</b>
                                </div>
                            </div>
                            <div>ตรวจสอบเครื่องควบคุมระดับน้ำเวลา........................ น.
                                <div style="position: relative; margin-top: -18px; margin-left: 135px;">
                                    <b>${meta.wlTime || ''}</b>
                                </div>
                            </div>

                            <div style="grid-column: span 2; display: flex; gap: 10px; margin-top: 5px;">
                                <span>จำนวนฝุ่นDuccollector........................ถุง
                                    <span style="min-width: 60px; display: inline-block; margin-left: -130px; position: relative; bottom: -2px;"><b>${dust1}</b></span>
                                </span>
                                <span>จำนวนฝุ่นปล่องควัน........................ถุง
                                    <span style="min-width: 60px; display: inline-block; margin-left: -110px; position: relative; bottom: -2px;"><b>${dust2}</b></span>
                                </span>
                                <span>จำนวนฝุ่น Slag........................ถุง
                                    <span style="min-width: 60px; display: inline-block; margin-left: -90px; position: relative; bottom: -2px;"><b>${dust3}</b></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Middle: Blowdown -->
                    <div style="flex: 2; border-right: 1px solid #000;">
                        <table style="width: 100%; border-collapse: collapse; height: 100%;">
                            ${[1, 2, 3, 4, 5, 6].map((i, idx) => `
                                <tr>
                                    <td style="border-bottom: 1px solid #000; padding: 2px 5px; font-size: 0.7rem;">
                                        Blowdown ครั้งที่ ${i} เวลา........................ น.
                                        <div style="position: relative; margin-top: -16px; margin-left: 105px;">
                                            <b>${logs[507 + idx] || ''}</b>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <!-- Right: Signatures -->
                    <div style="flex: 4;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center; height: 100%; table-layout: fixed;">
                            <tr style="height: 25px;">
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; font-weight: bold; width: 25%;">ลงชื่อ</td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; font-weight: bold;">ผู้ตรวจเช็ค</td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; font-weight: bold;">ผู้ตรวจสอบ</td>
                                <td style="border-bottom: 1px solid #000; font-weight: bold;">ผู้อนุมัติ</td>
                            </tr>
                            <tr style="height: 40px;">
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; font-weight: bold;">ลายเซ็น</td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                                <td style="border-bottom: 1px solid #000;"></td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; font-weight: bold;">ชื่อ(ตัวบรรจง)</td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                                <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                                <td style="border-bottom: 1px solid #000; padding: 2px;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                            </tr>
                            <tr style="height: 25px;">
                                <td style="border-right: 1px solid #000; font-weight: bold;">วันที่</td>
                                <td style="border-right: 1px solid #000; padding: 2px;">${sigDate1}</td>
                                <td style="border-right: 1px solid #000; padding: 2px;">${sigDate2}</td>
                                <td style="padding: 2px;">${sigDate3}</td>
                            </tr>
                        </table>
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
                            วันที่ <b>${meta.day || ''}</b> เดือน <b>${meta.month || ''}</b> พ.ศ. 2569
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
    const cells = item.data || [];

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData32.flatMap(g => g.items);
    let globalCellIndex = 0;
    let rowsHtml = '';

    checklistData32.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((cItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${cItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${cItem.std}</td>`;
            for (let d = 0; d < 31; d++) {
                let state = 0;
                if (cells[globalCellIndex]) {
                    state = parseInt(cells[globalCellIndex].state);
                }
                let mark = '';
                let bgStyle = '';
                if (state === 1) { mark = '/'; }
                else if (state === 2) { mark = 'X'; bgStyle = 'background:#fef2f2; color:red;'; }
                rowsHtml += `<td style="border: 1px solid #000; text-align: center; font-weight: bold; font-size: 0.8rem; ${bgStyle}">${mark}</td>`;
                globalCellIndex++;
            }
            rowsHtml += `</tr>`;
        });
    });

    const mNo = (meta.mNo) ? meta.mNo : '';
    const mName = (meta.mName) ? meta.mName : '';
    const area = (meta.area) ? meta.area : '';
    const monthIndex = (meta.month) ? parseInt(meta.month) - 1 : -1;
    const month = (monthIndex >= 0) ? thaiMonths[monthIndex] : '..........';
    const year = (meta.year) ? meta.year : '..........';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 297mm; height: 209mm; border: none !important;">
            <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
                <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                    <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                        <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>

                    <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                        แบบตรวจสอบรอบประจำวัน ( Forklift Daily Check List )
                    </div>

                    <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                        <b>เดือน</b> ${month} <b>ปี</b> ${year}
                        <b style="margin-left: auto;">FMT-32</b>
                        <b style="margin-left: 10px;">Re#1</b>
                    </div>
                </div>
                
                <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                    <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <b>${mNo}</b></div>
                    <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <b>${mName}</b></div>
                    <div style="flex: 1.5; padding: 6px 10px;">คันที่ใช้งาน: <b>${area}</b></div>
                </div>
            </div>

            <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
                <thead>
                    <tr>
                        <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                        <th rowspan="2" style="width:50px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                        <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                    </tr>
                    <tr>${dateHeaders}</tr>
                </thead>
                <tbody>${rowsHtml}</tbody>
            </table>
            
            <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
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
                                <td style="border: 1px solid #000; text-align: center; width: 60px;">ลงชื่อ</td>
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

function renderStaticForm19(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center;">${i}</th>`;
    }

    const allItems = checklistData19.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData19.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                const cellIdx = allItems.indexOf(chkItem) * 31 + (i - 1);
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
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางตรวจเช็คสภาพโครงสร้างพื้นฐานประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-19</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border: 1px solid #000; border-top: 1px solid #000; border-left: none; border-right: none; font-size: 0.85rem;">
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อโครงสร้างพื้นฐาน ( Infrastructure Name ) : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;">${mData.mName || ''}</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${mData.area || 'บริเวณโรงงานทั้งหมด'}</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size:0.6rem; width:100%; border-top: none;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดในการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจเช็ค</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.8rem;">
            รายละเอียดการแก้ไข
            <div style="margin-top: 5px;">
                <table style="width: 100%; border-collapse: collapse;">
                    ${(item.remarks && item.remarks.length > 0) ?
            item.remarks.map(c => `<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;">${c}</td></tr>`).join('') :
            Array(4).fill('<tr style="height: 25px;"><td style="border: 1px solid #ccc; padding: 2px;"></td></tr>').join('')
        }
                </table>
            </div>
        </div>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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

function renderStaticForm22(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData22.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData22.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องกลึงประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-22</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;">${mData.mName || ''}</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${mData.area || 'ข้างอาคารผลิต 1'}</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm23(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData23.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData23.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องมิลลิ่งประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-23</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">${mData.mNo || ''}</span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;">${mData.mName || 'เครื่องมิลลิ่ง'}</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">${mData.area || 'ข้างอาคารผลิต 1'}</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 2px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm24(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData24.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData24.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องจักรเครื่องกรองน้ำประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-24</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem; border-bottom: 1px solid #000;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;">${mData.mNo || ''}</span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center;">
                    <b>เครื่องกรองน้ำ RO</b>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; text-align: center;">
                    พื้นที่ติดตั้ง <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">${mData.area || ''}</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 1px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.7rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.65rem;">
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
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[0] ? toThaiDateStr(item.sigDates[0]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[1] ? toThaiDateStr(item.sigDates[1]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[2] ? toThaiDateStr(item.sigDates[2]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm25(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData25.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData25.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องเย็บกระดาษประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-25</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem; border-bottom: 1px solid #000;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;">${mData.mNo || ''}</span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px;">${mData.mName || ''}</span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; text-align: center;">
                    พื้นที่ติดตั้ง <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">${mData.area || ''}</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 1px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; ปกติ &nbsp; / &nbsp; ไม่ปกติ &nbsp; X
                    </div>
                    <div style="font-size: 0.7rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเพื่อนในใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.65rem;">
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
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[0] ? toThaiDateStr(item.sigDates[0]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[1] ? toThaiDateStr(item.sigDates[1]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[2] ? toThaiDateStr(item.sigDates[2]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm27(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData27.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData27.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = (item.data && item.data[cellIdx]) ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องจักรหม้อไอน้ำไม้สับประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-27</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem; border-bottom: 1px solid #000;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;">${mData.mNo || ''}</span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px; font-weight: bold;">${mData.mName || 'หม้อไอน้ำ / Boiler'}</span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; text-align: center;">
                    พื้นที่ติดตั้ง <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">${mData.area || 'แผนกซ่อมบำรุง'}</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 1px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.7rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.65rem;">
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
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[0] ? toThaiDateStr(item.sigDates[0]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[1] ? toThaiDateStr(item.sigDates[1]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[2] ? toThaiDateStr(item.sigDates[2]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm26(item) {
    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; border: 1px solid #000;">${i}</th>`;
    }

    const allItems = checklistData26.flatMap(g => g.items);
    let rowsHtml = '';
    checklistData26.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = (item.data && item.data[cellIdx]) ? parseInt(item.data[cellIdx].state) : 0;
                let content = "";
                let cls = "";
                if (state === 1) { content = "/"; cls = "status-ok"; }
                else if (state === 2) { content = "X"; cls = "status-bad"; }

                cells += `<td style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;" class="${cls}">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${chkItem.name}</td>
                <td style="font-size:0.7rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    const mData = item.metadata || {};
    const monthText = mData.month && mData.year ? thaiMonths[parseInt(mData.month) - 1] + ' / ' + mData.year : '................../..................';

    return `<div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">ตารางการตรวจเช็คเครื่องจักรคูลลิ่งทาวเวอร์ประจำวัน</div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-26</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.85rem; border-bottom: 1px solid #000;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;">${mData.mNo || ''}</span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px; font-weight: bold;">${mData.mName || 'คูลลิ่งทาวเวอร์'}</span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; text-align: center;">
                    พื้นที่ติดตั้ง <span style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">${mData.area || 'อยู่บนถังคูลลิ่ง'}</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:180px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:150px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="border: 1px solid #000;">Date/วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 0; margin-top: 0;">
            <div style="display:flex;">
                <div style="flex: 2; padding: 10px 15px; border-right: 1px solid #000; display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-size: 0.85rem; font-weight: bold;">
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                    </div>
                    <div style="font-size: 0.7rem; line-height: 1.4;">
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้อะไหล่ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
                    </div>
                </div>
                <div style="flex: 1.2; padding: 0;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.65rem;">
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
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[0] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[1] || '' : ''}</span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span style="display: block; text-align: center;">${item.sigNames ? item.sigNames[2] || '' : ''}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[0] ? toThaiDateStr(item.sigDates[0]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[1] ? toThaiDateStr(item.sigDates[1]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">${item.sigDates && item.sigDates[2] ? toThaiDateStr(item.sigDates[2]) : '/&nbsp;&nbsp;&nbsp;/'}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
}

function renderStaticForm31(item) {
    const meta = item.metadata || {};
    const checks = item.data || [];
    const logs = item.logData || [];

    let rowIdx = 0;
    let logIdx = 0;
    let rowsHtml = '';
    checklistData31.forEach(group => {
        rowsHtml += `
            <tr style="background: #eef2f7; height: 25px;">
                <td style="border: 1px solid #000; font-weight: bold; text-align: center;">${group.category.split(' ')[0]}</td>
                <td colspan="7" style="border: 1px solid #000; font-weight: bold; padding-left: 5px;">${group.category}</td>
            </tr>
        `;
        group.items.forEach(itemRow => {
            const mark1 = checks.find(c => c.num == rowIdx)?.state == '1' ? '/' : (checks.find(c => c.num == rowIdx)?.state == '2' ? 'X' : '');
            rowIdx++;
            const mark2 = checks.find(c => c.num == rowIdx)?.state == '1' ? '/' : (checks.find(c => c.num == rowIdx)?.state == '2' ? 'X' : '');
            rowIdx++;

            rowsHtml += `
                <tr style="height: 25px;">
                    <td style="border: 1px solid #000; text-align: center; font-size: 0.75rem;">${itemRow.no}</td>
                    <td style="border: 1px solid #000; padding-left: 5px; font-size: 0.75rem;">${itemRow.name}</td>
                    <td style="border: 1px solid #000; padding-left: 5px; font-size: 0.7rem;">${itemRow.std}</td>
                    <td style="border: 1px solid #000; text-align: center; font-size: 0.75rem;">${itemRow.check}</td>
                    <td style="border: 1px solid #000; width: 35px; text-align: center; font-weight: bold;">${mark1}</td>
                    <td style="border: 1px solid #000; width: 35px; text-align: center; font-weight: bold;">${mark2}</td>
                    <td style="border: 1px solid #000; width: 100px; text-align: center; font-size: 0.75rem;">${logs[logIdx++] || ''}</td>
                    <td style="border: 1px solid #000; width: 120px; text-align: center; font-size: 0.75rem;">${logs[logIdx++] || ''}</td>
                </tr>
            `;
        });
    });

    for (let i = 0; i < 5; i++) {
        const mark1 = checks.find(c => c.num == rowIdx)?.state == '1' ? '/' : (checks.find(c => c.num == rowIdx)?.state == '2' ? 'X' : '');
        rowIdx++;
        const mark2 = checks.find(c => c.num == rowIdx)?.state == '1' ? '/' : (checks.find(c => c.num == rowIdx)?.state == '2' ? 'X' : '');
        rowIdx++;
        rowsHtml += `
            <tr style="height: 25px;">
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000; width: 35px; text-align: center; font-weight: bold;">${mark1}</td>
                <td style="border: 1px solid #000; width: 35px; text-align: center; font-weight: bold;">${mark2}</td>
                <td style="border: 1px solid #000; text-align: center;">${logs[logIdx++] || ''}</td>
                <td style="border: 1px solid #000; text-align: center;">${logs[logIdx++] || ''}</td>
            </tr>
        `;
    }

    return `
        <div class="sheet-container" style="page-break-after: always; font-family: 'Sarabun', sans-serif;">
            <div style="border: 1px solid #000;">
                <div style="display: flex; border-bottom: 2px solid #000; background: #fff8e1; align-items: stretch;">
                    <div style="flex: 1; padding: 5px 15px; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                        <img src="Logo.png" alt="Logo" style="height: 35px; width: auto;">
                        <div style="font-size: 0.85rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                    </div>
                    <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; text-align: center; border-right: 1px solid #000;">
                        <div style="font-size: 1.1rem; font-weight: 700;">INSPECTION AND START UP REPORT ENGINE FIRE PUMP</div>
                    </div>
                    <div style="flex: 0.8; padding: 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.8rem; font-weight: bold;">
                        <div>FMT-31 Re# 1</div>
                    </div>
                </div>

                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 100px;">PUMP MODEL :</td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 150px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.pumpModel || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 50px;">S/N :</td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 120px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.pumpSn || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 60px;">TYPE :</td>
                        <td style="border: 1px solid #ccc; padding: 4px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.type || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 60px;">Date :</td>
                        <td style="border: 1px solid #ccc; padding: 4px; width: 120px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.dateVal || ''}</b></span></td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ccc; padding: 4px;">DRIVEN :</td>
                        <td style="border: 1px solid #ccc; padding: 4px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.driven || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px;">S/N :</td>
                        <td style="border: 1px solid #ccc; padding: 4px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.drivenSn || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px;" colspan="1">JOCKEY PUMP MODEL :</td>
                        <td style="border: 1px solid #ccc; padding: 4px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.jockeyModel || ''}</b></span></td>
                        <td style="border: 1px solid #ccc; padding: 4px;">S/N :</td>
                        <td style="border: 1px solid #ccc; padding: 4px;"><span style="display: block; width: 100%; border-bottom: 1px dotted #000;"><b>${meta.jockeySn || ''}</b></span></td>
                    </tr>
                    <tr>
                        <td colspan="7"></td>
                        <td style="border: 1px solid #ccc; padding: 4px;">Time : <span style="display: inline-block; width: 60px; border-bottom: 1px dotted #000;"><b>${meta.time || ''}</b></span></td>
                    </tr>
                </table>

                <table class="main-table" style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                    <thead style="background: #fdfdfd;">
                        <tr>
                            <th rowspan="2" style="border: 1px solid #000; width: 35px;">No.</th>
                            <th rowspan="2" style="border: 1px solid #000;">DESCRIPTION</th>
                            <th rowspan="2" style="border: 1px solid #000; width: 33%;">เกณฑ์การตรวจสอบ</th>
                            <th rowspan="2" style="border: 1px solid #000; width: 50px;">การตรวจเช็ค</th>
                            <th colspan="2" style="border: 1px solid #000; width: 70px;">สภาพ</th>
                            <th rowspan="2" style="border: 1px solid #000; width: 100px;">บันทึกผล ค่าต่างๆ</th>
                            <th rowspan="2" style="border: 1px solid #000; width: 150px;">หมายเหตุ</th>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #000; width: 35px;">ปกติ</th>
                            <th style="border: 1px solid #000; width: 35px;">แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>

                <div style="display: flex; border-top: 1px solid #000; font-size: 0.75rem; border-collapse: collapse;">
                    <div style="flex: 2; border-right: 1px solid #000; padding: 10px;">
                        <div style="display: flex; gap: 40px; margin-bottom: 10px;">
                            <div>A = ตรวจเช็คก่อนทำการ Run Fire Pump</div>
                            <div>B = ตรวจเช็คระหว่าง Run Fire Pump</div>
                        </div>
                        <div style="display: flex; gap: 40px;">
                            <div>C = ตรวจเช็คก่อนทำการ Run Jockey Pump</div>
                            <div>D = ตรวจเช็คระหว่าง Run Jockey Pump</div>
                        </div>
                        <div style="margin-top: 15px; font-weight: bold;">Note :</div>
                    </div>
                    <div style="flex: 1.5; border-collapse: collapse;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center; height: 100%;">
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; border-top: none; border-left: none; width: 50%;">พนักงานผู้ตรวจสอบ</td>
                                <td style="border: 1px solid #000; border-top: none; border-right: none;">ผู้ตรวจสอบ</td>
                            </tr>
                            <tr style="height: 50px;">
                                <td style="border: 1px solid #000; border-left: none;"></td>
                                <td style="border: 1px solid #000; border-right: none;"></td>
                            </tr>
                            <tr style="height: 30px;">
                                <td style="border: 1px solid #000; border-left: none; border-bottom: none; padding: 2px;">
                                    (<b>${item.sigNames ? item.sigNames[0] || '' : ''}</b>)
                                </td>
                                <td style="border: 1px solid #000; border-right: none; border-bottom: none; padding: 2px;">
                                    (<b>${item.sigNames ? item.sigNames[1] || '' : ''}</b>)
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

