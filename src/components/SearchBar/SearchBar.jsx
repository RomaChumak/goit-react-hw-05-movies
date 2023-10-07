import { SearchForm, SearchInput, SearchBtn } from "./SearchBar.styled"
export const SearchBar = () => {
    return <SearchForm>
        <SearchInput type="text"
        name="query"
        autoFocus="on"
        autoComplete="on"/>
        <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
}