setTimeout(() => {
    const article = getArticleByDomain(window.location.hostname)
    console.log(article);

    if (article) {
        var text = '';
        article.forEach((elem) => {
            //text += elem.textContent.replace(/\n/g, '\n\n');
            text += elem.textContent.replace('PausePlay% buffered00:0000:0000:17UnmuteMute', '');
        });
        //const text = article.textContent;

        const elem = document.createElement('p');
        elem.innerHTML = text.replace(/\n/g, '<br><br>');
        elem.style.position = "absolute";
        elem.style.width = "100%";
        elem.style.height = "100%";
        elem.style.overflow = "auto";
        elem.style.top = "0";
        elem.style.left = "0";
        elem.style.zIndex = "2147483645";
        elem.style.backgroundColor = "white";
        elem.style.color = "black";
        elem.style.padding = "5% 20% 10% 20%";
        elem.style.marginTop = calculateMarginTop(window.location.hostname);

        const body = document.querySelector('body');
        body.insertAdjacentElement('afterbegin', elem);

        console.log(text.replace(/\n/g, '\n\n'));
        //window.alert(text);
    }
}, "2000");

function getArticleByDomain(domain) {
  switch (domain) {
    case "www.tsf.pt":
        return document.querySelectorAll('.post-body');
    case "www.dn.pt":
        return document.querySelectorAll('.post-body');
    case "www.publico.pt":
        return document.querySelectorAll('#story-body')
    default:
      return document.querySelectorAll('.post-body');
  }
}

function calculateMarginTop(domain) {
  switch (domain) {
    case "www.tsf.pt":
        return "120px";
    case "www.dn.pt":
        return "120px";
    case "www.publico.pt":
        return "60px";
    default:
      return "0%";
  }
}
