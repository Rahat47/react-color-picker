import { useState } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

const ColorBox = ({ background, name, palleteId, colorId }) => {
    const [copied, setCopied] = useState(false);

    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.5;

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

                <div
                    className={`copy-msg ${copied && "show"} ${
                        isLight && "dark-text"
                    }`}
                >
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>

                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDark && "light-text"}>{name}</span>
                    </div>
                    <button className={`copy-button ${isLight && "dark-text"}`}>
                        Copy
                    </button>
                </div>
                {palleteId && (
                    <Link
                        to={`/pallete/${palleteId}/${colorId}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <span className={`see-more ${isLight && "dark-text"}`}>
                            More
                        </span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;
