function generateFormHTMLFromData(item) {
    if (item.fmt === 1) return renderStaticForm01(item);
    if (item.fmt === 2) return renderStaticForm02(item);
    if (item.fmt === 3) return renderStaticForm03(item);
    if (item.fmt === 4) return renderStaticForm04(item);
    if (item.fmt === 5) return renderStaticForm05(item);
    if (item.fmt === 6) return renderStaticForm06(item);
    if (item.fmt === 7) return renderStaticForm07(item);
    if (item.fmt === 8) return renderStaticForm08(item);
    if (item.fmt === 9) return renderStaticForm09(item);
    if (item.fmt === 10) return renderStaticForm10(item);
    if (item.fmt === 11) return renderStaticForm11(item);
    if (item.fmt === 12) return renderStaticForm12(item);
    if (item.fmt === 13) return renderStaticForm13(item);
    if (item.fmt === 14) return renderStaticForm14(item);
    if (item.fmt === 15) return renderStaticForm15(item);
    if (item.fmt === 16) return renderStaticForm16(item);
    if (item.fmt === 17) return renderStaticForm17(item);
    if (item.fmt === 18) return renderStaticForm18(item);
    if (item.fmt === 19) return renderStaticForm19(item);
    if (item.fmt === 20) return renderStaticForm20(item);
    if (item.fmt === 21) return renderStaticForm21(item);
    if (item.fmt === 22) return renderStaticForm22(item);
    if (item.fmt === 23) return renderStaticForm23(item);
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
    if (item.fmt === 37) return renderStaticForm37(item);
    if (item.fmt === 38) return renderStaticForm38(item);
    if (item.fmt === 39) return renderStaticForm39(item);
    if (item.fmt === 40) return renderStaticForm40(item);
    if (item.fmt === 44) return renderStaticForm44(item);

    return '<div>Form format not found</div>';
}

function renderStaticForm40(item) {
    return renderHistoryBaseStaticForm(item, 40, 'ใบบันทึกประวัติการซ่อมเครื่องจักรและอุปกรณ์สารสนเทศ', '');
}

function renderStaticForm39(item) {
    return renderHistoryBaseStaticForm(item, 39, 'ใบบันทึกประวัติการซ่อมรอกไฟฟ้า', '');
}

