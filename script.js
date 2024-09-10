document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let formData = {
        name: name,
        email: email
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    document.getElementById('showDataBtn').style.display = 'inline';
    alert('Odpovědi byly uloženy!');
});

document.getElementById('showDataBtn').addEventListener('click', function() {
    window.location.href = 'zobrazit-udaje.html';
});

let formData = JSON.parse(localStorage.getItem('formData'));

        if (formData) {
            document.getElementById('userData').innerHTML = `
                <p><strong>Jméno:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
            `;
        } else {
            document.getElementById('userData').innerHTML = '<p>Žádné údaje nebyly nalezeny.</p>';
        }