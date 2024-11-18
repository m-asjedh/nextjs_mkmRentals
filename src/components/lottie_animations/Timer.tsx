import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": any;
    }
  }
}

export default function Timer({
  width = "300px",
  height = "300px",
  speed = 1,
}) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@2.0.8/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <lottie-player
      src="https://lottie.host/1bb573d0-7516-47b2-9445-523f11f88339/DMHrDIW6NC.json"
      background="transparent"
      speed={speed}
      style={{ width, height }}
      loop
      autoplay
    ></lottie-player>
  );
}
