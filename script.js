let fish1 = 0
let intervalId;

document.getElementById('fishing').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            count++;
            document.getElementById('fish1').textContent = count;
        }, 1000);
    }
});