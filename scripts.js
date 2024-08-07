const slider = document.getElementById('slider');
const img1 = document.querySelector('.img-1');

slider.addEventListener('input', function() {
    img1.style.clip = `rect(auto, ${this.value}%, auto, 0)`;
});

