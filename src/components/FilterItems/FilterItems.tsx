import React from 'react'

import Dropdown from '../Dropdown/Dropdown'
import DropdownButton from '../Dropdown/DropdownButton'
import DropdownContent from '../Dropdown/DropdownContent'
import DropdownList from '../Dropdown/DropdownList'
import DropdownItem from '../Dropdown/DropdownItem'
import DropdownItemSet from '../Dropdown/DropdownItemSet'

import FilterArrow from '../../ímg/arrow-sort.svg'
import DropdownItemPrice from '../Dropdown/DropdownItemPrice'

import { IFilterSort } from '../../interfaces/filter.interface'

const FilterItems:React.FC<IFilterSort> = ({ 
  brands,
  countries,
  countriesFilters, 
  brandsFilters, 
  brandsFiltersHandler, 
  countriesFiltersHandler,
  sex,
  sexFilters,
  sexFiltersHandler,
  sort,
  sortMain,
  sortMainHandler,
  minPriceHandler,
  maxPriceHandler,
  colors,
  colorsFilters,
  colorsFiltersHandler,
  materials,
  materialsFilter,
  materialsFiltersHandler
  }) => {

  return (
    <div className="filter-toolbar">
      <div className="filter-toolbar__category">
        <div className="category-item category-price">
          <Dropdown>
            <DropdownButton>Цена</DropdownButton>
            <DropdownContent>
              <DropdownItemPrice minHandler={minPriceHandler} maxHandler={maxPriceHandler} />
            </DropdownContent>
          </Dropdown>
        </div>
        <div className="category-item category-sex">
          <Dropdown>
            <DropdownButton>Пол</DropdownButton>
            <DropdownContent>
              <DropdownList>
                { sex && sex.map(s => <DropdownItem
                  key={s.id}
                  filterList={sexFilters}
                  filterHandler={sexFiltersHandler}
                  filter={s.filter}
                  filterID={s.id}
                />) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
        </div>
        { brands && (
          <div className="category-item category-brand">
            <Dropdown className={'dropdown-brand'}>
              <DropdownButton>Бренд</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { brands && brands.map(brand => <DropdownItem 
                    key={brand.id}
                    filterList={brandsFilters} 
                    filterHandler={brandsFiltersHandler} 
                    filter={brand.filter} 
                    filterID={brand.id}
                  />) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        ) }
        { countries && (
          <div className="category-item">
            <Dropdown className={'dropdown-country'}>
              <DropdownButton>Страна</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { countries && countries.map(country => <DropdownItem 
                    key={country.id}
                    filterList={countriesFilters} 
                    filterHandler={countriesFiltersHandler}
                    filter={country.filter}
                    filterID={country.id}
                  />) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        ) }
        { colors && (
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Цвет</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { colors && colors.map(s => <DropdownItem
                    key={s.id}
                    filterList={colorsFilters}
                    filterHandler={colorsFiltersHandler}
                    filter={s.filter}
                    filterID={s.id}
                  ></DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        ) }
        { materials && (
          <div className="category-item">
            <Dropdown>
              <DropdownButton>Материал</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { materials && materials.map(s => <DropdownItem
                    key={s.id}
                    filterList={materialsFilter}
                    filterHandler={materialsFiltersHandler}
                    filter={s.filter}
                    filterID={s.id}
                  ></DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
        ) }
      </div>
      <div className="filter-toolbar__sort">
        <Dropdown className={'dropdown-right'}>
          <DropdownButton>
            <div className="sort-item">{sortMain.name} <img src={FilterArrow} alt="Сортировка" /></div>
          </DropdownButton>
          <DropdownContent>
            <DropdownList>
              { sort.map((sortItem, idx) => <DropdownItemSet
                key={idx}
                sortName={sortItem.name}
                sortProperty={sortItem.sortProperty}
                sortHandler={sortMainHandler}
              />) }
            </DropdownList>
          </DropdownContent>
        </Dropdown>
      </div>
    </div>
  )
}

export default FilterItems