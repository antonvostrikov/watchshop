import React from 'react'

import CloseSvg from '../ímg/close.svg'
import FilterSvg from '../ímg/filters.svg'
import FilterItemsPrice from './FilterItemsPrice'
import FilterArrowSvg from '../ímg/arrow-sort.svg'

import { IFilterSort } from '../interfaces/filter.interface'

import Dropdown from '../components/Dropdown/Dropdown'
import DropdownButton from '../components/Dropdown/DropdownButton'
import DropdownContent from '../components/Dropdown/DropdownContent'
import DropdownList from '../components/Dropdown/DropdownList'
import DropdownItemSet from '../components/Dropdown/DropdownItemSet'
import FilterItemMobile from './FilterItemMobile'

const FilterItemsMobile:React.FC<IFilterSort> = ({ 
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
  const [mobileFilter, setMobileFilter] = React.useState(false)
  
  const mobileFiltersOpen = () => {
    setMobileFilter(true)

    document.body.classList.add('modal-body')
  }

  const mobileFilterClose = () => {
    setMobileFilter(false)

    document.body.classList.remove('modal-body')
  }

  return (
    <div className="filter-items__mobile">
      <div className="filter-items__mobile-button">
        <span onClick={() => mobileFiltersOpen()}>Фильтры <img src={FilterSvg} alt="" /></span>
      </div>
      <div className={mobileFilter ? `filter-items__mobile-wrapper active` : `filter-items__mobile-wrapper`}>
        <div className="filter-items__inner">
          <div className="filter-wrapper__title">
            <h2>Фильтры</h2>
            <span onClick={() => mobileFilterClose()}><img src={CloseSvg} alt="" /></span>
          </div>
          <div className="filter-wrapper__sort">
          <Dropdown className={'dropdown-mobile'}>
            <DropdownButton>
              <div className="sort-item">{sortMain.name} <img src={FilterArrowSvg} alt="Сортировка" /></div>
            </DropdownButton>
            <DropdownContent>
              <DropdownList>
                { sort.map(sortItem => <DropdownItemSet
                  sortName={sortItem.name}
                  sortProperty={sortItem.sortProperty}
                  sortHandler={sortMainHandler}
                />) }
              </DropdownList>
            </DropdownContent>
          </Dropdown>
          </div>
          <FilterItemsPrice minHandler={minPriceHandler} maxHandler={maxPriceHandler} />
          <div className="filter-wrapper__inner">
            <h2>Пол</h2>
            <ul className="list-filter__items">
              { sex && sex.map(s => <FilterItemMobile 
                filterList={sexFilters}
                filterHandler={sexFiltersHandler}
                filter={s.filter}
                filterID={s.id}
              />) }
            </ul>  
          </div>
          { brands && (
            <div className="filter-wrapper__inner">
              <h2>Бренд</h2>
              <ul className="list-filter__items">
                { brands && brands.map(brand => <FilterItemMobile 
                  filterList={brandsFilters}
                  filterHandler={brandsFiltersHandler}
                  filter={brand.filter}
                  filterID={brand.id}
                />) }
              </ul> 
            </div>
          ) }
          { countries && (
            <div className="filter-wrapper__inner">
              <h2>Страна</h2>
              <ul className="list-filter__items">
                { countries && countries.map(country => <FilterItemMobile 
                  filterList={countriesFilters}
                  filterHandler={countriesFiltersHandler}
                  filter={country.filter}
                  filterID={country.id}
                />) }
              </ul> 
            </div>
          ) }
          { materials && (
            <div className="filter-wrapper__inner">
              <h2>Материал</h2>
              <ul className="list-filter__items">
                { materials && materials.map(material => <FilterItemMobile 
                  filterList={materialsFilter}
                  filterHandler={materialsFiltersHandler}
                  filter={material.filter}
                  filterID={material.id}
                />) }
              </ul> 
            </div>
          ) }
          { colors && (
            <div className="filter-wrapper__inner">
              <h2>Цвет</h2>
              <ul className="list-filter__items">
                { colors && colors.map(color => <FilterItemMobile 
                  filterList={colorsFilters}
                  filterHandler={colorsFiltersHandler}
                  filter={color.filter}
                  filterID={color.id}
                />) }
              </ul> 
            </div>
          ) }
        </div>
        <div className="filter-items__button">
          <button onClick={() => mobileFilterClose()}>Посмотреть</button>
        </div>
      </div>
    </div>
  )
}

export default FilterItemsMobile