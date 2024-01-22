import {
  get_items,
  add_item,
  get_total,
  get_item_total,
} from "../../redux/actions/cart";
import {
  get_product,
  get_related_products,
} from "../../redux/actions/products";

import Layout from "hocs/layouts/Layout";
import ProductDetail from "components/pages/ProductDetail";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function ProductDetails({
  product,
  related_products,
  get_product,
  get_related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
}) {

  const [loading, setLoading] = useState(false)
  const addToCart = async () => {
    if (
      product &&
      product !== null &&
      product !== undefined &&
      product.quantity > 0
    ) {
      setLoading(true)
      await add_item(product);
      await get_items();
      await get_total();
      await get_item_total();
      setLoading(false)
    }
  };
  const params = useParams();

  const productId = params.productId;

  useEffect(() => {
    get_product(productId);
    get_related_products(productId);
  }, []);

  return (
    <Layout>
      <ProductDetail product={product} addToCart={addToCart} loading={loading}/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  product: state.Products.product,
  related_products: state.Products.related_products,
});
export default connect(mapStateToProps, {
  get_product,
  get_related_products,
  get_items,
  add_item,
  get_total,
  get_item_total,
})(ProductDetails);
