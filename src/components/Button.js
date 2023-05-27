import React from 'react';

const Button = (props) => {
    const {clickHandler, button, selectedItem} = props;
    const active = selectedItem === button;
    const style= {
        backgroundColor: active ? "blue" : "",
        color: active ? "white" : "",
        padding: "5px",
        margin: "10px"
    }
    return (
        <button style={style} onClick={() => clickHandler(button)}>
            {button}
        </button>
    )
}

export default Button;