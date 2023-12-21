export const fetching = (url) => {
    fetch(url).then((res) => res.json()).then((data) => console.log(data)).catch((error) => console.log(error));

    return data;
}