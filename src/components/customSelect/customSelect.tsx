import React, { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./customSelect.style";
import dropDownIcon from "../../assets/images/dropdown.svg";
import checkMark from "../../assets/images/checkmark.svg";

interface SelectProps {
    items: string[];
    selected: string;
    setSelection: (item: string) => void;
}

const CustomSelectBox: React.FC<SelectProps> = ({ items, selected, setSelection }) => {
  const classes = useStyles();
  const [dropBox, setDropBox] = useState<boolean>(false);
  const toggleContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);

    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };
  });

  const onClickOutsideHandler = (event: MouseEvent) => {
    if (
      dropBox &&
      toggleContainer.current &&
      !toggleContainer.current.contains(event.target as Node)
    ) {
      setDropBox(false);
    }
  };
  return (
    <Box
      className={classes.selectedBox}
      onClick={() => setDropBox(!dropBox)}
      {...({ ref: toggleContainer } as any)}
    >
      {selected === "" && (
        <Typography variant="body1" className={classes.floatingLabel}>
          Choose a category
        </Typography>
      )}
      {selected.length > 0 && (
        <Typography variant="body1" className={classes.selectedValue}>
          {selected}
        </Typography>
      )}
      <img src={dropDownIcon} alt="drop down" />
      {dropBox && (
        <ul className={classes.dropBox}>
          {items.map((item: string, i: number) => (
            <li key={i} onClick={() => setSelection(item)}>
              <Typography variant="body1">{item}</Typography>
              {selected === item && (
                <img src={checkMark} alt="check mark" />
              )}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default CustomSelectBox;
