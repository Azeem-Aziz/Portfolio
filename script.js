
document.addEventListener("DOMContentLoaded", function () {
    
    const revealElements = document.querySelectorAll(".reveal")

    function revealOnScroll() {

        revealElements.forEach(function (element) {

            if (element.classList.contains("in-view")) {
                return;
            }

            const elementTop = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementTop < screenHeight * 0.85) {
                element.classList.add("in-view")
            }
        })
    }

    revealOnScroll()

    window.addEventListener("scroll", revealOnScroll)




    

    const navLinks = document.querySelectorAll("#mainNav .nav-link")
    const navCollapseEl = document.getElementById("mainNav")

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navCollapseEl.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapseEl)
                if (bsCollapse) {
                    bsCollapse.hide()
                }
            }
        })
    })

})
