import { MdOutlineShortText } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { getUserTracks } from "../../features/SearchTracks/SearchTracksSlice";

function Search({ classes }) {
  const [search, setSearch] = useState({ searchFld: "" });
  const dispatch = useDispatch();
  const trackState = useSelector((state) => state);
  const { data: session } = useSession();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  useEffect(() => {
    if (search.searchFld !== "") {
      debounce(
        dispatch(
          getUserTracks({
            accessToken: session?.accessToken,
            search: search.searchFld,
          })
        )
      );
    }
  }, [search, session?.accessToken, dispatch]);

  const onSearch = (evt) => {
    evt.preventDefault();
  };

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
            onChange={(evt) =>
              setSearch({ ...search, [evt.target.name]: evt.target.value })
            }
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
