import { component$, useBrowserVisibleTask$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Landingpage from "~/components/landingpage/landingpage";
import { ActionButton } from "~/components/micro/button/button";
import { XIcon, CircleIcon } from 'lucide-qwik'
import Navbar from "~/components/navbar";
import style from './index.css?inline'
import { NavigationBarState } from "~/enums/NavBarState";

export const tick = {
    count: 0
}
export const DisplayCell = component$(() => {
    useStylesScoped$(style)
    const cellItem = useStore({
        item: Math.round(Math.random())
    })
    useBrowserVisibleTask$(() => {
        let interval: NodeJS.Timer;
        setTimeout(() => {
            interval = setInterval(() => {
                cellItem.item = Math.round(Math.random());
            }, 2000)
        }, (tick.count * 500))
        tick.count++;
        return () => { clearInterval(interval) }
    })
    return (
        <span class="aspect-square h-full w-1/3 grid place-items-center font-mono font-bold text-white">
            <XIcon class={"display-icons opacity-0 " + (cellItem.item == 0 && "hidden")} />
            <CircleIcon class={"display-icons opacity-0 " + (cellItem.item == 1 && "hidden")} />
        </span>
    )
})

export default component$(() => {
    useStylesScoped$(style)
    const DisplayBox = component$(() => {
        return (
            <div class="h-24 divide-x-2 flex divide-gray-700">
                <DisplayCell />
                <DisplayCell />
                <DisplayCell />
            </div>
        )
    })

    return (
        <>
            <Landingpage />
            <Navbar type={NavigationBarState.HomePage} />
            <div class="h-full [perspective:5000] flex-grow flex justify-evenly flex-col">
                <div class="w-4/5 overflow-hidden mx-auto bg-white/10 shadow-md backdrop-blur-md rounded-lg">
                    <div class="flex flex-col divide-y-2 divide-gray-700">
                        <DisplayBox />
                        <DisplayBox />
                        <DisplayBox />
                    </div>
                </div>

                <div>
                    <ActionButton text={"Play with friends"} class="w-5/6 bg-blue-400/50 backdrop-blur-md border-none text-white shadow" />
                    <ActionButton text={"Practice with computer"} class="w-5/6 text-white border-gray-800" />
                </div>

            </div>
            <Footer />
        </>
    )
})