const[backEl,forwardEl] = document.querySelectorAll('button');
backEl.onclick = () => history.back();
forwardEl.onclick = () => history.forward();