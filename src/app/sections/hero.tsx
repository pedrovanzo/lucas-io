export default function Hero() {
    return (
        <>
            <main className="relative m-auto w-full h-[90vh] flex flex-col">
                <img
                    src="/assets/hero-image-full.webp"
                    className="absolute inset-0 h-1/2 md:h-full object-cover"
                    alt="Hero image - Games Mozaic"
                />
                <div className="inset-0 bg-black/60 absolute size-full"></div>
                <h1 className="mt-auto md:m-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 p-16">
                        <img
                            src="/assets/avatar.webp"
                            className="size-48 md:size-64 rounded-full z-10 shadow-[0px_0px_20px_black]"
                            width="192"
                            height="192"
                            alt="Lucas Rios"
                        />
                        <div className="z-10 p-3">
                            <p className="text-4xl italic text-white">
                                Lucas Rios
                            </p>
                            <p className="text-sm italic">
                                game programmer and enthusiast of RPGs and
                                souls-like games
                            </p>
                        </div>
                    </div>
                </h1>
            </main>
        </>
    );
}
