let z1 = document.getElementById('gitaraz');
let z2 = document.getElementById('violinaz');
let z3 = document.getElementById('klavirz');
let z4 = document.getElementById('bubnjeviz');
let z5 = document.getElementById('harmonikaz');
let z6 = document.getElementById('kontrafagotz');
 
function pusti(id) {
    switch (id) {
        case 'gitara': z1.play(); break;
        case 'violina': z2.play(); break;
        case 'klavir': z3.play(); break;
        case 'bubnjevi': z4.play(); break;
        case 'harmonika': z5.play(); break;
        case 'kontrafagot': z6.play(); break;
    }
}

function openWindow(id) {
        window.open('./Stranice/' + id + '.html',
            id,
            'width=300px,height=300px');
}