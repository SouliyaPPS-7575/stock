import { useState } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';

export const useCloudinaryUpload = () => {
  // Configuration
  const cloudName = process.env.CLOUDINARY_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  // State
  const [publicIds, setPublicIds] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Cloudinary configuration
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  // Upload Widget Configuration
  const uwConfig = {
    cloudName,
    uploadPreset,
    multiple: true,
    folder: uploadPreset,
    cropping: false,
  };

  return {
    cld,
    uwConfig,
    publicIds,
    imageUrls,
    setPublicIds,
    setImageUrls,
  };
};
