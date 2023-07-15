const $staffSection = document.querySelector('.container-security');
const $btn = document.querySelector('.security-btn');
const $borderBox = document.querySelector('.border-box');
const $inputStaff = document.querySelector('.password');
const $qrContainer = document.querySelector('.qr-scanner-container');

const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
            width: 250,
            height: 250,
            },
    fps: 20,
});

scanner.render(success, error);

function success(result) {
    document.getElementById('result').innerHTML = `
        <h2>Exito!</h2>
        <p><a href="${result}">${result}</a></p>
    `;

    scanner.clear();

    document.getElementById('reader').remove();
}

function error(err) {
console.error(err);
}

$btn.addEventListener('click', () => {
    const $sonReaderContainer = $qrContainer.querySelector('#reader'); 

    if($inputStaff.value === 'ANAWID'){
        $staffSection.style.display = 'none';
        $qrContainer.style.display = 'block';
        $borderBox.style.display = 'none';
        console.log($sonReaderContainer);
    } else {
        console.log('Constraseña incorrecta');
    }
});