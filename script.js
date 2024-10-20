document.getElementById('revealBtn').addEventListener('click', function() {
    var hiddenMessage = document.getElementById('hiddenMessage');
    if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
        hiddenMessage.style.display = 'block';
        hiddenMessage.style.animation = 'slideUp 1s ease-in-out';
    } else {
        hiddenMessage.style.display = 'none';
    }
});
