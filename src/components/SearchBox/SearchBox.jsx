import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  //Get vale from input
  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <br />
      <input type="text" id={id} onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
