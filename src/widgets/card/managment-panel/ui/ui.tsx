import clsx from "clsx";
import styles from "./styles.module.scss";
import { memo, useCallback } from "react";

const ManagmentPanel = memo(
    ({
        counter,
        activeFilter,
        setActiveFilter,
        clearComplited,
    }: {
        counter: number;
        setActiveFilter: (filterName: "all" | "active" | "done") => void;
        clearComplited: () => void;
        activeFilter: "all" | "active" | "done";
    }) => {
        const onFilterClick = useCallback(
            (
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                filterName: "all" | "active" | "done"
            ) => {
                e.stopPropagation();
                setActiveFilter(filterName);
            },
            []
        );

        const handleClearClick = useCallback(
            (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                event.stopPropagation();
                clearComplited();
            },
            []
        );

        return (
            <div className={styles["managment-panel"]}>
                <span
                    className={styles["managment-panel__counter"]}
                    id="items-left"
                >
                    {counter} items left
                </span>
                <div
                    className={styles["managment-panel__filters"]}
                    role="group"
                    aria-label="Task filters"
                >
                    <button
                        className={clsx({
                            [styles["_active"]]: activeFilter === "all",
                        })}
                        onClick={(e) => onFilterClick(e, "all")}
                    >
                        All
                    </button>
                    <button
                        className={clsx({
                            [styles["_active"]]: activeFilter === "active",
                        })}
                        onClick={(e) => onFilterClick(e, "active")}
                    >
                        Active
                    </button>
                    <button
                        className={clsx({
                            [styles["_active"]]: activeFilter === "done",
                        })}
                        onClick={(e) => onFilterClick(e, "done")}
                    >
                        Done
                    </button>
                </div>
                <button
                    className={styles["managment-panel__clear-button"]}
                    onClick={(event) => handleClearClick(event)}
                    type="button"
                    aria-label="Clear completed tasks"
                >
                    Clear completed
                </button>
            </div>
        );
    }
);

export default ManagmentPanel;
