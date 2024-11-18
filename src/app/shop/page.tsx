import Footer from "@/components/Footer";
import Navbar from "@/components/Navabar";

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-52">Shop</h1>
        <p className="text-2xl mt-4">Shop for all your car rental needs.</p>
      </div>
      <Footer />
    </div>
  );
}
