document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('a[data-menu-label="Garantir minha taxa baixa agora"]');

    if (btn) {
        btn.style.display = "flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.maxHeight = "47px";
        btn.style.background = "#FFC700";
        btn.style.padding = "14px 24px";
        btn.style.borderRadius = "33px";
        btn.style.textDecoration = "none";
        btn.style.fontWeight = "700";
        btn.style.fontSize = "15px";
        btn.style.color = "#1A1A1A";
        btn.style.textAlign = "center";
        btn.style.transition = "border-radius 0.25s ease";

        const span = btn.querySelector(".hs-menu-label");
        if (span) {
            span.style.pointerEvents = "none";
        }

        // cria classe exclusiva para aplicar hover
        btn.classList.add("cta-radius-hover");

        // injeta css do hover
        const style = document.createElement("style");
        style.innerHTML = `
            .cta-radius-hover:hover {
                border-radius: 4px !important;
            }
        `;
        document.head.appendChild(style);
    }
});