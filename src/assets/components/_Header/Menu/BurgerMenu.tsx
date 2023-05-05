import React, { useState } from 'react';
import './BurgerMenu.css';

type BurgerMenuProps = {
    links: { label: string; url: string }[];
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <button className={`burger-menu__toggle ${isOpen ? 'is-active' : ''}`} onClick={handleToggle}>
                <span className="burger-menu__icon"></span>
            </button>
            {isOpen && (
                <ul className="burger-menu__links">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BurgerMenu;
