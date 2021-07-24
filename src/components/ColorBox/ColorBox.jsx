import { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const ColorBox = ({ background, name }) => {
    const [copied, setCopied] = useState(false);
    const changeCopyState = () => {
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className="Color-box">
                <div
                    style={{ background }}
                    className={`copy-overlay ${copied && "show"}`}
                ></div>

                <div className={`copy-msg ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>

                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <Link to="/" onClick={e => e.stopPropagation()}>
                    <span className="see-more">More</span>
                </Link>
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;
