var fixedBox = document.getElementById('fixed-box')
var imgs = Array.from(document.querySelectorAll('.container img'))
var closeBtn = document.getElementById('close-btn')
var rightBtn = document.getElementById('right-btn')
var leftBtn = document.getElementById('left-btn')
var innerImg = document.getElementById('inner-img')
console.log(typeof (imgs))
var currentIndex;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        fixedBox.classList.remove('d-none')
        var clickedImg = e.target;
        var imgSrc = clickedImg.getAttribute('src');
        // console.log(imgSrc);
        innerImg.setAttribute('src', imgSrc);
        currentIndex = imgs.indexOf(clickedImg)
        console.log(currentIndex)


    })
}
function closeButon() {
    fixedBox.classList.add('d-none')

}
closeBtn.addEventListener('click', function () {
    closeButon()

})
function rightButon() {
    currentIndex++;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }
    console.log(currentIndex);
    var nextImg = imgs[currentIndex];
    var clickedImg = nextImg.getAttribute('src');
    innerImg.setAttribute('src', clickedImg)
}




rightBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    rightButon()
})

function leftButon() {
    currentIndex--;
    if (currentIndex <= 0) {
        currentIndex = imgs.length - 1
    }
    console.log(currentIndex)
    var nextImg = imgs[currentIndex];
    var clickedImg = nextImg.getAttribute('src');
    innerImg.setAttribute('src', clickedImg)
}

leftBtn.addEventListener('click', function (e) {
    e.stopPropagation()
    leftButon()
})
fixedBox.addEventListener('click', function (e) {
    e.stopPropagation()
})
document.addEventListener('keyup', function (e) {
    console.log(e.key)
    if (e.key === 'Escape') { closeButon() }
    else if (e.key === 'ArrowRight') {
        rightButon()
    }
    else if (e.key === 'ArrowLeft') {
        leftButon()
    }
})

