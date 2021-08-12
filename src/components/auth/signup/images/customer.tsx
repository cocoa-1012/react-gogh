import React from "react";
interface ImageProps {
  imageColor: string;
}

const CustomerImage: React.FC<ImageProps> = ({ imageColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38.058"
      height="49.996"
      viewBox="0 0 38.058 49.996"
      color={imageColor}
    >
      <path
        id="Path_1917"
        data-name="Path 1917"
        d="M91.723,32.464a6.6,6.6,0,0,1-6.651-6,11.279,11.279,0,0,0,2.6-2.57,15.619,15.619,0,0,0,2.814-7.342,1.119,1.119,0,0,0,.282-.4,12.115,12.115,0,0,0,.94-4.715C91.708,5.131,86.95,0,81.1,0a9.846,9.846,0,0,0-4.415,1.048,7.757,7.757,0,0,0-1.561.28,8.77,8.77,0,0,0-5.5,5.015A12.454,12.454,0,0,0,69,14.517a13.172,13.172,0,0,0,.571,1.731,1.119,1.119,0,0,0,.264.385,14.056,14.056,0,0,0,5.4,9.821,6.6,6.6,0,0,1-6.651,6.011,7.736,7.736,0,0,0-7.463,7.721V48.87A1.126,1.126,0,0,0,62.253,50H98.059a1.126,1.126,0,0,0,1.126-1.126V40.185A7.735,7.735,0,0,0,91.723,32.464ZM75.751,3.491a5.547,5.547,0,0,1,1.29-.209,1.125,1.125,0,0,0,.473-.128,7.649,7.649,0,0,1,3.588-.9c4.606,0,8.354,4.121,8.354,9.187,0,.152,0,.3-.011.454a4.908,4.908,0,0,0-3.506-1.471H78.267a2.1,2.1,0,0,1-1.946-1.315,1.38,1.38,0,0,0-2.616.172,10.442,10.442,0,0,1-2.547,4.558C70.026,9.179,72.068,4.555,75.751,3.491Zm-.979,19.47a13.239,13.239,0,0,1-2.728-6.852,12.757,12.757,0,0,0,3.275-4.589,4.391,4.391,0,0,0,.349.29,4.315,4.315,0,0,0,2.6.862H85.94a2.675,2.675,0,0,1,2.439,1.583c0,.008,0,.016,0,.024,0,6.355-3.687,11.525-8.219,11.525A7.041,7.041,0,0,1,74.772,22.961Zm2.587,4.6a8.192,8.192,0,0,0,5.6.006,8.815,8.815,0,0,0,3.274,5.307l-5.911,8.418a.195.195,0,0,1-.319,0l-5.913-8.42A8.817,8.817,0,0,0,77.359,27.56ZM96.934,47.745H63.378V40.185a5.482,5.482,0,0,1,5.476-5.476,9.65,9.65,0,0,0,3.284-.694l6.018,8.57a2.448,2.448,0,0,0,2,1.04h0a2.448,2.448,0,0,0,2-1.04l6.017-8.569a9.268,9.268,0,0,0,3.281.693,5.482,5.482,0,0,1,5.476,5.476v7.559Z"
        transform="translate(-61.127)"
        fill="currentColor"
      />
    </svg>
  );
};

export default CustomerImage;
