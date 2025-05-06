import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
    this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
    }
    getDetails(idGames) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "13ec237b06msh5eb9fa855062b15p15e755jsn00d9fe76dea1",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
    };
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
        .then((response) => response.json())
        .then((response) => this.ui.displayDetails(response))
        .catch((err) => console.error(err))
        .finally(() => {
            loading.classList.add("d-none");
        });
    }
}