import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { SKILLS } from "../constants/Skills";
import useOnScreen from "../hooks/useOnScreen";

const SkillList = ({ onVisible }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        console.log("Skill", isVisible);

        if (isVisible) {
            onVisible(2);
        }
    }, [isVisible, onVisible]);

    return (
        <>
            <div id="skillClear"></div>
            <Section ref={ref}>
                <h3>Skills</h3>
                <List>
                    {SKILLS.map((item, idx) => (
                        <ListItem key={idx} className="flex align">
                            <div className="skill-icon flex align justify">
                                {item.icon}
                            </div>
                            <div className="skill-name">{item.name}</div>
                        </ListItem>
                    ))}
                </List>
            </Section>
        </>
    );
};

export default SkillList;

const Section = styled.section`
    h3 {
        text-transform: uppercase;
        font-size: 1rem;
        padding: 1rem 0;
        margin-bottom: 1rem;
        position: sticky;
        top: 0;

        display: block;

        @media screen and (min-width: 768px) {
            display: none;
        }
    }
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }
`;

const ListItem = styled.li`
    background-color: rgba(32, 32, 34, 1);
    padding: 2rem;
    gap: 0.75rem;
    flex: 1;
    white-space: nowrap;

    .skill-icon {
        font-size: 2rem;
    }

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        @media screen and (min-width: 768px) {
            transform: scale(1.1);
        }
    }
`;
