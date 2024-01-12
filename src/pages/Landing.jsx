import { useLoaderData } from "react-router-dom"
import axios from "axios"
import SearchForm from "../components/SearchForm"
import CocktailList from "../components/CocktailList"
import { useQuery } from "@tanstack/react-query"

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get("search") || ""
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
    // console.log(response)
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))
  // console.log(data)
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  )
}
export default Landing
