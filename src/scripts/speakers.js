function mouseEnter(speaker_no) {
    switch (speaker_no) {
        case '1':
            document.getElementById('social-icn-1').classList.remove("d-none")
            document.getElementById('card-img-1').classList.add("card-blur")
            break;
        case '2':
            document.getElementById('social-icn-2').classList.remove("d-none")
            document.getElementById('card-img-2').classList.add("card-blur")
            break;
        case '3':
            document.getElementById('social-icn-3').classList.remove("d-none")
            document.getElementById('card-img-3').classList.add("card-blur")
            break;
        case '4':
            document.getElementById('social-icn-4').classList.remove("d-none")
            document.getElementById('card-img-4').classList.add("card-blur")
            break;
        case '5':
            document.getElementById('social-icn-5').classList.remove("d-none")
            document.getElementById('card-img-5').classList.add("card-blur")
            break;
        case '6':
            document.getElementById('social-icn-6').classList.remove("d-none")
            document.getElementById('card-img-6').classList.add("card-blur")
            break;
        case '7':
            document.getElementById('social-icn-7').classList.remove("d-none")
            document.getElementById('card-img-7').classList.add("card-blur")
            break;
    }
}

function mouseLeave(speaker_no) {
    switch (speaker_no) {
        case '1':
            document.getElementById('social-icn-1').classList.add("d-none")
            document.getElementById('card-img-1').classList.remove("card-blur")
            break;
        case '2':
            document.getElementById('social-icn-2').classList.add("d-none")
            document.getElementById('card-img-2').classList.remove("card-blur")
            break;
        case '3':
            document.getElementById('social-icn-3').classList.add("d-none")
            document.getElementById('card-img-3').classList.remove("card-blur")
            break;
        case '4':
            document.getElementById('social-icn-4').classList.add("d-none")
            document.getElementById('card-img-4').classList.remove("card-blur")
            break;
        case '5':
            document.getElementById('social-icn-5').classList.add("d-none")
            document.getElementById('card-img-5').classList.remove("card-blur")
            break;
        case '6':
            document.getElementById('social-icn-6').classList.add("d-none")
            document.getElementById('card-img-6').classList.remove("card-blur")
            break;
        case '7':
            document.getElementById('social-icn-7').classList.add("d-none")
            document.getElementById('card-img-7').classList.remove("card-blur")
            break;
    }
}