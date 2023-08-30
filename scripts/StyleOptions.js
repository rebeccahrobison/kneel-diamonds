import { setStyleChoice } from "./TransientState.js"

const handleStyleChoice = (event) => {
    if(event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}


export const StyleOptions = async() => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)

    let stylesHTML = `<section class="styles">`

    const divStringArray = styles.map(
        (style) => {
            return `<div class="style">
                <input type="radio" name="style" value="${style.id}"
                >${style.style}
            </div>`
        }
    )

    stylesHTML += divStringArray.join("")
    stylesHTML += `</section>`

    return stylesHTML
    
}
