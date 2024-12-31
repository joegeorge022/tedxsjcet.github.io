import gsap from "gsap"
import { onMount } from "solid-js"

export default function NavBar(){
    onMount(() => {
        const pill = document.querySelector('.pill')
        const links = document.querySelectorAll('nav a')
        
        // Set initial position
        movePill(document.querySelector('a[href="#home"]')!)
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Update text colors
                links.forEach(l => l.querySelector('h2')!.style.color = 'white');
                (e.currentTarget as HTMLAnchorElement)!.querySelector('h2')!.style.color = 'black'
                
                // Animate pill
                movePill(e.currentTarget as HTMLAnchorElement)
            })
        })
    })
    
    function movePill(target: HTMLAnchorElement) {
        gsap.to('.pill', {
            x: target.offsetLeft - 4,
            duration: 0.5,
            ease: 'power2.out'
        })
    }

    return (
        <nav class="w-fit flex flex-row gap-2 fixed z-10 bg-black bg-opacity-75 backdrop-blur-xl text-white px-1 py-1 rounded-full left-[20%] md:right-[15%] md:left-auto bottom-4 font-bold">
            <a href="#home" class="z-20">
                <h2 class="p-2 md:p-3 text-black">Home</h2>
            </a>
            <a href="#about" class="z-20">
                <h2 class="p-2 md:p-3">About</h2>
            </a>
            <a href="/register" class="z-20">
                <h2 class="p-2 md:p-3">Register</h2>
            </a>
            <div class="pill h-fit w-fit bg-white rounded-full absolute">
                <h2 class="p-2 md:p-3 opacity-0">Home</h2>
            </div>
        </nav>
    )
}