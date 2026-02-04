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
                    <select class="fmt-02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
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
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true" style="font-weight: bold;">บ่อน้ำร้อน 1</span></div>
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

function renderExactTable16() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData16.forEach(group => {
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
                    ตารางการตรวจเช็คเครื่องบดโฟมประจำวัน
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
                    <b style="margin-left: auto;">FMT-16</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 1; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt02-m-name" contenteditable="true" style="font-weight: bold;">เครื่องรีไซเคิล</span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true" style="font-weight: bold;">ด้านข้างอาคารผลิต 1</span></div>
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
function renderExactTable19() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData19.forEach(group => {
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
        <div style="">
            <div class="form-header" style="display: flex; align-items: stretch;">
                <div class="logo-box" style="padding: 5px 15px; width: auto; flex: 1.2; display: flex; flex-direction: row; gap: 10px; align-items: center;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div class="company-name" style="font-size: 1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>

                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 10px; font-size: 1rem; font-weight: 700; text-align: center;">
                    ตารางการตรวจเช็คเครื่องบดโฟมประจำวัน
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
                    <b style="margin-left: auto;">FMT-19</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border: 1px solid #000; border-top: none; font-size: 0.8rem;">
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="border-bottom: 1px solid #000; display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 1; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true" style="font-weight: bold;">บริเวณโรงงานทั้งหมด</span></div>
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

function renderExactTable22() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let dateHeaders = '';
    for (let i = 1; i <= 31; i++) {
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData22.forEach(group => {
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
                rowsHtml += `<td class="check-cell mach-${i}" data-state="0" data-num="${i}" onclick="toggle(this)" style="border: 1px solid #000;"></td>`;
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
                    ตารางการตรวจเช็คเครื่องกลึงประจำวัน
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
                    <b style="margin-left: auto;">FMT-22</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no"  display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt02-m-name" contenteditable="true"  display: inline-block; "></span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true"  display: inline-block; ">ข้างอาคารผลิต 1</span></div>
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
                    <select class="fmt02-month-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">เลือก</option>
                        ${thaiMonths.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('')}
                    </select>
                    <b> / </b>
                    <select class="fmt02-year-select" style="padding: 2px 4px; border: 1px solid #000; font-size: 0.65rem;">
                        <option value="">ปี</option>
                        ${Array.from({ length: 10 }, (_, i) => getCurrentThaiYear() - 5 + i).map(y => `<option value="${y}">${y}</option>`).join('')}
                    </select>
                    <b style="margin-left: auto;">FMT-23</b>
                    <b style="margin-left: 10px;">Re:#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span class="fmt02-m-name" contenteditable="true" style="display: inline-block; min-width: 120px;">เครื่องมิลลิ่ง</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span class="fmt02-area" contenteditable="true" style="display: inline-block; min-width: 100px;">ข้างอาคารผลิต 1</span></div>
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
                    <b style="margin-left: auto;">FMT-26</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" style="font-weight: bold; min-width: 120px;">คูลลิ่งทาวเวอร์</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span contenteditable="true" style="font-weight: bold; min-width: 100px;">อยู่บนถังคูลลิ่ง<span></div>
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
                    <b style="margin-left: auto;">FMT-27</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            
            <div style="display: flex; border-bottom: 1px solid #000; font-size: 0.8rem;">
                <div style="flex: 1.5; padding: 6px 10px; border-right: 1px solid #000;">เครื่องจักรหมายเลข / Machine No.: <span contenteditable="true" class="fmt02-m-no" style="display: inline-block; min-width: 80px;"></span></div>
                <div style="flex: 2; padding: 6px 10px; border-right: 1px solid #000;">ชื่อเครื่องจักร/Machine Name : <span contenteditable="true" class="fmt02-m-name" style="font-weight: bold; min-width: 120px;">หม้อไอน้ำ / Boiler</span></div>
                <div style="flex: 1.5; padding: 6px 10px;">พื้นที่ติดตั้ง: <span contenteditable="true" class="fmt02-area" style="font-weight: bold; min-width: 100px;">แผนกซ่อมบำรุง</span></div>
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

function renderExactTable30() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    div.innerHTML = `
        <div style="border: 1px solid #000; padding: 20px; font-family: 'Sarabun', sans-serif;">
            <!-- Header -->
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="Logo.png" alt="Logo" style="height: 40px; width: auto;">
                    <div style="font-size: 1.1rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 1.3rem; font-weight: 700;">ใบบันทึกผลการบำรุงรักษาเชิงป้องกัน</div>
                </div>
                <div style="text-align: right; font-size: 0.8rem; font-weight: bold;">
                    FMT-30 Re#0
                </div>
            </div>

            <!-- Top Info -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 15px; font-size: 0.9rem;">
                <div>วันที่: <span contenteditable="true" class="fmt30-date" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 150px;"></span></div>
                <div>ชื่อเครื่องจักร: <span contenteditable="true" class="fmt30-m-name" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 150px;"></span></div>
                <div>รุ่น: <span contenteditable="true" class="fmt30-model" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 100px;"></span></div>
                
                <div>หัวข้องาน PM: <span contenteditable="true" class="fmt30-subject" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 150px;"></span></div>
                <div>ประจำสัปดาห์ที่: <span contenteditable="true" class="fmt30-week" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 50px;"></span></div>
                <div>ประจำเดือน: <span contenteditable="true" class="fmt30-month" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 80px;"></span></div>
            </div>
            <div style="font-size: 0.9rem; margin-bottom: 20px;">
                ผู้ดำเนินงาน : <span contenteditable="true" class="fmt30-performer" style="border-bottom: 1px dotted #000; display: inline-block; min-width: 300px;"></span>
            </div>

            <!-- Body Sections -->
            <div style="font-weight: bold; font-size: 1rem; margin-bottom: 10px;">รายละเอียดการบำรุงรักษาเชิงป้องกัน</div>
            
            ${[1, 2, 3, 4, 5].map(i => `
                <div style="margin-bottom: 15px; font-size: 0.9rem;">
                    <div style="display: flex; gap: 5px;">
                        <span>${i}.</span>
                        <div contenteditable="true" class="log-cell" style="flex: 1; border-bottom: 1px dotted #ccc; min-height: 20px; outline: none;"></div>
                    </div>
                    <div style="display: flex; gap: 5px; margin-left: 15px; margin-top: 5px; color: #444;">
                        <span>ผลการทำงาน :</span>
                        <div contenteditable="true" class="log-cell" style="flex: 1; border-bottom: 1px dotted #ccc; min-height: 20px; outline: none;"></div>
                    </div>
                </div>
            `).join('')}

            <div style="margin-top: 25px;">
                <div style="font-weight: bold; font-size: 0.95rem; margin-bottom: 5px;">ข้อเสนอแนะ</div>
                <div contenteditable="true" class="log-cell" style="border: 1px solid #ddd; padding: 10px; min-height: 80px; font-size: 0.9rem; border-radius: 4px;"></div>
            </div>

            <!-- Signatures Section A -->
            <div style="display: flex; justify-content: space-around; margin-top: 40px; text-align: center; font-size: 0.85rem;">
                <div style="width: 200px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 5px; min-height: 30px;"></div>
                    <div>ผู้ปฏิบัติงาน</div>
                    <div style="margin-top: 5px;">(<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 80px;"></span>)</div>
                </div>
                <div style="width: 200px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 5px; min-height: 30px;"></div>
                    <div>หัวหน้าแผนก</div>
                    <div style="margin-top: 5px;">(<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 80px;"></span>)</div>
                </div>
                <div style="width: 200px;">
                    <div style="border-bottom: 1px solid #000; margin-bottom: 5px; min-height: 30px;"></div>
                    <div>ผู้อนุมัติ</div>
                    <div style="margin-top: 5px;">(<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 80px;"></span>)</div>
                </div>
            </div>

            <!-- Footer Section (ฝ่ายตรวจสอบติดตามผล) -->
            <div style="margin-top: 40px; border-top: 2px solid #000; padding-top: 15px;">
                <div style="text-align: center; font-weight: bold; text-decoration: underline; margin-bottom: 15px; font-size: 1rem;">ฝ่ายตรวจสอบติดตามผล</div>
                
                <div style="display: flex; justify-content: center; gap: 50px; margin-bottom: 15px; font-size: 0.95rem;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" class="check-box-manual" data-num="1" style="width: 18px; height: 18px;"> เรียบร้อย
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" class="check-box-manual" data-num="2" style="width: 18px; height: 18px;"> ไม่เรียบร้อย
                    </label>
                </div>
                
                <div style="font-size: 0.9rem; margin-bottom: 25px;">
                    เนื่องจาก : <div contenteditable="true" class="log-cell" style="display: block; width: 100%; border-bottom: 1px dotted #000; min-height: 40px; margin-top: 5px;"></div>
                </div>

                <div style="display: flex; justify-content: space-around; text-align: center; font-size: 0.85rem;">
                    <div style="width: 250px;">
                        <div style="border-bottom: 1px solid #000; margin-bottom: 5px; min-height: 30px;"></div>
                        <div>ผู้ตรวจสอบ</div>
                        <div style="margin-top: 5px;">(<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 80px;"></span>)</div>
                    </div>
                    <div style="width: 250px;">
                        <div style="border-bottom: 1px solid #000; margin-bottom: 5px; min-height: 30px;"></div>
                        <div>ผู้รับใบ PM</div>
                        <div style="margin-top: 5px;">(<span contenteditable="true" class="sig-name" style="display: inline-block; min-width: 80px;"></span>)</div>
                    </div>
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

    let rowsHtml1 = '';
    for (let i = 1; i <= 3; i++) {
        rowsHtml1 += `<tr>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="check-cell mach-1" data-state="0" data-num="1" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="check-cell mach-2" data-state="0" data-num="2" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px;"></td>
        </tr>`;
    }

    let rowsHtml2 = '';
    for (let i = 4; i <= 28; i++) {
        rowsHtml2 += `<tr>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="check-cell mach-1" data-state="0" data-num="1" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="check-cell mach-2" data-state="0" data-num="2" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                
                <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                    <div style="font-size: 1rem; font-weight: 700;">ตารางบันทึกการซ่อมบำรุงประจำสัปดาห์</div>
                    <div style="font-size: 0.8rem; margin-top: 5px;">
                        วันที่ <span contenteditable="true" class="fmt31-day" style="border-bottom: 1px dotted #000; min-width: 30px; display: inline-block;"></span> 
                        เดือน <span contenteditable="true" class="fmt31-month" style="border-bottom: 1px dotted #000; min-width: 80px; display: inline-block;"></span> 
                        พ.ศ. 2568
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
                        งานค้างซ่อม Wk ที่ <span contenteditable="true" class="fmt31-wk-pending" style="border-bottom: 1px dotted #000; min-width: 100px; display: inline-block;"></span>
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
                    <th style="border: 1px solid #000; width: 35px;">เสร็จ</th>
                    <th style="border: 1px solid #000; width: 35px;">ไม่เสร็จ</th>
                </tr>
            </thead>
            <tbody>${rowsHtml1}</tbody>
            <thead>
                <tr style="background: #f8f8f8;">
                    <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                        งานซ่อม Wk ที่ <span contenteditable="true" class="fmt31-wk-current" style="border-bottom: 1px dotted #000; min-width: 150px; display: inline-block;"></span>
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
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center;"><input type="text" class="log-cell" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;" placeholder="................................"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable32() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml1 = '';
    for (let i = 1; i <= 3; i++) {
        rowsHtml1 += `<tr>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="check-cell mach-1" data-state="0" data-num="1" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="check-cell mach-2" data-state="0" data-num="2" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px;"></td>
        </tr>`;
    }

    let rowsHtml2 = '';
    for (let i = 4; i <= 28; i++) {
        rowsHtml2 += `<tr>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.7rem;">${i}</td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 60px;"></td>
            <td class="check-cell mach-1" data-state="0" data-num="1" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="check-cell mach-2" data-state="0" data-num="2" style="border: 1px solid #000; width: 35px; text-align: center;"></td>
            <td class="log-cell" contenteditable="true" style="border: 1px solid #000; width: 120px;"></td>
        </tr>`;
    }

    div.innerHTML = `
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 15px; flex: 1.2; display: flex; align-items: center; gap: 10px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 30px; width: auto;">
                    <div style="font-size: 0.9rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                
                <div style="flex: 2; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; text-align: center; border-right: 1px solid #000;">
                    <div style="font-size: 1rem; font-weight: 700;">ตารางบันทึกการทำ PM ประจำสัปดาห์แผนกซ่อมบำรุง</div>
                    <div style="font-size: 0.8rem; margin-top: 5px;">
                        วันที่ <span contenteditable="true" class="fmt32-day" style="border-bottom: 1px dotted #000; min-width: 30px; display: inline-block;"></span> 
                        เดือน <span contenteditable="true" class="fmt32-month" style="border-bottom: 1px dotted #000; min-width: 80px; display: inline-block;"></span> 
                        พ.ศ. 2568
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
                        งานค้างซ่อม Wk ที่ <span contenteditable="true" class="fmt32-wk-pending" style="border-bottom: 1px dotted #000; min-width: 100px; display: inline-block;"></span>
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
                    <th style="border: 1px solid #000; width: 35px;">เสร็จ</th>
                    <th style="border: 1px solid #000; width: 35px;">ไม่เสร็จ</th>
                </tr>
            </thead>
            <tbody>${rowsHtml1}</tbody>
            <thead>
                <tr style="background: #f8f8f8;">
                    <th colspan="8" style="border: 1px solid #000; text-align: left; padding: 4px 10px;">
                        งานซ่อม Wk ที่ <span contenteditable="true" class="fmt32-wk-current" style="border-bottom: 1px dotted #000; min-width: 150px; display: inline-block;"></span>
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
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center;"><input type="text" class="log-cell" style="width: 100%; border: none; text-align: center; font-size: 0.65rem;" placeholder="................................"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
    document.getElementById('forms-container').appendChild(div);
}

function renderExactTable33() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 1; i <= 22; i++) {
        rowsHtml += `<tr>
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
        </tr>`;
    }

    div.innerHTML = `
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

function renderExactTable35() {
    const div = document.createElement('div');
    div.className = 'sheet-container';

    let rowsHtml = '';
    for (let i = 1; i <= 22; i++) {
        rowsHtml += `<tr>
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
        </tr>`;
    }

    div.innerHTML = `
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
        <div style="border: 1px solid #000; margin-bottom: 0;">
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
        </div>

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
        </div>

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
        </div>

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
        dateHeaders += `<th style="width: 20px; text-align: center; cursor: pointer" onclick="toggleColumn(${i})">${i}</th>`;
    }

    let rowsHtml = '';
    checklistData44.forEach(group => {
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
