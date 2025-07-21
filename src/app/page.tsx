import Description from "./sections/description";
import Hero from "./sections/hero";
import OtherProjects from "./sections/other";
import Personal from "./sections/personal";
import Social from "./sections/social";
import TechnicalAssessments from "./sections/technical";
import Unity from "./sections/unity";
import Work from "./sections/work";

export default function Home() {
    return (
        <>
            <Hero />
            <Description />
            <Social />
            <Work />
            <Personal />
            <Unity />
            <OtherProjects />
            <TechnicalAssessments />
        </>
    );
}
