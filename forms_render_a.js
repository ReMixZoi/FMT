function renderExactTable37(startNum) {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let machineHeaders = '';
    for (let i = 0; i < 20; i++) {
        let num = startNum + i;
        let isExist = num <= 54;
        machineHeaders += `<th style="width: 28px; text-align: center; cursor: ${isExist ? 'pointer' : 'default'}" ${isExist ? `onclick="toggleColumn(${num})"` : ''}>${isExist ? num : ''}</th>`;
    }

    let rowsHtml = '';
    checklistData37.forEach(group => {
        group.items.forEach((item, idx) => {
            rowsHtml += `<tr>
                ${idx === 0 ? `<td rowspan="${group.items.length}" class="category-cell" style="width: 30px;"><div class="vertical-text" style="font-weight:bold; width: 20px;">${group.category}</div></td>` : ''}
                <td class="col-item" style="font-size:0.75rem; width: 150px; text-align: left; padding-left: 5px;">${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; width: 220px; text-align: left; padding-left: 5px;">${item.std}</td>`;
            for (let i = 0; i < 20; i++) {
                let num = startNum + i;
                let isExist = num <= 54;
                rowsHtml += `<td class="check-cell mach-${num}" data-state="0" data-num="${num}" style="background: ${isExist ? '#fff' : '#f8fafc'}; cursor: ${isExist ? 'pointer' : 'default'}; pointer-events: ${isExist ? 'auto' : 'none'}; border: 1px solid #000;"></td>`;
            }
            rowsHtml += `<td contenteditable="true" class="row-remark" style="width: 60px; border: 1px solid #000;"></td></tr>`;
        });
    });

    div.innerHTML = `
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

        <table class="main-table" style="margin-top: 0; border-top: none; width: 100%;">
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
            <div class="correction-input" contenteditable="true" style="min-height: 40px; border: 1px dashed #ccc; margin-top: 4px; padding: 4px;"></div>
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-size: 0.6rem;">ชื่อ (ตัวบรรจง)</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">
                            <span class="thai-date-display" style="font-size: 0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.6rem;">
                        </td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">
                            <span class="thai-date-display" style="font-size: 0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.6rem;">
                        </td>
                        <td style="text-align: center; padding: 2px;">
                            <span class="thai-date-display" style="font-size: 0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.6rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable04() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 28; i++) {
        rowsHtml += `<tr style="height: 28px;">
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 30px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="text-align: center; font-size: 1.1rem; font-weight: bold; padding: 10px; position: relative;">
            รายการทะเบียนเครื่องจักร
            <div style="position: absolute; top: 10px; right: 0; border: 1px solid #000; padding: 5px 10px; font-size: 0.75rem; font-weight: normal;">
                FMT-04 Rev#0
            </div>
        </div>
        
        <table class="main-table" style="font-size: 0.75rem; border-top: 1px solid #000; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; width: 30px;">ที่</th>
                    <th style="border: 1px solid #000;">ชื่อเครื่องจักร</th>
                    <th style="border: 1px solid #000; width: 80px;">ยี่ห้อ</th>
                    <th style="border: 1px solid #000; width: 80px;">รุ่น</th>
                    <th style="border: 1px solid #000; width: 80px;">ผู้ผลิต</th>
                    <th style="border: 1px solid #000; width: 80px;">ขนาดแรงม้า(HP)</th>
                    <th style="border: 1px solid #000;">หมายเลขเครื่อง</th>
                    <th style="border: 1px solid #000;">เลขทะเบียนเครื่องจักร</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 1.5; padding: 8px; border-right: 1px solid #000;">
                <div style="font-size: 0.75rem; font-weight: bold;">หมายเหตุ</div>
                <div class="correction-input" contenteditable="true" style="min-height: 60px; border: none; margin-top: 4px; padding: 4px;"></div>
            </div>
            <div style="flex: 2;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; height: 100%;">
                    <tr style="height: 28px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้บันทึก</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้ตรวจเช็ค</td>
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                        <td style="text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable02() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData02.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                rowsHtml += `<td class="check-cell mach-${i}" data-state="0" data-num="${i}" style="border: 1px solid #000;"></td>`;
            }
            rowsHtml += `</tr>`;
        });
    });

    div.innerHTML = `
        <div style="border-left: 1px solid #000; margin-bottom: 0;">
            <div class="form-header"  display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องจักรฉีดโฟมประจำวัน
                </div>

                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b>
                    <select class="fmt02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <select class="fmt02-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-02</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">INJECTION MOLDING FOAM</span></div>
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">แผนกผลิต<span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:130px;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:130px;">มาตรฐานการตรวจ</th>
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
        </div>`;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable03() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData03.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item, idx) => {
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                rowsHtml += `<td class="check-cell mach-${i}" data-state="0" data-num="${i}" style="border: 1px solid #000;"></td>`;
            }
            rowsHtml += `</tr>`;
        });
    });

    div.innerHTML = `
        <div style="border-left: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องจักรนิ่งเม็ดประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b>
                    <select class="fmt02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <select class="fmt02-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-03</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">PREEXPANDER FOAM</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">อาคารผลิต 2<span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:130px;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:130px;">มาตรฐานการตรวจ</th>
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
        </div>`;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable01() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    const times = ["08.00", "10.00", "12.00", "14.00", "16.00", "18.00", "20.00", "22.00", "24.00", "02.00", "04.00", "06.00"];

    let rowsHtml = '';
    times.forEach(t => {
        rowsHtml += `<tr>
            <td style="text-align: center; border: 1px solid #000; height: 25px;">${t}</td>
            <!-- Chimney Temp -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            
            <!-- Boiler -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>

            <!-- Pump Cooling P1-P5 -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>

            <!-- RO -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>

            <!-- Water Qty -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>

            <!-- Pressure Tank -->
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; background: #fff;"></td>
        </tr>`;
    });

    div.innerHTML = `
        <div style="border-left: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border: 1px solid #000;">
                 <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ใบรายงานการตรวจเช็คเครื่องจักรต้นกำลัง
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem; border-left: 1px solid #000;">
                    <b>ประจำวันที่</b>
                    <input type="date" class="fmt01-date" style="border:1px solid #ccc; font-size: 0.7rem; padding: 2px;">
                    <b style="margin-left: auto;">FMT-01</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
            <thead>
                <tr>
                    <th rowspan="3" style="width:50px; border: 1px solid #000;">เวลา</th>
                    <th rowspan="3" style="width:40px; border: 1px solid #000;">อุณหภูมิ<br>ปล่อง C°</th>
                    <th colspan="6" style="border: 1px solid #000;">หม้อไอน้ำ</th>
                    <th colspan="5" style="border: 1px solid #000;">ปั๊มน้ำ - คูลลิ่ง</th>
                    <th colspan="4" style="border: 1px solid #000;">น้ำ R.O.</th>
                    <th colspan="2" style="border: 1px solid #000;">ปริมาณน้ำ</th>
                    <th colspan="3" style="border: 1px solid #000;">แรงดันที่ถัง</th>
                </tr>
                <tr>
                    <th rowspan="2" style="border: 1px solid #000;">แรงดัน<br>ไอน้ำ<br>bar</th>
                    <th rowspan="2" style="border: 1px solid #000;">ระดับน้ำ<br>หลอด<br>ขีด</th>
                    <th rowspan="2" style="border: 1px solid #000;">อุณหภูมิ<br>น้ำเข้า<br>C°</th>
                    <th rowspan="2" style="border: 1px solid #000;">ปริมาณ<br>น้ำ<br>m³</th>
                    <th colspan="2" style="border: 1px solid #000;">ปั๊มที่ใช้สภาพ</th>
                    <th colspan="5" style="border: 1px solid #000;">เสียงและแรงสั่นสะเทือน</th>
                    <th rowspan="2" style="border: 1px solid #000;">ค่า<br>cond<br>uctivity<br>ppm.</th>
                    <th rowspan="2" style="border: 1px solid #000;">ค่ากรด<br>ด่าง<br>ph.</th>
                    <th rowspan="2" style="border: 1px solid #000;">แรงดัน<br>เข้า R.O.<br>bar</th>
                    <th rowspan="2" style="border: 1px solid #000;">แรงดัน<br>ออก R.O.<br>bar</th>
                    <th rowspan="2" style="border: 1px solid #000;">Main<br>m³</th>
                    <th rowspan="2" style="border: 1px solid #000;">R.O.<br>m³</th>
                    <th rowspan="2" style="border: 1px solid #000;">ลม<br>bar</th>
                    <th rowspan="2" style="border: 1px solid #000;">น้ำ<br>bar</th>
                    <th rowspan="2" style="border: 1px solid #000;">แวคคั่ม<br>bar</th>
                </tr>
                <tr>
                    <th style="border: 1px solid #000;">#1</th>
                    <th style="border: 1px solid #000;">#2</th>
                    <th style="border: 1px solid #000;">P1</th>
                    <th style="border: 1px solid #000;">P2</th>
                    <th style="border: 1px solid #000;">P3</th>
                    <th style="border: 1px solid #000;">P4</th>
                    <th style="border: 1px solid #000;">P5</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display:flex; border: 1px solid #000; border-top: none; font-size: 0.7rem;">
            <div style="flex:1; border-right:1px solid #000; padding:5px;">
                <b>มาตรฐานในการตรวจเช็คหม้อไอน้ำ</b><br>
                <div style="display:grid; grid-template-columns: 80px 10px auto; gap:2px; margin-top:2px;">
                    <div>อุณหภูมิปล่อง</div> <div>=</div> <div>> 200 C°</div>
                    <div>แรงดันไอน้ำ</div> <div>=</div> <div>6 - 10 bar</div>
                    <div>ระดับน้ำ</div> <div>=</div> <div>3 - 6 ขีด</div>
                    <div>ปั๊มน้ำ</div> <div colspan="2">ไม่มีเสียงดังและสั่น</div>
                </div>
            </div>
             <div style="flex:1; border-right:1px solid #000; padding:5px;">
                <b>มาตรฐานเครื่องกรองน้ำ R.O</b><br>
                <div style="display:grid; grid-template-columns: 80px 10px auto; gap:2px; margin-top:2px;">
                    <div>ค่า conductivity</div> <div>=</div> <div>0 - 50 ppm</div>
                    <div>ค่า กรด-ด่าง</div> <div>=</div> <div>7 - 9 ph</div>
                    <div>ค่าต่างแรงดันเข้าออก</div> <div>=</div> <div>1.5 bar</div>
                </div>
            </div>
            <div style="flex:1; padding:5px;">
                <b>สรุปปริมาณการใช้น้ำทั้งโรงงาน</b><br>
                <div style="margin-top:10px;">
                    น้ำ <span style="display:inline-block; border-bottom:1px dotted #000; width:80px; text-align:center;" class="summary-water" contenteditable="true"></span> m³
                </div>
            </div>
        </div>
        
        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 2; padding: 8px; border-right: 1px solid #000;">
                <div style="font-size: 0.75rem; font-weight: bold;">หมายเหตุ</div>
                <div class="correction-input" contenteditable="true" style="min-height: 60px; border: none; margin-top: 4px; padding: 4px;"></div>
            </div>
            <div style="flex: 3;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem; height: 100%;">
                    <tr style="height: 28px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-weight: bold;">ผู้ตรวจเช็ค</td>
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px; vertical-align: middle;">
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 30px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span>
                        </td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px; vertical-align: middle;">
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 30px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span>
                        </td>
                        <td style="text-align: center; padding: 2px; vertical-align: middle;">
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 20px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span> / 
                            <span contenteditable="true" style="display: inline-block; min-width: 30px; border-bottom: 1px solid #999; padding: 0 4px; font-size: 0.65rem;"></span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable07() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 25; i++) {
        rowsHtml += `<tr style="height: 30px;">
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 120px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 100px;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; border-bottom: none;">
            <div style="display: flex; align-items: center; padding: 5px 10px; border-bottom: 1px solid #000;">
                <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                    <img src="Logo.png" alt="Logo" style="height: 25px;">
                    <b style="font-size: 0.9rem;">POLYFOAM HIGH-TECH (PFH)</b>
                </div>
                <div style="font-size: 0.75rem;">FMT-07 Re#0</div>
            </div>
            <div style="display: flex; align-items: center; padding: 5px 10px; font-size: 0.85rem;">
                <div style="flex: 1;">
                    ชื่อพนักงาน <span contenteditable="true" class="fmt07-work-type" style="display: inline-block; min-width: 150px; border-bottom: 1px dotted #000; outline: none; padding: 0 5px;"></span>
                </div>
                <div style="flex: 1; text-align: center;">แผนก ซ่อมบำรุง</div>
                <div style="flex: 1; text-align: right;">
                    เดือน <span contenteditable="true" class="fmt07-month" style="display: inline-block; min-width: 100px; border-bottom: 1px dotted #000; outline: none; padding: 0 5px; text-align: center;"></span>
                    / <span contenteditable="true" class="fmt07-year" style="display: inline-block; min-width: 60px; border-bottom: 1px dotted #000; outline: none; padding: 0 5px; text-align: center;"></span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.8rem; border-top: 1px solid #000; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; width: 60px;">วันที่</th>
                    <th style="border: 1px solid #000;">รายละเอียดงาน</th>
                    <th style="border: 1px solid #000; width: 80px;">วันที่รับงาน</th>
                    <th style="border: 1px solid #000; width: 80px;">วันที่เสร็จ</th>
                    <th style="border: 1px solid #000; width: 100px;">ใบส่งงานเลขที่</th>
                    <th style="border: 1px solid #000; width: 120px;">อะไหล่ที่ใช้</th>
                    <th style="border: 1px solid #000; width: 100px;">หมายเหตุ</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 1.5; padding: 10px;"></div>
            <div style="flex: 2;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                    <tr style="height: 28px;">
                        <td style="border: 1px solid #000; border-top: none; border-left: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้บันทึก</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้ตรวจเช็ค</td>
                        <td style="border: 1px solid #000; border-top: none; border-right: none; text-align: center; font-weight: bold;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 35px;">
                        <td style="border: 1px solid #000; border-left: none; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000; border-right: none;"></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border: 1px solid #000; border-left: none; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                        <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px; vertical-align: middle;">
                            <span class="thai-date-display" style="font-size: 0.65rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width: 100%; border: none; font-size: 0.65rem; text-align: center;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable08() {
    const div = document.createElement('div');
    div.className = 'sheet-container portrait-sheet';

    div.innerHTML = `
        <div style="border: 1px solid #000; border-bottom: none;">
            <div style="display: flex; align-items: center; padding: 5px 10px; border-bottom: 1px solid #000;">
                <div style="flex: 1; display: flex; align-items: center; gap: 8px;">
                    <img src="Logo.png" alt="Logo" style="height: 25px;">
                    <b style="font-size: 0.9rem;">POLYFOAM HIGH-TECH (PFH)</b>
                </div>
                <div style="flex: 2; text-align: center; font-weight: bold; font-size: 1rem;">ใบแจ้งซ่อม/ใบบันทึกผลการซ่อม</div>
                <div style="font-size: 0.75rem;">FMT-08 Re#0</div>
            </div>
        </div>

        <!-- Top date/time row -->
        <table style="width:100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 0.78rem;">
            <tr>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">วันที่แจ้งซ่อม</th>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">เวลาที่แจ้ง</th>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">วันที่รับแจ้ง</th>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">วันที่ซ่อม</th>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">เวลาที่เริ่มซ่อม</th>
                <th style="border: 1px solid #000; text-align:center; padding:3px;">เวลาที่ซ่อมแล้ว</th>
            </tr>
            <tr style="height:28px;">
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align:center;"></td>
            </tr>
            <tr style="height:22px;">
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">/ /</td>
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">:</td>
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">/ /</td>
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">/ /</td>
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">:</td>
                <td style="border: 1px solid #000; text-align:center; font-size:0.7rem; color:#555;">:</td>
            </tr>
        </table>

        <!-- Dept / สิ่งที่ต้องการซ่อม / หมายเหตุ -->
        <table style="width:100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 0.78rem;">
            <tr>
                <td style="border: 1px solid #000; padding:3px; width:30%;"><b>แผนกที่แจ้งซ่อม/Dept./Section</b><br>
                    <span class="log-cell" contenteditable="true" style="display:block; min-height:22px; outline:none;"></span>
                </td>
                <td style="border: 1px solid #000; padding:3px; width:40%;">
                    <b>สิ่งที่ต้องการซ่อม</b><br>
                    <div style="display:flex; gap:8px; margin-top:2px;">
                        <span style="white-space:nowrap;">1.</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:8px; margin-top:4px;">
                        <span style="white-space:nowrap;">2.</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                </td>
                <td style="border: 1px solid #000; padding:3px; width:30%;">
                    <b>หมายเหตุ</b><br>
                    <div style="display:flex; gap:8px; margin-top:2px;">
                        <span style="white-space:nowrap;">1.</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                </td>
            </tr>
        </table>

        <!-- Problem rows -->
        <table style="width:100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 0.78rem;">
            <thead>
                <tr style="background:#f0f0f0;">
                    <th style="border: 1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                    <th style="border: 1px solid #000; text-align:center;">ปัญหาที่พบ</th>
                    <th style="border: 1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                    <th style="border: 1px solid #000; text-align:center;">รายละเอียดของปัญหา</th>
                </tr>
            </thead>
            <tbody>
                ${Array.from({ length: 9 }, (_, i) => `
                <tr style="height:28px;">
                    <td style="border: 1px solid #000; text-align:center;">${i + 1}.</td>
                    <td class="log-cell" contenteditable="true" style="border: 1px solid #000; padding-left:4px;"></td>
                    <td style="border: 1px solid #000; text-align:center;">${i + 1}.</td>
                    <td class="log-cell" contenteditable="true" style="border: 1px solid #000; padding-left:4px;"></td>
                </tr>`).join('')}
            </tbody>
        </table>

        <!-- Photo / Approver section -->
        <table style="width:100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 0.78rem;">
            <tr>
                <td style="border: 1px solid #000; padding:4px; width:35%; vertical-align:top;">
                    <b>รูปภาพ(ถ้ามี)</b>
                    <div style="min-height:70px;"></div>
                </td>
                <td style="border: 1px solid #000; padding:4px; width:35%; vertical-align:top;">
                    <b>ผู้แจ้งซ่อม</b><br>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">ลงชื่อ</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:4px; margin-top:12px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">ชื่อ</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">วันที่</span>
                        <span style="font-size:0.7rem;">/ /</span>
                    </div>
                </td>
                <td style="border: 1px solid #000; padding:4px; width:30%; vertical-align:top;">
                    <b>ผู้อนุมัติให้แจ้งซ่อม</b><br>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">ลงชื่อ</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:4px; margin-top:12px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">ชื่อ</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">วันที่</span>
                        <span style="font-size:0.7rem;">/ /</span>
                    </div>
                    <div style="margin-top:8px; font-size:0.75rem; font-weight:bold;">ผู้อนุมัติการซ่อม</div>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">ลงชื่อ</span>
                        <span class="log-cell" contenteditable="true" style="display:block; width:100%; min-height:20px; outline:none; border-bottom:1px dotted #aaa;"></span>
                    </div>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <span style="white-space:nowrap; font-size:0.7rem;">วันที่</span>
                        <span style="font-size:0.7rem;">/ /</span>
                    </div>
                </td>
            </tr>
        </table>

        <!-- Repair detail rows -->
        <table style="width:100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 0.78rem;">
            <thead>
                <tr style="background:#f0f0f0;">
                    <th style="border: 1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                    <th style="border: 1px solid #000; text-align:center;">รายละเอียดของการซ่อม</th>
                    <th style="border: 1px solid #000; text-align:center; width:38%;">ผลของการซ่อม</th>
                </tr>
            </thead>
            <tbody>
                ${Array.from({ length: 4 }, (_, i) => `
                <tr style="height:30px;">
                    <td style="border: 1px solid #000; text-align:center;">${i + 1}.</td>
                    <td class="log-cell" contenteditable="true" style="border: 1px solid #000; padding-left:4px;"></td>
                    ${i === 0 ? `<td rowspan="4" style="border: 1px solid #000; padding:5px; vertical-align:top;">
                        <div style="display:flex; align-items:flex-start; gap:6px; margin-bottom:6px;">
                            <input type="checkbox" class="log-cell"> <span>สามารถใช้งานได้ตามปกติ</span>
                        </div>
                        <div style="display:flex; align-items:flex-start; gap:6px;">
                            <input type="checkbox" class="log-cell"> <span>ไม่สามารถใช้งานได้เพราะ <span class="log-cell" contenteditable="true" style="display:inline-block; min-width:80px; border-bottom:1px dotted #aaa; outline:none;"></span></span>
                        </div>
                    </td>` : ''}
                </tr>`).join('')}
            </tbody>
        </table>

        <!-- Footer signature -->
        <div style="border: 1px solid #000; border-top: none;">
            <table style="width:100%; border-collapse: collapse; font-size: 0.75rem;">
                <tr style="height:25px; background:#f0f0f0;">
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">ลงชื่อ</td>
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">ผู้ซ่อม</td>
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">หัวหน้าแผนก</td>
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">ผู้รับซ่อม</td>
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">หัวหน้าแผนก</td>
                    <td style="border: 1px solid #000; text-align:center; font-weight:bold;">ผู้อนุมัติ</td>
                </tr>
                <tr style="height:35px;">
                    <td style="border: 1px solid #000; text-align:center; font-size:0.7rem;">ลายเซ็น</td>
                    <td style="border: 1px solid #000;"></td>
                    <td style="border: 1px solid #000;"></td>
                    <td style="border: 1px solid #000;"></td>
                    <td style="border: 1px solid #000;"></td>
                    <td style="border: 1px solid #000;"></td>
                </tr>
                <tr style="height:25px;">
                    <td style="border: 1px solid #000; text-align:center; font-size:0.65rem;">ชื่อ(ตัวบรรจง)</td>
                    <td style="border: 1px solid #000; padding:2px;"><span contenteditable="true" class="sig-name" style="display:block; outline:none; text-align:center;"></span></td>
                    <td style="border: 1px solid #000; padding:2px;"><span contenteditable="true" class="sig-name" style="display:block; outline:none; text-align:center;"></span></td>
                    <td style="border: 1px solid #000; padding:2px;"><span contenteditable="true" class="sig-name" style="display:block; outline:none; text-align:center;"></span></td>
                    <td style="border: 1px solid #000; padding:2px;"><span contenteditable="true" class="sig-name" style="display:block; outline:none; text-align:center;"></span></td>
                    <td style="border: 1px solid #000; padding:2px;"><span contenteditable="true" class="sig-name" style="display:block; outline:none; text-align:center;"></span></td>
                </tr>
                <tr style="height:25px;">
                    <td style="border: 1px solid #000; text-align:center;">วันที่</td>
                    <td style="border: 1px solid #000; text-align:center; padding:2px;">
                        <span class="thai-date-display" style="font-size:0.6rem;"></span>
                        <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                    </td>
                    <td style="border: 1px solid #000; text-align:center; padding:2px;">
                        <span class="thai-date-display" style="font-size:0.6rem;"></span>
                        <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                    </td>
                    <td style="border: 1px solid #000; text-align:center; padding:2px;">
                        <span class="thai-date-display" style="font-size:0.6rem;"></span>
                        <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                    </td>
                    <td style="border: 1px solid #000; text-align:center; padding:2px;">
                        <span class="thai-date-display" style="font-size:0.6rem;"></span>
                        <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                    </td>
                    <td style="border: 1px solid #000; text-align:center; padding:2px;">
                        <span class="thai-date-display" style="font-size:0.6rem;"></span>
                        <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                    </td>
                </tr>
            </table>
        </div>

        <!-- Note -->
        <div style="border: 1px solid #000; border-top: none; padding: 5px 10px; font-size: 0.7rem;">
            <b>หมายเหตุ</b> ในกรณีที่ต้องการซ่อมอะไหล่ที่ตัดสินว่าไม่ได้ไม่ว่าในระบบรายละเอียดของอะไหล่ที่ตัดสินใจ ไว้ในรายละเอียดของปัญหา
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable09() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 22; i++) {
        rowsHtml += `<tr style="height: 26px;">
            <td style="border: 1px solid #000; text-align: center; width: 25px; font-size: 0.75rem;">${i + 1}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 70px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 90px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 50px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 50px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 35px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 35px; font-size: 0.75rem;"></td>
        </tr>`;
    }

    div.innerHTML = `
    <div style="font-family: 'Sarabun', sans-serif; width: 100%; box-sizing: border-box;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
        <tr>
            <td style="width: 25%; padding: 10px; font-weight: bold; font-size: 0.85rem; text-align: left;">
                POLYFOAM HIGH-TECH (PFH)
            </td>
            <td style="width: 50%; padding: 10px; font-weight: bold; font-size: 1.1rem; text-align: center;">
                แบบฟอร์มการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ
            </td>
            <td style="width: 25%; padding: 10px; font-weight: bold; font-size: 0.8rem; text-align: right;">
                FMT-09 Re#1
            </td>
        </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; margin-top: -1px; table-layout: fixed; font-size: 0.65rem;">
        <thead>
            <tr>
                <th colspan="5" style="border: 1px solid #000; height: 30px; background: #fff;">ผลการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ</th>
                <th colspan="10" style="border: 1px solid #000; background: #fff;">จำนวนครั้งที่ทดสอบ</th>
                <th colspan="3" style="border: 1px solid #000; border-bottom: none;"></th>
            </tr>
            <tr>
                <th colspan="5" style="border-left: 1px solid #000; border-right: 1px solid #000;"></th>
                <th colspan="2" style="border: 1px solid #000; padding: 4px;">ผลการเทสครั้งที่ 1</th>
                <th colspan="2" style="border: 1px solid #000; padding: 4px;">ผลการเทสครั้งที่ 2</th>
                <th colspan="2" style="border: 1px solid #000; padding: 4px;">ผลการเทสครั้งที่ 3</th>
                <th colspan="2" style="border: 1px solid #000; padding: 4px;">ผลการเทสครั้งที่ 4</th>
                <th colspan="2" style="border: 1px solid #000; padding: 4px;">ผลการเทสครั้งที่ 5</th>
                <th style="border: 1px solid #000; width: 45px;">ค่า+-3%</th>
                <th colspan="2" style="border: 1px solid #000; text-align: center;">ผลการเทส</th>
            </tr>
            <tr>
                <th style="border: 1px solid #000; width: 25px;">ที่</th>
                <th style="border: 1px solid #000; width: 65px;">วัน/เดือน/ปี</th>
                <th style="border: 1px solid #000; width: 85px;">หมายเลขทะเบียน</th>
                <th style="border: 1px solid #000;">ตำแหน่งการติดตั้ง</th>
                <th style="border: 1px solid #000; width: 60px;">หมายเลขเครื่อง</th>
                <th style="border: 1px solid #000; width: 40px;">MASTER</th>
                <th style="border: 1px solid #000; width: 40px;">TEST</th>
                <th style="border: 1px solid #000; width: 40px;">MASTER</th>
                <th style="border: 1px solid #000; width: 40px;">TEST</th>
                <th style="border: 1px solid #000; width: 40px;">MASTER</th>
                <th style="border: 1px solid #000; width: 40px;">TEST</th>
                <th style="border: 1px solid #000; width: 40px;">MASTER</th>
                <th style="border: 1px solid #000; width: 40px;">TEST</th>
                <th style="border: 1px solid #000; width: 40px;">MASTER</th>
                <th style="border: 1px solid #000; width: 40px;">TEST</th>
                <th style="border: 1px solid #000; width: 45px;">เฉลี่ย</th>
                <th style="border: 1px solid #000; width: 35px;">ได้</th>
                <th style="border: 1px solid #000; width: 35px;">ไม่ได้</th>
            </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 6px 10px; font-size: 0.72rem;">
            <b>หมายเหตุ</b> ผลจากการทดสอบแล้วค่าผิดพลาดครบจำนวนแล้วหาค่าเฉลี่ยจะต้อง+,-ไม่เกิน 3%ถือว่าผ่าน
        </div>

        <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
            <div style="width: 380px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้บันทึก</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้ตรวจเช็ค</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 35px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000;"></td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable10() {
    const div = document.createElement('div');
    div.className = 'sheet-container portrait-sheet';

    let rowsHtml = '';
    for (let i = 0; i < 28; i++) {
        rowsHtml += `<tr style="height: 28px;">
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 120px;"></td>
        </tr>`;
    }

    div.innerHTML = `
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
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>Machine No</b>
                    <span contenteditable="true" class="fmt10-m-no" style="flex: 1; min-width: 100px; padding: 2px; text-align: center;"></span>
                    <span style="margin: 0 10px;">/</span>
                    <span contenteditable="true" style="flex: 1; min-width: 100px; padding: 2px;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>Location</b>
                    <span contenteditable="true" class="fmt10-loc" style="flex: 1; font-weight: bold; text-align: center; padding: 2px;">ฝ่ายผลิต</span>
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
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable11() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 22; i++) {
        rowsHtml += `<tr style="height: 26px;">
            <td style="border: 1px solid #000; text-align: center; width: 25px; font-size: 0.75rem;">${i + 1}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 70px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 90px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 42px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 50px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 50px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 35px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 35px; font-size: 0.75rem;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="font-family: 'Sarabun', sans-serif; width: 100%; box-sizing: border-box;">
    <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
        <tr>
            <td style="width: 25%; padding: 10px; font-weight: bold; font-size: 0.85rem; text-align: left;">
                POLYFOAM HIGH-TECH (PFH)
            </td>
            <td style="width: 50%; padding: 10px; font-weight: bold; font-size: 1.1rem; text-align: center;">
                แบบฟอร์มการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ
            </td>
            <td style="width: 25%; padding: 10px; font-weight: bold; font-size: 0.8rem; text-align: right;">
                FMT-11 Re#1
            </td>
        </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; table-layout: fixed; margin-top: -1.5px; font-size: 11px;">
        <thead>
            <tr>
                <th colspan="5" style="border: 1px solid #000; height: 30px;">แบบฟอร์มการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ</th>
                <th colspan="10" style="border: 1px solid #000;">จำนวนครั้งที่ทดสอบ</th>
                <th colspan="3" style="border-top: 1px solid #000; border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: none;"></th>
            </tr>
            <tr>
                <th rowspan="2" style="border: 1px solid #000; width: 3%;">ที่</th>
                <th rowspan="2" style="border: 1px solid #000; width: 7%;">วัน/เดือน/ปี</th>
                <th rowspan="2" style="border: 1px solid #000; width: 9%;">หมายเลข<br>ทะเบียน</th>
                <th rowspan="2" style="border: 1px solid #000; width: 15%;">ตำแหน่งการติดตั้ง</th>
                <th rowspan="2" style="border: 1px solid #000; width: 8%;">หมายเลข<br>เครื่อง</th>
                
                <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 1</th>
                <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 2</th>
                <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 3</th>
                <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 4</th>
                <th colspan="2" style="border: 1px solid #000;">ผลการเทสครั้งที่ 5</th>

                <th style="border: 1px solid #000; width: 6%;">ค่า+-3%</th>
                <th colspan="2" style="border: 1px solid #000; width: 12%;">ผลการเทส</th>
            </tr>
            <tr style="font-size: 10px;">
                <th style="border: 1px solid #000; width: 4%;">MASTER</th><th style="border: 1px solid #000; width: 4%;">TEST</th>
                <th style="border: 1px solid #000; width: 4%;">MASTER</th><th style="border: 1px solid #000; width: 4%;">TEST</th>
                <th style="border: 1px solid #000; width: 4%;">MASTER</th><th style="border: 1px solid #000; width: 4%;">TEST</th>
                <th style="border: 1px solid #000; width: 4%;">MASTER</th><th style="border: 1px solid #000; width: 4%;">TEST</th>
                <th style="border: 1px solid #000; width: 4%;">MASTER</th><th style="border: 1px solid #000; width: 4%;">TEST</th>
                
                <th style="border: 1px solid #000;">เฉลี่ย</th>
                <th style="border: 1px solid #000; width: 6%;">ได้</th>
                <th style="border: 1px solid #000; width: 6%;">ไม่ได้</th>
            </tr>
        </thead>
        
        <tbody>${rowsHtml}</tbody>
    </table>

        <div style="border: 1px solid #000; border-top: none; padding: 6px 10px; font-size: 0.72rem;">
            <b>หมายเหตุ</b> ผลจากการทดสอบแล้วค่าผิดพลาดครบจำนวนแล้วหาค่าเฉลี่ยจะต้อง+,-ไม่เกิน 3%ถือว่าผ่าน
        </div>

        <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
            <div style="width: 380px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-top: none; text-align: center; width: 80px; font-weight: bold;">ลงชื่อ</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้บันทึก</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้ตรวจเช็ค</td>
                        <td style="border: 1px solid #000; border-top: none; text-align: center; font-weight: bold;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 35px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle;">ลายเซ็น</td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000;"></td>
                        <td style="border: 1px solid #000;"></td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}


