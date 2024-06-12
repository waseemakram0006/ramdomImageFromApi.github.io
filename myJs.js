const btn = document.getElementById('btn');
const mySpan = document.getElementById('myspan');
const randImg = document.getElementById('randImg');

btn.addEventListener('click', () => {
    mySpan.style.display = "inline";
    setTimeout(() => {
        mySpan.style.display = "none";
        generateRandomImage();
    }, 3000);
});

function generateRandomImage() {
    const randomWidth = 200;
    const randomHeight = 200;
    const randomImg = new RandomImage(randomWidth, randomHeight).createImageElement();
    randImg.appendChild(randomImg);
}

function RandomImage(width, height) {
    this.width = width;
    this.height = height;
    this.url = `https://source.unsplash.com/random/${width}x${height}/?random=${Math.random()}`;
}

RandomImage.prototype.createImageElement = function ()
 {
    const img = document.createElement('img');
    img.src = this.url;
    img.width = this.width;
    img.height = this.height;
    return img;
}
