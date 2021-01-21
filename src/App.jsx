import "./App.css";
import sounds from "../src/sounds/allSounds.mp3";
// import header1 from "../src/sounds/heater1.mp3";
import useSound from "use-sound";
// import { useEffect, useRef } from "react";

function App() {
    const [playSound] = useSound(sounds, {
        sprite: {
            heater1: [313, 513],
            heater2: [826, 402],
            heater3: [1228, 313],
            heater4: [1541, 235],
            clap: [0, 209],
            openHH: [2575, 496],
            kickNHat: [2157, 418],
            kick: [1776, 381],
            closeHH: [209, 104],
        },
    });

    return (
        <>
            <section className="">
                <div id="drum-machine">
                    <div id="display">
                        <p>{}</p>
                    </div>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "heater1" })}
                    >
                        heater1
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "heater2" })}
                    >
                        heater2
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "heater3" })}
                    >
                        heater3
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "heater4" })}
                    >
                        heater4
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "clap" })}
                    >
                        Clap
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "openHH" })}
                    >
                        openHH
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "kickNHat" })}
                    >
                        kickNHat
                    </button>

                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "kick" })}
                    >
                        kick
                    </button>
                    <button
                        className="drum-pad m-16"
                        onMouseDown={() => playSound({ id: "closeHH" })}
                    >
                        closeHH
                    </button>
                </div>
            </section>
        </>
    );
}

export default App;
