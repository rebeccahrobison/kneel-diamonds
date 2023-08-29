export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalsHTML = `<section class="metals">`
    for (const metal of metals) {
        metalsHTML += `<div class="metal"><input type="radio" name="metal" value="${metal.id}">${metal.metal}</div>`
    }
    metalsHTML += `</section>`

    return metalsHTML
}