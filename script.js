document.addEventListener("DOMContentLoaded", function () {
    // Mode sombre
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });
    }

// Menu burger
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open"); // Ajoute ou supprime la classe "open"
    });
}

//     // Téléchargement du CV en PDF (sans la section Contact)
//     const downloadCvButton = document.getElementById("download-pdf");
//     if (downloadCvButton) {
//         downloadCvButton.addEventListener("click", () => {
//             const cvContent = document.querySelector(".container"); // Sélection du CV
            
//             if (!cvContent) {
//                 console.error("Élément .container introuvable");
//                 return;
//             }

//             // Cloner l'élément pour exclure Contact sans affecter la page originale
//             const clonedContent = cvContent.cloneNode(true);

//             // Supprimer la section de contact avant de générer le PDF
//             const contactSection = clonedContent.querySelector("#contact");
//             if (contactSection) {
//                 contactSection.remove();
//             }

//             // Ajuster le style pour éviter un fond noir (si dark mode activé)
//             clonedContent.style.backgroundColor = "white";
//             clonedContent.style.color = "black";
//             clonedContent.style.padding = "20px";
//             clonedContent.style.width = "100%";

//             // Utilisation de html2canvas pour capturer le design
//             html2canvas(clonedContent, { scale: 2, backgroundColor: "#ffffff" }).then(canvas => {
//                 const imgData = canvas.toDataURL("image/png");
//                 const pdf = new jsPDF("p", "mm", "a4");
//                 const imgWidth = 210; // Largeur A4 en mm
//                 const imgHeight = (canvas.height * imgWidth) / canvas.width; // Hauteur proportionnelle

//                 pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//                 pdf.save("CV_Elena_Fontaine.pdf");
//             });
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script chargé"); // Vérification dans la console

    // Mode sombre
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });
    }


    // ✅ Téléchargement du CV en PDF (sans Contact)
    const downloadCvButton = document.getElementById("download-pdf");
    if (!downloadCvButton) {
        console.error("❌ Bouton de téléchargement non trouvé !");
        return;
    }

    downloadCvButton.addEventListener("click", async () => {
        console.log("📥 Début du téléchargement du PDF...");

        const cvContent = document.querySelector(".container"); // Sélection du CV
        if (!cvContent) {
            console.error("❌ Élément `.container` introuvable !");
            return;
        }

        // Cloner l'élément pour exclure Contact sans affecter la page originale
        const clonedContent = cvContent.cloneNode(true);
        const contactSection = clonedContent.querySelector("#contact");
        if (contactSection) {
            contactSection.remove();
            console.log("🚫 Section Contact supprimée du PDF");
        }

        // Ajout d'un fond blanc pour éviter les problèmes en dark mode
        clonedContent.style.backgroundColor = "white";
        clonedContent.style.color = "black";
        clonedContent.style.padding = "20px";
        clonedContent.style.width = "100%";

        // ⚡ Capture l'affichage exact en haute qualité
        try {
            const canvas = await html2canvas(clonedContent, {
                scale: 2, 
                backgroundColor: "#ffffff",
                useCORS: true // Gère les images venant d'autres sources
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("CV_Elena_Fontaine.pdf");

            console.log("✅ PDF téléchargé avec succès !");
        } catch (error) {
            console.error("❌ Erreur lors de la génération du PDF :", error);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card.clickable").forEach(card => {
        card.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank"); // Ouvre dans un nouvel onglet
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const profilePhoto = document.querySelector(".profile-photo");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<img src="${profilePhoto.src}" alt="Agrandissement de la photo de profil">`;
    document.body.appendChild(modal);

    // Ouvrir la modal au clic sur la photo
    profilePhoto.addEventListener("click", function () {
        modal.classList.add("show");
    });

    // Fermer la modal au clic sur l'image agrandie
    modal.addEventListener("click", function () {
        modal.classList.remove("show");
    });
});
