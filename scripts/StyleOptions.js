export const StyleOptions = async() => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = `<section class="styles">`
    for(const style of styles) {
        stylesHTML += `<div class="style"><input type="radio" name="style" value="${style.id}">${style.style}</div>`
    }
    stylesHTML += `</section>`

    return stylesHTML
    
}








// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()

//     let sizesHTML = `<section class="sizes">`
//     for(const size of sizes) {
//         sizesHTML += `<div class="size"><input type="radio" name="size" value="${size.id}">${size.carets} Carets</div>`
//     }
//     sizesHTML += `</section>`

//     return sizesHTML
// }