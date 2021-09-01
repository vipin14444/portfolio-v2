import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { PROJECTS } from "../constants/Projects";
import useOnScreen from "../hooks/useOnScreen";

const ProjectList = ({ onVisible }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        console.log("Projects", isVisible);
        if (isVisible) {
            onVisible(1);
        }
    }, [isVisible, onVisible]);

    return (
        <Section ref={ref}>
            <h3>Projects</h3>
            <List className="flex column">
                {PROJECTS.map((item, idx) => (
                    <ListItem key={idx}>
                        <div className="language">{item.language}</div>
                        <div className="project-name">{item.projectName}</div>
                        <div className="project-description">
                            {item.description}
                        </div>
                    </ListItem>
                ))}
            </List>
        </Section>
    );
};

export default ProjectList;

const Section = styled.section`
    margin-top: 0 !important;

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
    gap: 1rem;
`;
const ListItem = styled.li`
    background-color: rgba(32, 32, 34, 1);
    padding: 2rem;

    .language {
        text-transform: uppercase;
        font-size: 0.6rem;
        font-weight: 800;
        letter-spacing: 2px;
    }

    .project-name {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .project-description {
        font-size: 0.9rem;
        margin-top: 0.75rem;
        color: rgba(148, 148, 149, 1);
    }

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        @media screen and (min-width: 768px) {
            transform: scale(1.1);
        }
    }
`;
