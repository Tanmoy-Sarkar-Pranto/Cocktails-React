import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useNavigation } from "react-router-dom"

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === "loading"
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
      {/* <Link to="/about">About</Link> */}
    </div>
  )
}
export default HomeLayout
