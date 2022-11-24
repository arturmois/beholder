import React from "react";
import { Link } from 'react-router-dom';


/**
 * props:
 * - to: endereço do link
 * - text: texto do item
 * - children: tag SVG
 * - onClick: um callback de click(quando necessário)
 */

function SideBarItem(props) {

    function getClassName(itemName) {
        return window.location.pathname === itemName ? 'nav-item active' : 'nav-item';
    }

    return (
        <li class={getClassName(props.to)}>
            <Link to={props.to} class="nav-link" onClick={props.onClick}>
                <span class="sidebar-icon">
                    {props.children}
                </span>
                <span class="sidebar-text">{props.text}</span>
            </Link>
        </li>
    )
}

export default SideBarItem;