function renderStaticForm09(item) {
    const logData = item.logData || [];
    let li = 0;
    const lg = () => logData[li++] || '';

    const ROWS = 22;
    let rowsHtml = '';
    for (let i = 0; i < ROWS; i++) {
        const date = lg();
        const regNo = lg();
        const pos = lg();
        const machNo = lg();
        const m1 = lg(), t1 = lg();
        const m2 = lg(), t2 = lg();
        const m3 = lg(), t3 = lg();
        const m4 = lg(), t4 = lg();
        const m5 = lg(), t5 = lg();
        const tol = lg();
        const avg = lg();
        const pass = lg();
        const fail = lg();

        rowsHtml += `<tr style="height: 26px;">
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${i + 1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${date}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${regNo}</td>
            <td style="border: 1px solid #000; text-align: left; padding-left: 4px; font-size: 0.72rem;">${pos}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${machNo}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m2}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t2}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m3}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t3}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m4}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t4}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m5}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t5}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${tol}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${avg}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${pass}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${fail}</td>
        </tr>`;
    }

    return `
    <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 10px; flex: 0.8; display: flex; align-items: center; gap: 8px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 28px; width: auto;">
                    <div style="font-size: 0.8rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2.5; display: flex; align-items: center; justify-content: center; padding: 8px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    แบบฟอร์มการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ
                </div>
                <div style="flex: 0.5; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                    <div style="font-weight: bold;">FMT-09 Re#1</div>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.68rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
            <tr style="height: 20px;">
                    <td colspan="3" style="border: 1px solid #000; font-size: 0.68rem; text-align: center; font-weight: bold;">ผลการทดสอบเพรสเซอร์เกจที่ผ่านการสอบเทียบ</td>
                    <td colspan="16" style="border: 1px solid #000;"></td>
                </tr>
                <tr style="background: #f8f8f8;">
                    <th rowspan="3" style="border: 1px solid #000; width: 25px; background: #fff;">ที่</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 68px; background: #fff;">วัน/เดือน/<br>ปี</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 88px; background: #fff;">หมายเลข<br>ทะเบียน</th>
                    <th rowspan="3" style="border: 1px solid #000; background: #fff;">ตำแหน่งการติดตั้ง</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 58px; background: #fff;">หมายเลข<br>เครื่อง</th>
                    <th colspan="10" style="border: 1px solid #000; text-align: center; background: #fff;">จำนวนครั้งที่ทดสอบ</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 60px; white-space: nowrap; background: #fff;">ค่า+-3%</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 55px; white-space: nowrap; background: #fff;">เฉลี่ย</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการ<br>ทดสอบ</th>
                </tr>
                <tr style="background: #f8f8f8;">
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่1</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่2</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่3</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่4</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่5</th>
                    <th rowspan="2" style="border: 1px solid #000; width: 33px; background: #fff;">ได้</th>
                    <th rowspan="2" style="border: 1px solid #000; width: 33px; background: #fff;">ไม่ได้</th>
                </tr>
                <tr style="background: #f8f8f8;">
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                </tr>
                
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 6px 10px; font-size: 0.7rem;">
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
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;
}

function renderStaticForm10(item) {
    return renderHistoryBaseStaticForm(item, 10, 'ใบบันทึกประวัติการซ่อมเครื่องจักรนิ่มมัด', 'ฝ่ายผลิต');
}

function renderStaticForm11(item) {
    const logData = item.logData || [];
    let li = 0;
    const lg = () => logData[li++] || '';

    const ROWS = 22;
    let rowsHtml = '';
    for (let i = 0; i < ROWS; i++) {
        const date = lg();
        const regNo = lg();
        const pos = lg();
        const machNo = lg();
        const m1 = lg(), t1 = lg();
        const m2 = lg(), t2 = lg();
        const m3 = lg(), t3 = lg();
        const m4 = lg(), t4 = lg();
        const m5 = lg(), t5 = lg();
        const tol = lg();
        const avg = lg();
        const pass = lg();
        const fail = lg();

        rowsHtml += `<tr style="height: 26px;">
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${i + 1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${date}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${regNo}</td>
            <td style="border: 1px solid #000; text-align: left; padding-left: 4px; font-size: 0.72rem;">${pos}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${machNo}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t1}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m2}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t2}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m3}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t3}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m4}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t4}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${m5}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${t5}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${tol}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${avg}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${pass}</td>
            <td style="border: 1px solid #000; text-align: center; font-size: 0.72rem;">${fail}</td>
        </tr>`;
    }

    return `
    <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
        <div style="border: 1px solid #000; margin-bottom: 0;">
            <div style="display: flex; align-items: stretch; border-bottom: 1px solid #000;">
                <div style="padding: 5px 10px; flex: 0.8; display: flex; align-items: center; gap: 8px; border-right: 1px solid #000;">
                    <img src="Logo.png" alt="Logo" style="height: 28px; width: auto;">
                    <div style="font-size: 0.8rem; font-weight: 700;">POLYFOAM HIGH-TECH (PFH)</div>
                </div>
                <div style="flex: 2.5; display: flex; align-items: center; justify-content: center; padding: 8px; font-size: 1rem; font-weight: 700; text-align: center; border-right: 1px solid #000;">
                    แบบฟอร์มการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ
                </div>
                <div style="flex: 0.5; padding: 6px 10px; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; font-size: 0.75rem;">
                    <div style="font-weight: bold;">FMT-11 Re#1</div>
                </div>
            </div>
        </div>

        <table class="main-table" style="font-size: 0.68rem; border-top: none; margin-top: 0; width: 100%; border-collapse: collapse; table-layout: fixed;">
            <thead>
                <tr style="background: #f8f8f8;">
                    <th rowspan="3" style="border: 1px solid #000; width: 25px; background: #fff;">ที่</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 68px; background: #fff;">วัน/เดือน/<br>ปี</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 88px; background: #fff;">หมายเลข<br>ทะเบียน</th>
                    <th rowspan="3" style="border: 1px solid #000; background: #fff;">ตำแหน่งการติดตั้ง</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 58px; background: #fff;">หมายเลข<br>เครื่อง</th>
                    <th colspan="10" style="border: 1px solid #000; text-align: center; background: #fff;">จำนวนครั้งที่ทดสอบ</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 60px; white-space: nowrap; background: #fff;">ค่า+-3%</th>
                    <th rowspan="3" style="border: 1px solid #000; width: 55px; white-space: nowrap; background: #fff;">เฉลี่ย</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการ<br>ทดสอบ</th>
                </tr>
                <tr style="background: #f8f8f8;">
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่1</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่2</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่3</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่4</th>
                    <th colspan="2" style="border: 1px solid #000; text-align: center; background: #fff;">ผลการเทส<br>ครั้งที่5</th>
                    <th rowspan="2" style="border: 1px solid #000; width: 33px; background: #fff;">ได้</th>
                    <th rowspan="2" style="border: 1px solid #000; width: 33px; background: #fff;">ไม่ได้</th>
                </tr>
                <tr style="background: #f8f8f8;">
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">MASTER</th>
                    <th style="border: 1px solid #000; width: 40px; background: #fff;">TEST</th>
                </tr>
                <tr style="height: 20px;">
                    <td colspan="3" style="border: 1px solid #000; font-size: 0.68rem; text-align: center; font-weight: bold;">ผลการทดสอบตัววัดอุณหภูมิที่ผ่านการสอบเทียบ</td>
                    <td colspan="16" style="border: 1px solid #000;"></td>
                </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
        </table>

        <div style="border: 1px solid #000; border-top: none; padding: 6px 10px; font-size: 0.7rem;">
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
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                        <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                    </tr>
                    <tr style="height: 26px;">
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                        <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;
}

