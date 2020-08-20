import React, { useState } from 'react';

const DropDown = (props) => {
    const [listOpen, setListOpen] = useState({ listOpen: false })
    const handleClickOutside = () => {
        setListOpen(!listOpen)
    }
    const toggleList = () => {
        setListOpen(!listOpen)
    }
    return (
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => toggleList()}>
                <div className="dd-header-title">{props.headerTitle}</div>
            </div>
            {listOpen && <ul className="dd-list">
                {props.list.map((item) => (
                    <li className="dd-list-item" key={item.id} >{item.title}</li>
                ))}
            </ul>}
        </div>
    );
}
export default DropDown;