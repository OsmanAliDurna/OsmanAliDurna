export const plusItem = (cardObj, data, guncelle) => {
    cardObj[data] = cardObj[data] + guncelle;
    document.getElementsByClassName(`${data.title}`)[0].innerHTML =
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
}