const x = document.getElementById('x');
const y = document.getElementById('y');
const z = document.getElementById('z');
const showSolutionBtn = document.getElementById('solve');
const sendResBtn = document.getElementById('send');
const solutionText = document.getElementById('solution');
let check = false;

showSolutionBtn.addEventListener('click', main);

function main() {
    check = false;
    const xRaw = x.value.trim();
    const yRaw = y.value.trim();
    const zRaw = z.value.trim();

    if (xRaw === '' && yRaw === '' && zRaw === '') {
        solutionText.innerText = 'Ошибка. Вы должны заполнить все поля';
        return;
    } else if (xRaw === '') {
        solutionText.innerText = 'Ошибка. Вы не ввели X';
        return;
    } else if (yRaw === '') {
        solutionText.innerText = 'Ошибка. Вы не ввели Y';
        return;
    } else if (zRaw === '') {
        solutionText.innerText = 'Ошибка. Вы не ввели Z';
        return;
    } else {
        const xNum = parseFloat(xRaw);
        const yNum = parseFloat(yRaw);
        const zNum = parseFloat(zRaw);

        // Проверка на числа
        if (isNaN(xNum) || isNaN(yNum) || isNaN(zNum)) {
            solutionText.innerText = 'Ошибка. Введите корректные числа';
            return;
        }

        // Проверка на положительные числа
        if (xNum <= 0 || yNum <= 0 || zNum <= 0) {
            solutionText.innerText = 'Ошибка. Все стороны должны быть положительными числами';
            return;
        }

        // Проверка существования треугольника
        if (xNum + yNum <= zNum || xNum + zNum <= yNum || yNum + zNum <= xNum) {
            solutionText.innerText = 'Треугольник не существует. Сумма любых двух сторон должна быть больше третьей';
            return;
        }

        // Проверка на прямоугольность
        const sides = [xNum, yNum, zNum].sort((a, b) => a - b);
        const isRight = Math.abs(sides[0] * sides[0] + sides[1] * sides[1] - sides[2] * sides[2]) < 0.000001;

        let resultText = '';
        if (isRight) {
            resultText = 'Треугольник существует и является прямоугольным.';
            solutionText.innerText = resultText;
        } else {
            resultText = 'Треугольник существует, но не является прямоугольным.';
            solutionText.innerText = resultText;
        }

        const searchQuery = `Треугольник: X=${xRaw} Y=${yRaw} Z=${zRaw} - ${resultText}`;
        document.getElementById('search-query').value = searchQuery;

        check = true;
    }

    if (check) {
        sendResBtn.classList.remove('hidden');
    }
}

sendResBtn.addEventListener('click', sendToServer);

function sendToServer() {
    document.getElementById('send-res').submit();
};