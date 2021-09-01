import React from "react";
import { FaHtml5, FaCss3, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiJquery,
    SiDotNet,
    SiMicrosoftsqlserver,
    SiMongodb,
    SiNextDotJs
} from "react-icons/si";

export const SKILLS = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
    },
    {
        name: "CSS",
        icon: <FaCss3 />,
    },
    {
        name: "SASS",
        icon: <FaSass />,
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript />,
    },
    {
        name: "Jquery",
        icon: <SiJquery />,
    },
    {
        name: "Node JS",
        icon: <FaNodeJs />,
    },
    {
        name: "React JS",
        icon: <FaReact />,
    },
    {
        name: "Next JS",
        icon: <SiNextDotJs />,
    },
    {
        name: "Dotnet Core",
        icon: <SiDotNet />,
    },
    {
        name: "SQL",
        icon: <SiMicrosoftsqlserver />,
    },
    {
        name: "MongoDb",
        icon: <SiMongodb />,
    },
];
