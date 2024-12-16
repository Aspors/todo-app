import { memo, ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import DropDown from "src/shared/dropdown";
import Input from "src/shared/input";
import { INPUT_LABEL } from "../config/constants";
import Checbox from "src/shared/checkbox";
import ManagmentPanel from "../managment-panel/ui/ui";
import { AnimatePresence, motion } from "motion/react";
import { delay, easeInOut } from "motion";

const Card = memo((): ReactNode => {
    const [inputValue, setInputValue] = useState("");

    const initialDropDownState = [
        { label: "Тестовое задание", checkboxState: false, id: 0 },
        { label: "Прекрасный код", checkboxState: true, id: 1 },
        { label: "Покрытие тестами", checkboxState: false, id: 2 },
    ];

    const [dropdownItems, setDropdownItems] =
        useState<{ label: string; checkboxState: boolean; id: number }[]>(
            initialDropDownState
        );

    const addItem = () => {
        setDropdownItems((state) => [
            ...state,
            { label: inputValue, checkboxState: false, id: state.length + 1 },
        ]);
        setInputValue(() => "");
    };

    const [filterName, setFilterName] = useState<"all" | "active" | "done">(
        "all"
    );
    const filterItems = useCallback(
        () =>
            dropdownItems.filter((item) => {
                if (filterName === "all") {
                    return dropdownItems;
                }
                switch (filterName) {
                    case "active":
                        return !item.checkboxState;
                    case "done":
                        return item.checkboxState;
                }
            }),
        [filterName, dropdownItems]
    );

    const [filteredItems, setFilteredItems] = useState(filterItems);

    useEffect(() => {
        setFilteredItems(filterItems);
    }, [filterName, dropdownItems]);

    const setActiveElement = useCallback(
        (id: number) => {
            setDropdownItems((prevState) =>
                prevState.map((item) =>
                    item.id === id
                        ? { ...item, checkboxState: !item.checkboxState }
                        : item
                )
            );
        },
        [dropdownItems]
    );

    const setActiveFilter = useCallback(
        (filterName: "all" | "active" | "done") => {
            setFilterName(() => filterName);
        },
        [filterName]
    );

    const clearComplited = useCallback(() => {
        setDropdownItems((state) => {
            return state.filter((item) => !item.checkboxState);
        });
    }, [dropdownItems]);

    return (
        <div className={styles["card"]}>
            <DropDown
                summaryContent={
                    <>
                        <Input
                            label={INPUT_LABEL}
                            value={inputValue}
                            setValue={setInputValue}
                        />
                        <AnimatePresence>
                            {inputValue.length ? (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={addItem}
                                >
                                    Save
                                </motion.button>
                            ) : null}
                        </AnimatePresence>
                    </>
                }
            >
                <AnimatePresence>
                    {filteredItems.map((item, id) => (
                        <motion.div
                            className={styles["card__item"]}
                            animate={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            exit={{
                                x: -100,
                                opacity: 0,
                            }}
                            key={item.id}
                            layout
                            transition={{
                                default: { easeInOut: "linear" },
                                layout: { duration: 0.2, delay: 0 },
                            }}
                        >
                            <Checbox
                                onClick={() => setActiveElement(item.id)}
                                checkboxText={item.label}
                                isActive={item.checkboxState}
                                id={item.id}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </DropDown>
            <ManagmentPanel
                counter={dropdownItems.length}
                setActiveFilter={setActiveFilter}
                activeFilter={filterName}
                clearComplited={clearComplited}
            />
        </div>
    );
});

export default Card;
