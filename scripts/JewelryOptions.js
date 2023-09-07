import { setJewelryOptionChoice } from "./TransientState.js"

const handleJewelryOptionChoice = (event) => {
    if(event.target.name === "option") {
        setJewelryOptionChoice(parseInt(event.target.value))
    }
}

export const jewelryOptionOptions = async() => {
    const response = await fetch("http://localhost:8088/jewelryOptions")
    const jewelryOptions = await response.json()

    document.addEventListener("change", handleJewelryOptionChoice)

    let jewelriesHTML = ""

    const divStringArray = jewelryOptions.map(
        (jewelryOption) => {
            return `<div class="jewelryOption">
                    <input type="radio" name="option" value = ${jewelryOption.id}"
                    >${jewelryOption.style}
            </div>`
        }
    )

    jewelriesHTML += divStringArray.join("")

    return jewelriesHTML
}