function renderStaticForm12(item) {
    return renderHistoryBaseStaticForm(item, 12, 'ใบบันทึกประวัติการซ่อมเครื่องจักรปั๊มลม', 'แท่นปั๊มลม');
}

function renderStaticForm13(item) {
    const allItems = checklistData13.flatMap(g => g.items);
    const itemsCount = allItems.length;

    const renderOneTable = (tableIdx, colCount = 20) => {
        const startNum = tableIdx === 0 ? 1 : tableIdx === 1 ? 21 : 41;
        const cellIndexOffset = tableIdx * itemsCount * 20;

        let machineHeaders = '';
        for (let i = 0; i < colCount; i++) {
            machineHeaders += `<th style="width: 28px; text-align: center; border: 1px solid #000;">${startNum + i}</th>`;
        }
        for (let i = colCount; i < 20; i++) {
            machineHeaders += `<th style="width: 28px; border: 1px solid #000; background:#f5f5f5;"></th>`;
        }

        let rowsHtml = '';
        checklistData13.forEach(group => {
            group.items.forEach((chkItem, idx) => {
                const rowIdx = allItems.indexOf(chkItem);
                let cells = '';
                for (let i = 0; i < colCount; i++) {
                    const cellIdx = cellIndexOffset + rowIdx * 20 + i;
                    const state = item.data && item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                    let content = '', cls = '';
                    if (state === 1) { content = '/'; cls = 'status-ok'; }
                    else if (state === 2) { content = 'X'; cls = 'status-bad'; }
                    cells += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width: 28px;">${content}</td>`;
                }
                for (let i = colCount; i < 20; i++) {
                    cells += `<td style="border: 1px solid #000; width: 28px; background:#f5f5f5;"></td>`;
                }
                const rowRemarkText = (item.rowRemarks && item.rowRemarks[cellIndexOffset / 20 + rowIdx]) ? item.rowRemarks[cellIndexOffset / 20 + rowIdx] : '';
                rowsHtml += `<tr>
                    ${idx === 0 ? `<td rowspan="${group.items.length}" class="category-cell" style="width: 30px; border: 1px solid #000; text-align:center; vertical-align:middle;"><div style="font-weight:bold; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; font-size:0.75rem;">${group.category}</div></td>` : ''}
                    <td style="font-size:0.75rem; width: 150px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.name}</td>
                    <td style="font-size:0.7rem; width: 220px; border: 1px solid #000; text-align: left; padding-left: 5px;">${chkItem.std}</td>
                    ${cells}
                    <td style="border: 1px solid #000; font-size: 0.7rem; width: 60px;">${rowRemarkText}</td>
                </tr>`;
            });
        });

        const remarkIdx = tableIdx;
        return `
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
                <div style="min-height: 40px; border-bottom: 1px dashed #ccc; margin-top: 4px; padding: 4px;">${(item.remarks && item.remarks[remarkIdx]) || ''}</div>
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
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[tableIdx * 3]) || ''}</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[tableIdx * 3 + 1]) || ''}</td>
                            <td style="border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[tableIdx * 3 + 2]) || ''}</td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates && item.sigDates[tableIdx * 3] ? toThaiDateStr(item.sigDates[tableIdx * 3]) : ''}</td>
                            <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates && item.sigDates[tableIdx * 3 + 1] ? toThaiDateStr(item.sigDates[tableIdx * 3 + 1]) : ''}</td>
                            <td style="text-align: center;">${item.sigDates && item.sigDates[tableIdx * 3 + 2] ? toThaiDateStr(item.sigDates[tableIdx * 3 + 2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>`;
    };

    return renderOneTable(0) + renderOneTable(1) + renderOneTable(2, 14);
}


