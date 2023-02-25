import { component$ } from "@builder.io/qwik";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { NavigationBarState } from "~/enums/NavBarState";

export default component$(()=> {
    return (
        <>
        <Navbar type={NavigationBarState.PlayPage}/>
        <div class="h-full my-auto flex flex-col justify-center space-y-8 items-center">
            <div class="h-[37vh] text-white hover:text-blue-400 hover:border-blue-400/60 shadow border flex bg-white/5 rounded-lg border-white/10 transition-colors duration-500 w-4/5 backdrop-blur-sm">
                <span class=" font-lobster text-2xl mx-auto mt-auto mb-4">
                    Play with computer
                </span>
            </div>
            <div class="h-[37vh] text-white hover:text-purple-400 hover:border-purple-400/60 shadow border flex bg-white/5 rounded-lg border-white/10 transition-colors duration-500 w-4/5 backdrop-blur-sm">
                <span class=" font-lobster text-2xl mx-auto mt-auto mb-4">
                    Play with a friend
                </span>
            </div>
        </div>
        <Footer />
        </>
        
    )
})