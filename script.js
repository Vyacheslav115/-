var avatar = document.querySelector('.avatar');
var background = document.querySelector('.background');
var closeButton = document.querySelector('.avatar-close');

avatar.addEventListener('click', function() {
    background.classList.remove('closed');
});

closeButton.addEventListener('click', function() {
    background.classList.add('closed');
});
