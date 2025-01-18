import React from 'react'
import Markdown from "/react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section classname = "suggested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
             {props.recipe}
        </section>
    )
}