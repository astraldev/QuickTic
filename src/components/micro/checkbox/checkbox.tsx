import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { type InputProps } from "~/enums/InputProps";
import style from './checkbox.css?inline'


type CheckInput = {
    label?: string,
    checked?: boolean,
} & InputProps

export default component$((props: CheckInput) => {
    useStylesScoped$(style)
    return (
        <label for={props.id} class={"mx-auto flex w-4/5 gap-x-2 px-0.5 items-center"}>
            <input {...props} type="checkbox" name={props.id} id={props.id} class={"appearance-none h-[1.25rem] w-[1.25rem] overflow-hidden aspect-square relative border text-transparent checked:text-white transition-colors duration-75 rounded-md bg-transparent " + props.class}/>
            <span class="text-sm text-gray-400">
                <Slot />
            </span>
        </label>
    )
})