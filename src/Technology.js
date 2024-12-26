import TechLogo from "./TechLogo";

export default function Technology() {
  return (
    <div className="container">
      <div>
        <TechLogo
          url={
            "static/images/openai/powered-by-openai-badge-outlined-on-dark.svg"
          }
          style={{ width: "50%", height: "auto" }}
        />
        <p style={{ color: "white", fontSize: "1.3em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius
          mollitia commodi aperiam, quasi eos eligendi cumque est optio iste,
          reprehenderit blanditiis, necessitatibus eveniet sint? Ullam,
          excepturi necessitatibus cupiditate reiciendis ducimus, ipsum
          molestiae delectus exercitationem odio voluptate facilis beatae
          consequuntur nulla provident eligendi? Est vitae omnis ex quaerat
          deserunt dolorum.
        </p>
      </div>
      <div>
        <TechLogo
          url={
            "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
          }
          style={{ width: "40%", height: "auto" }}
        />
        <p style={{ color: "white", fontSize: "1.3em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius
          mollitia commodi aperiam, quasi eos eligendi cumque est optio iste,
          reprehenderit blanditiis, necessitatibus eveniet sint? Ullam,
          excepturi necessitatibus cupiditate reiciendis ducimus, ipsum
          molestiae delectus exercitationem odio voluptate facilis beatae
          consequuntur nulla provident eligendi? Est vitae omnis ex quaerat
          deserunt dolorum.
        </p>
      </div>
    </div>
  );
}
