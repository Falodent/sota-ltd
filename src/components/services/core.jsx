import React from "react";
import Img1 from "../../assets/core1.png";
import Img2 from "../../assets/core2.png";
import Img3 from "../../assets/core3.png";
import Img4 from "../../assets/core4.png";
import Img5 from "../../assets/core5.png";
import Img6 from "../../assets/core6.png";
import Img7 from "../../assets/core7.png";
import Img8 from "../../assets/core8.png";
import Img9 from "../../assets/core9.png";

const Core = () => {
  const services = [
    {
      title:
        "Pipeline, Flowline, Structural Fabrication and Installation, as well as Maintenance of Oil and Gas Facilities",
      sub: "Sota is a leading company that specializes in offering exceptional services in the field of Pipeline, flow-line, Structural Fabrication and Installation, as well as the Maintenance of Oil and Gas Facilities. With our extensive expertise and cutting-edge technologies, we cater for the dynamic need of the oil and gas industry. We have a highly skilled professional team that make our shared vision a reality.",
      order: "0",
      img: Img1,
    },
    {
      title: "Heavy & Light Duty Equipment Hire, Lease & Sales",
      sub: "Through our social media subsidiary brand 'heavy__machine', we offer a comprehensive  range of services in the field of Heavy and Light duty equipment hire, lease, and sales. With our vast network of high-quality machinery, we cater to the diverse needs of various industries, including construction, mining, infrastructure, and logistics. Whether you require heavy-duty equipment for large-scale projects or lighter machinery for smaller tasks, we have the perfect solution to meet your specific requirements.",
      order: "1",
      img: Img2,
    },
    {
      title: "Gas proliferation",
      sub: "We have joined forces with reputable individuals and organizations to proliferate gas usage  and thereby build a bridge to achieving Net Zero. We are investing in conversion technology to move vehicles as well as equipments away from predominant fossil fuel to CNG, LNG, Biogas, etc. This way, we hope to contribute our quota in reducing our carbon footprints.",
      order: "0",
      img: Img9,
    },
    {
      title: "Civil Construction Works",
      sub: "Leveraging on the experience of our highly skilled team, we have delivered exceptional services in the civil construction industry. We also adhere strictly to industry best practice in order to deliver projects on schedule, and in-budget whilst upholding the HEALTH, SAFETY, SECURITY & ENVIRONMENT standards.",
      order: "1",
      img: Img3,
    },
    {
      title: "Procurement & Logistics",
      sub: "Sota excels in providing top-notch services in Procurement and Logistics as well as offering solutions to meeting the diverse needs of businesses across various industries. With our diverse network, we are able to streamline the procurement process and ensure timely sourcing and delivery of materials and equipment. Our strong network of trusted suppliers and partners enable us to obtain high-quality products & services at competitive prices thereby optimizing cost-efficiency for our clients.",
      order: "0",
      img: Img4,
    },
    {
      title:
        "Corrosion Control, Onshore and Offshore Blast Cleaning & Painting.",
      sub: "Sota is a reputable provider of Corrosion Control, Onshore, and Offshore Blast Cleaning & Painting services. We understand the detrimental effects of corrosion on structures and equipment in various industries, especially offshore oil and gas infrastructures. Our expert team utilizes advanced techniques and high-quality materials to combat corrosion and protect assets from environmental factors.",
      order: "1",
      img: Img5,
    },
    {
      title: "Engineering Designs",
      sub: "We ensure we understand our client need and therefore partner with them to provide workable design solutions. We also leverage on the expertise of our team in order to creatively collaborate with our clients and solve most challenging projects.",
      order: "0",
      img: Img6,
    },
    {
      title: "Instrumentation and Electrical Maintenance",
      sub: "Sota also specializes in Instrumentation and Electrical Maintenance services, providing comprehensive solutions to ensure the reliable and efficient operation of industrial systems and equipment. We understand the criticality of instrumentation and electrical systems in various industries, including manufacturing, oil and gas, power generation, and more.",
      order: "1",
      img: Img7,
    },
    {
      title: "Skilled and Unskilled Manpower Supply",
      sub: "Sota is a reliable provider of Skilled and Unskilled Manpower Supply services. We cater for the diverse needs of industries across various sectors. Our skilled manpower supply ensures that clients have access to highly qualified professionals with specialized expertise in their respective fields. Our unskilled manpower supply offers reliable and motivated individuals proficient in general labor tasks.",
      order: "0",
      img: Img8,
    },
  ];

  return (
    <div className="core">
      {services.map((item, index) => (
        <div className="core-body" key={index}>
          <div className={`core-content order-${item.order}`}>
            <p className="prof-title headFont">{item.title}</p>
            <p className="core-sub">{item.sub}</p>
          </div>
          <img src={item.img} alt="" className={`core-img-${item.order}`} />
        </div>
      ))}
    </div>
  );
};

export default Core;
