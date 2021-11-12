import s from "./Sidebar.module.css"
import { FaReact } from 'react-icons/fa';
import { BiCartAlt, BiChat, BiCog, BiFolder, BiGridAlt, BiHeart, BiLogOut, BiMenu, BiPieChartAlt, BiSearch, BiUser } from 'react-icons/bi';
import { useState } from "react";

export const Sidebar = () => {

    let [toggle, setToggle] = useState(true)
    let [value, setValue] = useState("")

    return <div className={toggle ? s.sidebar : s.sidebar + " " + s.active}>
        <div className={s.logo_content}>
            <div className={s.logo}>
                <FaReact className={s.i} />
                <div className={s.logo_name}>ReactSidebar</div>
            </div>
            <BiMenu className={s.btn} onClick={() => setToggle(!toggle)} />
        </div>
        <ul className={s.nav_list}>
            <li>
                <BiSearch className={s.search} />
                <input type="text" placeholder="Search..." value={value} onChange={(e) => setValue(e.currentTarget.value)} />
                <span className={s.tooltip}>{value ? value : "Search"}</span>
            </li>
            <li>
                <a href="#">
                    <BiGridAlt className={s.i} />
                    <span className={s.links_name}>Dashboard</span>
                </a>
                <span className={s.tooltip}>Dashboard</span>
            </li>
            <li>
                <a href="#">
                    <BiUser className={s.i} />
                    <span className={s.links_name}>User</span>
                </a>
                <span className={s.tooltip}>User</span>
            </li>
            <li>
                <a href="#">
                    <BiChat className={s.i} />
                    <span className={s.links_name}>Messages</span>
                </a>
                <span className={s.tooltip}>Messages</span>
            </li>
            <li>
                <a href="#">
                    <BiPieChartAlt className={s.i} />
                    <span className={s.links_name}>Analitics</span>
                </a>
                <span className={s.tooltip}>Analitics</span>
            </li>
            <li>
                <a href="#">
                    <BiFolder className={s.i} />
                    <span className={s.links_name}>File Manager</span>
                </a>
                <span className={s.tooltip}>File Manager</span>
            </li>
            <li>
                <a href="#">
                    <BiCartAlt className={s.i} />
                    <span className={s.links_name}>Order</span>
                </a>
                <span className={s.tooltip}>Order</span>
            </li>
            <li>
                <a href="#">
                    <BiHeart className={s.i} />
                    <span className={s.links_name}>Saved</span>
                </a>
                <span className={s.tooltip}>Saved</span>
            </li>
            <li>
                <a href="#">
                    <BiCog className={s.i} />
                    <span className={s.links_name}>Setting</span>
                </a>
                <span className={s.tooltip}>Setting</span>
            </li>
        </ul>
        <div className={s.profile_content}>
            <div className={s.profile}>
                <div className={s.profile_details}>
                    <img src="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool-ru.jpg" alt="" />
                    <div className={s.name_job}>
                        <div className={s.name}>My Name</div>
                        <div className={s.job}>My Job</div>
                    </div>
                </div>
                <BiLogOut className={s.log_out} />
            </div>
        </div>
    </div>
}