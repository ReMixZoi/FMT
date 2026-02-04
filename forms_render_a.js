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
    for (let i = 0; i < 20; i++) {
        rowsHtml += `<tr style="height: 30px;">
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 40px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 100px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 90px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 150px;"></td>
        </tr>`;
    }

    div.innerHTML = `
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
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>ลักษณะงาน</b>
                    <span contenteditable="true" class="fmt07-work-type" style="flex: 1; border-bottom: 1px solid #999; min-width: 80px; padding: 2px;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>แผนก</b>
                    <span contenteditable="true" class="fmt07-dept" style="flex: 1; border-bottom: 1px solid #999; min-width: 100px; padding: 2px;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>เครื่อง</b>
                    <span contenteditable="true" class="fmt07-machine" style="flex: 1; border-bottom: 1px solid #999; min-width: 100px; padding: 2px;"></span>
                </div>
            </div>
            
            <div style="display: flex; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>เดือน</b>
                    <span contenteditable="true" class="fmt07-month" style="border-bottom: 1px solid #999; min-width: 80px; padding: 2px; text-align: center;"></span>
                    <b>/</b>
                    <span contenteditable="true" class="fmt07-year" style="border-bottom: 1px solid #999; min-width: 60px; padding: 2px; text-align: center;"></span>
                </div>
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
                <div class="correction-input" contenteditable="true" style="min-height: 60px; border: none; margin-top: 4px; padding: 4px;"></div>
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

function renderExactTable09() {
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
                    ใบบันทึกประวัติการซ่อมเครื่องจักรฉีดโฟม
                </div>
                
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                    <div style="font-weight: bold;">FMT-09 Re#0</div>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>Machine No</b>
                    <span contenteditable="true" class="fmt09-m-no" style="flex: 1; min-width: 100px; padding: 2px; text-align: center;"></span>
                    <span style="margin: 0 10px;">/</span>
                    <span contenteditable="true" style="flex: 1; min-width: 100px; padding: 2px;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>Location</b>
                    <span contenteditable="true" class="fmt09-loc" style="flex: 1; font-weight: bold; text-align: center; padding: 2px;">ฝ่ายผลิต</span>
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
    renderHistoryBaseForm(11, 'ใบบันทึกประวัติการซ่อมเครื่องจักรหม้อไอน้ำไม้สับ', 'ฝ่ายผลิต');
}

function renderExactTable12() {
    renderHistoryBaseForm(12, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มลม', 'แท่นปั๊มลม');
}

function renderExactTable13() {
    renderHistoryBaseForm(13, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มน้ำ', 'ฝ่ายผลิต');
}

function renderExactTable14() {
    renderHistoryBaseForm(14, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มสูญญากาศ', 'ฝ่ายผลิต');
}

function renderExactTable17() {
    renderHistoryBaseForm(17, 'ใบบันทึกประวัติการซ่อมเครื่องจักรเครื่องบดโฟม', 'แผนกบด');
}

function renderExactTable18() {
    renderHistoryBaseForm(18, 'ใบบันทึกประวัติการซ่อมเครื่องจักรคูลลิ่งทาวเวอร์', 'ชั้นดาดฟ้า');
}

function renderExactTable20() {
    renderHistoryBaseForm(20, 'ใบบันทึกประวัติการซ่อมโครงสร้างพื้นฐาน', 'ฝ่ายผลิต');
}

function renderExactTable21() {
    renderHistoryBaseForm(21, 'ใบบันทึกประวัติการซ่อมเครื่องกรองน้ำ', 'ฝ่ายผลิต');
}

function renderExactTable24() {
    renderHistoryBaseForm(24, 'ใบบันทึกประวัติการซ่อมเครื่องกลึง', 'ฝ่ายผลิต');
}

function renderExactTable25() {
    renderHistoryBaseForm(25, 'ใบบันทึกประวัติการซ่อมเครื่องมิลลิ่ง', 'ฝ่ายผลิต');
}

function renderHistoryBaseForm(fmtNum, title, defaultLoc) {
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
                    <div style="font-weight: bold;">FMT-${fmtNum < 10 ? '0' + fmtNum : fmtNum} Re#0</div>
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
