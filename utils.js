const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

function toBuddhistYear(year) {
    return parseInt(year) + 543;
}

function formatThaiDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = toBuddhistYear(date.getFullYear());
    return `${day}/${month}/${year}`;
}

function toThaiDateStr(dateStr) {
    return formatThaiDate(dateStr);
}

function getCurrentThaiYear() {
    return toBuddhistYear(new Date().getFullYear());
}

function toThaiDigits(str) {
    return str;
}
