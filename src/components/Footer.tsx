import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <hr className="mt-10 border-t-2 border-black"></hr>
      <div className="flex flex-row justify-center my-4 space-x-20">
        <div>
          <FaFacebook size={30} />
        </div>
        <div>
          <AiFillTwitterCircle size={30} />
        </div>
        <div>
          <RiInstagramFill size={30} />
        </div>
        <div>
          <IoLogoWhatsapp size={30} />
        </div>
      </div>
      <div className="flex flex-row space-x-8 justify-center mb-4">
        <div>Home</div>
        <div>Shop</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="text-center mb-4">
        <p className="text-sm">
          1234 Main St
          <br />
          Springfield, IL 62701
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm">Car Rental © 2021 Car Rental</p>
      </div>
    </div>
  );
}
