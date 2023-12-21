import {
    sweet,
    renderCoin
} from "./external.js"


export const coin = () => {

    const btn = document.querySelector("button");
    const search = document.querySelector("input");
    const myApiKey = "coinranking2184545fc537e9be13e7d3a16a831986f58890ae9376554a";

    const options = {
        headers: {
            'x-access-token': myApiKey,
        },
    };

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        fetch(`https://api.coinranking.com/v2/search-suggestions?query=${search.value}`, options)
            .then((response) => response.json())
            .then((result) => renderCoin(result.data.coins[0])).catch((err) => sweet());
    })
}