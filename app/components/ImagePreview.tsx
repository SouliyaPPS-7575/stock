import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { Cloudinary } from '@cloudinary/url-gen/instance/Cloudinary';

const ImagePreview = ({
  cld,
  publicId,
}: {
  cld: Cloudinary;
  publicId: string;
}) => {
  const imagePreviewStyles: React.CSSProperties = {
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  };

  const imageStyles: React.CSSProperties = {
    display: 'block',
    width: '200px', // Fixed width
    height: '200px', // Fixed height
    objectFit: 'cover', // Ensures consistent sizing
    borderRadius: '8px',
  };

  const cldImage = cld
    .image(publicId)
    .resize(thumbnail().width(200).height(200));

  return (
    <div className='image-preview' style={imagePreviewStyles}>
      <AdvancedImage
        style={imageStyles}
        cldImg={cldImage} // Use resized Cloudinary image
        plugins={[responsive(), placeholder()]}
      />
    </div>
  );
};

export default ImagePreview;
