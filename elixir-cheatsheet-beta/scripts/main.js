Array.from(document.getElementsByClassName("card-title")).forEach(function (element) {
    element.addEventListener('click', openAndCloseCard);
});

function openAndCloseCard(event) {
    console.log('clicked on card');
    switch (event.target.nextElementSibling.style.display) {
        case "none":
            event.target.nextElementSibling.style.display = 'block'
            break;

        case "block":
            event.target.nextElementSibling.style.display = 'none'
            break;

        default:
            break;
    }
}