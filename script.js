let fish1 = 0
let intervalId;

document.getElementById('fishing').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            fish1++;
            document.getElementById('fish1').textContent = fish1;
        }, 1000);
    }
});