function renderExactTable12() {
    renderHistoryBaseForm(12, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มลม', 'แท่นปั๊มลม');
}

function renderExactTable13(startNum, colCount = 20) {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    const allItems = checklistData13.flatMap(g => g.items);
    const itemsCount = allItems.length;
    const tableIdx = startNum <= 20 ? 0 : startNum <= 40 ? 1 : 2;
    const cellIndexOffset = tableIdx * itemsCount * 20;

    let machineHeaders = '';
    for (let i = 0; i < colCount; i++) {
        machineHeaders += `<th style="width: 28px; text-align: center; border: 1px solid #000;">${startNum + i}</th>`;
    }
    // filler columns (ช่องว่าง ไม่มีหมายเลข)
    for (let i = colCount; i < 20; i++) {
        machineHeaders += `<th style="width: 28px; border: 1px solid #000; background:#f5f5f5;"></th>`;
    }

    let rowsHtml = '';
    checklistData13.forEach(group => {
        group.items.forEach((chkItem, idx) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let i = 0; i < colCount; i++) {
                const numForData = cellIndexOffset + rowIdx * 20 + i + 1;
                cells += `<td class="check-cell" data-num="${numForData}" data-state="0"
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 28px; cursor:pointer;"
                    onclick="toggle(this)"></td>`;
            }
            // filler cells (ว่าง กดไม่ได้)
            for (let i = colCount; i < 20; i++) {
                cells += `<td style="border: 1px solid #000; width: 28px; background:#f5f5f5;"></td>`;
            }
            rowsHtml += `<tr>
                ${idx === 0 ? `<td rowspan="${group.items.length}" class="category-cell" style="width: 30px; border: 1px solid #000; text-align:center; vertical-align:middle;"><div class="vertical-text" style="font-weight:bold; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; font-size:0.75rem;">${group.category}</div></td>` : ''}
                <td class="col-item" style="font-size:0.75rem; width: 150px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.7rem; width: 220px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.std}</td>
                ${cells}
                <td class="row-remark" contenteditable="true" style="border: 1px solid #000; font-size: 0.7rem; width: 60px; outline:none;"></td>
            </tr>`;
        });
    });

    div.innerHTML = `
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
                    สัปดาห์ที่.. FMT-13Re#01
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
            <div class="correction-input" contenteditable="true" style="min-height: 40px; border-bottom: 1px dashed #ccc; margin-top: 4px; padding: 4px; outline:none;"></div>
        </div>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 2; padding: 10px;">
                <div style="font-weight: bold; margin-bottom: 8px;">
                    หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ
                </div>
                <div style="font-size: 0.75rem; line-height: 1.4;">
                    พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก
                    และเขียนใบแจ้งซ่อมทันที
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                        <td style="border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding:2px;">
                            <span class="thai-date-display" style="font-size:0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                        </td>
                        <td style="border-right: 1px solid #000; text-align: center; padding:2px;">
                            <span class="thai-date-display" style="font-size:0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                        </td>
                        <td style="text-align: center; padding:2px;">
                            <span class="thai-date-display" style="font-size:0.6rem;"></span>
                            <input type="date" class="date-input" onchange="this.previousElementSibling.innerText = toThaiDateStr(this.value)" style="width:100%; border:none; font-size:0.6rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable14() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    const allItems = checklistData38.flatMap(g => g.items);

    let dateHeaders = '';
    for (let d = 1; d <= 31; d++) {
        dateHeaders += `<th style="width: 22px; text-align: center; border: 1px solid #000; font-size: 0.62rem; padding: 1px;">${d}</th>`;
    }

    let rowsHtml = '';
    checklistData38.forEach(group => {
        rowsHtml += `<tr>
            <td colspan="2" style="font-weight:bold; font-size:0.78rem; border: 1px solid #000; padding: 2px 6px; background:#e8e8e8;">${group.category}</td>
            ${Array(31).fill(`<td style="border: 1px solid #000; background:#e8e8e8;"></td>`).join('')}
        </tr>`;
        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const numForData = rowIdx * 31 + d + 1;
                cells += `<td class="check-cell" data-num="${numForData}" data-state="0"
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer; font-size:0.8rem;"
                    onclick="toggle(this)"></td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.73rem; border: 1px solid #000; padding-left: 8px; width: 160px;">${chkItem.name}</td>
                <td style="font-size:0.68rem; border: 1px solid #000; padding-left: 4px; width: 190px;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 0;">
            <tr>
                <td style="width: 22%; border: 1px solid #000; padding: 5px; text-align: center;">
                    <div style="display: flex; align-items: center; justify-content: center; gap: 6px;">
                        <img src="Logo.png" alt="Logo" style="height: 28px;">
                        <b style="font-size: 0.8rem;">POLYFOAM HIGH-TECH (PFH)</b>
                    </div>
                </td>
                <td style="width: 42%; border: 1px solid #000; padding: 5px; text-align: center; font-size: 1.05rem; font-weight: bold;">
                    ตารางการตรวจเช็คเครื่องจักร รอกไฟฟ้า
                </td>
                <td style="width: 22%; border: 1px solid #000; padding: 5px; text-align: center; font-size: 0.75rem;">
                    เดือน<span contenteditable="true" class="fmt14-month" style="display:inline-block; width:80px; border-bottom:1px solid #000; margin:0 4px; outline:none;"></span>/<span contenteditable="true" class="fmt14-year" style="display:inline-block; width:40px; border-bottom:1px solid #000; margin:0 4px; outline:none;"></span>
                </td>
                <td style="width: 14%; border: 1px solid #000; padding: 5px; text-align: right; font-size: 0.7rem;">
                    FMT-14 Re#1
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem;">
                    เครื่องจักรหมายเลข / Machine No.:
                    <span contenteditable="true" class="fmt14-m-no" style="display:inline-block; min-width:50px; border-bottom:1px solid #aaa; outline:none;"></span>
                </td>
                <td style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem;">
                    ชื่อเครื่องจักร / Machine Name :
                    <span contenteditable="true" class="fmt14-m-name" style="display:inline-block; min-width:80px; border-bottom:1px solid #aaa; outline:none;"></span>
                </td>
                <td colspan="2" style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem;">
                    พื้นที่ติดตั้ง
                    <span contenteditable="true" class="fmt14-loc" style="display:inline-block; min-width:120px; border-bottom:1px solid #aaa; outline:none;"></span>
                </td>
            </tr>
        </table>

        <table class="main-table" style="margin-top: 0; border-top: none; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr>
                    <th rowspan="2" style="width: 160px; border: 1px solid #000; font-size: 0.72rem; vertical-align: middle;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width: 190px; border: 1px solid #000; font-size: 0.72rem; vertical-align: middle;">มาตรฐานการตรวจ</th>
                    <th colspan="31" style="text-align: center; border: 1px solid #000; font-size: 0.75rem;">Date / วันที่</th>
                </tr>
                <tr>${dateHeaders}</tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
            รายละเอียดการแก้ไข
            <div class="correction-input" contenteditable="true" style="min-height: 40px; border-bottom: 1px dashed #ccc; margin-top: 4px; padding: 4px; outline:none;"></div>
        </div>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 2; padding: 10px;">
                <div style="font-weight: bold; margin-bottom: 8px;">
                    หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปรกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปรกติ
                </div>
                <div style="font-size: 0.75rem; line-height: 1.4;">
                    พนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติจะต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ให้แจ้งหัวหน้าแผนก
                    และเขียนใบแจ้งซ่อมทันที
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                        <td style="border-bottom: 1px solid #000; text-align: center;"><span contenteditable="true" class="sig-name" style="display:block; outline:none;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; font-size: 0.65rem;">&nbsp;/&nbsp;&nbsp;/&nbsp;</td>
                        <td style="border-right: 1px solid #000; text-align: center; font-size: 0.65rem;">&nbsp;/&nbsp;&nbsp;/&nbsp;</td>
                        <td style="text-align: center; font-size: 0.65rem;">&nbsp;/&nbsp;&nbsp;/&nbsp;</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}


