import Blog  from "components/home/Blog"
import CTA from "components/home/CTA"
import Content from "components/home/Content"
import Featured from "components/home/Featured"
import Features from "components/home/FeaturesSection"
import Header from "components/home/Header"
import Statistic from "components/home/Statistic"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <Layout>
            <Navbar />
                <div className="pt-20">
                    <Header />
                    <Statistic />
                    <Featured />
                    <Features />
                    <Content />
                    <CTA />
                    <Blog />
                </div>
            <Footer />
        </Layout>
    )
}
export default Home