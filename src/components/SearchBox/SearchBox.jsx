import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const searchName = useSelector(selectNameFilter);

  //Get vale from input
  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor={id}>Find contacts by name</label>
      <br />
      <input type="text" id={id} value={searchName} onChange={onChangeFilter} />
    </div>
  );
};

export default SearchBox;