function renderStaticForm14(item) {
    const allItems = checklistData38.flatMap(g => g.items);
    const meta = item.metadata || {};

    let dateHeaders = '';
    for (let d = 1; d <= 31; d++) {
        dateHeaders += `<th style="width: 22px; text-align: center; border: 1px solid #000; font-size: 0.62rem; padding: 1px;">${d}</th>`;
    }

    let rowsHtml = '';
    checklistData38.forEach(group => {
        rowsHtml += `<tr>
            <td colspan="2" style="font-weight:bold; font-size:0.75rem; border: 1px solid #000; padding: 2px 6px; background:#e8e8e8; text-align:left;">${group.category}</td>
            ${Array(31).fill(`<td style="border: 1px solid #000; background:#e8e8e8;"></td>`).join('')}
        </tr>`;
        group.items.forEach((chkItem) => {
            const rowIdx = allItems.indexOf(chkItem);
            let cells = '';
            for (let d = 0; d < 31; d++) {
                const cellIdx = rowIdx * 31 + d;
                const state = item.data && item.data[cellIdx] ? parseInt(item.data[cellIdx].state) : 0;
                let content = '', cls = '';
                if (state === 1) { content = '/'; cls = 'status-ok'; }
                else if (state === 2) { content = 'X'; cls = 'status-bad'; }
                cells += `<td class="check-cell ${cls}" style="text-align:center; font-weight:800; border: 1px solid #000; width: 22px; font-size:0.8rem;">${content}</td>`;
            }
            rowsHtml += `<tr>
                <td style="font-size:0.72rem; border: 1px solid #000; padding-left: 8px; width: 160px; text-align:left;">${chkItem.name}</td>
                <td style="font-size:0.68rem; border: 1px solid #000; padding-left: 4px; width: 190px; text-align:left;">${chkItem.std}</td>
                ${cells}
            </tr>`;
        });
    });

    return `
    <div class="sheet-container" style="page-break-after: always; margin-bottom: 20px;">
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
                </div>
                <div class="form-title" style="flex: 2; display: flex; align-items: center; justify-content: center; padding: 8px; border-right: 2px solid #000; font-size: 1rem; font-weight: 700; text-align: center;">ตารางการตรวจเช็คเครื่องจักรปั๊มสูญญากาศประจำวัน</div>
                <div style="flex: 1.2; padding: 6px 10px; display: flex; align-items: center; gap: 6px; font-size: 0.7rem;">
                    <b>เดือน</b> ${monthText}
                    <b style="margin-left: auto;">FMT-06</b>
                    <b style="margin-left: 10px;">Re#0</b>
                </div>
            </div>
            </tr>
            <tr>
                <td style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem; text-align:left;">
                    เครื่องจักรหมายเลข / Machine No.: <b>${meta.mNo || ''}</b>
                </td>
                <td style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem; text-align:left;">
                    ชื่อเครื่องจักร / Machine Name : <b>${meta.mName || ''}</b>
                </td>
                <td colspan="2" style="border: 1px solid #000; padding: 4px 6px; font-size: 0.7rem; text-align:left;">
                    พื้นที่ติดตั้ง: <b>${meta.loc || ''}</b>
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

        <div style="border: 1px solid #000; border-top: none; padding: 5px; font-size: 0.75rem; text-align:left;">
            รายละเอียดการแก้ไข
            <div style="min-height: 40px; border-bottom: 1px dashed #ccc; margin-top: 4px; padding: 4px;">${(item.remarks && item.remarks[0]) || ''}</div>
        </div>

        <div style="display: flex; border: 1px solid #000; border-top: none;">
            <div style="flex: 2; padding: 10px; text-align:left;">
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
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                        <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                        <td style="border-bottom: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                    </tr>
                    <tr style="height: 25px;">
                        <td style="border-right: 1px solid #000; text-align: center;">วันที่</td>
                        <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates && item.sigDates[0] ? toThaiDateStr(item.sigDates[0]) : ''}</td>
                        <td style="border-right: 1px solid #000; text-align: center;">${item.sigDates && item.sigDates[1] ? toThaiDateStr(item.sigDates[1]) : ''}</td>
                        <td style="text-align: center;">${item.sigDates && item.sigDates[2] ? toThaiDateStr(item.sigDates[2]) : ''}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>`;
}

