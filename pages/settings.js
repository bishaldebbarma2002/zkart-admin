import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { withSwal } from "react-sweetalert2";

function SettingsPage({ swal }) {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shippingFee, setShippingFee] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchAll().then(() => {
      setIsLoading(false);
    });
  }, []);

  async function fetchAll() {
    try {
      const productsResponse = await axios.get("/api/products");
      setProducts(productsResponse.data);

      const featuredProductResponse = await axios.get(
        "/api/settings?name=featuredProductId"
      );
      setFeaturedProductId(featuredProductResponse.data.value);

      const shippingFeeResponse = await axios.get(
        "/api/settings?name=shippingFee"
      );
      setShippingFee(shippingFeeResponse.data.value);
    } catch (error) {
      console.error("Error fetching settings:", error);
      // Handle the error (e.g., display an error message)
    }
  }

  async function saveSettings() {
    setIsLoading(true);

    try {
      await axios.put("/api/settings", {
        name: "featuredProductId",
        value: featuredProductId,
      });

      await axios.put("/api/settings", {
        name: "shippingFee",
        value: shippingFee,
      });

      await swal.fire({
        title: "Settings saved!",
        icon: "success",
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      // Handle the error (e.g., display an error message)
    }

    setIsLoading(false);
  }

  return (
    <Layout>
      <h1>Settings</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <label>Featured product</label>
          <select
            value={featuredProductId}
            onChange={(ev) => setFeaturedProductId(ev.target.value)}
          >
            {products.length > 0 &&
              products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.title}
                </option>
              ))}
          </select>
          <label>Shipping price (in usd)</label>
          <input
            type="number"
            value={shippingFee}
            onChange={(ev) => setShippingFee(ev.target.value)}
          />
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Save settings
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
