import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import ProductDetail from "components/pages/ProductDetail";

function ProductDetails(){
    return(
        <Layout>
            <Navbar />
            <div className="pt-20">
            <ProductDetail />
            </div>
            <Footer />
        </Layout>
    )
}

export default ProductDetails