function renderStaticForm17(item) {
    return renderHistoryBaseStaticForm(item, 17, 'ใบบันทึกประวัติการซ่อมเครื่องจักรและอุปกรณ์สารสนเทศ', 'สารสนเทศ', 'Re#1');
}

function renderStaticForm18(item) {
    const logData = item.logData || [];
    let rowsHtml = '';
    let logIdx = 0;

    for (let i = 0; i < 22; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = logData[logIdx] || '';
            let align = j === 4 ? 'left' : 'center';
            let padding = j === 4 ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding} font-size: 0.8rem;">${val}</td>`;
            logIdx++;
        }
        rowsHtml += `<tr style="height: 28px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.8rem;">${i + 1}</td>
            ${cells}
        </tr>`;
    }

    const remarks = (item.remarks && item.remarks[0]) ? item.remarks[0] : '';
    const sigNames = item.sigNames || ['', '', ''];
    const sigDates = item.sigDates || ['', '', ''];

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
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
                <div style="flex: 1.5; padding: 10px; display: flex; flex-direction: column; gap: 5px; text-align: left;">
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ</div>
                    <div style="min-height: 80px; font-size: 0.8rem;">${remarks}</div>
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
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; padding: 2px;">${sigNames[0]}</td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; padding: 2px;">${sigNames[1]}</td>
                            <td style="border-bottom: 1px solid #000; text-align: center; padding: 2px;">${sigNames[2]}</td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${sigDates[0] ? toThaiDateStr(sigDates[0]) : ''}</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${sigDates[1] ? toThaiDateStr(sigDates[1]) : ''}</td>
                            <td style="text-align: center; padding: 2px;">${sigDates[2] ? toThaiDateStr(sigDates[2]) : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}


