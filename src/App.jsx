import "./App.css";
import sounds from "../src/sounds/allSounds.mp3";
import useSound from "use-sound";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    //Constants
    const allSounds = [
        { id: "Q", soundName: "heater1" },
        { id: "W", soundName: "heater2" },
        { id: "E", soundName: "heater3" },
        { id: "A", soundName: "heater4" },
        { id: "S", soundName: "clap" },
        { id: "D", soundName: "openHH" },
        { id: "Z", soundName: "kickNHat" },
        { id: "X", soundName: "kick" },
        { id: "C", soundName: "closeHH" },
    ];

    // useState
    const [soundName, setSoundName] = useState("SoundName");
    const [isPowerOn, setIsPowerOn] = useState(true);

    // useSound Custom Hook
    const [playSound] = useSound(sounds, {
        soundEnabled: isPowerOn,
        interrupt: true,
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

    //Handle functions
    const handleSoundName = (name) => {
        setSoundName(name);
    };

    const handlePower = () => {
        setIsPowerOn(!isPowerOn);
    };
    const handleKeyDown = (e) => {
        switch (e.key) {
            case "q":
                playSound({ id: "heater1" });
                handleSoundName("heater1");
                break;
            case "w":
                playSound({ id: "heater2" });
                handleSoundName("heater2");
                break;
            case "e":
                playSound({ id: "heater3" });
                handleSoundName("heater3");
                break;
            case "a":
                playSound({ id: "heater4" });
                handleSoundName("heater4");
                break;
            case "s":
                playSound({ id: "clap" });
                handleSoundName("clap");
                break;
            case "d":
                playSound({ id: "openHH" });
                handleSoundName("openHH");
                break;
            case "z":
                playSound({ id: "kickNHat" });
                handleSoundName("kickNHat");
                break;
            case "x":
                playSound({ id: "kick" });
                handleSoundName("kick");
                break;
            case "c":
                playSound({ id: "closeHH" });
                handleSoundName("closeHH");
                break;
            default:
                break;
        }
    };

    // window.addEventListener("keydown", handleKeyDown);

    //useEffect
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section
                id="drum-machine"
                className="flex flex-wrap justify-center items-center bg-gray-300 h-screen"
            >
                <div className="grid grid-cols-threeColOf80px grid-rows-threeRowsOf70px gap-4 bg-gray-400 p-2">
                    {allSounds.map((sound) => {
                        return (
                            <button
                                key={sound.id}
                                id={sound.id}
                                className="drum-pad m-2 bg-gray-600"
                                onMouseDown={() =>
                                    playSound({ id: sound.soundName })
                                }
                                onClick={() => {
                                    if (!isPowerOn) {
                                        handleSoundName("Power Off");
                                    } else {
                                        handleSoundName(sound.soundName);
                                    }
                                }}
                            >
                                {sound.id}
                            </button>
                        );
                    })}
                </div>
                <div className="flex flex-col justify-center p-8">
                    <div className="flex flex-col justify-center items-center">
                        <p>Power {isPowerOn ? "On" : "Off"}</p>
                        <button onClick={handlePower}>
                            <div className="bg-black w-6 h-4 relative">
                                <div
                                    className={`bg-blue-600 w-3 h-4 absolute ${
                                        isPowerOn ? "left-0" : "right-0"
                                    } z-10`}
                                ></div>
                            </div>
                        </button>
                    </div>
                    <div id="display" className="self-center w-20 text-center">
                        <p>{soundName}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
