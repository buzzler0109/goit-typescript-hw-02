import css from "./LoadMoreBtn.module.scss";

interface LoadMoreBtnProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  return (
    <div className={css.BtnWrap}>
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
