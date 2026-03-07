import usePreloadImagesStore from "~/stores/ImagesPreloader";

export function loadAssets(): Promise<void[]> {
  const preloadImagesStore = usePreloadImagesStore();

  const images: string[] = [
    //images
  ];

  const fonts: string[] = [
    //fonts
  ];

  preloadImagesStore.numberOfImagesToLoad = images.length + 1;

  const fontPromise = new Promise<void>((resolve, reject) => {
    fonts.forEach((fontPath) => {
      const font = new FontFace(`${fontPath}`, `url(${fontPath})`);
      font
        .load()
        .then((loadedFont) => {
          document.fonts.add(loadedFont);
          preloadImagesStore.numberOfLoadedImages++;
          resolve();
        })
        .catch(() => reject(`Failed to load font: ${fontPath}`));
    });
  });

  const imagePromises = images.map((imagePath) => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        preloadImagesStore.numberOfLoadedImages++;
        resolve();
      };
      image.onerror = () => reject(`Failed to load image: ${imagePath}`);
      image.src = imagePath;
    });
  });

  return (Promise as any).all([...imagePromises, fontPromise]).then(() => {
    preloadImagesStore.imagesHaveLoaded = true;
  });
}
