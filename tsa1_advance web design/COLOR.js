function changeColors() {
    const root = document.documentElement;
    const body = document.body;
    const randomColor = () => Math.floor(Math.random() * 256);

    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    root.style.setProperty('--primary-color', bgColor);
    body.style.backgroundColor = bgColor;
 
    const textColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;
    root.style.setProperty('--text-color', textColor);
    
    const greenBgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    const greenTextColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;

    const greenPart = document.querySelector('.Wholepage');
    greenPart.style.backgroundColor = greenBgColor;
    greenPart.style.color = greenTextColor;
    
    const nameTextColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;
    const nameHeader = document.querySelector('.Profile-name-firstname');
    nameHeader.style.color = nameTextColor;

    const lastNameHeader = document.querySelector('.Profile-name-lastname');
    lastNameHeader.style.color = nameTextColor;
}
