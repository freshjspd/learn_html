const ranges = document.querySelectorAll('input[type="range"]');
ranges.forEach(el => el.oninput = updBodyColor);

function updBodyColor(event){
    let color = "rgba(";
    ranges.forEach((el, index, list) =>
        index == list.length -1 ? 
            color += el.value + ')':
            color += el.value + ','
    );
    document.body.style.backgroundColor = color;
    localStorage.setItem('DOC_BG_COLOR', color);
}

window.addEventListener('load', (event) => {
    const gettedBGColor = localStorage.getItem('DOC_BG_COLOR');
    document.body.style.backgroundColor = gettedBGColor;
});