function renderStaticForm21(item) {
    const logData = item.logData || [];
    let rowsHtml = '';
    let logIdx = 0;

    for (let i = 0; i < 27; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = logData[logIdx] || '';
            let align = j === 4 ? 'left' : 'center';
            let padding = j === 4 ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding} font-size: 0.75rem;">${val}</td>`;
            logIdx++;
        }
        rowsHtml += `<tr style="height: 25px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.75rem;">${i + 1}</td>
            ${cells}
        </tr>`;
    }

    const remarks = (item.remarks && item.remarks[0]) ? item.remarks[0] : '';
    const sigNames = item.sigNames || ['', '', ''];
    const sigDates = item.sigDates || ['', '', ''];

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
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
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[0]}</span></td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[1]}</span></td>
                            <td style="border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[2]}</span></td>
                        </tr>
                        <tr style="height: 25px;">
                            <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${toThaiDateStr(sigDates[0])}</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${toThaiDateStr(sigDates[1])}</td>
                            <td style="text-align: center; padding: 2px;">${toThaiDateStr(sigDates[2])}</td>
                        </tr>
                    </table>
                </div>
                <div style="flex: 1.5; padding: 5px; display: flex; flex-direction: column; gap: 5px; text-align: left;">
                    <div style="font-size: 0.75rem; font-weight: bold;">หมายเหตุ</div>
                    <div style="min-height: 80px; font-size: 0.75rem;">${remarks}</div>
                </div>
            </div>
        </div>`;
}





function renderHistoryBaseStaticForm(item, fmtNum, title, defaultLoc, revision = 'Re#0') {
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
                        <div style="font-weight: bold;">FMT-${fmtNum < 10 ? '0' + fmtNum : fmtNum} ${revision}</div>
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

function renderStaticForm04(item) {
    let rowsHtml = '';
    let logIndex = 0;
    const itemsPerRow = 8; // No, Name, Brand, Model, Maker, HP, Serial, Registration

    for (let i = 0; i < 28; i++) {
        let cells = '';
        for (let j = 0; j < itemsPerRow; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            cells += `<td style="border: 1px solid #000; text-align: center; font-size: 0.75rem;">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 28px;">${cells}</tr>`;
    }

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
            <div style="text-align: center; font-size: 1.1rem; font-weight: bold; padding: 10px; position: relative;">
                รายการทะเบียนเครื่องจักร
                <div style="position: absolute; top: 5px; right: 0; border: 1px solid #000; padding: 5px 10px; font-size: 0.75rem; font-weight: normal;">
                    FMT-04 Rev#0
                </div>
            </div>
            
            <table class="main-table" style="font-size: 0.75rem; width: 100%; border-collapse: collapse; table-layout: fixed;">
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
                <div style="flex: 1.5; padding: 10px; font-size: 0.8rem;">
                    <b>หมายเหตุ</b><br>
                    <div style="margin-top: 5px;">${(item.remarks && item.remarks[0]) || ''}</div>
                </div>
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
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border: 1px solid #000; border-right: none; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? toThaiDateStr(item.sigDates[0]) : '/ /'}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? toThaiDateStr(item.sigDates[1]) : '/ /'}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? toThaiDateStr(item.sigDates[2]) : '................../................../..................'}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
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

    for (let i = 0; i < 25; i++) {
        let cells = '';
        for (let j = 0; j < 7; j++) {
            let val = (item.logData && item.logData[logIndex]) ? item.logData[logIndex] : '';
            let align = (j === 1 || j === 5 || j === 6) ? 'left' : 'center';
            let padding = (j === 1 || j === 5 || j === 6) ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding}">${val}</td>`;
            logIndex++;
        }
        rowsHtml += `<tr style="height: 30px;">${cells}</tr>`;
    }

    const mName = (item.metadata && (item.metadata.mName || item.metadata.workType)) ? (item.metadata.mName || item.metadata.workType) : '';
    const month = (item.metadata && item.metadata.month) ? item.metadata.month : '';
    const year = (item.metadata && item.metadata.year) ? item.metadata.year : '';

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; width: 100%; border: none !important;">
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
                        ชื่อพนักงาน <span style="display: inline-block; min-width: 150px; border-bottom: 1px dotted #000; padding: 0 5px;">${mName}</span>
                    </div>
                    <div style="flex: 1; text-align: center;">แผนก ซ่อมบำรุง</div>
                    <div style="flex: 1; text-align: right;">
                        เดือน <span style="display: inline-block; min-width: 100px; border-bottom: 1px dotted #000; padding: 0 5px; text-align: center;">${month}</span>
                        / <span style="display: inline-block; min-width: 60px; border-bottom: 1px dotted #000; padding: 0 5px; text-align: center;">${year}</span>
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
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[0]) || ''}</td>
                            <td style="border: 1px solid #000; text-align: center;">${(item.sigNames && item.sigNames[1]) || ''}</td>
                            <td style="border: 1px solid #000; border-right: none; text-align: center;">${(item.sigNames && item.sigNames[2]) || ''}</td>
                        </tr>
                        <tr style="height: 28px;">
                            <td style="border: 1px solid #000; border-left: none; border-bottom: none; text-align: center; vertical-align: middle;">วันที่</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[0]) ? item.sigDates[0] : ''}</td>
                            <td style="border: 1px solid #000; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[1]) ? item.sigDates[1] : ''}</td>
                            <td style="border: 1px solid #000; border-right: none; border-bottom: none; text-align: center;">${(item.sigDates && item.sigDates[2]) ? item.sigDates[2] : ''}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderStaticForm08(item) {
    const logData = item.logData || [];
    let li = 0;
    const lg = () => logData[li++] || '';

    const problemRows = Array.from({ length: 9 }, (_, i) => `
        <tr style="height:28px;">
            <td style="border:1px solid #000; text-align:center;">${i + 1}.</td>
            <td style="border:1px solid #000; padding-left:4px;">${lg()}</td>
            <td style="border:1px solid #000; text-align:center;">${i + 1}.</td>
            <td style="border:1px solid #000; padding-left:4px;">${lg()}</td>
        </tr>`).join('');

    const repairRows = Array.from({ length: 4 }, (_, i) => `
        <tr style="height:30px;">
            <td style="border:1px solid #000; text-align:center;">${i + 1}.</td>
            <td style="border:1px solid #000; padding-left:4px;">${lg()}</td>
            ${i === 0 ? `<td rowspan="4" style="border:1px solid #000; padding:5px; vertical-align:top; font-size:0.75rem;">ผลการซ่อม</td>` : ''}
        </tr>`).join('');

    const sigRow = (idx) => `${(item.sigNames && item.sigNames[idx]) || ''}`;
    const dateRow = (idx) => `${(item.sigDates && item.sigDates[idx]) ? item.sigDates[idx] : ''}`;

    return `
    <div class="sheet-container portrait-sheet" style="page-break-after:always; width:100%;">
        <div style="border:1px solid #000; border-bottom:none;">
            <div style="display:flex; align-items:center; padding:5px 10px; border-bottom:1px solid #000;">
                <div style="flex:1; display:flex; align-items:center; gap:8px;">
                    <img src="Logo.png" alt="Logo" style="height:25px;">
                    <b style="font-size:0.9rem;">POLYFOAM HIGH-TECH (PFH)</b>
                </div>
                <div style="flex:2; text-align:center; font-weight:bold; font-size:1rem;">ใบแจ้งซ่อม/ใบบันทึกผลการซ่อม</div>
                <div style="font-size:0.75rem;">FMT-08 Re#0</div>
            </div>
        </div>
        <table style="width:100%; border-collapse:collapse; border:1px solid #000; border-bottom:none; font-size:0.78rem;">
            <tr>
                <th style="border:1px solid #000; text-align:center;">วันที่แจ้งซ่อม</th>
                <th style="border:1px solid #000; text-align:center;">เวลาที่แจ้ง</th>
                <th style="border:1px solid #000; text-align:center;">วันที่รับแจ้ง</th>
                <th style="border:1px solid #000; text-align:center;">วันที่ซ่อม</th>
                <th style="border:1px solid #000; text-align:center;">เวลาที่เริ่มซ่อม</th>
                <th style="border:1px solid #000; text-align:center;">เวลาที่ซ่อมแล้ว</th>
            </tr>
            <tr style="height:26px;">
                ${[lg(), lg(), lg(), lg(), lg(), lg()].map(v => `<td style="border:1px solid #000; text-align:center;">${v}</td>`).join('')}
            </tr>
        </table>
        <table style="width:100%; border-collapse:collapse; border:1px solid #000; border-bottom:none; font-size:0.78rem;">
            <tr>
                <td style="border:1px solid #000; padding:3px; width:30%;"><b>แผนกที่แจ้งซ่อม/Dept./Section</b><br>${lg()}</td>
                <td style="border:1px solid #000; padding:3px; width:40%;">
                    <b>สิ่งที่ต้องการซ่อม</b><br>
                    1. ${lg()}<br>2. ${lg()}
                </td>
                <td style="border:1px solid #000; padding:3px; width:30%;">
                    <b>หมายเหตุ</b><br>1. ${lg()}
                </td>
            </tr>
        </table>
        <table style="width:100%; border-collapse:collapse; border:1px solid #000; border-bottom:none; font-size:0.78rem;">
            <thead><tr style="background:#f0f0f0;">
                <th style="border:1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                <th style="border:1px solid #000; text-align:center;">ปัญหาที่พบ</th>
                <th style="border:1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                <th style="border:1px solid #000; text-align:center;">รายละเอียดของปัญหา</th>
            </tr></thead>
            <tbody>${problemRows}</tbody>
        </table>
        <table style="width:100%; border-collapse:collapse; border:1px solid #000; border-bottom:none; font-size:0.78rem;">
            <thead><tr style="background:#f0f0f0;">
                <th style="border:1px solid #000; width:40px; text-align:center;">ลำดับที่</th>
                <th style="border:1px solid #000; text-align:center;">รายละเอียดของการซ่อม</th>
                <th style="border:1px solid #000; text-align:center; width:38%;">ผลของการซ่อม</th>
            </tr></thead>
            <tbody>${repairRows}</tbody>
        </table>
        <div style="border:1px solid #000; border-top:none;">
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem;">
                <tr style="height:25px; background:#f0f0f0;">
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">ลงชื่อ</td>
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">ผู้ซ่อม</td>
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">หัวหน้าแผนก</td>
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">ผู้รับซ่อม</td>
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">หัวหน้าแผนก</td>
                    <td style="border:1px solid #000; text-align:center; font-weight:bold;">ผู้อนุมัติ</td>
                </tr>
                <tr style="height:35px;">
                    <td style="border:1px solid #000; text-align:center; font-size:0.7rem;">ลายเซ็น</td>
                    ${[0, 1, 2, 3, 4].map(() => `<td style="border:1px solid #000;"></td>`).join('')}
                </tr>
                <tr style="height:25px;">
                    <td style="border:1px solid #000; text-align:center; font-size:0.65rem;">ชื่อ(ตัวบรรจง)</td>
                    ${[0, 1, 2, 3, 4].map(i => `<td style="border:1px solid #000; text-align:center;">${sigRow(i)}</td>`).join('')}
                </tr>
                <tr style="height:25px;">
                    <td style="border:1px solid #000; text-align:center;">วันที่</td>
                    ${[0, 1, 2, 3, 4].map(i => `<td style="border:1px solid #000; text-align:center;">${dateRow(i)}</td>`).join('')}
                </tr>
            </table>
        </div>
        <div style="border:1px solid #000; border-top:none; padding:5px 10px; font-size:0.7rem;">
            <b>หมายเหตุ</b> ในกรณีที่ต้องการซ่อมอะไหล่ที่ตัดสินว่าไม่ได้ ไว้ในรายละเอียดของปัญหา
        </div>
    </div>`;
}

