import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.scss";

interface LoaderProps {
  status: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ status }) => {
  if (!status) {
    return null;
  }

  return (
    <div className={css.loader}>
      <RotatingLines
        visible={status}
        // height="96"
        width="96"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        // wrapperStyle={{}}
        // wrapperClass=""
      />
    </div>
  );
};
