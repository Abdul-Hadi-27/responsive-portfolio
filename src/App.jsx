import React from "react";
import aaron from "./assets/aaron.png";
import mbappe from "./assets/mbappe.png";
import ball from "./assets/ball.png";
import ig from "./assets/instagram.png";
import fb from "./assets/fb.png";
import thread from "./assets/thread.png";

const App = () => {
  const data = [
    {
      id: "01",
      heading: "LOREM EPSUM",
      text: "Lorem ipsum dolor sit  amet  consectur   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis.",
    },
    {
      id: "02",
      heading: "LOREM EPSUM",
      text: "Lorem ipsum dolor sit  amet  consectur   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis.",
    },
    {
      id: "03",
      heading: null,
      text: "Lorem ipsum dolor sit  amet  consectur   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis.",
    },
    {
      id: "04",
      heading: null,
      text: "Lorem ipsum dolor sit  amet  consectur   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, reiciendis.",
    },
  ];
  return (
    <>
      <div className="container">
        <h1>AARON</h1>
        <div className="head">
          <p>STRICKER</p>
        </div>
        <div className="image">
          <img src={aaron} alt="" className="img" />
        </div>
        <div className="stricker">
          <div className="text">
            {" "}
            <i className="ri-arrow-right-long-line arrow"></i>{" "}
            <span>STRICKER</span>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur ipsum dolor <br /> sit amet
            consectetur.!
          </p>
          <p className="ipsum">
            Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Pariatur quasi fugit tempore temporibus. Dolorum quour !
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="section1">
          <h1>ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Sunt.
          </p>
        </div>
        <div className="divider">
          <div className="left">
            <p className="p1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              officia sunt error quae unde repudiandae impedit illum distinctio
              facere esse repellat earum cupiditate iste enim vel, eum ut nemo
              eaque laboriosam hic id, adipisci vero recusandae. Iusto
              consectetur iste quae magni voluptate quos fuga sit! Unde aliquam
              quia commodi? Aliquam fuga quo tempora ut deleniti, quod eveniet
              similique dignissimos. Corporis. <br /> <br /> <br /> <br />
            </p>
            <p className="p2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              officia sunt error quae unde repudiandae impedit illum distinctio
              facere esse repellat earum cupiditate iste enim vel, eum ut nemo
              eaque laboriosam hic id, adipisci vero recusandae. Iusto
              consectetur iste quae magni voluptate quos fuga sit! Unde aliquam
              quia commodi? Aliquam fuga quo tempora ut deleniti, quod eveniet
              similique dignissimos. Corporis.
            </p>
          </div>
          <div className="right">
            <p className="p1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              officia sunt error quae unde repudiandae impedit illum distinctio
              facere esse repellat earum cupiditate iste enim vel, eum ut nemo
              eaque laboriosam hic id, adipisci vero recusandae. Iusto
              consectetur iste quae magni voluptate quos fuga sit! Unde aliquam
              quia commodi? Aliquam fuga quo tempora ut deleniti, quod eveniet
              similique dignissimos. Corporis. <br /> <br /> <br /> <br />
            </p>
            <p className="p2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              officia sunt error quae unde repudiandae impedit illum distinctio
              facere esse repellat earum cupiditate iste enim vel, eum ut nemo
              eaque laboriosam hic id, adipisci vero recusandae. Iusto
              consectetur iste quae magni voluptate quos fuga sit! Unde aliquam
              quia commodi? Aliquam fuga quo tempora ut deleniti, quod eveniet
              similique dignissimos. Corporis.
            </p>
          </div>
        </div>
        <div className="number">
          <h1>08</h1>
        </div>
        <div className="image">
          <img src={mbappe} className="mbappe" />
        </div>
      </div>

      <div className="box">
        <div className="wrap">
          <div className="t1"></div>
          <div className="t2"></div>
          <div className="t3"></div>
          <div className="t4"></div>
        </div>
        <div className="white"></div>

        <div className="content">
          <div>
            <h3>150k</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>600+</h3>
            <p>Matches</p>
          </div>
        </div>
      </div>

      <div className="achieve">
        <h1>ACHIVEMENTS</h1>
      </div>
      <div className="chaos">
        <div className="leftCol">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <h2 className="idnum">{item.id}</h2>
              <div className="contentText">
                <h3 className="title">{item.heading}</h3>
                <p className="desc">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rightCol">
          <img src={ball} className="playerImg" />
        </div>
      </div>
      <div className="footer">
        <div className="contact">
          <h1>Contact me</h1>
          <div className="icon">
            <img src={ig} className="ig" />
            <img src={fb} className="fb" />
            <img src={thread} className="thread" />
          </div>
        </div>
        <div className="message">
          <h2>SHORT MESSAGE</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime qui
            expedita repudiandae et autem labore facere aspernatur porro ab
            commodi.
          </p>
        </div>
      </div>
      <div className="card">
        <button>Download visiting card</button>
        <div className="dot">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default App;
