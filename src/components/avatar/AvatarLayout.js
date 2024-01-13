import React from 'react';
import "./avatar.css";
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from "../scroll/useHorizontalScroll";
import useCheckMobileScreen from "../mobile/useCheckMobileScreen";

const AvatarLayout = () => {
    const scrollRef = useHorizontalScroll();
    const isMobile = useCheckMobileScreen();
    const avatars = [
        { codename: "SHD-B1F", skill: "RESCUE - PROTECTION", speciality: "SHIELDING, EMERGENCY", price: "12500", image: "/assets/images/avatars/arasaka-soldier.png" },
        { codename: "SHD-ADM", skill: "SECURITY - PROTECTION", speciality: "EXFILTRATION", price: "14500", image: "/assets/images/avatars/arasaka-smasher-soldier-2.png" },
        { codename: "ELI-SNI", skill: "SNIPER - DISCRECY", speciality: "EVENTS PROTECTION", price: "25000", image: "/assets/images/avatars/arasaka-elite-masked.png" },
        { codename: "GAZ-SHO", skill: "HOSTAGE RESCUE", speciality: "EXFILTRATING HOSTAGES", price: "15000", image: "/assets/images/avatars/arasaka-gaz-soldier-3.png" },
        { codename: "NET-SNI", skill: "HOUSE GUARDING - SNIPER", speciality: "HOUSE PROTECTION SILENTLY", price: "8500", image: "/assets/images/avatars/arasaka-sniper.png" },
        { codename: "ATK-GLAD", skill: "ELIMINATION", speciality: "EVERYTHING YOU NEED", price: "30000", image: "/assets/images/avatars/arasaka-gladiator.png" }
    ];

    return (
        <div className='avatar-layout-container' >
            <div ref={isMobile ? scrollRef : null} className='scroll-x' style={{ height: "100%" }}>
                <div className='avatar-grid'>
                    {avatars.map((avatar) => {
                        return Avatar(avatar)
                    })}
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <Link className='large title'>~HIRE ON INTRANET</Link>
            </div>
        </div>
    );
}

export default AvatarLayout;
