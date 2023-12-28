document.addEventListener("DOMContentLoaded", function() {
    var text = "class About me{\n\tAge: 20\n\tName: Alexander\n\tsecondName: Safonov\n\tcity: Togliatty\n}";

    var delay = 100;
    var elem = document.querySelector(".codeAbout");

    print_text(text, elem, delay);

    function print_text(text, elem, delay) {
        if (text.length > 0) {
            elem.innerHTML += text[0];

            setTimeout(function() {
                print_text(text.slice(1), elem, delay);
            }, delay);
        }
    }
});
