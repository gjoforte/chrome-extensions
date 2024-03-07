setTimeout(() => {
    const article = getArticleByDomain(window.location.hostname)
    console.log(article);

    if (article) {
        var text = '';
        article.forEach((elem) => {
            text += elem.textContent.replace('PausePlay% buffered00:0000:0000:17UnmuteMute', '');
        });

        const elem = document.createElement('div');
        elem.innerHTML = text.replace(/\n/g, '<br><br>').replace(/\.\s+/g, "<br><br>").replace(/\?\s+/g, "<br>").replace(/\!\s+/g, "<br>");
        elem.style.position = "absolute";
        elem.style.height = "100%";
        elem.style.overflow = "auto";
        elem.style.top = "0";
        elem.style.left = "0";
        elem.style.zIndex = "2147483650";
        elem.style.backgroundColor = "white";
        elem.style.color = "black";
        elem.style.padding = "5% 20% 10% 20%";
        elem.style.marginTop = calculateMarginTop(window.location.hostname);

        const close = document.createElement('div');
        close.id = "news-extractor-close";
        close.onmouseup = () => {
            elem.remove();
        }
        close.onclick = () => {
            elem.remove();
        }
        close.innerHTML = "X";
        close.style.position = "absolute";
        close.style.right = "32px";
        close.style.top = "32px";
        close.style.fontFamily = "sans-serif";
        close.style.cursor = "pointer";
        close.style.border = "1px solid";
        close.style.borderRadius = "16px";
        close.style.padding = "2px 8px 1px 8px";
        elem.insertAdjacentElement('afterbegin', close);

        const body = document.querySelector('body');
        body.insertAdjacentElement('afterbegin', elem);

        console.log(text.replace(/\n/g, '\n\n'));
    }
}, "2000");

console.log(window.location.hostname)

function getArticleByDomain(domain) {
  switch (domain) {
    case "www.tsf.pt":
        return document.querySelectorAll('.post-body');
    case "www.dn.pt":
        return document.querySelectorAll('.post-body');
    case "www.publico.pt":
        return document.querySelectorAll('#story-body')
    case "sicnoticias.pt":
        return document.querySelectorAll('#article-body-1');
    case "cnnportugal.iol.pt":
        return document.querySelectorAll('#articleContent');
    case "tek.sapo.pt":
        // Hide cookies popup
        document.querySelector("#qc-cmp2-container").remove();
        return document.querySelectorAll('.content');
    case "expresso.pt":
        return document.querySelectorAll('h1.title, .lead, #article-body-1');
    case "observador.pt":
        // Hide cookies popup
        document.querySelector("#qc-cmp2-container").remove();
        return document.querySelectorAll('.article-head-content-headline-title, .article-head-content-headline-lead, .article-body-content > p');
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
    case "sicnoticias.pt":
        return "155px";
    case "cnnportugal.iol.pt":
        return "80px";
    case "tek.sapo.pt":
        return "150px";
    case "expresso.pt":
        return "132px";
    case "observador.pt":
        return "88px";
    default:
      return "0%";
  }
}
