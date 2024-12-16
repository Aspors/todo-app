import { memo, ReactNode, useState } from "react";
import { motion } from "motion/react";

import styles from "./styles.module.scss";

const DropDown = memo(
    ({
        summaryContent,
        children,
    }: {
        summaryContent: ReactNode;
        children: ReactNode;
    }): ReactNode => {
        return (
            <details
                className={styles.dropdown}
                open
                onKeyUp={(event) =>
                    event.key === " " ? event.preventDefault() : null
                }
            >
                <summary className={styles["dropdown__summary"]}>
                    <i className={styles["dropdown__summary__icon"]}>
                        <svg
                            fill="#000000"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 407.437 407.437"
                            xmlSpace="preserve"
                        >
                            <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
                        </svg>
                    </i>
                    {summaryContent}
                </summary>

                {children}
            </details>
        );
    }
);

export default DropDown;
