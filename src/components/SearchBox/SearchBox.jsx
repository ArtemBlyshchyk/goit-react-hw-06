import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ onChange }) => {
  const id = useId();

  return (
    <div className={css.searchContainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <br />
      <input type="text" id={id} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
