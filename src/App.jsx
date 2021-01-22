import "./App.css";
import sounds from "../src/sounds/allSounds.mp3";
import useSound from "use-sound";
import { useState, useEffect } from "react";

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
    const [isMuted, setIsMuted] = useState(true);

    // useSound Custom Hook
    const [playSound] = useSound(sounds, {
        soundEnabled: isMuted,
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

    const handleMute = () => {
        setIsMuted(!isMuted);
    };
    const handleKeyPress = (e) => {
        switch (e.key) {
            case "q":
                playSound({ id: "heater1" });
                handleSoundName("Heater1");
                break;
            case "w":
                playSound({ id: "heater2" });
                handleSoundName("Heater2");
                break;
            case "e":
                playSound({ id: "heater3" });
                handleSoundName("Heater3");
                break;
            case "a":
                playSound({ id: "heater4" });
                handleSoundName("Heater4");
                break;
            case "s":
                playSound({ id: "clap" });
                handleSoundName("Clap");
                break;
            case "d":
                playSound({ id: "openHH" });
                handleSoundName("OpenHH");
                break;
            case "z":
                playSound({ id: "kickNHat" });
                handleSoundName("Kick N Hat");
                break;
            case "x":
                playSound({ id: "kick" });
                handleSoundName("Kick");
                break;
            case "c":
                playSound({ id: "closeHH" });
                handleSoundName("CloseHH");
                break;
            default:
                break;
        }
    };

    //useEffect
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <section className="">
                <div id="drum-machine" className="flex">
                    <div className="grid grid-cols-3 w-1/2">
                        {allSounds.map((sound) => {
                            return (
                                <button
                                    key={sound.id}
                                    id={sound.id}
                                    className="drum-pad"
                                    onMouseDown={() =>
                                        playSound({ id: sound.soundName })
                                    }
                                    onClick={() =>
                                        handleSoundName(sound.soundName)
                                    }
                                >
                                    {sound.id}
                                </button>
                            );
                        })}
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="m-16 flex flex-col justify-center items-center">
                            <p>Power {isMuted ? "On" : "Off"}</p>
                            <button onClick={handleMute}>
                                <div className="bg-black w-6 h-4 relative">
                                    <div
                                        className={`bg-blue-600 w-3 h-4 absolute ${
                                            isMuted ? "left-0" : "right-0"
                                        } z-10`}
                                    ></div>
                                </div>
                            </button>
                        </div>
                        <div
                            id="display"
                            className="m-16 self-center w-20 text-center"
                        >
                            <p>{soundName}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
