import React, {useState} from 'react';
import { Button, Select, Input } from 'semantic-ui-react'
import { iSearchOptions } from '../types';
import fetchData from '../Utils/fetchData';


const SEARCH_ON_OPTIONS: iSearchOptions[] = [
  "artist",
  "title",
  "id",
].map(el => {
  return { key: el, text: el, value: el }
})

interface iProps {
  setSearchedTracks: Function
}

const Search = (props: iProps) => {
  const [searchOn, setSearchOn] = useState<string>('id')
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <div className="search">
      <Input type='text' placeholder='Search...' 
        onChange={(e) => setSearchValue(e.target.value)}>
        <input />
        <Select 
          className="search__select"
          compact 
          options={SEARCH_ON_OPTIONS} 
          defaultValue={searchOn}
          // @ts-ignore
          onChange={(e, {value}) => setSearchOn(value)}
        />
        <Button 
          disabled={!searchValue}
          className="search__button"
          type='submit'
          color="green"
          onClick={() => fetchData(
            `${process.env.REACT_APP_API_BASE_URL}/tracks?search=${searchOn}&value=${searchValue}`, 
            props.setSearchedTracks
          )}
        >
          Search
        </Button>
      </Input>
    </div>
  )
}

export default Search;