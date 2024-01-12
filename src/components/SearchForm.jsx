import Wrapper from "../assets/wrappers/SearchForm"
import { Form, useNavigation } from "react-router-dom"

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSearching = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          placeholder="margarita"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSearching}>
          {isSearching ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  )
}
export default SearchForm
