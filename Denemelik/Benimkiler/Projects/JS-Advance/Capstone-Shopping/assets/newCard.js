import {
    plusItem
} from "./plusItem.js";

export const newCard = (data) => {
    const divCol = document.createElement("div");
    divCol.className = "col";

    divCol.innerHTML =
        `<div class="card">
            <img src=${data.image} height="250px" alt="..." />
            <div class="card-body">
            <h5 class="card-title line-clamp-1">${data.title}</h5>
            <p class="card-text line-clamp-3">${data.description}</p>
        </div>
        <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
            <span>Price:</span><span>${data.price} $</span>
        </div>
        <div class="card-footer w-100 d-flex justify-content-center gap-3">
            <button class="btn btn-danger addBtn">Add your Card</button>
            <button class="btn btn-primary detailsBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
        </div>`

    let cardObj = {};

    divCol.lastChild.lastChild.firstChild.nextSibling.addEventListener("click", () => {
        const cardItems = document.querySelector(".offcanvas-body");
        const divCard = document.createElement("div");
        divCard.className = `card mb-3 ${data.title}`;
        divCard.style = "max-width: 540px";


        if (!cardObj.hasOwnProperty(data.toString())) {
            cardObj[data] = 1;
            cardItems.appendChild(divCard);
            divCard.innerHTML =
                `<div class="row g-0">
            <div class="col-md-4 my-auto">
              <img src=${data.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <div class="d-flex align-items-center gap-2" role="button">
                        <i class="fa-solid fa-minus border rounded-circle bg-danger text-white p-2"></i><span
                        class="fw-bold">${cardObj[data]}</span><i
                        class="fa-solid fa-plus border bg-danger text-white rounded-circle p-2"></i>
                    </div>
                        <p class="card-text">Total : ${data.price} x ${cardObj[data]}</p>
                        <button class="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
      `
        } else {
            plusItem(cardObj, data, 1);
        }

        const minusItemBtn = divCard.lastElementChild.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild;
        minusItemBtn.addEventListener("click", () => {
            plusItem(cardObj, data, -1);
        })

    })

    return divCol;
}