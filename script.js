// Функция для перехода на страницу аниме с параметрами
function openAnimePage(anime) {
    localStorage.setItem("selectedAnime", anime);
    window.location.href = "anime.html";
}

// Функция для загрузки информации о выбранном аниме на странице anime.html
window.onload = function() {
    const selectedAnime = localStorage.getItem("selectedAnime");

    const animeData = {
        "anya": {
            title: "Аня иногда кокочет по русски",
            image: "anya_image.webp",
            description: "Описание аниме 'Аня иногда кокочет по русски'.",
            video: "path/to/anya_video.mp4"
        },
        "star_child": {
            title: "Звездное дитя",
            image: "path/to/star_child_image.jpg",
            description: "Описание аниме 'Звездное дитя'.",
            video: "path/to/star_child_video.mp4"
        },
        "demon_slayer": {
            title: "Клинок рассекающий демонов",
            image: "path/to/demon_slayer_image.jpg",
            description: "Описание аниме 'Клинок рассекающий демонов'.",
            video: "path/to/demon_slayer_video.mp4"
        },
        "sword_master": {
            title: "Мастер меча огней",
            image: "path/to/sword_master_image.jpg",
            description: "Описание аниме 'Мастер меча огней'.",
            video: "path/to/sword_master_video.mp4"
        }
    };

    if (selectedAnime && animeData[selectedAnime]) {
        const anime = animeData[selectedAnime];
        document.getElementById("anime-title").textContent = anime.title;
        document.getElementById("anime-image").src = anime.image;
        document.getElementById("anime-description").textContent = anime.description;
        document.getElementById("anime-video").src = anime.video;

        // Добавляем кнопки для выбора серии
        const episodeButtonsContainer = document.querySelector(".episode-buttons");
        for (let i = 1; i <= 12; i++) {
            const button = document.createElement("button");
            button.className = "episode-button";
            button.textContent = i;
            button.onclick = function() {
                selectEpisode(i);
            };
            episodeButtonsContainer.appendChild(button);
        }
    }
};

// Функция для выбора серии
function selectEpisode(episode) {
    const animeTitle = document.getElementById("anime-title").textContent;
    document.getElementById("selection-result").textContent = `Вы выбрали ${animeTitle}, серия ${episode}.`;
}