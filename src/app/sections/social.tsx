export default function Social() {
    return (
        <>
            <ul className="m-auto w-fit flex flex-row items-center gap-4 sticky top-0 p-4 rounded-md bg-neutral-900 text-white z-10">
                <li>
                    <a href="https://github.com/lucasfaesa" target="_blank">
                        <img
                            src="/assets/social/github-mark-white.png"
                            data-social-icons
                            alt="Github - Lucas Rios"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/lucasescossia/"
                        target="_blank"
                    >
                        <img
                            src="/assets/social/InBug-White.png"
                            data-social-icons
                            className="w-[32px] h-[29.64px]"
                            alt="LinkedIn - Lucas Rios"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://lucasrios.itch.io/" target="_blank">
                        <img
                            src="/assets/social/itchio-textless-white.svg"
                            data-social-icons
                            alt="Itchio - Lucas Rios"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://lucasfaesa.github.io/resume/"
                        target="_blank"
                    >
                        <img
                            src="/assets/social/paper.png"
                            data-social-icons
                            alt="Resume - Lucas Rios"
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:lucasfaesa@gmail.com" target="_blank">
                        <img
                            src="/assets/social/mail.png"
                            data-social-icons
                            alt="Email - Lucas Rios"
                        />
                    </a>
                </li>
            </ul>
        </>
    );
}
