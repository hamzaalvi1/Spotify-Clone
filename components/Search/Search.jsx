import { MdOutlineShortText } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

function Search({ classes }) {
  const [search, setSearch] = useState({ searchFld: "" });
  const onSearch = (evt)=>{
    evt.preventDefault()
    console.log(search)
  }
  return (
    <form action="" onSubmit={onSearch}>
      <div className={classes.formWrapper}>
        <div className={classes.formfld}>
          <HiOutlineSearch />
          <input
            type="text"
            name="searchFld"
            placeholder="Search..."
            value={search.searchFld}
            onChange = {(evt)=>setSearch({...search,[evt.target.name]:evt.target.value})}
          />
        </div>
        <div className={classes.formBtn}>
          <button type="submit">
            <MdOutlineShortText />
            Filters
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
