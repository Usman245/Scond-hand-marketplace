import { useState } from "react";
import { useMyContext } from "../ContexProvider/SearchContext";
import { Navigate } from "react-router-dom";

function SellItems() {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [navigate, setnavigate] = useState(false);
  const { setCategor, setSelectedType, setSubcategor, userId } = useMyContext();
  console.log(userId);

  // Define your categories, subcategories, and types here
  const categories = [
    "Mobiles",
    "Vehicles",
    "Property for Sale",
    "Property for Rent",
    " Electronics & Home Appliances",
    "Bikes",
    "Business, Industrial & Agriculture",
    "Services",
    "Jobs",
    "Animals",
    "Furniture & Home Decor",
    "Fashion & Beauty",
    "Books, Sports & Hobbies",
    "Kids",
  ];
  const subcategories = {
    Mobiles: ["Tablets", "Accessories", "Mobiles Phones", "Samart Devices"],
    Vehicles: [
      "Cars",
      "Cars on Installments",
      " Cars Accessories",
      " Spare Parts",
      "Buses, Vans & Trucks",
      "Rickshaw & Chingchi",
      "Other Vehicles",
      "Boats",
      "Tractors & Trailers",
    ],
    "Property for Sale": [
      "Land & Plots",
      "Houses",
      "Apartments & Flats",
      "Shops - Offices - Commercial Space",
      "Portions & Floors",
    ],
    "Property for Rent": [
      "Houses",
      "Apartments & Flats",
      "Portions & Floors",
      "Shops - Offices - Commercial Space",
      "Roommates & Paying Guests",
      "Rooms",
      "Vacation Rentals - Guest Houses",
      "Land & Plots",
    ],
    " Electronics & Home Appliances": [
      "Computers & Accessories",
      "TV - Video - Audio",
      "Cameras & Accessories",
      "Games & Entertainment",
      "Other Home Appliances",
      "Generators, UPS & Power Solutions",
      "Kitchen Appliances",
      "AC & Coolers",
      "Fridges & Freezers",
      "Washing Machines & Dryers",
    ],
    Bikes: [
      "Motorcycles",
      "Spare Parts",
      "Bikes Accessories",
      "Bicycles",
      "ATV & Quads",
      "Scooters",
    ],
    Services: [
      "Architecture & Interior Design",
      "Camera Installation",
      "Car Rental",
      "Car Services",
      "Catering & Restaurant",
      "Construction Services",
      "Consultancy Services",
      "Domestic Help",
      "Drivers & Taxi",
      "Tuitions & Academies",
      "Electronics & Computer Repair",
      "Event Services",
      "Farm & Fresh Food",
      "Health & Beauty",
      "Home & Office Repair",
      "Insurance Services",
      "Movers & Packers",
      "Renting Services",
      "Tailor Services",
      "Travel & Visa",
      "Video & Photography",
      "Web Development",
      "Other Services",
    ],
    Jobs: [
      "Accounting & Finance",
      "Advertising & PR",
      "Architecture & Interior Design",
      "Clerical & Administration",
      "Content Writing",
      "Customer Service",
      "Delivery Riders",
      "Domestic Staff",
      "Education",
      "Engineering",
      "Graphic Design",
      "Hotels & Tourism",
      "Human Resources",
      "Internships",
      "IT & Networking",
      "Manufacturing",
      "Marketing",
      "Medical",
      "Online",
      "Other Jobs",
      "Part Time",
      "Real Estate",
      "Restaurants & Hospitality",
      "Sales",
      "Security",
    ],
    "Furniture & Home Decor": [
      "Sofa & Chairs",
      "Beds & Wardrobes",
      "Tables & Dining",
      "Bathroom Accessories",
      "Garden & Outdoor",
      "Painting & Mirrors",
      "Rugs & Carpets",
      "Curtains & Blinds",
      "Office Furniture",
      "Home Decoration",
      "Other Household Items",
    ],
    Animals: [
      "Cats",
      "Dogs",
      "Horses",
      "Rabbits",
      "Other Animals",
      "Hens",
      "Parrots",
      "Pigeons",
      "Finches",
      "Doves",
      "Peacocks",
      "Ducks",
      "Other Birds",
      "Fertile Eggs",
      "Fish",
      "Livestock",
      "Pet Food & Accessories",
    ],
    "Fashion & Beauty": [
      "Fashion Accessories",
      "Clothes",
      "Footwear",
      "Bags",
      "Jewellery",
      "Makeup",
      "Skin & Hair",
      "Watches",
      "Fragrance",
      "Wedding",
      "Other Fashion",
    ],
    "Books, Sports & Hobbies": [
      "Books & Magazines",
      "Musical Instruments",
      "Sports Equipment",
      "Gym & Fitness",
      "Other Hobbies",
    ],
    Kids: [
      "Kids Furniture",
      "Kids Vehicles",
      "Toys",
      "Baby Gear",
      "Bath & Diapers",
      "Swings & Slides",
      "Kids Clothing",
      "Kids Accessories",
    ],
    "Business, Industrial & Agriculture": [
      "Business for Sale",
      "Food & Restaurants",
      "Construction & Heavy Machinery",
      "Agriculture",
      "Medical & Pharma",
      "Trade & Industrial Machinery",
      "Other Business & Industry",
    ],
  };
  const types = {
    "Trade & Industrial Machinery": [
      "Woodworking Machines",
      "Currency Counting Machines",
      "Plastic & Rubber Processing Machines",
      "Industry Laser Machines",
      "Molding Machines",
      "Packaging Machines",
      "Welding Equipments",
      "Paper Machines",
      "Air Compressors",
      "Sealing Machines",
      "Lathe Machines",
      "Liquid Filling Machines",
      "Marking Machines",
      "Textile Machinery",
      "Sewing Machines",
      "Knitting Machines",
      "Embroidery Machines",
      "Printing Machines",
      "Other Business & Industrial Machines",
    ],
    Tablets: ["Type A1", "Type A2"],
    Accessories: ["Type B1", "Type B2"],
    "Mobiles Phones": ["Brand New", "Second Hand"],
    "Samart Devices": [""],
    Cars: "",
    "Cars on Installments": [],
    "Spare Parts": [],
    "Buses, Vans & Trucks": [],
    Motorcycles: [],
    "ATV & Quads": [],
    Scooters: [],
    "Bikes Accessories": [],
    "Architecture & Interior Design": [],
    "Camera Installation": [],
    "Car Rental": [],
    "Car Services": [],
    "Catering & Restaurant": [],
    "Construction Services": [],
    "Consultancy Services": [],
    "Domestic Help": [],
    "Drivers & Taxi": [],
    "Tuitions & Academies": [],
    "Electronics & Computer Repair": [],
    "Event Services": [],
    "Farm & Fresh Food": [],
    "Health & Beauty": [],
    "Home & Office Repair": [
      "Painters",
      "Electricians",
      "Plumbers",
      "Carpenters",
      "Pest Control",
      "Water Tank Cleaning",
      "Deep Cleaning",
      "Geyser Services",
      "AC Services",
      "Other Repair Services",
    ],
    "Insurance Services": [],
    "Movers & Packers": [],
    "Renting Services": [],
    "Tailor Services": [],
    "Travel & Visa": [],
    "Video & Photography": [],
    "Web Development": [],
    "Other Services": [],
    " Cars Accessories": [],
    " Spare Parts": [],
    "Rickshaw & Chingchi": [],
    "Other Vehicles": [],
    "Tractors & Trailers": [],
    "Land & Plots": [],
    Houses: [],
    "Apartments & Flats": [],
    "Shops - Offices - Commercial Space": [],
    "Portions & Floors": [],
    "Roommates & Paying Guests": [],
    Rooms: [],
    "Vacation Rentals - Guest Houses": [],
    Cats: [],
    Dogs: [],
    Horses: [],
    Rabbits: [],
    "Other Animals": [],
    Hens: [],
    Parrots: [],
    Pigeons: [],
    Finches: [],
    Doves: [],
    Peacocks: [],
    Ducks: [],
    "Other Birds": [],
    "Fertile Eggs": [],
    Fish: [],
    Livestock: [],
    "Pet Food & Accessories": [
      "Cat Food",
      "Cat Accessories",
      "Dog Food",
      "Dog Accessories",
      "Fish Food",
      "Aquariums",
      "Incubators",
      "Brooders",
      "Hen Cages",
      "Birds Food",
      "Birds Accessories",
      "Other Animal Food & Accessories",
      "Medicines",
    ],
    Bicycles: [],
    "Accounting & Finance": [],
    "Advertising & PR": [],
    "Clerical & Administration": [],
    "Content Writing": [],
    "Customer Service": [],
    "Delivery Riders": [],
    "Domestic Staff": [],
    Education: [],
    Engineering: [],
    "Graphic Design": [],
    "Hotels & Tourism": [],
    "Human Resources": [],
    Internships: [],
    "IT & Networking": [],
    Manufacturing: [],
    Marketing: [],
    Medical: [],
    Online: [],
    "Other Jobs": [],
    "Part Time": [],
    "Real Estate": [],
    "Restaurants & Hospitality": [],
    Sales: [],
    Security: [],
    "Sofa & Chairs": [
      "Sofas",
      "Sofa Beds",
      "Sofa Covers",
      "Cushions",
      "Chairs",
      "Recliners",
      "Bean Bags",
    ],

    "Beds & Wardrobes": [],
    "Tables & Dining": [],
    "Bathroom Accessories": [],
    "Garden & Outdoor": [],
    "Painting & Mirrors": [],
    "Rugs & Carpets": [],
    "Curtains & Blinds": [],
    "Office Furniture": [],
    "Home Decoration": [
      "Artificial Flowers & Plants",
      "Candles",
      "Chandeliers",
      "Decorative Trays",
      "Handicrafts",
      "Indoor Fountains",
      "Lamps",
      "Tissue Boxes",
      "Sculptures",
      "Showpieces",
      "Vases",
      "Flooring",
      "Wall Clocks",
      "Wall Hangings",
      "Wall Lights",
      "Other Decor Items",
    ],
    "Other Household Items": [],
    "Fashion Accessories": [],
    Clothes: [],
    Footwear: [],
    Bags: [],
    Jewellery: [],
    Makeup: [],
    "Skin & Hair": [],
    Watches: [],
    Fragrance: [],
    Wedding: [],
    "Other Fashion": [],
    "Books & Magazines": [
      "Books",
      "Magazines",
      "Dictionaries",
      "Stationery Items",
      "Calculators",
    ],
    "Musical Instruments": [],
    "Sports Equipment": [],
    "Gym & Fitness": [],
    "Other Hobbies": [],
    "Kids Furniture": [],
    "Kids Vehicles": [],
    Toys: [],
    "Baby Gear": [
      "Prams & Walkers",
      "Baby Bouncers",
      "Baby Carriers",
      "Baby Cots",
      "Baby Swings",
      "Car Seats",
      "High Chairs",
      "Other Baby Gear",
    ],
    "Bath & Diapers": [],
    "Swings & Slides": [],
    "Kids Clothing": [
      "Kids Costumes",
      "Kids Clothes",
      "Kids Shoes",
      "Kids Uniforms",
      "Others",
    ],
    "Kids Accessories": [],
    "Business for Sale": [],
    "Food & Restaurants": [],
    "Construction & Heavy Machinery": [],
    Agriculture: [],
    "Medical & Pharma": [],
    "Other Business & Industry": [],
    "Computers & Accessories": [],
    "TV - Video - Audio": [],
    "Cameras & Accessories": [],
    "Games & Entertainment": [],
    "Other Home Appliances": [],
    "Generators, UPS & Power Solutions": [],
    "Kitchen Appliances": [],
    "AC & Coolers": [],
    "Fridges & Freezers": [],
    "Washing Machines & Dryers": [],
    Boats: [],
  };

  // Other component logic here

  return (
    <div>
      {navigate ? (
        <Navigate to="/sell-item/attributes" />
      ) : (
        <div>
          <div className="border border-gray-400 mx-10 my-6 flex flex-col items-center">
            <h3 className="py-4 pl-2 border-b border-b-gray-500 w-full text-3xl">
              Choose a category
            </h3>
            <div className="flex w-full">
              <div className="border-r border-r-gray-400 w-1/3">
                <div className="">
                  {categories.map((category) => (
                    <div
                      className="py-2 pl-2 text-xl border-b border-b-gray-500 focus:bg-slate-300 hover:bg-slate-200 cursor-pointer"
                      key={category}
                      value={category}
                      onClick={() => {
                        setSelectedMainCategory(category);
                        setCategor(category);
                      }}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-r border-r-gray-400 w-1/3">
                {selectedMainCategory && (
                  <div className="">
                    {subcategories[selectedMainCategory].map((subcategory) => (
                      <div
                        className="py-2 pl-2 text-xl border-b border-b-gray-500
                        focus:bg-slate-300 hover:bg-slate-200 cursor-pointer"
                        key={subcategory}
                        value={subcategory}
                        onClick={() => {
                          setSelectedSubCategory(subcategory);
                          setSubcategor(subcategory);
                          console.log(selectedSubCategory);

                          if (types[selectedSubCategory].length > 0) {
                            setnavigate(false);
                          } else {
                            setnavigate(true);
                          }
                        }}
                      >
                        {subcategory}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-1/3">
                {selectedSubCategory && (
                  <div className="">
                    {types[selectedSubCategory].map((type) => (
                      <div
                        className="py-2 pl-2 text-xl border-b border-b-gray-500 focus:bg-slate-300 hover:bg-slate-200 cursor-pointer"
                        key={type}
                        value={type}
                        onClick={() => {
                          setSelectedType(type);
                          setnavigate(true);
                        }}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellItems;