function renderExactTable17() {
    renderHistoryBaseForm(17, 'ใบบันทึกประวัติการซ่อมเครื่องจักรและอุปกรณ์สารสนเทศ', 'สารสนเทศ', 'Re#1');
}

function renderExactTable18() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 22; i++) {
        rowsHtml += `<tr style="height: 28px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.8rem;">${i + 1}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px; font-size: 0.8rem;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch;">
                <div style="padding: 5px 15px; flex: 1.5; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ทะเบียนตัววัดอุณหภูมิ
                </div>
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                    <div style="font-weight: bold;">FMT-18 Re#1</div>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr style="background: #fff; height: 35px;">
                    <th style="border: 1px solid #000; width: 30px;">ที่</th>
                    <th style="border: 1px solid #000; width: 80px;">วัน/เดือน/ปี</th>
                    <th style="border: 1px solid #000; width: 120px;">หมายเลขทะเบียน</th>
                    <th style="border: 1px solid #000; width: 100px;">วันสอบเทียบ</th>
                    <th style="border: 1px solid #000; width: 100px;">วันหมดอายุ</th>
                    <th style="border: 1px solid #000;">ตำแหน่งการติดตั้ง</th>
                    <th style="border: 1px solid #000; width: 120px;">หมายเลขเครื่อง</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 1.5; padding: 10px; display: flex; flex-direction: column; gap: 5px;">
                <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ</div>
                <div class="correction-input" contenteditable="true" style="min-height: 80px; padding: 5px; font-size: 0.8rem; border: 1px dashed #ccc; outline: none;"></div>
            </div>
            <div style="flex: 2; border-left: 1px solid #000;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px; width: 80px;">ชื่อ</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้ตรวจสอบ</td>
                        <td style="border-bottom: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 40px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px;">ลายเซ็น</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-bottom: 1px solid #000;"></td>
                    </tr>
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px;">ชื่อ(ตัวบรรจง)</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable21() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 27; i++) {
        rowsHtml += `<tr style="height: 25px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.75rem;">${i + 1}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 110px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 140px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; font-size: 0.75rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px; font-size: 0.75rem;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch;">
                <div style="padding: 5px 15px; flex: 1.5; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2.2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.05rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ทะเบียนรายชื่ออุปกรณ์สารสนเทศและการสื่อสาร
                </div>
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                    <div style="font-weight: bold;">FMT-21 Re#1</div>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.8rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr style="background: #fff; height: 35px;">
                    <th style="border: 1px solid #000; width: 30px;">ที่</th>
                    <th style="border: 1px solid #000; width: 80px;">วัน/เดือน/ปี</th>
                    <th style="border: 1px solid #000; width: 110px;">หมายเลขเครื่อง</th>
                    <th style="border: 1px solid #000; width: 100px;">ยี่ห้อ</th>
                    <th style="border: 1px solid #000; width: 140px;">ชนิดของอุปกรณ์</th>
                    <th style="border: 1px solid #000;">ตำแหน่งการติดตั้ง</th>
                    <th style="border: 1px solid #000; width: 120px;">หมายเลขเครื่อง</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 2.5; border-right: 1px solid #000;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.7rem;">
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; width: 70px; font-weight: bold;">ชื่อ</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้ตรวจสอบ</td>
                        <td style="border-bottom: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 35px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px;">ลายเซ็น</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-bottom: 1px solid #000;"></td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px; font-size: 0.6rem;">ชื่อ(ตัวบรรจง)</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                        <td style="text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                    </tr>
                </table>
            </div>
            <div style="flex: 1.5; padding: 5px; display: flex; flex-direction: column; gap: 5px;">
                <div style="font-size: 0.75rem; font-weight: bold;">หมายเหตุ</div>
                <div class="correction-input" contenteditable="true" style="min-height: 80px; padding: 5px; font-size: 0.75rem; border: none; outline: none;"></div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}





