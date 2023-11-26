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
  maxPriceHandler
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
                  { sex.map(s => <DropdownItem
                    filterList={sexFilters}
                    filterHandler={sexFiltersHandler}
                    filter={s.filter}
                    filterID={s.id}
                  ></DropdownItem>) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item category-brand">
            <Dropdown className={'dropdown-brand'}>
              <DropdownButton>Бренд</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { brands.map(brand => <DropdownItem 
                    filterList={brandsFilters} 
                    filterHandler={brandsFiltersHandler} 
                    filter={brand.filter} 
                    filterID={brand.id}></DropdownItem>
                  ) }
                </DropdownList>
              </DropdownContent>
            </Dropdown>
          </div>
          <div className="category-item">
            <Dropdown className={'dropdown-country'}>
              <DropdownButton>Страна</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  { countries.map(country => <DropdownItem 
                    filterList={countriesFilters} 
                    filterHandler={countriesFiltersHandler}
                    filter={country.filter}
                    filterID={country.id}></DropdownItem>
                  ) }
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
                { sort.map(sortItem => <DropdownItemSet
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

export default FilterItems