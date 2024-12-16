import clsx from "clsx";
import styles from "./styles.module.scss";
import { memo } from "react";

const Checbox = memo(
    ({
        checkboxText = "text",
        isActive,
        id,
        onClick,
    }: {
        checkboxText: string;
        isActive?: boolean;
        id: number;
        onClick: (id: number) => void;
    }) => {
        return (
            <label
                className={clsx(styles.checkbox, {
                    [styles["_active"]]: isActive,
                })}
            >
                <i className={styles["checkbox__view"]}>
                    <svg
                        fill="var(--color-primary)"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 78.369 78.369"
                        xmlSpace="preserve"
                    >
                        <g>
                            <path
                                d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
		c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
		C78.477,17.894,78.477,18.586,78.049,19.015z"
                            />
                        </g>
                    </svg>
                </i>
                <input
                    onChange={(event) => {
                        event.stopPropagation();
                        return onClick(id);
                    }}
                    className={styles["checkbox__input"]}
                    type="checkbox"
                    id="checkbox"
                />
                <span className={styles["checkbox__text"]}>{checkboxText}</span>
            </label>
        );
    }
);

export default Checbox;
