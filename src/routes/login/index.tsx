import { component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import { ActionButton } from "~/components/micro/button/button";
import Checkbox from "~/components/micro/checkbox/checkbox";
import Textinput from "~/components/micro/textinput/textinput";
import Navbar from "~/components/navbar";
import { NavigationBarState } from "~/enums/NavBarState";

export default component$(() => {
    return (<>
        <Navbar type={NavigationBarState.LoginPage} text="Sign in" />
        <div class="h-full flex flex-col flex-grow flex-shrink">
            <img src="/signin-icon.png" alt="Sign in to continue" class="object-cover w-4/5 mx-auto" />
            <form class="flex flex-col gap-y-[1.25rem]">
                <Textinput placeholder="e.g johndoe24" label="Username" type="text" class="border-2 border-blue-400/80" id="username"/>
                <Textinput label="Password" type="password" class="border-2 border-blue-400/80" id="password"/>
                <Checkbox id="save-session" checked={true} class="border-blue-400/80 checked:bg-blue-500">
                    Remember me
                </Checkbox>
                <ActionButton text="Sign in" class="bg-blue-500 text-white border-blue-400/80 w-4/5 h-10 !py-2"/>
            </form>
        </div>
        <Footer />
    </>)
})