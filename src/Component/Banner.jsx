import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogSlide from "./BlogSlide";

function App() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <BlogSlide
          imageSrc="https://plus.unsplash.com/premium_photo-1677626249490-de48e5550947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Top 10 Destinations for Solo Travelers"
          description="Explore the best places around the world for solo travel. From peaceful beaches to thrilling city adventures, these destinations will make your journey unforgettable."
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogSlide
          imageSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Playing skateboard"
          description="Skateboarding is a fun and dynamic sport that offers endless freedom and creativity. Whether you're cruising the streets or mastering new tricks, it’s a great way to stay active and express yourself. Join the ride and experience the excitement of skateboarding!"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogSlide
          imageSrc="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Playing skateboard"
          description="Skateboarding is a fun and dynamic sport that offers endless freedom and creativity. Whether you're cruising the streets or mastering new tricks, it’s a great way to stay active and express yourself. Join the ride and experience the excitement of skateboarding!"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <BlogSlide
          imageSrc="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Exploring Hidden Gems"
          description="Skateboarding is a fun and dynamic sport that offers endless freedom and creativity. Whether you're cruising the streets or mastering new tricks, it’s a great way to stay active and express yourself. Join the ride and experience the excitement of skateboarding!"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;

