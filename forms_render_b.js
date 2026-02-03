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
