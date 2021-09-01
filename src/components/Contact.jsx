import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import useOnScreen from "../hooks/useOnScreen";

const Contact = ({ onVisible }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        console.log("Contact", isVisible);
        if (isVisible) {
            onVisible(3);
        }
    }, [isVisible, onVisible]);

    return (
        <>
            <div id="contactClear"></div>
            <Section ref={ref}>
                <h3>Want to connect with me?</h3>
                <List className="flex column">
                    <a href="mailto:vipin.sharma3039@gmail.com">
                        <ListItem className="flex align">
                            <div className="flex align justify contact-icon">
                                <MdEmail />
                            </div>
                            <div className="contact-title">
                                vipin.sharma3039@gmail.com
                            </div>
                        </ListItem>
                    </a>
                    <a href="tel:+919716753039">
                        <ListItem className="flex align">
                            <div className="flex align justify contact-icon">
                                <MdPhone />
                            </div>
                            <div className="contact-title">+91-9716753039</div>
                        </ListItem>
                    </a>
                    <QuoteBlock>
                        <FaQuoteLeft className="quote-icon" />
                        <div className="quote-text">
                            “What separates design from art is that design is
                            meant to be... functional.”
                        </div>
                        <div className="quote-by">Cameron Moll</div>
                    </QuoteBlock>
                    <QuoteBlock>
                        <FaQuoteLeft className="quote-icon" />
                        <div className="quote-text">
                            “A user interface is like a joke. If you have to
                            explain it, it’s not that good.”
                        </div>
                        <div className="quote-by">Unknown</div>
                    </QuoteBlock>
                    <QuoteBlock>
                        <FaQuoteLeft className="quote-icon" />
                        <div className="quote-text">
                            “Always code as if the guy who ends up maintaining
                            your code will be a violent psychopath who knows
                            where you live.”
                        </div>
                        <div className="quote-by">Martin Golding</div>
                    </QuoteBlock>
                </List>
            </Section>
        </>
    );
};

export default Contact;

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
    gap: 1rem;
`;

const ListItem = styled.li`
    background-color: rgba(32, 32, 34, 1);
    padding: 2rem;
    gap: 0.75rem;

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

    &:active {
        opacity: 0.5;
    }
`;

const QuoteBlock = styled(ListItem)`
    background-color: transparent;
    line-height: 2rem;
    border-bottom: 1px dashed #ffffff24;

    .quote-icon {
        font-size: 2.5rem;
    }

    .quote-by {
        margin-top: 1rem;
        &::before {
            content: "-";
            margin-right: 5px;
        }
    }
`;
