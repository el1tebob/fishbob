let fish1 = 0
let intervalId;

document.getElementById('fishing').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            count++;
            document.getElementById('counter').textContent = count;
        }, 1000);
    }
});