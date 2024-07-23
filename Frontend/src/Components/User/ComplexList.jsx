// import React from "react";
import ComplexCard from "./ComplexCard";

const ComplexList = () => {
  const complexes = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/dakh0hqbsis1uz6q663z.jpg",
      type: "Indoor Sports Complex",
      title: "Elite Sports Center",
      description:
        "Elite Sports Center is a state-of-the-art facility offering a wide range of sports amenities including football fields, tennis courts, swimming pools, and a modern gym. It is designed to cater to both professional athletes and sports enthusiasts, providing top-notch training and recreational facilities.",
      rent: "₹500 - ₹1,500",
      location: "Nadiad, Gujarat",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/dakh0hqbsis1uz6q663z.jpg",
      type: "Indoor Sports Complex",
      title: "Elite Sports Center",
      description:
        "Elite Sports Center is a state-of-the-art facility offering a wide range of sports amenities including football fields, tennis courts, swimming pools, and a modern gym. It is designed to cater to both professional athletes and sports enthusiasts, providing top-notch training and recreational facilities.",
      rent: "₹500 - ₹1,500",
      location: "Nadiad, Gujarat",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/dakh0hqbsis1uz6q663z.jpg",
      type: "Indoor Sports Complex",
      title: "Elite Sports Center",
      description:
        "Elite Sports Center is a state-of-the-art facility offering a wide range of sports amenities including football fields, tennis courts, swimming pools, and a modern gym. It is designed to cater to both professional athletes and sports enthusiasts, providing top-notch training and recreational facilities.",
      rent: "₹500 - ₹1,500",
      location: "Nadiad, Gujarat",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/sample_image.jpg",
      type: "Outdoor Sports Complex",
      title: "Sunshine Sports Arena",
      description:
        "Sunshine Sports Arena offers outdoor sports facilities such as cricket pitches, football fields, and running tracks. Ideal for outdoor sports enthusiasts.",
      rent: "₹300 - ₹1,200",
      location: "Anand, Gujarat",
    },
    // Add more complex objects as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {complexes.map((complex) => (
        <ComplexCard key={complex.id} complex={complex} />
      ))}
    </div>
  );
};

export default ComplexList;
