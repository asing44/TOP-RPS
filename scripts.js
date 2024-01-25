import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(Flip);

let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

const playerChoiceText = document.getElementsByClassName("player-choice-text")[0];
const infoText = document.getElementsByClassName("info__text")[0];
playerChoiceText.textContent = "";

let infoText_tl = gsap.timeline({
    paused: false,
    yoyo: true,
    repeat: -1
});

infoText_tl.to(infoText, {
    duration: 1,
    opacity: 0,
    ease: "power2.in"
})

function game(choice) {
    gamesPlayed += 1;

}

// game()

let userButtonsArr = gsap.utils.toArray(".--user-button");
let userSelectionArr = gsap.utils.toArray(".--user-icon")

userButtonsArr.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(userSelectionArr[index], {
            scale: 0.85,
            ease: "bounce.out"
        });
        gsap.to(playerChoiceText, {
            text: btn.textContent + "!"
        });
        infoText_tl.restart().pause();
    });
    btn.addEventListener("mouseout", () => {
        gsap.to(userSelectionArr[index], {
            scale: 0,
            ease: "power3.out"
        })
        gsap.to(playerChoiceText, {
            text: ""
        });
        infoText_tl.play();

    });
    btn.addEventListener("click", (e) => {
        game(e.target.value);
    })
})