import React from "react";
import { Link, useLocation } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={"/write?edit=2"}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
				<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, maxime.</h1>
				<p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem exercitationem possimus nostrum error tenetur saepe recusandae eos sapiente, officiis distinctio voluptatibus cupiditate voluptatum sed architecto culpa? Officiis delectus doloribus asperiores deserunt sunt voluptatum at veritatis aliquam molestiae. Mollitia doloribus velit veritatis excepturi unde, dolorem optio dolor dicta? Minima, iusto dolor magnam veritatis laudantium sint magni facilis saepe est voluptas dignissimos molestias eum hic doloremque ea aliquid reiciendis illum exercitationem dolorem eveniet doloribus provident eos? In deserunt harum, animi tempore illo aperiam voluptate repellat odit! Blanditiis tempore incidunt illo ea aspernatur dolore! Qui facere aliquid eius temporibus unde maiores reiciendis!</p>
					<br />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magni! Doloremque consequatur eligendi fuga itaque, fugiat consequuntur assumenda praesentium, quos, repellendus harum unde saepe autem perferendis quae doloribus sapiente sint incidunt sit laboriosam ad iste obcaecati nesciunt. Ad fuga nemo cum, eaque aliquam, dicta mollitia quae quaerat, aperiam quisquam voluptates.</p>
					<br />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum veniam consectetur blanditiis, voluptatem modi excepturi quaerat quo deserunt repellat harum quod, laudantium error necessitatibus labore.</p>
				</p>
      </div>
			<Menu />
    </div>
  );
};

export default Single;
