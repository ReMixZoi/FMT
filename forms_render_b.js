function renderExactTable05() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData05.forEach(group => {
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
                    ตารางการตรวจเช็คเครื่องจักรปั๊มลมประจำวัน
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
                    <b style="margin-left: auto;">FMT-05</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">ปั๊มลม</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">แท่นปั๊มลม<span></div>
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

function renderExactTable06() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData06.forEach(group => {
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
                    ตารางการตรวจเช็คเครื่องจักรปั๊มสูญญากาศประจำวัน
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
                    <b style="margin-left: auto;">FMT-06</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">ปั๊มสูญญากาศ</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span style="font-weight: bold;">ข้างอาคารผลิต 1<span></div>
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

function renderExactTable38() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData38.forEach(group => {
        // Category Header Row
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

    const thaiDate = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long' });

    div.innerHTML = `
        <div style="border-left: 1px solid #000; margin-bottom: 0;">
            <div class="form-header"  display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องจักร รอกไฟฟ้า
                </div>

                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b>
                    <select class="fmt38-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <select class="fmt38-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-38</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>


            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt38-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;"> </span></div>
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">พื้นที่ติดตั้ง: <span style="font-weight: bold;"> <span></div>


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
                        พนักงานซ่อมบำรุงเมื่อตรวจเช็คแล้วเจอสภาพไม่ปกติพนักงานสำรองทันที ถ้าเป็นงานงานใช้เวลา ให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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

function renderExactTable15() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData15.forEach(group => {
        // Category Header Row
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
                    ตารางการตรวจเช็คเครื่องจักรปั๊มน้ำประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b>
                    <select class="fmt02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    /
                    <select class="fmt02-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-15</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt02-m-name" contenteditable="true" style="font-weight: bold;">ปั๊มน้ำ</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true" style="font-weight: bold;">บ่อน้ำร้อน</span></div>
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

        <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
            รายละเอียดการแก้ไข
            <div style="margin-top: 5px;">
                <table style="width: 100%; border-collapse: collapse;">
                    ${Array(5).fill('0').map(() => `
                        <tr style="height: 25px;">
                            <td class="correction-input" contenteditable="true" style="border: 1px solid #ccc; outline: none; padding: 2px;"></td>
                        </tr>
                    `).join('')}
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

function renderExactTable16() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 22px; text-align: center;">${i}</th>`;
    }

    const allItems = checklistData16.flatMap(g => g.items);

    let rowsHtml = '';
    checklistData16.forEach(group => {
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
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
                <td class="col-item" style="font-size:0.65rem; padding-left: 15px; border: 1px solid #000;">${chkItem.name}</td>
                <td class="col-std" style="font-size:0.65rem; border: 1px solid #000;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
        <div style="border: 2px solid #000; margin-bottom: 0;">
            <div class="form-header" style="border: none; border-bottom: 2px solid #000;">
                <div class="logo-box" style="border-right: 2px solid #000; padding: 8px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องบดโฟมประจำวัน</div>
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
                    <b style="margin-left: auto;">FMT-16</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.2; padding: 6px 10px; border-right: 1px solid #000;">เบอร์เครื่องจักร/Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt02-m-name" style="font-weight: bold;">เครื่องรีไซเคิล</span></div>
                <div style="flex: 1.2; padding: 6px 10px;">พื้นที่ติดตั้ง: <span contenteditable="true" class="fmt02-area" style="font-weight: bold;">ด้านข้างอาคารผลิต 1</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size:0.6rem; width:100%; border-top: none;">
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

        <div style="border: 2px solid #000; border-top: none; padding: 5px; font-size: 0.75rem;">
            รายละเอียดการแก้ไข
            <div class="correction-input" contenteditable="true" style="min-height: 25px; border-bottom: 1px dashed #ccc; margin-bottom: 4px; padding: 2px; outline:none;"></div>
            <div class="correction-input" contenteditable="true" style="min-height: 25px; border-bottom: 1px dashed #ccc; margin-bottom: 4px; padding: 2px; outline:none;"></div>
            <div class="correction-input" contenteditable="true" style="min-height: 25px; border-bottom: 1px dashed #ccc; margin-bottom: 4px; padding: 2px; outline:none;"></div>
            <div class="correction-input" contenteditable="true" style="min-height: 25px; border-bottom: 1px dashed #ccc; margin-bottom: 4px; padding: 2px; outline:none;"></div>
            <div class="correction-input" contenteditable="true" style="min-height: 25px; border-bottom: 1px dashed #ccc; padding: 2px; outline:none;"></div>
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
function renderExactTable19() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    const allItems = checklistData19.flatMap(g => g.items);

    let rowsHtml = '';
    checklistData19.forEach(group => {
        // Category Header Row
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.75rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item) => {
            const rowIdx = allItems.indexOf(item);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const numForData = rowIdx * 31 + d + 1;
                cells += `<td class="check-cell" data-num="${numForData}" data-state="0" 
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer; font-size:0.8rem;"
                    onclick="toggle(this)"></td>`;
            }
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางตรวจเช็คสภาพโครงสร้างพื้นฐานประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt19-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    /
                    <select class="fmt19-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-19</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: 1px solid #000; border-left: none; border-right: none; font-size: 0.85rem;">
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อโครงสร้างพื้นฐาน ( Infrastructure Name ) : <span contenteditable="true" class="fmt19-m-name" style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;"></span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt19-area" contenteditable="true" style="font-weight: bold;">บริเวณโรงงานทั้งหมด</span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse;">
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
                    ${Array(4).fill('0').map(() => `
                        <tr style="height: 25px;">
                            <td class="correction-input" contenteditable="true" style="border: 1px solid #ccc; outline: none; padding: 2px;"></td>
                        </tr>
                    `).join('')}
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

function renderExactTable22() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    const allItems = checklistData22.flatMap(g => g.items);

    let rowsHtml = '';
    checklistData22.forEach(group => {
        // Category Header Row
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item) => {
            const rowIdx = allItems.indexOf(item);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const numForData = rowIdx * 31 + d + 1;
                cells += `<td class="check-cell mach-${d + 1}" data-num="${numForData}" data-state="0" 
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer;"
                    onclick="toggle(this)"></td>`;
            }
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องกลึงประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt22-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    /
                    <select class="fmt22-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-22</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: 1px solid #000; border-left: none; border-right: none; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt22-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt22-m-name" contenteditable="true" style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt22-area" contenteditable="true" style="font-weight: bold;">ข้างอาคารผลิต 1</span></div>
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

function renderExactTable23() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData23.forEach(group => {
        // Category Header Row
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
                    <b>เดือน</b>
                    <select class="fmt23-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt23-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-23</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt23-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt23-m-name" contenteditable="true" style="display: inline-block; min-width: 120px;">เครื่องมิลลิ่ง</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt23-area" contenteditable="true" style="display: inline-block; min-width: 100px;">ข้างอาคารผลิต 1</span></div>
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
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable24() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData24.forEach(group => {
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
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องจักรเครื่องกรองน้ำประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt24-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt24-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-24</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt24-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;"></span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center;">
                    <b>เครื่องกรองน้ำ RO</b>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 5px; justify-content: center;">
                    พื้นที่ติดตั้ง <span contenteditable="true" class="fmt24-area" style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;"></span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
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
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable25() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData25.forEach(group => {
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
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องเย็บกระดาษประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt25-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt25-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-25</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt25-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;"></span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt25-m-name" style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px; font-weight: bold;"></span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 5px; justify-content: center;">
                    พื้นที่ติดตั้ง <span contenteditable="true" class="fmt25-area" style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;"></span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
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
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; ปกติ &nbsp; / &nbsp; ไม่ปกติ &nbsp; X</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}


function renderExactTable26() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData26.forEach(group => {
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

    // Add empty rows for "รายระเอียดการแก้ไข"
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

    div.innerHTML = `
        <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องจักรคูลลิ่งทาวเวอร์ประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt26-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt26-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-26</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt26-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;"></span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt26-m-name" style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px; font-weight: bold;">คูลลิ่งทาวเวอร์</span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 5px; justify-content: center;">
                    พื้นที่ติดตั้ง <span contenteditable="true" class="fmt26-area" style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">อยู่บนถังคูลลิ่ง</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
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
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable27() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData27.forEach(group => {
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
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องจักรหม้อไอน้ำไม้สับประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt27-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt27-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-27</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt27-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px; text-align: center;"></span>
                </div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000; text-align: center; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt27-m-name" style="border-bottom: 1px solid #000; display: inline-block; min-width: 120px; font-weight: bold;">หม้อไอน้ำ / Boiler</span>
                </div>
                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 5px; justify-content: center;">
                    พื้นที่ติดตั้ง <span contenteditable="true" class="fmt27-area" style="border-bottom: 1px solid #000; display: inline-block; min-width: 100px; text-align: center;">แผนกซ่อมบำรุง</span>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
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
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; X &nbsp;&nbsp; ไม่ปกติ</div>
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
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;">/&nbsp;&nbsp;&nbsp;/</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable30() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    const times = [
        "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
        "20:00", "21:00", "22:00", "23:00", "24:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00"
    ];

    let rowsHtml = '';
    times.forEach(time => {
        rowsHtml += `
            <tr style="height: 22px;">
                <td style="border: 1px solid #000; text-align: center; font-weight: bold;">${time}</td>
                ${Array(21).fill('<td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center;"></td>').join('')}
            </tr>
        `;
    });

    div.innerHTML = `
        <div style="border: 1px solid #000; font-family: 'Sarabun', sans-serif;">
            <!-- Header -->
            <div style="display: flex; border-bottom: 2px solid #000; align-items: stretch;">
                <div style="flex: 1; padding: 5px 15px; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 35px; width: auto;">
                    <div style="font-size: 0.8rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; text-align: center; border-right: 1px solid #000;">
                    <div style="font-size: 1.2rem; font-weight: 700;">ใบรายงานการตรวจเช็คหม้อไอน้ำไม้สับประจำวัน</div>
                    <div style="font-size: 1rem; margin-top: 5px;">วันที่ <span contenteditable="true" class="fmt30-date" style="border-bottom: 1px dotted #000; min-width: 150px; display: inline-block;"></span></div>
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
                                <span contenteditable="true" class="fmt30-start" style="min-width: 100px; display: inline-block;"></span>
                                <span style="margin-left: 140px;"></span>
                                <span contenteditable="true" class="fmt30-stop" style="min-width: 100px; display: inline-block;"></span>
                            </div>
                        </div>
                        
                        <div style="grid-column: span 2; margin-top: 5px;">ปริมาณน้ำที่ใช้.......................................................................................... m³
                            <div style="position: relative; margin-top: -18px; margin-left: 80px;">
                                <span contenteditable="true" class="fmt30-water" style="min-width: 200px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div style="margin-top: 5px;">ปริมาณถ่านหินที่ใช้.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 90px;">
                                <span contenteditable="true" class="fmt30-coal-u" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>
                        <div style="margin-top: 5px;">ปริมาณถ่านหินที่เหลือ.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 100px;">
                                <span contenteditable="true" class="fmt30-coal-r" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div>ปริมาณไม้สับที่ใช้.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 80px;">
                                <span contenteditable="true" class="fmt30-wood-u" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>
                        <div>ปริมาณไม้สับที่เหลือ.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 90px;">
                                <span contenteditable="true" class="fmt30-wood-r" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div>ปริมาณแก๊สLPGที่ใช้.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 95px;">
                                <span contenteditable="true" class="fmt30-lpg-u" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>
                        <div>ปริมาณแก๊สLPGที่เหลือ.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 105px;">
                                <span contenteditable="true" class="fmt30-lpg-r" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div>ปริมาณกะลาปาล์มที่ใช้.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 105px;">
                                <span contenteditable="true" class="fmt30-palm-u" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>
                        <div>ปริมาณกะลาปาล์มที่เหลือ.................................... ตัน
                            <div style="position: relative; margin-top: -18px; margin-left: 115px;">
                                <span contenteditable="true" class="fmt30-palm-r" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div>ตรวจสอบ Safety Valve เมื่อเวลา........................ น.
                            <div style="position: relative; margin-top: -18px; margin-left: 135px;">
                                <span contenteditable="true" class="fmt30-sv-time" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>
                        <div>ตรวจสอบเครื่องควบคุมระดับน้ำเวลา........................ น.
                            <div style="position: relative; margin-top: -18px; margin-left: 135px;">
                                <span contenteditable="true" class="fmt30-wl-time" style="min-width: 80px; display: inline-block;"></span>
                            </div>
                        </div>

                        <div style="grid-column: span 2; display: flex; gap: 10px; margin-top: 5px;">
                            <span>จำนวนฝุ่นDuccollector........................ถุง
                                <span contenteditable="true" class="log-cell" style="min-width: 60px; display: inline-block; margin-left: -130px; position: relative; bottom: -2px;"></span>
                            </span>
                            <span>จำนวนฝุ่นปล่องควัน........................ถุง
                                <span contenteditable="true" class="log-cell" style="min-width: 60px; display: inline-block; margin-left: -110px; position: relative; bottom: -2px;"></span>
                            </span>
                            <span>จำนวนฝุ่น Slag........................ถุง
                                <span contenteditable="true" class="log-cell" style="min-width: 60px; display: inline-block; margin-left: -90px; position: relative; bottom: -2px;"></span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Middle: Blowdown -->
                <div style="flex: 2; border-right: 1px solid #000;">
                    <table style="width: 100%; border-collapse: collapse; height: 100%;">
                        ${[1, 2, 3, 4, 5, 6].map(i => `
                            <tr>
                                <td style="border-bottom: 1px solid #000; padding: 2px 5px; font-size: 0.7rem;">
                                    Blowdown ครั้งที่ ${i} เวลา........................ น.
                                    <div style="position: relative; margin-top: -16px; margin-left: 105px;">
                                        <span contenteditable="true" class="log-cell" style="min-width: 60px; display: inline-block;"></span>
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
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                            <td style="border-bottom: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; font-weight: bold;">วันที่</td>
                            <td style="border-right: 1px solid #000; padding: 2px;"><span contenteditable="true" class="log-cell" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                            <td style="border-right: 1px solid #000; padding: 2px;"><span contenteditable="true" class="log-cell" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                            <td style="padding: 2px;"><span contenteditable="true" class="log-cell" style="display: block; outline: none; border: none; font-size: 0.7rem;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}


function renderExactTable29() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 1; i <= 32; i++) {
        rowsHtml += `<tr>
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 80px;"></td>
            <td class="check-cell mach-1" data-state="0" data-num="1" style="border: 1px solid #000; width: 40px; text-align: center;"></td>
            <td class="check-cell mach-2" data-state="0" data-num="2" style="border: 1px solid #000; width: 40px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px;"></td>
        </tr>`;
    }

    div.innerHTML = `
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
                            <td style="border: 1px solid #000; border-left: none; border-top: none; text-align: center; width: 60px;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-right: none; border-top: none; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 40px;">
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
    `;
    document.getElementById('forms-container').appendChild(div);
}


function renderExactTable28() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData28.forEach(group => {
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
                    <b>เดือน</b>
                    <select class="fmt02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt02-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-28</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt02-m-name" style="font-weight: bold; min-width: 120px;">หม้อไอน้ำ / Boiler</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span contenteditable="true" class="fmt02-area" style="font-weight: bold; min-width: 100px;">ข้างอาคารผลิต 1</span></div>
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
                        <tr style="height: 22px;">
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
                        <tr style="height: 22px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 22px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center; padding: 2px;"><input type="date" class="date-input" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable31() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowIdx = 0;
    let rowsHtml = '';
    checklistData31.forEach(group => {
        rowsHtml += `
            <tr style="background: #eef2f7; height: 25px;">
                <td style="border: 1px solid #000; font-weight: bold; text-align: center;">${group.category.split(' ')[0]}</td>
                <td colspan="7" style="border: 1px solid #000; font-weight: bold; padding-left: 5px;">${group.category}</td>
            </tr>
        `;
        group.items.forEach(item => {
            rowsHtml += `
                <tr style="height: 25px;">
                    <td style="border: 1px solid #000; text-align: center; font-size: 0.75rem;">${item.no}</td>
                    <td style="border: 1px solid #000; padding-left: 5px; font-size: 0.75rem;">${item.name}</td>
                    <td style="border: 1px solid #000; padding-left: 5px; font-size: 0.7rem;">${item.std}</td>
                    <td style="border: 1px solid #000; text-align: center; font-size: 0.75rem;">${item.check}</td>
                    <td class="check-cell" data-state="0" data-num="${rowIdx++}" style="border: 1px solid #000; width: 35px; text-align: center; cursor: pointer; font-weight: bold;"></td>
                    <td class="check-cell" data-state="0" data-num="${rowIdx++}" style="border: 1px solid #000; width: 35px; text-align: center; cursor: pointer; font-weight: bold;"></td>
                    <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 100px; text-align: center; font-size: 0.75rem;"></td>
                    <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px; text-align: center; font-size: 0.75rem;"></td>
                </tr>
            `;
        });
    });

    for (let i = 0; i < 5; i++) {
        rowsHtml += `
            <tr style="height: 25px;">
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td class="check-cell" data-state="0" data-num="${rowIdx++}" style="border: 1px solid #000; width: 35px;"></td>
                <td class="check-cell" data-state="0" data-num="${rowIdx++}" style="border: 1px solid #000; width: 35px;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
                <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            </tr>
        `;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; font-family: 'Sarabun', sans-serif;">
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
                    <td style="border: 1px solid #ccc; padding: 4px; width: 150px;"><span contenteditable="true" class="fmt31-pump-model" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px; width: 50px;">S/N :</td>
                    <td style="border: 1px solid #ccc; padding: 4px; width: 120px;"><span contenteditable="true" class="fmt31-pump-sn" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px; width: 60px;">TYPE :</td>
                    <td style="border: 1px solid #ccc; padding: 4px;"><span contenteditable="true" class="fmt31-type" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px; width: 60px;">Date :</td>
                    <td style="border: 1px solid #ccc; padding: 4px; width: 120px;"><span contenteditable="true" class="fmt31-date-val" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ccc; padding: 4px;">DRIVEN :</td>
                    <td style="border: 1px solid #ccc; padding: 4px;"><span contenteditable="true" class="fmt31-driven" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px;">S/N :</td>
                    <td style="border: 1px solid #ccc; padding: 4px;"><span contenteditable="true" class="fmt31-driven-sn" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px;" colspan="1">JOCKEY PUMP MODEL :</td>
                    <td style="border: 1px solid #ccc; padding: 4px;"><span contenteditable="true" class="fmt31-jockey-model" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                    <td style="border: 1px solid #ccc; padding: 4px;">S/N :</td>
                    <td style="border: 1px solid #ccc; padding: 4px;"><span contenteditable="true" class="fmt31-jockey-sn" style="display: block; width: 100%; border-bottom: 1px dotted #000;"></span></td>
                </tr>
                <tr>
                    <td colspan="7"></td>
                    <td style="border: 1px solid #ccc; padding: 4px;">Time : <span contenteditable="true" class="fmt31-time" style="display: inline-block; width: 60px; border-bottom: 1px dotted #000;"></span></td>
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
                                (<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 120px; border-bottom: 1px dotted #000;"></span>)
                            </td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; padding: 2px;">
                                (<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 120px; border-bottom: 1px dotted #000;"></span>)
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);

    div.querySelectorAll('.check-cell').forEach(cell => {
        cell.addEventListener('click', () => {
            let state = parseInt(cell.dataset.state);
            state = (state + 1) % 3;
            cell.dataset.state = state;
            if (state === 1) cell.innerHTML = '/';
            else if (state === 2) cell.innerHTML = 'X';
            else cell.innerHTML = '';
        });
    });
}


function renderExactTable22() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    const allItems = checklistData22.flatMap(g => g.items);

    let rowsHtml = '';
    checklistData22.forEach(group => {
        // Category Header Row
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item) => {
            const rowIdx = allItems.indexOf(item);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const numForData = rowIdx * 31 + d + 1;
                cells += `<td class="check-cell mach-${d + 1}" data-num="${numForData}" data-state="0" 
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer;"
                    onclick="toggle(this)"></td>`;
            }
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1.1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็คเครื่องกลึงประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.75rem;">
                    <b>เดือน</b>
                    <select class="fmt22-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    /
                    <select class="fmt22-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.7rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-22</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: 1px solid #000; border-left: none; border-right: none; font-size: 0.85rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt22-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt22-m-name" contenteditable="true" style="border-bottom: 1px solid #000; display: inline-block; min-width: 150px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt22-area" contenteditable="true" style="font-weight: bold;">ข้างอาคารผลิต 1</span></div>
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

function renderExactTable32() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    const allItems = checklistData32.flatMap(g => g.items);

    let rowsHtml = '';
    checklistData32.forEach(group => {
        // Category Header Row
        rowsHtml += `<tr style="background: #fdfdfd;">
            <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr>`;

        group.items.forEach((item) => {
            const rowIdx = allItems.indexOf(item);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const numForData = rowIdx * 31 + d + 1;
                cells += `<td class="check-cell mach-${d + 1}" data-num="${numForData}" data-state="0" 
                    style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer;"
                    onclick="toggle(this)"></td>`;
            }
            rowsHtml += `<tr>
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">- &nbsp; ${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>
                ${cells}
            </tr>`;
        });
    });

    div.innerHTML = `
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
                    <b>เดือน</b>
                    <select class="fmt32-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt32-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-32</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt32-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt32-m-name" contenteditable="true" style="display: inline-block; min-width: 120px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px;">คันที่ใช้งาน: <span class="fmt32-area" contenteditable="true" style="display: inline-block; min-width: 100px; font-weight: bold;"></span></div>
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

function renderExactTable33() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    const allItems = checklistData33.flatMap(g => g.items);

    let rowsHtml = '';
    allItems.forEach((item, rowIdx) => {
        let cells = '';
        for (let d = 0; d < 31; d++) {
            const numForData = rowIdx * 31 + d + 1;
            cells += `<td class="check-cell mach-${d + 1}" data-num="${numForData}" data-state="0"
                style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; cursor:pointer;"
                onclick="toggle(this)"></td>`;
        }
        rowsHtml += `<tr>
            <td class="col-item" style="font-size:0.75rem; padding-left: 8px; border: 1px solid #000;">${item.name}</td>
            <td class="col-std" style="font-size:0.7rem; text-align:center; border: 1px solid #000;">${item.std}</td>
            ${cells}
        </tr>`;
    });

    // Extra empty rows for notes
    for (let i = 0; i < 3; i++) {
        let cells = '';
        for (let d = 0; d < 31; d++) {
            cells += `<td style="border: 1px solid #000; width: 22px;"></td>`;
        }
        rowsHtml += `<tr style="height: 22px;">
            <td style="border: 1px solid #000;"></td>
            <td style="border: 1px solid #000;"></td>
            ${cells}
        </tr>`;
    }

    div.innerHTML = `
        <div style="border-left: 1px solid #000; border-right: 1px solid #000; border-top: 1px solid #000; margin-bottom: 0;">
            <div class="form-header" style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ตารางการตรวจเช็ครถดูใบน้ำ (KUBOTA) ประจำวัน
                </div>

                <div style="flex: 1.5; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b>
                    <select class="fmt33-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt33-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-33</b>
                    <b style="margin-left: 10px;">Re#1</b>
                </div>
            </div>

            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt33-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt33-m-name" contenteditable="true" style="display: inline-block; min-width: 120px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ใช้งาน: <span class="fmt33-area" contenteditable="true" style="display: inline-block; min-width: 100px; font-weight: bold;"></span></div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.65rem; border-top: none; margin-top: 0; width: 100%;">
            <thead>
                <tr>
                    <th rowspan="2" style="width:200px; border: 1px solid #000;">รายละเอียดของการตรวจเช็ค</th>
                    <th rowspan="2" style="width:100px; border: 1px solid #000;">มาตรฐานการตรวจ</th>
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
                        หมายเหตุ &nbsp;&nbsp;&nbsp; ระบุ &nbsp; / &nbsp; ปกติ &nbsp;&nbsp; ไม่ปกติ &nbsp;&nbsp; X
                    </div>
                    <div style="font-size: 0.75rem; line-height: 1.4;">
                        หนักงานซ่อมบำรุงเมื่อตรวจเช็คเจอสภาพไม่ปกติต้องซ่อมทันที ถ้าเป็นงานใช้เวลา ใช้ใบงานให้แจ้งหัวหน้าแผนก และเขียนใบแจ้งซ่อมทันที
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


function renderExactTable35() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 1; i <= 22; i++) {
        rowsHtml += `< tr >
            <td style="border: 1px solid #000; text-align: center; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 70px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 50px; text-align: center;"></td>
            <td class="check-cell test-pass" data-state="0" style="border: 1px solid #000; width: 30px; text-align: center;"></td>
            <td class="check-cell test-fail" data-state="0" style="border: 1px solid #000; width: 30px; text-align: center;"></td>
        </tr > `;
    }

    div.innerHTML = `
    < div style = "border: 1px solid #000; margin-bottom: 0;" >
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
        </div >

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
                            <td style="border: 1px solid #000; border-left: none; border-top: none; text-align: center; width: 60px;">ลงชื่อ</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้บันทึก</td>
                            <td style="border: 1px solid #000; border-top: none; text-align: center;">ผู้ตรวจเช็ค</td>
                            <td style="border: 1px solid #000; border-right: none; border-top: none; text-align: center;">ผู้อนุมัติ</td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center;">ลายเซ็น</td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000;"></td>
                            <td style="border: 1px solid #000; border-right: none;"></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; text-align: center; font-size: 0.6rem;">ชื่อ (ตัวบรรจง)</td>
                            <td style="border: 1px solid #000;"><span contenteditable="true" class="sig-name" style="display: block; width: 100%; text-align: center;"></span></td>
                            <td style="border: 1px solid #000;"><span contenteditable="true" class="sig-name" style="display: block; width: 100%; text-align: center;"></span></td>
                            <td style="border: 1px solid #000; border-right: none;"><span contenteditable="true" class="sig-name" style="display: block; width: 100%; text-align: center;"></span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;"><input type="text" class="log-cell" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;" placeholder="/   / "></td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;"><input type="text" class="log-cell" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;" placeholder="/   / "></td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center;"><input type="text" class="log-cell" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;" placeholder="/   / "></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
`;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable36() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    div.innerHTML = `
    < div style = "border: 1px solid #000; margin-bottom: 0;" >
        <div style="display: flex; align-items: stretch;">
            <div style="padding: 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                <img src="Logo.png" alt="Logo" style="height: 40px; width: auto;">
                    <div style="font-size: 0.95rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
            </div>

            <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                <div style="font-size: 1.1rem; font-weight: 700;">ใบขออนุมัตินำแม่พิมพ์ไปใช้ชั่วคราวแผนกซ่อมบำรุงวันที่ <span contenteditable="true" class="fmt36-h-day" style="min-width: 30px; display: inline-block; border-bottom: 1px dotted #000;"></span> / <span contenteditable="true" class="fmt36-h-month" style="min-width: 30px; display: inline-block; border-bottom: 1px dotted #000;"></span> / <span contenteditable="true" class="fmt36-h-year" style="min-width: 40px; display: inline-block; border-bottom: 1px dotted #000;"></span></div>
            </div>

            <div style="flex: 0.8; padding: 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.8rem;">
                <div><b>FMT-36</b> <b>Re#0</b></div>
            </div>
        </div>
        </div >

    <div style="border: 1px solid #000; border-top: none; padding: 30px; min-height: 600px; font-size: 1rem; line-height: 2;">
        <div style="margin-bottom: 20px;">
            วันที่ <span contenteditable="true" class="fmt36-date" style="min-width: 250px; display: inline-block; border-bottom: 1px dotted #000; margin-left: 10px;"></span>
        </div>

        <div style="display: flex; align-items: flex-start; margin-bottom: 20px;">
            <span style="white-space: nowrap;">เรื่อง</span>
            <div contenteditable="true" class="fmt36-subject" style="flex: 1; border-bottom: 1px dotted #000; margin-left: 10px; min-height: 60px;"></div>
        </div>

        <div style="margin-bottom: 20px;">
            เรียน <span contenteditable="true" class="fmt36-to" style="min-width: 400px; display: inline-block; border-bottom: 1px dotted #000; margin-left: 10px;"></span>
        </div>

        <div style="display: flex; flex-direction: column; margin-bottom: 40px;">
            <span>เหตุผลของการดำเนินการ</span>
            <div contenteditable="true" class="fmt36-reason" style="flex: 1; border-bottom: 1px dotted #000; min-height: 250px; text-align: justify; padding-top: 5px;"></div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 50px; gap: 20px;">
            <div style="flex: 1; border: 1px solid #000; padding: 10px; display: flex; flex-direction: column; align-items: center;">
                <div style="font-weight: bold; margin-bottom: 15px;">ผู้ร้องขอดำเนินการ</div>
                <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 30px;"></div>
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ( <span contenteditable="true" class="sig-name" style="min-width: 120px; text-align: center;"></span> )
                </div>
                <div style="margin-top: 10px; font-size: 0.9rem;">วันที่ <span contenteditable="true" class="log-cell" style="min-width: 100px; display: inline-block; border-bottom: 1px dotted #000;"></span></div>
            </div>

            <div style="flex: 1; border: 1px solid #000; padding: 10px; display: flex; flex-direction: column; align-items: center;">
                <div style="font-weight: bold; margin-bottom: 15px;">หัวหน้าแผนก/ฝ่าย</div>
                <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 30px;"></div>
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ( <span contenteditable="true" class="sig-name" style="min-width: 120px; text-align: center;"></span> )
                </div>
                <div style="margin-top: 10px; font-size: 0.9rem;">วันที่ <span contenteditable="true" class="log-cell" style="min-width: 100px; display: inline-block; border-bottom: 1px dotted #000;"></span></div>
            </div>

            <div style="flex: 1; border: 1px solid #000; padding: 10px; display: flex; flex-direction: column; align-items: center;">
                <div style="font-weight: bold; margin-bottom: 15px;">ผู้อนุมัติ</div>
                <div style="width: 150px; border-bottom: 1px dotted #000; margin-bottom: 10px; height: 30px;"></div>
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 5px;">
                    ( <span contenteditable="true" class="sig-name" style="min-width: 120px; text-align: center;"></span> )
                </div>
                <div style="margin-top: 10px; font-size: 0.9rem;">วันที่ <span contenteditable="true" class="log-cell" style="min-width: 100px; display: inline-block; border-bottom: 1px dotted #000;"></span></div>
            </div>
        </div>
    </div>
`;
    document.getElementById('forms-container').appendChild(div);
}
function renderExactTable39() {
    const div = document.createElement('div');
    div.className = 'sheet-container portrait-sheet';

    let rowsHtml = '';
    for (let i = 0; i < 28; i++) {
        rowsHtml += `< tr style = "height: 28px;" >
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 120px;"></td>
        </tr > `;
    }

    div.innerHTML = `
    < div style = "border: 1px solid #000; margin-bottom: 0;" >
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ใบบันทึกประวัติการซ่อมรอกไฟฟ้า
                </div>
                
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                    <div style="font-weight: bold;">FMT-39 Rev.0</div>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>Machine No.</b>
                    <span contenteditable="true" class="fmt39-m-no" style="flex: 1; min-width: 100px; padding: 2px; text-align: center;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>Location</b>
                    <span contenteditable="true" class="fmt39-loc" style="flex: 1; font-weight: bold; text-align: center; padding: 2px;"></span>
                </div>
            </div>
        </div >

        <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; width: 80px; background: #fff;">ว/ค/ป</th>
                    <th style="border: 1px solid #000; background: #fff;">รายละเอียด</th>
                    <th style="border: 1px solid #000; width: 60px; background: #fff;">ซ่อม</th>
                    <th style="border: 1px solid #000; width: 60px; background: #fff;">PM</th>
                    <th style="border: 1px solid #000; width: 120px; background: #fff;">ผู้ปฏิบัติ</th>
                    <th style="border: 1px solid #000; width: 120px; background: #fff;">หมายเหตุ</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
            <div style="width: 320px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                    <tr style="height: 25px;">
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
                    <tr style="height: 25px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ(ตัวบรรจง)</td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
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

function renderExactTable40() {
    const div = document.createElement('div');
    div.className = 'sheet-container portrait-sheet';

    let rowsHtml = '';
    for (let i = 0; i < 28; i++) {
        rowsHtml += `< tr style = "height: 28px;" >
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 80px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: center; width: 120px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; text-align: left; padding-left: 5px; width: 120px;"></td>
        </tr > `;
    }

    div.innerHTML = `
    < div style = "border: 1px solid #000; margin-bottom: 0;" >
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    ใบบันทึกประวัติการซ่อมเครื่องจักรและอุปกรณ์สารสนเทศ
                </div>
                
                <div style="flex: 0.8; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem; gap: 2px;">
                    <div style="font-weight: bold;">FMT-40 Re#0</div>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.9rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000; display: flex; align-items: center; gap: 5px;">
                    <b>Machine No.</b>
                    <span contenteditable="true" class="fmt40-m-no" style="flex: 1; min-width: 100px; padding: 2px; text-align: center;"></span>
                </div>
                <div style="flex: 1; padding: 6px 10px; display: flex; align-items: center; gap: 5px;">
                    <b>Location</b>
                    <span contenteditable="true" class="fmt40-loc" style="flex: 1; font-weight: bold; text-align: center; padding: 2px;"></span>
                </div>
            </div>
        </div >

        <table class="main-table" style="font-size: 0.85rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000; width: 80px; background: #fff;">ว/ค/ป</th>
                    <th style="border: 1px solid #000; background: #fff;">รายละเอียด</th>
                    <th style="border: 1px solid #000; width: 60px; background: #fff;">ซ่อม</th>
                    <th style="border: 1px solid #000; width: 60px; background: #fff;">PM</th>
                    <th style="border: 1px solid #000; width: 120px; background: #fff;">ผู้ปฏิบัติ</th>
                    <th style="border: 1px solid #000; width: 120px; background: #fff;">หมายเหตุ</th>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; border: 1px solid #000; border-top: none;">
            <div style="width: 320px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; table-layout: fixed;">
                    <tr style="height: 25px;">
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
                    <tr style="height: 25px;">
                        <td style="border: 1px solid #000; text-align: center; vertical-align: middle; font-size: 0.65rem;">ชื่อ (ตัวบรรจง)</td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                        <td style="border: 1px solid #000; padding: 2px;"><span contenteditable="true" class="sig-name" style="display: block; outline: none; text-align: center;"></span></td>
                    </tr>
                    <tr style="height: 25px;">
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

function renderExactTable44() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `< th style = "width: 20px; text-align: center; cursor: pointer" onclick = "toggleColumn(${i})" > ${i}</th > `;
    }

    let rowsHtml = '';
    checklistData44.forEach(group => {
        rowsHtml += `< tr style = "background: #fdfdfd;" >
    <td colspan="2" style="text-align: left; font-weight: bold; padding-left: 5px; font-size: 0.8rem; height: 22px; border: 1px solid #000;">${group.category}</td>
            ${Array(31).fill('<td style="border: 1px solid #000; background: #fafafa;"></td>').join('')}
        </tr > `;

        group.items.forEach((item, idx) => {
            rowsHtml += `< tr >
                <td class="col-item" style="font-size:0.75rem; padding-left: 15px; border: 1px solid #000;">${item.name}</td>
                <td class="col-std" style="font-size:0.7rem; border: 1px solid #000;">${item.std}</td>`;
            for (let i = 1; i <= 31; i++) {
                rowsHtml += `< td class="check-cell mach-${i}" data - state="0" data - num="${i}" style = "border: 1px solid #000;" ></td > `;
            }
            rowsHtml += `</tr > `;
        });
    });

    div.innerHTML = `
    < div style = "border-left: 1px solid #000; margin-bottom: 0;" >
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องจักรเครื่องกรองน้ำประจำวัน
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
                    <b style="margin-left: auto;">FMT-44</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span style="font-weight: bold;">เครื่องกรองน้ำ R.O.</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span contenteditable="true" class="fmt02-area" style="font-weight: bold; border-bottom: 1px solid #000; display: inline-block; min-width: 80px;">ข้างฝ่ายออฟฟิศ</span></div>
            </div>
        </div >

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
