import { GridItem } from 'components';
import { useToggle } from 'hooks/useToggle';
import styles from './PhotosGalleryItem.module.css';
import { PreviewModal } from 'components/PreviewModal/PreviewModal';

export const PhotosGalleryItem = ({ image: { avg_color, src, alt } }) => {
  const { isOpen, open, close } = useToggle(false);
  return (
    <>
      <GridItem>
        <div
          className={styles.thumb}
          style={{
            backgroundColor: avg_color,
            borderColor: avg_color,
          }}
        >
          <img
            src={src.large}
            alt={alt}
            onClick={() => {
              document.body.style.overflow = 'hidden';
              open();
            }}
          />
        </div>
      </GridItem>
      {isOpen && (
        <PreviewModal
          image={{ src, alt }}
          onClose={() => {
            document.body.style.overflow = 'visible';
            close();
          }}
        />
      )}
    </>
  );
};
