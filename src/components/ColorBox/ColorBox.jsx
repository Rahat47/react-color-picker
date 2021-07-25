import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { styles } from "./ColorBox.styles.js";
import { withStyles } from "@material-ui/styles";

const ColorBox = ({ background, name, palleteId, colorId, classes }) => {
    const [copied, setCopied] = useState(false);

    const changeCopyState = () => {
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className={classes.colorBox}>
                <div
                    style={{ background }}
                    className={`${classes.copyOverlay} ${
                        copied && classes.showOverlay
                    }`}
                ></div>

                <div
                    className={`${classes.copyMsg} ${
                        copied && classes.showCopyMsg
                    }`}
                >
                    <h1 className={classes.copyText}>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>

                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {palleteId && (
                    <Link
                        to={`/pallete/${palleteId}/${colorId}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <span className={classes.seeMore}>More</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    );
};

export default withStyles(styles)(ColorBox);