function renderStaticForm20(item) {
    const logData = item.logData || [];
    let rowsHtml = '';
    let logIdx = 0;

    for (let i = 0; i < 22; i++) {
        let cells = '';
        for (let j = 0; j < 6; j++) {
            let val = logData[logIdx] || '';
            let align = j === 4 ? 'left' : 'center';
            let padding = j === 4 ? 'padding-left: 5px;' : '';
            cells += `<td style="border: 1px solid #000; text-align: ${align}; ${padding} font-size: 0.8rem;">${val}</td>`;
            logIdx++;
        }
        rowsHtml += `<tr style="height: 28px;">
            <td style="border: 1px solid #000; text-align: center; width: 30px; font-size: 0.8rem;">${i + 1}</td>
            ${cells}
        </tr>`;
    }

    const remarks = (item.remarks && item.remarks[0]) ? item.remarks[0] : '';
    const sigNames = item.sigNames || ['', '', ''];
    const sigDates = item.sigDates || ['', '', ''];

    return `
        <div class="sheet-container" style="page-break-after: always; margin: 0; border: none !important;">
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
                <div style="flex: 1.5; padding: 10px; display: flex; flex-direction: column; gap: 5px; text-align: left;">
                    <div style="font-size: 0.85rem; font-weight: bold;">หมายเหตุ</div>
                    <div style="min-height: 80px; font-size: 0.8rem;">${remarks}</div>
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
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[0]}</span></td>
                            <td style="border-right: 1px solid #000; border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[1]}</span></td>
                            <td style="border-bottom: 1px solid #000; padding: 2px;"><span style="display: block; text-align: center;">${sigNames[2]}</span></td>
                        </tr>
                        <tr style="height: 30px;">
                            <td style="border-right: 1px solid #000; text-align: left; padding-left: 5px;">วันที่</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${toThaiDateStr(sigDates[0])}</td>
                            <td style="border-right: 1px solid #000; text-align: center; padding: 2px;">${toThaiDateStr(sigDates[1])}</td>
                            <td style="text-align: center; padding: 2px;">${toThaiDateStr(sigDates[2])}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>`;
}



