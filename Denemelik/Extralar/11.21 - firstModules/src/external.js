const ul = document.querySelector(".coins");

const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const sweet = () => Swal.fire({
    title: "Coin not found!",
    icon: "warning"
});

export const renderCoin = (coin) => {
    const li = document.createElement("li");
    const imgElement = document.createElement("img");
    const nameElement = document.createElement("p");
    const priceElement = document.createElement("span");
    const müll = document.createElement("button");

    ul.appendChild(li);
    li.appendChild(imgElement);
    li.appendChild(nameElement);
    li.appendChild(priceElement);
    li.appendChild(müll);

    ul.style = "display:flex; flex-direction:column"
    li.style = "display:flex; justify-content: center; align-items:center; gap:1rem; font-size:4rem;"
    imgElement.src = coin.iconUrl;
    imgElement.style = "width:5rem; height:5rem;"
    nameElement.textContent = coin.name;
    priceElement.textContent = priceFormatter.format(coin.price);
    müll.style = "width:4rem; height:4rem; font-size:3rem; background-color:white"
    müll.textContent = "🗑";

    müll.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentNode.remove();
    });
};