const ranges = document.querySelectorAll('input[type="range"]');
ranges.forEach(el => el.oninput = updBodyColor);
function updBodyColor(event){
    //const color = `rgb(${ranges[0].value},${ranges[1].value},${ranges[2].value})`;
    let color = "rgb(";
    ranges.forEach((el, index, list) =>
        index == list.length -1 ? 
            color += el.value + ')':
            color += el.value + ','
    );
    document.body.style.backgroundColor = color;
}

/*
rangeEl.oninput = setRangeValue;
function setRangeValue(event){
    valueEl.innerText = rangeEl.value;
}
*/