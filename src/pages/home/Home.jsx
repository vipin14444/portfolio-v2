import React, { useState } from "react";
import styled from "styled-components";
import ProjectList from "../../components/ProjectList";
import SkillList from "../../components/SkillList";
import Contact from "../../components/Contact";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import avatarImage from "../../assets/me.png";

const COMPANY_LINK = "https://www.google.com";
const COMPANY_NAME = "Cargoflash Infotech";

const NAV_ITEMS = [
    {
        id: 1,
        name: "Projects",
    },
    {
        id: 2,
        name: "Skills",
    },
    {
        id: 3,
        name: "Contact",
    },
];

const Home = () => {
    const [activeSection, setActiveSection] = useState(0);

    const onClickSectionLink = (id) => {
        setActiveSection(id);
        switch (id) {
            case 1:
                document
                    .getElementById("projectClear")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            case 2:
                document
                    .getElementById("skillClear")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            case 3:
                document
                    .getElementById("contactClear")
                    .scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    };

    return (
        <Container>
            <StickyPersonalInfo className="flex column">
                <h1>Hello, I’m Vipin Sharma</h1>
                <SubHeading>
                    I’m a full stack web developer, currently working as System
                    Developer at <a href={COMPANY_LINK}>{COMPANY_NAME}</a>. I
                    work on both front-end as well as back-end, but I love doing
                    front-end development. I have helped make various frameworks
                    for front-end as well as back-end at Cargoflash Infotech. In
                    my free time I like to team up with my squad and play BGMI
                    (Battlegrounds Mobile India).
                </SubHeading>

                <SectionLinksDesktop>
                    {NAV_ITEMS.map((item, idx) => (
                        <SectionLink
                            onClick={() => {
                                onClickSectionLink(item.id);
                            }}
                            key={idx}
                            className={`flex align ${
                                item.id === activeSection ? "active" : ""
                            }`}
                        >
                            <SectionNumber className="number flex align">
                                {("0" + item.id).slice(-2)}
                            </SectionNumber>
                            <SectionLabel>{item.name}</SectionLabel>
                        </SectionLink>
                    ))}
                </SectionLinksDesktop>

                <Socials className="flex align">
                    <Avatar src={avatarImage} />
                    <ul className="flex align">
                        <li className="flex align">
                            <a
                                className="flex align"
                                href="https://github.com/vipin14444"
                            >
                                <FaGithub />
                                Github
                                <BiLinkExternal />
                            </a>
                        </li>
                        <li className="flex align">
                            <a
                                className="flex align"
                                href="https://www.instagram.com/vipin14444/"
                            >
                                <FaInstagram />
                                Instagram
                                <BiLinkExternal />
                            </a>
                        </li>
                    </ul>
                </Socials>
            </StickyPersonalInfo>
            <div className="scrolling-wrapper">
                <div id="projectClear"></div>
                <ScrollingBody>
                    <ProjectList onVisible={setActiveSection} />
                    <SkillList onVisible={setActiveSection} />
                    <Contact onVisible={setActiveSection} />
                </ScrollingBody>
            </div>
        </Container>
    );
};

export default Home;

const Container = styled.main`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;

    h3 {
        background-color: rgba(21, 21, 21, 1);
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const StickyPersonalInfo = styled.div`
    padding: 2rem;

    h1 {
        font-size: 3rem;
    }

    @media screen and (min-width: 768px) {
        position: sticky;
        top: 0;
        height: 100vh;
    }
`;
const ScrollingBody = styled.div`
    padding: 2rem;

    section {
        margin-top: 6rem;
    }
`;

const SubHeading = styled.div`
    color: rgba(148, 148, 149, 1);
    font-size: 0.9rem;
    line-height: 1.8rem;
    margin-top: 2rem;

    a {
        color: white;
        text-decoration: underline;
    }
`;

const SectionLinksDesktop = styled.ul`
    display: none;
    padding: 2rem 0;
    margin: auto 0;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

const SectionLink = styled.li`
    gap: 1rem;
    opacity: 0.25;
    cursor: pointer;
    user-select: none;

    &.active {
        opacity: 1;
        .number::after {
            width: 75px;
        }
    }
`;

const SectionNumber = styled.div`
    gap: 1rem;
    transition: all 0.3s ease;

    &::after {
        content: "";
        display: flex;
        width: 30px;
        height: 1px;
        background-color: white;
        transition: all 0.3s ease;
    }
`;
const SectionLabel = styled.div``;

const Socials = styled.div`
    padding-top: 2rem;
    margin-top: auto;

    ul {
        gap: 1.25rem;
        font-size: 0.9rem;

        li {
            a {
                gap: 0.5rem;
                cursor: pointer;
            }
        }
    }
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1.25rem;
    object-fit: cover;
`;
