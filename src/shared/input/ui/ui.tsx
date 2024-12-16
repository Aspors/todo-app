import { FormEvent, memo, useCallback } from "react";
import styles from "./styles.module.scss";
import { TInput } from "./types";
import clsx from "clsx";

const Input = memo(({ label = "label", setValue, value }: TInput) => {
    const onChange = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
        },
        [setValue]
    );

    return (
        <div className={styles["dropdown-input"]}>
            <label
                className={clsx(styles["dropdown-input__label"], {
                    [styles["_fullfilled"]]: value?.length,
                })}
                htmlFor="input"
            >
                {label}
            </label>
            <input
                className={styles["dropdown-input__body"]}
                id="input"
                onInput={(event) => onChange(event)}
                value={value}
            />
        </div>
    );
});

export default Input;
