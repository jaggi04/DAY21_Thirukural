const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit', event => {
    event.preventDefault();
    const number = document.querySelector('#number').value;
    fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        Kural ${number}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${data.line1}</h5>
                        <p class="card-text">${data.line2}</p>
                        <p class="card-text">Chapter: ${data.chapter}</p>
                        <p class="card-text">Section: ${data.section}</p>
                    </div>
                </div>
            `;
            result.style.display = 'block';
        })
        .catch(error => {
            result.innerHTML = '<p class="text-danger">An error occurred. Please try again later.</p>';
            result.style.display = 'block';
        });
});
