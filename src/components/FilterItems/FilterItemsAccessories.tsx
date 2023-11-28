import React from 'react'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownItemSet from '../Dropdown/DropdownItemSet'
import DropdownItemPrice from '../Dropdown/DropdownItemPrice'

import FilterArrow from '../../ímg/arrow-sort.svg'

import { IFilterSort } from '../../interfaces/filter.interface'

const FilterItemsAccessories:React.FC<IFilterSort> = ({
  sex, 
  sexFilters, 
  sexFiltersHandler,
  brands,
  brandsFilters,
  brandsFiltersHandler,
  materials,
  materialsFilter,
  materialsFiltersHandler,
  colors,
  colorsFilters,
  colorsFiltersHandler,
  sort, 
  sortMain,
  sortMainHandler,
  minPriceHandler,
  maxPriceHandler
  }) => {
    
  return (
    <div className="filter-toolbar">
      <div className="filter-toolbar__category">
        <div className="category-item">
          <Dropdown>
            <DropdownButton>Цена</DropdownButton>
            <DropdownContent>
              <DropdownItemPrice minHandler={minPriceHandler} maxHandler={maxPriceHandler}/>
            </DropdownContent>
          </Dropdown>
        </div>
        <div className="category-item">
          <Dropdown>
            <DropdownButton>Пол</DropdownButton>
            <DropdownContent>
              <DropdownList>
                { sex && sex && sex.map(s => <DropdownItem
                  filterList={sexFilters}
                  filterHandler={sexFiltersHandler}
                  filter={s.filter}
                  filterID={s.id}
                ></DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
        <div className="category-item">
          <Dropdown>
            <DropdownButton>Бренд</DropdownButton>
            <DropdownContent>
              <DropdownList>
                { brands && brands.map(s => <DropdownItem
                  filterList={brandsFilters}
                  filterHandler={brandsFiltersHandler}
                  filter={s.filter}
                  filterID={s.id}
                ></DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
        <div className="category-item">
          <Dropdown>
            <DropdownButton>Цвет</DropdownButton>
            <DropdownContent>
              <DropdownList>
                { colors && colors.map(s => <DropdownItem
                  filterList={colorsFilters}
                  filterHandler={colorsFiltersHandler}
                  filter={s.filter}
                  filterID={s.id}
                ></DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
        <div className="category-item">
          <Dropdown>
            <DropdownButton>Материал</DropdownButton>
            <DropdownContent>
              <DropdownList>
                { materials && materials.map(s => <DropdownItem
                  filterList={materialsFilter}
                  filterHandler={materialsFiltersHandler}
                  filter={s.filter}
                  filterID={s.id}
                ></DropdownItem>) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
      <div className="filter-toolbar__sort">
        <Dropdown className={'dropdown-right'}>
          <DropdownButton>
            <div className="sort-item">{sortMain.name} <img src={FilterArrow} alt="Сортировка" /></div>
          </DropdownButton>
          <DropdownContent>
            <DropdownList>
              { sort && sort.map(sortItem => <DropdownItemSet
                sortName={sortItem.name}
                sortProperty={sortItem.sortProperty}
                sortHandler={sortMainHandler}
              ></DropdownItemSet>) }
            </DropdownList>
          </DropdownContent>
        </Dropdown>
      </div>
    </div>
  )
}

export default FilterItemsAccessories