document.write('<h1>Function trong Javascipt</h1>');

var name = 'hadaik';
var name1 = 'Nguyễn Ngọc Hà';
var name2 = '28';

function showName(_name) {
    document.write(_name + '<br/>');
}

showName(name);
showName(name1);
showName(name2);

///////////////////
let traiCay = ['buoi', 'xoai', 'cam', 'quyt'];

for (const tenTrai of traiCay) {
    document.write(tenTrai + ', ');
}
document.write('<br/>');

traiCay.map(tenTraiCay => {
    document.write(`${tenTraiCay.toUpperCase()}, `);
})
document.write('<br/>');

////////////////////////
var a = 5, b = 6, a2 = 9, b2 = 10, a3 = 1.5, b3 = 6.3;

function sum(a, b) {
    var result = a + b;
    document.write(a + ' + ' + b + ' = ' + result + '<br/>');
}

sum(a, b);
sum(a2, b2);
sum(a3, b3);

let ha = {
    name: 'Nguyễn Ngọc Hà',
    address: ["Cầu giấy", "Diêm Điền", "Quang lang"],
    age: 23,
    phone: '0369697892',
    clever: true,
    ranking: () => {
        document.write('Arrow function <br/>');
    },
    loser() {
        document.write('Đéo làm mà đòi có ăn? <br/>');
    },
    showAddress: function() {
        this.address.map(diachi => {
            document.write(`${this.name} ở ${diachi}, `);
        }); 
    }
}

ha.ranking();
ha.loser();
ha.showAddress();