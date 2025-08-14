import ProductList from "@/components/ProductList";
import sampleData from "@/db/sample-data";

export default function HomePage() {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
}
