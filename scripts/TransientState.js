// const transientState = {
//     metalId: 0,
//     sizeId: 0,
//     styleId: 0,
//     jewelryOptionId: 0
// }

const transientState = new Map()
transientState.set("metalId", 0)
transientState.set("sizeId", 0)
transientState.set("styleId", 0)
transientState.set("jewelryOptionId", 0)


export const setMetalChoice = (chosenMetal) => {
    // transientState.metalId = chosenMetal
    transientState.set("metalId", chosenMetal)
    console.log(transientState)
    
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

    const radioMetal = document.querySelector(`input[name="metal"][value="${chosenMetal}"]`)
    console.log(radioMetal)
    radioMetal.setAttribute("checked", "checked")
    console.log(radioMetal)
}

export const setSizeChoice = (chosenSize) => {
    // transientState.sizeId = chosenSize
    transientState.set("sizeId", chosenSize)
    console.log(transientState)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

    const radioSize = document.querySelector(`input[name="size"][value="${chosenSize}"]`)
    console.log(radioSize)
    radioSize.setAttribute("checked", "false")
    console.log(radioSize)
    radioSize.checked = true
    radioSize.setAttribute("checked", "true")
    console.log(radioSize)
}

export const setStyleChoice = (chosenStyle) => {
    // transientState.styleId = chosenStyle
    transientState.set("styleId", chosenStyle)
    console.log(transientState)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)

    const radioStyle = document.querySelector(`input[name="style"][value="${chosenStyle}"]`)
    console.log(radioStyle)
    // radioStyle.setAttribute("checked", "checked")
}

export const setJewelryOptionChoice = (chosenJewelryOption) => {
    // transientState.jewelryOptionId = chosenJewelryOption
    transientState.set("jewelryOptionId", chosenJewelryOption)
    console.log(transientState)
}


export const placeOrder = async () => {
    const objectifiedTransientState = Object.fromEntries(transientState)
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectifiedTransientState)
    }

    const response = await (fetch("http://localhost:8088/orders", postOptions))

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}


// document.addEventListener("newRadioButtonEvent", event => {
//     console.log("Radio button clicked")
    
// })

    // example syntax of selecting multiple attributes
    // document.querySelector(`article[data-id='${id}'][data-color='${color}']`)