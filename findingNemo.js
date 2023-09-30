
const correctIndex = Math.floor(Math.random() * 8);


const images = document.querySelectorAll('.image');

const chancesElement = document.getElementById('chances-left');
let chances = 6;
const Reload = document.getElementById("Reload")


Reload.addEventListener('click', () => {
    location.reload();
})

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        if (chances > 0) {
            if (index === correctIndex) {
                image.src = 'FindingNemo.png';

                setTimeout(() => {
                    alert('Congratulations! You found the right image. You win!');

                    chances = 0;
                }, 500);
            }
            else {
                image.src = 'Wrong.jpeg';
                chances--;
                if (chances === 0) {
                    chancesElement.textContent = 'Chances left: 0';
                    setTimeout(() => {
                        alert('Sorry, you ran out of chances. You lose.');

                        removeEventListenerFunc();
                    }, 500);
                }
                else {
                    chancesElement.textContent = `Chances left: ${chances}`;
                    setTimeout(() => {
                        alert(`Oops, that was the wrong image. You have ${chances} chance(s) left.`);
                        image.src = 'Wrong.jpeg';
                    }, 500);
                }
            }
        }
    });
});

function removeEventListenerFunc() {
    images.forEach(img => {
        img.style.cursor = 'default';
        img.removeEventListener('click', () => { });
    });
}















