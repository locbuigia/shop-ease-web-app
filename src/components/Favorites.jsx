import React, { useState } from "react";

const Favorites = () => {
  const items = [
    {
      id: 1,
      name: "Blue Backpack",
      image:
        "https://i5.walmartimages.com/seo/Ozark-Trail-Dual-Carry-Backpack-Blue-Indigo-Adult-Teen-Everyday-Polyester_d29e7268-ab22-4001-af67-d9259ed8b473.885f092743b6f5d093a581c0cacbfbc3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      price: "$24.99",
    },
    {
      id: 2,
      name: "Black Backpack",
      image:
        "https://i5.walmartimages.com/seo/Ozark-Trail-Hiker-Backpack-25-Liter-Black_4dc82491-e6a1-41b7-91db-84485d7231e1.db56d94109d8e1633ad3b47163a0d01d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      price: "$18.99",
    },
    {
      id: 3,
      name: "Gray Backpack",
      image:
        "https://i5.walmartimages.com/seo/Women-Backpack-Purse-PU-Leather-Designer-Anti-theft-Travel-Backpack-Fashion-Shoulder-Handbag_95fbcf1a-cd8e-42da-879b-aba584329195.17e0d47e9fb42c24e85c96d997e31f42.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      price: "$32.99",
    },
    {
      id: 4,
      name: "Red Backpack",
      image:
        "https://i5.walmartimages.com/seo/Eastsport-Surge-Sport-Backpack-Red-Ombre_2e8c46b2-9d22-4611-9d49-83e531d70290.3ee5007cc4e40388748eaddf4b1b6a46.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      price: "$49.99",
    },
  ];

  return (
    <div className="w-full text-center py-12 mb-20 justify-items-center">
      <h1 className="text-4xl font-serif">Our Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-11/12 justify-items-center font-serif">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-72 h-72 hover:scale-110 transition-transform duration-300 my-6"
          >
            <img className="p-12" src={item.image} />
            <h1 className="text-sm md:text-2xl font-thin">
              {item.name.toUpperCase()}
            </h1>
            <p className="text-sm md:text-lg mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
