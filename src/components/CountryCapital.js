import React, { useState, useEffect } from 'react';
import Button from "./Button";

const shuffleButtons = (buttonArray) => {
    let currentIndex = buttonArray.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [buttonArray[currentIndex], buttonArray[randomIndex]] = [buttonArray[randomIndex], buttonArray[currentIndex]];
    }
    return buttonArray;
}

const CountryCapitalGame = (data) => {
    const countryCapitalData = data.data;
    const [selectedItem, setSelectedItem] = useState("");
    const [buttons, setButtons] = useState([]);
    let countryCapitalItems = [];
    for (const [country, capital] of Object.entries(countryCapitalData))
        countryCapitalItems = [...countryCapitalItems, country, capital];

    useEffect(() => {
        const shuffledButtons = shuffleButtons(countryCapitalItems);
        setButtons(shuffledButtons);
    }, [])

    const buttonClickHandler = (clickedItem) => {
        if (selectedItem && selectedItem !== clickedItem) {
            if ((countryCapitalData[`${selectedItem}`] === clickedItem) || (countryCapitalData[`${clickedItem}`] === selectedItem)) {
                const entries = [selectedItem, clickedItem];
                const filteredButtons = buttons.filter(button => !entries.includes(button))
                setButtons(filteredButtons)
            }else {
                setSelectedItem('')
            }
        }else {
            setSelectedItem(clickedItem)
        }
    }
    const style = {
        display: "flex",
        width: "100%",
        height: "50vh",
        justifyContent:"center",
        alignItems:"center",
    }
    if (buttons.length) {
        return (
            <div style={style}>
                {buttons.map((button, index) => <Button
                    key={index}
                    button={button}
                    selectedItem={selectedItem}
                    clickHandler={buttonClickHandler}
                />
                )}
            </div>
        )
    }

    return (
        <div style={style}>Congratulations!</div>
    )
}

export default CountryCapitalGame;