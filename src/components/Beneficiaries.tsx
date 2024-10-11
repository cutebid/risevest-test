import React from "react";

const Beneficiaries = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lade",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s",
      info: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    },
    {
      id: 2,
      name: "Jesse",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KehqXBrMLd32HsfjDoaq098WeNA0b3g_2A&s",
      info: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    },
    {
      id: 3,
      title: "Raye",
      imgSrc:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      info: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
    },
    {
      id: 4,
      name: "Rayo",
      imgSrc:
        "https://www.shutterstock.com/image-photo/happy-mid-aged-business-man-600nw-2307212331.jpg",
      info: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns. ",
    },
  ];
  return (
    <div className="my-16 mx-8 lg:mx-0">
      <div className="text-center lg:w-3/5 mx-auto">
        <h1 className="font-semibold text-3xl lg:text-[40px]  text-teal hidden sm:block">
          From The People Who Use Rise
        </h1>
        <h1 className="font-semibold text-3xl lg:text-[40px]  text-teal block sm:hidden">
          What our customers are saying
        </h1>

        <p className="text-lg text-tint_black mt-2 lg:w-3/5 mx-auto hidden sm:block">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>

        <p className="text-lg text-tint_black mt-2 lg:w-3/5 mx-auto block sm:hidden">
          We serve over 80,000 amazing users.
        </p>
      </div>
      <div className="benefits">
        {testimonials.map(({ imgSrc, name, info, id }) => (
          <div key={id} className="benefits-card flex flex-col">
            <p className=" text-base text-tint_black">{info}</p>
            <div className="mt-auto">
              <div className="flex gap-x-2 flex-col items-center mt-6 sm:flex-row">
                <img
                  src={imgSrc}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h4 className="font-semibold text-base mt-2 sm:mt-0">{name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;
