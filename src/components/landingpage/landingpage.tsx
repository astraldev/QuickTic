import { component$, useBrowserVisibleTask$, useStylesScoped$ } from "@builder.io/qwik";
import style from './landingpage.css?inline'
import Logo from "../img/logo"

export default component$(()=> {
    useStylesScoped$(style)
    useBrowserVisibleTask$(()=>{
        const tm = setTimeout(()=>{
            document.querySelector("div#landing")?.remove();
        }, 6450)

        return ()=>{clearTimeout(tm)}
    })
    return (
        <div id="landing" class="fixed z-10 inset-0 bg-base w-screen grid place-items-center">
            <Logo />
        </div>
    )
})