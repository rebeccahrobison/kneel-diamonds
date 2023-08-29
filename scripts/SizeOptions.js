export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizesHTML = `<section class="sizes">`
    for(const size of sizes) {
        sizesHTML += `<div class="size"><input type="radio" name="size" value="${size.id}">${size.carets} Carets</div>`
    }
    sizesHTML += `</section>`

    return sizesHTML
}







