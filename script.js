function translateText() {

    const text = document.getElementById("text").value;
    const target = document.getElementById("target").value;

    const url =
      `https://translate.google.com/?sl=auto&tl=${target}&text=${encodeURIComponent(text)}&op=translate`;

    window.open(url, "_blank");
}