import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map((photo) => (
        <PhotosGalleryItem key={photo.id} image={photo} />
      ))}
    </Grid>
  );
};
