import React from "react";

type FilterList = {
  id: number
  filter: string
}

type DropdownItem = {
  filter: string
  filterID: number
  filterHandler: (filterList: FilterList) => void 
  filterList: FilterList[]
}

const FilterItemMobile:React.FC<any> = ({ filter, filterID, filterHandler, filterList }) => {
  const [checked, setChecked] = React.useState(false)

  const inputHandler = () => {
    if (!checked) {
      filterHandler((prev: FilterList[]) => [...prev, { "id": filterID, "filter": filter }])
    } else if (filterList) {
      filterHandler((filterList: FilterList[]) => filterList.filter(filter => filter.id !== filterID))
    }

    setChecked(!checked)
  }

  return <li><input type="checkbox" onChange={() => inputHandler()}/>{filter}</li>
}

export default FilterItemMobile