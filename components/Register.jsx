import Link from "next/link";

const Register = () => {
  return (
    <div className="py-10 flex justify-center">
      <div className="max-w-[700px] lg:max-w-[1600px] flex rounded-[50px] min-h-[310px]  md:h-[500px] lg:h-full w-full bg-[#37445a] px-10 pt-10 relative overflow-hidden  mx-5 md:mx-10">
        <div className="w-full text-center lg:text-start">
          <div className="text-white text-[24px] md:text-[30px]">
            Contact us to become a Trisaran Partner
          </div>
          <div className="mt-1 text-white text-[18px] md:text-[22px]">
            Fulfill your needs. Secure your future
          </div>
          <div className="mx-auto  lg:mx-0 mt-10 py-1 md:py-2  w-fit text-white bg-green-600 rounded-full text-base hover:scale-110 shadow-2xl transform duration-150">
            <Link
              href={"/partner"}
              className=" w-full h-full px-6 py-1 md:py-2 rounded-full "
            >
              Register Now
            </Link>
          </div>
        </div>
        <div className="h-[450px] md:hidden"></div>

        <img
          src="/shake.png"
          className="h-[300px]  absolute bottom-0  left-1/2  lg:left-auto  -translate-x-1/2 lg:translate-x-0 lg:right-10 object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
