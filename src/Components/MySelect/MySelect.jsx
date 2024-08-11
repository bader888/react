import React from "react";
import "./MySelect.css";
const MySelect = ({data}) => {
    return (
        <div>
        <div class="select">
            <select>
            <option value="1">Americano</option>
            <option value="2">Latte</option>
            <option value="3">Green Tea</option>
            </select>
        </div>
        </div>
    );
};

export default MySelect;
