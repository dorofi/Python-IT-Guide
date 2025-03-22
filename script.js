const codeText = `
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))

# Вывод:
# 120
    `;

    let i = 0;
    function typeCode() {
        if (i < codeText.length) {
            document.getElementById("code").innerHTML += codeText[i];
            i++;
            setTimeout(typeCode, 50); // Скорость печати (меньше — быстрее)
        }
    }

    window.onload = () => {
        typeCode();
    };
    document.addEventListener("DOMContentLoaded", function () {
        let elements = document.querySelectorAll(".fade-in");

        function checkVisibility() {
            let triggerBottom = window.innerHeight * 0.9;

            elements.forEach((el) => {
                let elementTop = el.getBoundingClientRect().top;

                if (elementTop < triggerBottom) {
                    el.classList.add("visible");
                }
            });
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
    });

    