import { useState } from "react";

import { Cloudinary } from '@cloudinary/url-gen';

export const useCloudinaryUpload = () => {
     // Configuration
     const cloudName = 'db84fdke0';
     const uploadPreset = 'souvenirstock';

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
          // Uncomment and modify as needed:
          multiple: true,
          folder: 'souvenirstock',
          cropping: false,
     };

     return {
          cld,
          uwConfig,
          publicIds,
          imageUrls,
          setPublicIds,
          setImageUrls
     }
}