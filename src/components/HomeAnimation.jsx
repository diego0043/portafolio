import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const HomeAnimation = ({ widh, height }) => {
  return (
    <div className="container ms-2">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_hi95bvmx/WebdesignBg.json"
        style={{ height: height, width: widh }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};