function renderHistoryBaseForm(fmtNum, title, defaultLoc, revision = 'Re#0') {
    const div = document.createElement('div');
    div.className = 'sheet-container portrait-sheet';

    let rowsHtml = '';
    for (let i = 0; i < 28; i++) {
        rowsHtml += `<tr style="height: 28px;">
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 120px;"></td>
        </tr>`;
    }

    div.innerHTML = `
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
                    <div style="font-weight: bold;">FMT-${fmtNum < 10 ? '0' + fmtNum : fmtNum} ${revision}</div>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>Machine No</b>
                    <span contenteditable="true" class="fmt${fmtNum}-m-no" style="flex: 1; min-width: 100px; padding: 2px; text-align: center;"></span>
                    <span style="margin: 0 10px;">/</span>
                    <span contenteditable="true" style="flex: 1; min-width: 100px; padding: 2px;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>Location</b>
                    <span contenteditable="true" class="fmt${fmtNum}-loc" style="flex: 1; font-weight: bold; text-align: center; padding: 2px;">${defaultLoc}</span>
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
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 28px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">
                            <input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable20() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 0; i < 22; i++) {
        rowsHtml += `<tr style="height: 28px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.8rem;">${i + 1}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; font-size: 0.8rem;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px; font-size: 0.8rem;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch;">
                <div style="padding: 5px 15px; flex: 1.5; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ทะเบียนเพรสเซอร์เกจ
                </div>
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                    <div style="font-weight: bold;">FMT-20 Re#1</div>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr style="background: #fff; height: 35px;">
                    <th style="border: 1px solid #000; width: 30px;">ที่</th>
                    <th style="border: 1px solid #000; width: 80px;">วัน/เดือน/ปี</th>
                    <th style="border: 1px solid #000; width: 120px;">หมายเลขทะเบียน</th>
                    <th style="border: 1px solid #000; width: 100px;">วันสอบเทียบ</th>
                    <th style="border: 1px solid #000; width: 100px;">วันหมดอายุ</th>
                    <th style="border: 1px solid #000;">ตำแหน่งการติดตั้ง</th>
                    <th style="border: 1px solid #000; width: 120px;">หมายเลขเครื่อง</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 1.5; padding: 10px; display: flex; flex-direction: column; gap: 5px;">
                <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ</div>
                <div class="correction-input" contenteditable="true" style="min-height: 80px; padding: 5px; font-size: 0.8rem; border: 1px dashed #ccc; outline: none;"></div>
            </div>
            <div style="flex: 2; border-left: 1px solid #000;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px; width: 80px;">ชื่อ</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้บันทึก</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">ผู้ตรวจสอบ</td>
                        <td style="border-bottom: 1px solid #000; text-align: center;">ผู้อนุมัติ</td>
                    </tr>
                    <tr style="height: 40px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px;">ลายเซ็น</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000;"></td>
                        <td style="border-bottom: 1px solid #000;"></td>
                    </tr>
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: left; padding-left: 5px;">ชื่อ(ตัวบรรจง)</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 30px;">
                        <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.75rem;"></td>
                        <td style="border-right: 1px solid #000; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.75rem;"></td>
                        <td style="text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.75rem;"></td>
                    </tr>
                </table>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}
