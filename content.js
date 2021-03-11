window.onload = () => {
    const button = document.createComment('button');
    button.id = "darkModeButton";
    button.textContent = "Dark Mode!";
    document.querySelector('#end').prepend(button);

    button.addEventListener('click', ()=> enabaleDarkMode());

}

function enabaleDarkMode () {
    document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = "black";
}