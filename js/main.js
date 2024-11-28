

document.getElementById('nose').addEventListener('click', () => {
    document.getElementById('nose-info').style.display = 'block';
    document.getElementById('tail-info').style.display = 'none';
    document.getElementById('cockpit-info').style.display = 'none';
});

document.getElementById('tail').addEventListener('click', () => {
    document.getElementById('tail-info').style.display = 'block';
    document.getElementById('nose-info').style.display = 'none';
    document.getElementById('cockpit-info').style.display = 'none';
});

document.getElementById('cockpit').addEventListener('click', () => {
    document.getElementById('cockpit-info').style.display = 'block';
    document.getElementById('nose-info').style.display = 'none';
    document.getElementById('tail-info').style.display = 'none';
});