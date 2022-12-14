import React from "react";
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"



const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
        imgSrc={user1}
          name={"Abhishek"}
          feedback={"Your Teaching skills are so good."}
        />

        <TestimonialCard
        imgSrc={user2}
          name={"Ramzi"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
        imgSrc={user3}
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback,imgSrc }) => (
  <article>
    <img
      src={imgSrc}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
