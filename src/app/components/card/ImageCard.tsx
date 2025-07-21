export default function ImageCard(props: any) {
    return (
        <div
            className={`flex flex-col gap-4 basis-full`}
        >
            <img
                src={props.previewUrl}
                className={`w-full`}
                alt="Nurture - Lucas Rios"
            />
            <div className="px-2 md:px-0">
                <p className="text-xl text-white">{props.title}</p>
                {props.started && props.ended ? (
                    <p>
                        {props.started} ~ {props.ended}
                    </p>
                ) : null}
                <a
                    href="./work.html#nurture"
                    className="text-sm px-3 py-2 mt-4 border-2 rounded block w-fit"
                >
                    Details
                </a>
            </div>
        </div>
    );
}
