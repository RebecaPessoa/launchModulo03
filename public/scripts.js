const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function () {
        const videoId = card.getAttribute('id');
        window.location.href = `/video?id=${videoId}`

//antigo modal
//        modalOverlay.classList.add('active');
//        modalOverlay.querySelector("iframe").src = `https://youtube.com/embed/${videoId}`
    })
}


//antigo modal
//document.querySelector('.close-modal').addEventListener("click", function () {
//    modalOverlay.classList.remove('active');
 //   modalOverlay.querySelector('iframe').src = ""; /*fecha o vídeo ao clicar no close*/
//});



