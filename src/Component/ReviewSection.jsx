import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewSection = () => {
  return (
    <div className="w-10/12 mx-auto pb-16">
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-6">
        Popular Celebrity Reviews
      </h2>
      <p className="md:text-lg text-sm text-center text-gray-600 italic mb-12">
        Hear what your favorite celebrities have to say about our website!
        Trusted by the stars, loved by everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Emma Watson */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:translate-y-2 transform transition duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXUNIigDZ_RXzKwSUrElmyDnqGBHyC3J-lQ&s"
            alt="Emma Watson"
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Emma Watson</h3>
          <p className="text-gray-700 text-center mt-2 italic">
            "An exceptional platform with a design that blends innovation and
            simplicity. Navigating through the site feels effortless, and its
            content is incredibly well-curated. Truly a delight!"
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStarHalfAlt className="text-yellow-400 text-xl" />
          </div>
        </div>
        {/* Leonardo DiCaprio */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:translate-y-2 transform transition duration-300">
          <img
            src="https://i.pinimg.com/236x/29/b2/fc/29b2fc5241f3f46190334f483b39d38d.jpg"
            alt="Leonardo DiCaprio"
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center">
            Leonardo DiCaprio
          </h3>
          <p className="text-gray-700 text-center mt-2 italic">
            "This website not only impressed me with its stunning visuals but
            also its commitment to sustainability and eco-friendly practices. A
            true pioneer in the digital space!"
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
          </div>
        </div>
        {/* Taylor Swift */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:translate-y-2 transform transition duration-300">
          <img
            src="https://i.pinimg.com/236x/b3/70/9b/b3709b287ce2d9619e20305ee6d06fd4.jpg"
            alt="Taylor Swift"
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Lewis Hamilton</h3>
          <p className="text-gray-700 text-center mt-2 italic">
            "This platform is a game-changer! It’s not only visually
            breathtaking but also incredibly intuitive. Everything I needed was
            just a click away. Highly recommended for anyone looking for
            seamless experiences."
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStarHalfAlt className="text-yellow-400 text-xl" />
          </div>
        </div>
        {/* Christian Bale */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg hover:translate-y-2 transform transition duration-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTxmCA9jJ2MrULWgxOwNuZ9Bki9s0G1wKMoVZRquX1t2K6cZfcH7Bm_ueGnkj1GndH_RfDQGlcQrpn4ZYI"
            alt="Christian Bale"
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Christian Bale</h3>
          <p className="text-gray-700 text-center mt-2 italic">
            "A flawless masterpiece in web design and functionality. This site
            feels like it’s tailored for every individual, making the entire
            browsing experience enjoyable and memorable."
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
