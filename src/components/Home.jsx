import { useEffect, useState } from "react";


export default function Home() {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerHeight / 2; // Adjust threshold for scroll.
            if (window.scrollY > threshold) {
                setShowCards(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="contain">
                <div className="bit">
                    <h1 className="loading-text">
                        MyTodo <br />
                        <p>
                            By <span>reshuk-code</span>
                        </p>
                    </h1>
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/woman-working-on-laptop-illustration-download-in-svg-png-gif-file-formats--online-freelancing-work-character-pack-people-illustrations-5752196.png"
                        alt="Woman working on laptop"
                    />
                </div>

                <div id="cards" className={`cards-container ${showCards ? "show" : ""}`}>
                    <div className="card">
                        <h5 className="card-heading">Plan Your Day</h5>
                        <p className="card-content">Start your day by organizing tasks and priorities.</p>
                        <div className="icon-card">&#8599;</div>
                    </div>
                    <div className="card">
                        <h5 className="card-heading">Set Reminders</h5>
                        <p className="card-content">
                            Never forget a task—schedule reminders and stay on top of your to-dos.
                        </p>
                        <div className="icon-card">&#8599;</div>
                    </div>
                    <div className="card">
                        <h5 className="card-heading">Track Progress</h5>
                        <p className="card-content">
                            Check off tasks as you complete them and celebrate your progress.
                        </p>
                        <div className="icon-card">&#8599;</div>
                    </div>
                    <div className="card">
                        <h5 className="card-heading">Customize Your Schedule</h5>
                        <p className="card-content">
                            Adjust your tasks and timelines to suit your daily routine.
                        </p>
                        <div className="icon-card">&#8599;</div>
                    </div>
                </div>
            </div>
        </>
    );
}
