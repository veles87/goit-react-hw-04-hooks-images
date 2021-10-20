import Loader from 'react-loader-spinner';

export default function LoaderReact() {
  return (
    <Loader
      type="Grid"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={5000}
      className="loader"
    />
  );
}

