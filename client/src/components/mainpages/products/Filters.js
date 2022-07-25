import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>
          <img src={require("./search.svg")} alt="" />
        </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">메뉴 선택</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input className="place" type="text" value={search} placeholder="여러분의 맛있는 밥상!" onChange={(e) => setSearch(e.target.value.toLowerCase())} />

      <div className="row sort">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">신상품순</option>
          <option value="sort=-sold">판매량순</option>
          <option value="sort=price">가격 낮은 순</option>
          <option value="sort=-price">가격 높은 순</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
