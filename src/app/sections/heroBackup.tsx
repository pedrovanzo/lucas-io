export default function HeroBackup() {
    return (
        <main className="m-auto h-screen flex">
            <div className="grid gap-2 my-auto transform [transform:rotateZ(5deg)_rotateY(-15deg)_rotateX(45deg)_scale(1.4)]">
                <div className="flex flex-row gap-3">
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/dungeon-raylib1.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/GodotMicroGames.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/cowboysvAliens.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/netRush.webm"
                            type="video/webm"
                        />
                    </video>
                </div>
                <div className="flex flex-row gap-3">
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/asteroidBeltfreeRoam.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/endlessRacetrack.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/freeThrow.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/robotim.webm"
                            type="video/webm"
                        />
                    </video>
                </div>
                <div className="flex flex-row gap-3">
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/ThirdBridge.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs//timelapse.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/RememberUs.webm"
                            type="video/webm"
                        />
                    </video>
                    <video autoPlay loop playsInline muted data-video-preview>
                        <source
                            src="./images/thumbs/LuaConDash.webm"
                            type="video/webm"
                        />
                    </video>
                </div>
            </div>
        </main>
    );
}
