
async function checkStatus() {
    try {
        const email = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        const response = await fetch('https://localhost:7023/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.text();
            document.getElementById('status').innerText = data;
            alert(data);
        } else {
            const fail = 'Login ou Senha Inválidos'
            document.getElementById('status').innerText = fail ;
            alert(fail)
        }
    } catch (error) {
        document.getElementById('status').innerText = `Erro durante a solicitação: ${error.message}`;
    }
}



// Call the function on page load
