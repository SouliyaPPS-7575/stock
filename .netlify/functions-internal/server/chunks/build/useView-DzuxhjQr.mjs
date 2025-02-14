import { Y as Yn } from '../nitro/nitro.mjs';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const h = (e) => {
  const [t, a] = useState(0), { data: n } = useQuery({ queryKey: ["product", e], queryFn: () => Yn("products", e), enabled: !!e });
  return { data: n, setSelectedImageIndex: a, selectedImageIndex: t, handleNext: () => {
    (n == null ? void 0 : n.imageurl) && t < n.imageurl.length - 1 && a((o) => o + 1);
  }, handleBack: () => {
    t > 0 && a((o) => o - 1);
  } };
};

export { h };
//# sourceMappingURL=useView-DzuxhjQr.mjs.map
