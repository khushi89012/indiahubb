import { MdStarOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import './detail.css';


// Detail section started here 
export const Detail = () => {
    return (
        <div>
            <div className='detail-container'>
                <div className="first-div">Details</div>
                <hr style={{ border: "1px solid rgb(222,221,221)" }} />
                <div className="second-div">
                    <div className="star-Icon">
                        <MdStarOutline style={{ "color": "rgb(119,119,119)", "font-size": "22px", "font-weight": "400" }} /><span>53</span>
                    </div>
                    <div className="eye-Icon">
                        <AiOutlineEye style={{ "color": "rgb(119,119,119)", "font-size": "22px", "font-weight": "400" }} /><span>4,149</span>
                    </div>
                </div>
                <div className="thirdiv">
                    <h2>Last Hope K9 - Lives Saved</h2>
                </div>

                <div className="four-div">
                    <h2>Visit https://www.lasthopek9.org/ to learn more & get involved</h2>
                </div>

                <div className="fifth-div">
                    <h2>
                        <strong>Published</strong>: May 27, 2022 {" "}
                        {" "}
                        <strong>Updated</strong> : May 27, 2022</h2>
                </div>
            </div>
        </div>
    )

}