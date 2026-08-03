// Fungsi untuk menampilkan atau menyembunyikan password
function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Menangani event submit pada form (jika ada form di halaman tersebut)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            // Mencegah form melakukan refresh halaman default (sementara untuk simulasi)
            // Hapus atau sesuaikan bagian ini jika nanti sudah dihubungkan dengan backend/database asli.
            
            const title = document.querySelector("h1").innerText;
            if (title === "Login") {
                // Logika ketika tombol Login ditekan
                // Catatan: Di HTML Anda, tombol login sudah mengarah ke menu.html melalui tag <a>
                console.log("Form Login dikirim");
            } else if (title === "Registration") {
                e.preventDefault();
                alert("Registrasi berhasil! Silakan login kembali.");
                window.location.href = "index.html"; // Mengarahkan kembali ke halaman login
            }
        });
    }
});