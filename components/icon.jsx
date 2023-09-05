import {
    IoLogoGithub, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoOpenOutline, IoLogoLinkedin, IoLogoReact, IoLogoFigma, IoSunny, IoMoon
} from "react-icons/io5";

import { BsFillBootstrapFill } from "react-icons/bs"
import { SiTailwindcss, SiNextdotjs, SiAdobexd } from "react-icons/si"
import { createElement } from "react";

const iconMap = {
    "HTML": IoLogoHtml5,
    "JavaScript": IoLogoJavascript,
    "CSS": IoLogoCss3,
    "Bootstrap": BsFillBootstrapFill,
    "Tailwind": SiTailwindcss,
    "NextJS": SiNextdotjs,
    "React": IoLogoReact,
    "Figma": IoLogoFigma,
    "Adobe Xd": SiAdobexd,
    linkedin: IoLogoLinkedin,
    github: IoLogoGithub,
    open: IoOpenOutline,
    sun: IoSunny,
    moon: IoMoon

};

export default function Icon(props) {
    if (!(props.name in iconMap)) {
        console.error("Could not find name " + props.name);
        return null;
    }
    return createElement(iconMap[props.name], props);
}

