import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem
          key={photo.id}
          alt={photo.alt}
          avg_color={photo.avg_color}
          src={photo.src}
        />
      ))}
    </Grid>
  );
};
