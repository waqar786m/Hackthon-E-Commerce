import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LatestBlog = () => {
  const blogs = [
    {
      id: 1,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/latestblog/image1.png",
    },
    {
      id: 2,
      author: "Surfauxion",
      date: "21 August, 2020",
      title: "Top essential trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/latestblog/image2.png",
    },
    {
      id: 3,
      author: "SaberAli",
      date: "21 August, 2020",
      title: "Top essential Trends in 2021",
      description:
        "More off this less hello samlande lied much over tightly circa horse taped mighty.",
      image: "/latestblog/image3.png",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-center text-[#151875] mb-8 animate__animated animate__fadeIn">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-3 px-4">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`w-full xs:w-[300px] sm:w-[350px] h-auto bg-white shadow-md rounded-lg overflow-hidden mx-auto transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-${index * 200}ms`}
            >
              <div className="relative w-full h-[200px] sm:h-[255px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 sm:p-6 space-y-6">
                <div className="flex items-center text-[#151875] text-xs sm:text-sm">
                  <span className="mr-2 text-[#FB2E86]">
                    <FaPenNib />
                  </span>
                  <span className="mr-3">{blog.author}</span>
                  <span className="text-[#FFA454]">
                    <SlCalender />
                  </span>
                  <span className="ml-2">{blog.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#151875] mb-2">
                  {blog.title}
                </h3>
                <p className="text-[#72718F] text-xs sm:text-sm mb-4">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="text-pink-500 font-bold hover:underline text-xs sm:text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
