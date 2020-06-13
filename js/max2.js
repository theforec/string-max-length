let a = [14, 4, 6, 9, 13, 7, 6, 14, 12, 8, 10, 13];

document.write(a + '<br/>');

let max1, max2, soLon, soBe;
for (let i = 0; i < a.length; i += 2) {

    //sap xep 2 so
    if (a[i] < a[i + 1]) {
        soBe = a[i];
        soLon = a[i + 1];
    } else {
        soLon = a[i];
        soBe = a[i + 1];
    }

    if (i == 0) { //gán max1, max2 vào 2 số đầu
        max1 = soLon;
        max2 = soBe;
    } else {
        if (max1 == soLon) { //trường hợp dãy có 2 số max1
            //break;
            continue;
        }
        if (max1 < soLon) {
            max2 = max1;
            max1 = soLon;
        }
        else {
            if (max2 < soLon) {
                max2 = soLon;
            }
        }
    }

}
document.write('Max 2 = ' + max2);
