import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2x; text-center pt-8 border-t">
        <Title text1={"VỀ"} text2={"CHÚNG TÔI"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            delectus! Tempore doloremque, quo tempora vitae omnis neque odio
            quia non id, molestiae sit. A minus ab temporibus tempora alias
            dolorum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            magni in praesentium dolores distinctio repudiandae illum debitis
            suscipit reprehenderit ullam minus iusto voluptatibus vel ab
            accusantium temporibus, soluta, porro incidunt!
          </p>
          <b className="text-gray-800">Nhiệm vụ của tụi tao</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            alias quam non ratione eaque. Aut, ipsa ipsam. Eligendi consequuntur
            quam quod accusamus! Incidunt at quae ipsum ut ipsa voluptatum
            inventore?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"TẠI SAO"} text2={"NÊN CHỌN TỤI TAO"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Siêu chất lượng</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            fugit quod. Totam, ea? Repellat corporis expedita nobis, cumque eius
            omnis ex consequuntur quia, commodi animi voluptas. Numquam corporis
            qui recusandae!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>100% cotton</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            fugit quod. Totam, ea? Repellat corporis expedita nobis, cumque eius
            omnis ex consequuntur quia, commodi animi voluptas. Numquam corporis
            qui recusandae!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Bo cổ dày dặn</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            fugit quod. Totam, ea? Repellat corporis expedita nobis, cumque eius
            omnis ex consequuntur quia, commodi animi voluptas. Numquam corporis
            qui recusandae!
          </p>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default About;
