import React from "react";

const Place = (props) => {
    return (
        <td className={"Place " +props.name+props.best+props.link+props.loc}>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} />
            <h4>{props.best}</h4>
            <h5>{props.loc}</h5>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Menu 🗒️</button>
            </a>
        </td>
    )

}

export default Place;