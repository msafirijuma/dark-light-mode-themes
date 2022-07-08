

const themeMode = document.querySelector("#themeMode");

themeMode.addEventListener("change", () => {
    if (themeMode.value == "dark") {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        console.log("DARK MODE IS ON NOW!")
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        console.log("LIGHT MODE IS ON NOW!");
    }
})