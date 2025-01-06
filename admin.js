function loginAdmin() {
    const password = document.getElementById('admin-password').value;
    if (password === 'admin123') {  // Substitua por sua senha
        window.location.href = 'painel-admin.html';  // Redireciona para o painel após login
    } else {
        alert('Senha incorreta');
    }
}

function closeAdminPanel() {
    window.location.href = 'login.html';  // Volta para a página de login
}
