import React, { useState } from "react";
import "./Gallery.scss";
import GalleryModal from "./GalleryModal";

const galleryItems = [
  { image: "gallery-0.jpeg", name: "Cat 1" },
  { image: "gallery-1.jpeg", name: "Cat 2" },
  { image: "gallery-2.jpeg", name: "Cat 3" },
  { image: "gallery-3.jpeg", name: "Cat 4" },
  { image: "gallery-4.jpeg", name: "Cat 5" },
  { image: "gallery-5.jpeg", name: "Cat 6" },
  { image: "gallery-6.jpeg", name: "Cat 7" },
  { image: "gallery-7.jpeg", name: "Cat 8" },
];

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] =
    useState<{ image: string; name: string }>();

  const viewImageHandler = (item: { image: string; name: string }) => {
    setModalOpen(true);
    setSelectedImage(item);
  };

  return (
    <div className="gallery container px-4 px-lg-5">
      <h1 className="text-center pt-3">Gallery</h1>
      <div className="row g-0">
        {galleryItems.map((item, index) => {
          return (
            <div
              className="col-lg-4 col-sm-6"
              key={index}
              onClick={() => viewImageHandler(item)}
            >
              <div className="gallery-box">
                <img
                  className="img-fluid"
                  src={require(`../../images/thumbnails/${item.image}`)}
                  alt="..."
                />
                <div className="gallery-box-caption text-white">
                  <i className="fas fa-paw fa-4x"></i>
                  <h4>{item.name}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row g-0"></div>
      {modalOpen && selectedImage && (
        <GalleryModal close={() => setModalOpen(false)} item={selectedImage} />
      )}
    </div>
  );
};

export default Gallery;
