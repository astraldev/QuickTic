import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from './button.css?inline'

export const IconButton = component$(() => {
    useStylesScoped$(style)
    return (
        <button class="icon-button">
            <i></i>
            <span></span>
        </button>
    )
})

export const Spinner = component$(() => {
    useStylesScoped$(style)
    return (
        <button class="spin-button">
            <i></i>
            <span></span>
        </button>
    )
})

export const ActionButton = component$((props: {text: string, class?: string, callback?: Function}) => {
    useStylesScoped$(style)
    return (
        <button class={"action-button " + props.class} onClick$={props.callback && props.callback()}>
            <span> {props.text} </span>
        </button>
    )
})