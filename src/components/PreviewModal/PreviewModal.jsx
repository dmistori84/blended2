import style from './PreviewModal.module.css';

export const PreviewModal = ({ image: { src, alt }, onClose }) => {
  return (
    <div className={style.backdrop}>
      <div className={style.preview}>
        <img src={src.large} alt={alt} onClick={onClose} />
      </div>
    </div>
  );
};
