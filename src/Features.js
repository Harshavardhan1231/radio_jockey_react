import { useState } from "react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  return (
    <div>
      <div className="features">
        <h1
          className={`feature ${selectedFeature === 0 ? "active" : ""}`}
          onClick={() => setSelectedFeature(0)}
        >
          Feature 1
        </h1>
        <h1 className="feature" onClick={() => setSelectedFeature(1)}>
          Feature 2
        </h1>
        <h1 className="feature" onClick={() => setSelectedFeature(2)}>
          Feature 3
        </h1>
      </div>

      <div className="contents">
        <div className={`content ${selectedFeature === 0 ? "active" : ""}`}>
          <p style={{ color: "white", fontSize: "1.3em" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            cumque quaerat ut voluptatibus molestiae incidunt ipsa temporibus!
            Cumque eos, adipisci cum accusantium odit facilis placeat quibusdam
            ullam sequi consectetur saepe velit quos. Voluptatum, nulla
            perspiciatis soluta quas labore alias est iste debitis ipsum
            voluptatibus odit molestias nihil tempora tempore praesentium error?
          </p>
        </div>
        <div className={`content ${selectedFeature === 1 ? "active" : ""}`}>
          <p style={{ color: "white", fontSize: "1.3em" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quae dolorum illum consequatur repudiandae. Cupiditate quae ipsa
            dignissimos, facere suscipit praesentium illum velit non est hic
            optio voluptas, sapiente dolorum quidem?
          </p>
        </div>
        <div className={`content ${selectedFeature === 2 ? "active" : ""}`}>
          <p style={{ color: "white", fontSize: "1.3em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            itaque. Neque quidem, itaque aliquid dolorem corporis sapiente
            inventore consectetur eaque!
          </p>
        </div>
      </div>
    </div>
  );
}
