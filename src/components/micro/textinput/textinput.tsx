import { component$, type PropFunction, type  QwikChangeEvent, useSignal, useStore } from "@builder.io/qwik";
import { type InputProps } from "~/enums/InputProps";


type TextInput = {
    onChange$?: PropFunction<(event: QwikChangeEvent<HTMLInputElement>)=>void>,
    label: string,
    type: "text" | "password",
    placeholder?: string,
} & InputProps

export default component$<TextInput>((props)=>{
    const label_state = useStore({
        state: false
    })
    const input_ref = useSignal<HTMLInputElement>()
    return (<div class={"rounded-md bg-transparent relative w-4/5 mx-auto first:mt-4 h-11 textinput group " + props.class}>
        <input {...props} ref={input_ref} onInput$={() => {
            if(input_ref.value?.value != "") label_state.state = true;
            else label_state.state = false;
        }} class="rounded-md pt-2 px-3 bg-transparent outline-none w-full h-full text-gray-200 text-sm placeholder:text-transparent focus:placeholder:text-gray-300 placeholder:text-sm placeholder:transition-colors " />
        <label for={props.id} class={"rounded-md absolute left-2 top-2.5 bottom-2 text-white text-sm font-medium group-focus-within:-translate-y-[1.35rem] transition-transform duration-300 px-2 bg-transparent backdrop-blur-3xl " + (label_state.state && "-translate-y-[1.35rem]")} >{props.label}</label>
    </div>)
})