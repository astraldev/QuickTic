import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { FunctionComponent } from "@builder.io/qwik/jsx-runtime";
import { ArrowLeftIcon, ListIcon, LogInIcon } from "lucide-qwik"
import { NavigationBarState } from "~/enums/NavBarState";

export default component$((props: {type: NavigationBarState, text?: string}) => {

    let LeftButton: FunctionComponent = component$(()=>(<></>))
    let RightButton: FunctionComponent = component$(()=>(<></>))
    const navigate = useNavigate()

    switch(props.type){
        case NavigationBarState.HomePage:
            LeftButton = component$(()  =>
                <ListIcon  class="curssor-pointer pointer-events-auto" onClick$={() => navigate("/history")}/>
            ) // History Button 
            RightButton = component$(() =>
                <LogInIcon class="cursor-pointer pointer-events-auto" onClick$={() => navigate("/login")}/>
            ) // Login Icon
            break
        case NavigationBarState.PlayPage:
        case NavigationBarState.LoginPage:
            LeftButton = component$(() => {
                return <ArrowLeftIcon class="cursor-pointer pointer-events-auto" onClick$={() => history.back()}/>
            }) // Back
            break
        default:
            break
    }
    
    return (
        <nav class="py-4 px-4 font-lobster flex justify-between backdrop-blur-md items-center bg-gradient-to-b from-black/20 to-[#000832]">
            <button class="text-white pointer-events-none h-9 w-9 hover:bg-white/5 rounded grid place-items-center">
                <LeftButton />
            </button>
            <h1 class="font-lobster font-bold text-2xl text-gray-100">
                {props.text || "QuickTic"}
            </h1>
            <button class="text-white pointer-events-none h-9 w-9 hover:bg-white/5 rounded grid place-items-center">
                <RightButton />
            </button>
        </nav>
    ) 
})