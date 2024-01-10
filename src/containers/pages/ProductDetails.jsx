import {
    get_product,
    get_related_products,
  } from "../../redux/actions/products";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import ProductDetail from "components/pages/ProductDetail";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";


function ProductDetails({product,related_products,get_product,get_related_products}){

    const params = useParams();

    const productId = params.productId

    useEffect(() => {
        get_product(productId)
        get_related_products(productId)
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar />
            <div className="pt-20">
            <ProductDetail data={product} dataR={related_products}/>
            </div>
            <Footer />
        </Layout>
    )
}

const mapStateToProps = state => ({
    product:state.Products.product,
    related_products:state.Products.related_products,
 
 });
 export default connect(mapStateToProps, {
   get_product,
   get_related_products
 })(ProductDetails);