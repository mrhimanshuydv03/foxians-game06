/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);

    iconEye.addEventListener("click", () => {
        // Change password to text
        if (input.type === "password") {
            // Switch to text
            input.type = "text";

            // Icon change
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");
        } else {
            // Change to password
            input.type = "password";

            // Icon change
            iconEye.classList.remove("ri-eye-line");
            iconEye.classList.add("ri-eye-off-line");
        }
    });
};

showHiddenPass("login-pass", "login-eye");

document.getElementById("login__btn").addEventListener("click", () => {
    const data = {
        email: document.getElementById("login-email").value,
        password: document.getElementById("login-pass").value,
    };

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem("currentUser", data.email);
            window.location.replace("/");
            // console.log("Success:", data);
        })
        .catch((error) => {
            alert("User Not Registered");
            // console.error("Error:", error);
        });
});

