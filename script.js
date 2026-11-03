
document.getElementById('f').addEventListener('submit', function(e) {
    e.preventDefault();

    var n = document.getElementById('n').value;
    var m = document.getElementById('m').value;

    location.href = 'mailto:duladagne25@gmail.com?subject='
        + encodeURIComponent('Message from ' + n)
        + '&body='
        + encodeURIComponent(m + '\n\n' + n);
});
