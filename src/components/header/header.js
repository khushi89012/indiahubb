import "./header.css";
import { IoCopyOutline } from 'react-icons/io5';
import { MdStarOutline } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiDownload } from 'react-icons/bi';
import { IoMdRibbon } from 'react-icons/io';


// header section contains icons and text

export const Header = () => {
    return <>
        <div className="header">

            {/* left div of text */}
            <div className="left-item">


                <div style={{ "color": "rgb(79,79,79)", "margin-left": "18px" }}>
                    <h1><b>Last Hope K9 - Lives Saved</b></h1>
                </div>

                <div style={{ "margin-left": "5px", "margin-right": "5px", "font-size": "13px" }}>
                    <p>by</p>
                </div>

                <div style={{ "color": "rgb(26,105,158)", "font-size": "14px", "font-weight": "500" }}>
                    <a className="anchortag" href="https://public.tableau.com/app/profile/aimpoint.digital">
                        Aimpoint Digital</a>
                </div>
            </div>



            {/* "--------------------------------------------------------------------------left div is end------------------------------------------------------------" */}




            {/* Right div of icons */}
            <div className="right-item">

                <div className="button" >
                    <IoCopyOutline style={{ "color": "rgb(119,119,119)", "font-size": "18px", "font-weight": "500" }} />
                </div>

                <div className="button">
                    <MdStarOutline style={{ "color": "rgb(119,119,119)", "font-size": "19px", "font-weight": "500" }} />
                </div>
                <div className="button">
                    <AiOutlineShareAlt style={{ "color": "rgb(119,119,119)", "font-size": "18px", "font-weight": "500" }} />
                </div>
                <div className="button">
                    <BiDownload style={{ "color": "rgb(119,119,119)", "font-size": "18px", "font-weight": "500" }} />
                </div>
                <div className="button">
                    <IoMdRibbon style={{ "color": "rgb(119,119,119)", "font-size": "19x", "font-weight": "500" }} />
                </div>
            </div>



        </div>

    </>
}