import {
  Cape,
  CircleBlue,
  CircleLineWhite,
  CircleLines,
  CirclePokeball,
  Light,
} from "./_cape";

export default () => {
  return (
    <Cape>
      <CircleLines style={{ top: "-100px", left: "-100px" }} />
      <CircleLines
        style={{
          top: "-200px",
          left: "-200px",
          height: "340px",
          width: "340px",
        }}
      />
      <CircleLines style={{ top: "-100px", right: "-100px" }} />
      <CircleLines
        style={{
          top: "-200px",
          right: "-200px",
          height: "340px",
          width: "340px",
        }}
      />
      <Light />
      <CirclePokeball>
        <CircleBlue />
      </CirclePokeball>
      <CircleLineWhite />
    </Cape>
  );
};
