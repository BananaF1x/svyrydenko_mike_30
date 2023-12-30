// Створення змінних
let arrLen;
let rightElement;
let rowNum;
let colNum;
let maxRandNumber;

// Перевірка значень та присвоєння їх змінним
do {
    arrLen = +prompt("Введіть довжину масиву, не менше 2 і не більше 30. (Довжина масиву впливає на розмір матриці)");
    if(isNaN(arrLen) || 2 > arrLen || arrLen > 30) alert("Ви ввели не коректне значення");
} while(isNaN(arrLen) || 2 > arrLen || arrLen > 30);

do {
    maxRandNumber = +prompt("Введіть максимальне значення матриці не більше 100.");
    if(isNaN(maxRandNumber) || maxRandNumber > 100) alert("Ви ввели не коректне значення");
} while(isNaN(maxRandNumber) || maxRandNumber > 100);

do {
    rightElement = +prompt("Введіть кутовий елемент матриці верх праворуч");
    if(isNaN(rightElement) || rightElement > maxRandNumber) alert("Ви ввели не коректне значення");
} while(isNaN(rightElement) || rightElement > maxRandNumber);

do {
    rowNum = +prompt(`Введіть номер рядка для підрахунку суми (Не більше ${arrLen})`);
    if(isNaN(rowNum) || arrLen < rowNum || 0 >= rowNum) alert("Ви ввели не коректне значення");
} while(isNaN(rowNum) || arrLen < rowNum || 0 >= rowNum);

do {
    colNum = +prompt(`Введіть номер стовпця для підрахунку суми (Не більше ${arrLen})`);
    if(isNaN(colNum) || arrLen < colNum || 0 >= colNum) alert("Ви ввели не коректне значення");
} while(isNaN(colNum) || arrLen < colNum || 0 >= colNum);


// Створення массиву по заданих користувачем параметрах 
let testArray = [];
for(let i = 0; i < arrLen; i++) {
    testArray[i] = [];
    for(let j = 0; j < arrLen; j++) {
        if(i == 0 && j == (arrLen - 1)) {
            testArray[i][j] = rightElement;
        } else {
            testArray[i][j] = Math.floor(Math.random() * maxRandNumber);
        }
    }
}
// Виведення на екран матриці
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
            document.write(`<span>${testArray[i][j]}</span>`);
    }
    document.write("<br>");
}
document.write(`<p>Матриця</p>`);


// 1. Сума головної діагоналі
let diagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i == j) {
            diagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>1. Сума головної діагоналі = ${diagSum}</p>`);

// 2. Сума побочної діагоналі
let secondaryDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i + j == (arrLen - 1)) {
            secondaryDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>2. Сума побочної діагоналі = ${secondaryDiagSum}</p>`);

// 3. Сума половини матриці без головної діагоналі зверху зправа
let halfUpSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i < j) {
            halfUpSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>3. Сума половини матриці без головної діагоналі зверху зправа = ${halfUpSum}</p>`);

// 4. Сума половини матриці з головною діагоналлю зверху зправа
let UpDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i <= j) {
            UpDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>4. Сума половини матриці з головною діагоналлю зверху зправа = ${UpDiagSum}</p>`);

// 5. Сума половини матриці без головної діагоналі знизу зліва
let halfDownSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i > j) {
            halfDownSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>5. Сума половини матриці без головної діагоналі знизу зліва = ${halfDownSum}</p>`);

// 6. Сума половини матриці з головною діагоналлю знизу зліва
let downDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i >= j) {
            downDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>6. Сума половини матриці з головною діагоналлю знизу зліва = ${downDiagSum}</p>`);

// 7. Сума половини матриці без побічної діагоналі зверху зліва
let halfUpSecondaryDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i + j < (arrLen - 1)) {
            halfUpSecondaryDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>7. Сума половини матриці без побічної діагоналі зверху зліва = ${halfUpSecondaryDiagSum}</p>`);

// 8. Сума половини матриці з побочною діагоналлю зверху зліва
let upSecondaryDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i + j <= (arrLen - 1)) {
            upSecondaryDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>8. Сума половини матриці з побочною діагоналлю зверху зліва = ${upSecondaryDiagSum}</p>`);

// 9. Сума половини матриці без побічної діагоналі внизу зправа
let halfDownSecondaryDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i + j > (arrLen - 1)) {
            halfDownSecondaryDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>9. Сума половини матриці без побічної діагоналі внизу зправа = ${halfDownSecondaryDiagSum}</p>`);

// 10. Сума половини матриці з побічною діагоналлю внизу зправа
let DownSecondaryDiagSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i + j >= (arrLen - 1)) {
            DownSecondaryDiagSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>10. Сума половини матриці з побічною діагоналлю внизу зправа = ${DownSecondaryDiagSum}</p>`);

// 11. Сума квадрата верх право
let upSquareSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if((arrLen - 1) / 2 > i && (arrLen - 1) / 2 < j) {
            upSquareSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>11. Сума квадрата верх право = ${upSquareSum}</p>`);

// 12. Сума квадрата верх право з діагоналлю 
let upFullSquareSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if((arrLen - 1) / 2 >= i && (arrLen - 1) / 2 <= j) {
            upFullSquareSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>12. Сума квадрата верх право з діагоналлю  = ${upFullSquareSum}</p>`);

// 13. Сума квадрата низ ліво
let downSquareSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if((arrLen - 1) / 2 < i && (arrLen - 1) / 2 > j) {
            downSquareSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>13. Сума квадрата низ ліво = ${downSquareSum}</p>`);

// 14. Сума квадрата низ ліво з діагоналлю 
let downFullSquareSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if((arrLen - 1) / 2 <= i && (arrLen - 1) / 2 >= j) {
            downFullSquareSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>14. Сума квадрата низ ліво з діагоналлю  = ${downFullSquareSum}</p>`);

// 15. Сума строки вказаної користувачем
let rowSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(i == (rowNum - 1)) {
            rowSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>15. Сума строки ${rowNum} = ${rowSum}</p>`);

// 16. Сумма стовпця вказаного користувачем
let colSum = 0;
for(let i = 0; i < arrLen; i++) {
    for(let j = 0; j < arrLen; j++) {
        if(j == (colNum - 1)) {
            colSum += testArray[i][j];
            document.write(`<span class="color">${testArray[i][j]}</span>`);
        } else {
            document.write(`<span>${testArray[i][j]}</span>`);
        }
    }
    document.write("<br>");
}
document.write(`<p>16. Сума строки ${colNum} = ${colSum}</p>`);