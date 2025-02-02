import React from "react";

function MyName() {
    return <>
        <div class="text-effect-wrapper">
            <h1 class="text" contenteditable>Neon</h1>
        </div>

        <label for="option-toggle">
            <input type="checkbox" id="option-toggle" /> Version toggle
        </label>
    </>
}

export default MyName;