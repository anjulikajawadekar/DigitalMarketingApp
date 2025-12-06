import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Grid, Button } from "@mui/material";
import GalleryCard from "./GalleryCard";
import TeamSection from "./TeamSection";
import AchievementsSection from "./AchievementsSection";

export default function Gallery() {
  const items = useSelector((state) => state.gallery.items);

  console.log(items);

  return (
    <>
      <div className="gallery-section-1">
        <div className="section-1-content">
          <strong>Digital Marketing Solutions for a connected world</strong>
          <h1 className="m-2">Your All-in-One Digital Growth Partner</h1>
        </div>
      </div>

      {/* Section 2 - Social Media Creatives*/}
      <div className="gallery-section-2">
        <h2>Our Social Media Creatives</h2>

        <div className="creatives-wrapper">
          <div className="creative-card">
            <img
              src="../DigitalMarketingApp/images/instagram.jpg"
              alt="instagram creative1"
            />
            <p>Instagram Post Design</p>
          </div>

          <div className="creative-card">
            <img
              src="../DigitalMarketingApp/images/insta-img1.jpg"
              alt="creative2"
            />
            <p>Facebook Promotional Banner</p>
          </div>

          <div className="creative-card">
            <img
              src="../DigitalMarketingApp/images/insta-img2.jpg"
              alt="creative3"
            />
            <p>YouTube Thumbnail</p>
          </div>

          <div className="creative-card">
            <img
              src="../DigitalMarketingApp/images/insta-img3.jpg"
              alt="creative4"
            />
            <p>LinkedIn Branding Post</p>
          </div>
        </div>

       

       
      </div>

       {/* Branding & Logo Design Section */}
        <div className="branding-section">
          <h2 className="branding-title">Branding & Logo Designs</h2>

          <p className="branding-text">
            We create professional, modern, and memorable brand identities that
            leave a lasting impression. From logo concepts to complete brand
            guidelines, our creative team ensures your brand stands out in the
            digital world.
          </p>

          <div className="branding-gallery">
            <div className="brand-card">
              <img
                src="/DigitalMarketingApp/images/logo-img1.jpg"
                alt="Logo Design 1"
              />
              <p>Modern Minimal Logo</p>
            </div>

            <div className="brand-card">
              <img
                src="/DigitalMarketingApp/images/brand-img.jpg"
                alt="Logo Design 2"
              />
              <p>Business Branding</p>
            </div>

            <div className="brand-card">
              <img
                src="/DigitalMarketingApp/images/typo-img.jpg"
                alt="Logo Design 3"
              />
              <p>Creative Typography Logo</p>
            </div>
          </div>
        </div>


         {/* Clients Work Portfolio Section */}
        <div className="clients-section">
          <h2 className="clients-title">Our Clients Work Portfolio</h2>

          <p className="clients-subtitle">
            We have collaborated with brands across various industries and
            delivered modern, impactful, and result-driven creatives. Here are
            some highlights from our recent client projects.
          </p>

          <div className="clients-grid">
            <div className="client-card">
              <img src="/DigitalMarketingApp/images/client1.jpg" alt="" />
              <h4>Tech Startup Branding</h4>
              <p>Logo, brand kit & social media creatives.</p>
              <div className="extra-info">
                We created a futuristic brand identity with a full style guide
                and high quality launch campaign creatives.
              </div>
            </div>

            <div className="client-card">
              <img
                src="/DigitalMarketingApp/images/client2.jpg"
                alt="Client Work 2"
              />
              <h4>Restaurant Promotion</h4>
              <p>Food menu designs, Instagram ads & promotional banners.</p>
              <div className="extra-info">
                Premium food photoshoots, festive offers, and viral ad creatives
                for high conversions.
              </div>
            </div>

            <div className="client-card">
              <img
                src="/DigitalMarketingApp/images/client3.jpg"
                alt="Client Work 3"
              />
              <h4>Fitness Studio Marketing</h4>
              <p>
                Ad campaigns, posters, reels thumbnails & campaign branding.
              </p>
              <div className="extra-info">
                Strong motivational campaign visuals, ads, and full rebranding.
              </div>
            </div>

            <div className="client-card">
              <img
                src="/DigitalMarketingApp/images/client4.jpg"
                alt="Client Work 4"
              />
              <h4>Fashion Brand Creatives</h4>
              <p>Product catalog, ad creatives & seasonal campaign designs.</p>
               <div className="extra-info">
                Strong motivational campaign visuals, ads, and full rebranding.
              </div>
            </div>
          </div>
        </div>
         {/* End----------Clients Work Portfolio Section */}

         {/* Team & Office Section */}
          <TeamSection/>
         {/* End------------Team & Office Section */}
         <AchievementsSection/>

      <div className="gallery-section-2"></div>

      {/* <div style={{ padding: 20 }}>
        <h2>Product List</h2>

        {items.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid gray", padding: 10, margin: 10 }}
          >
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width="120" />
            <p>{item.description}</p>
          </div>
        ))}

        <div className="row">
          <div></div>
        </div>
        <div>
          <img src="/images/img4.jpg" alt="digital image" />
        </div>
      </div> */}
    </>
  );
}

/*

export default function Gallery() {
  const sections = useSelector((state) => state.gallery.sections);
  console.log(sections);
  console.log("jhsbdkugajdbkjasdbhdWEF");

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Digital Marketing Portfolio
      </Typography>

      <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="contained"
            href={`#${section.id}`}
          >
            {section.title}
          </Button>
        ))}
      </Box>

    
      {sections.map((section) => (
        <Box key={section.id} id={section.id} sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            {section.title}
          </Typography>

          <Typography variant="body2" sx={{ mb: 3 }}>
            {section.description}
          </Typography>

          <Grid container spacing={2}>
            {section.images.length === 0 ? (
              <Typography variant="body2" sx={{ ml: 2 }}>
                No items added yet.
              </Typography>
            ) : (
              section.images.map((img, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <GalleryCard item={img} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      ))}
    </>
  );
}


/*
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addImage, deleteImage, clearGallery } from '../features/gallery/gallerySlice';
import GalleryCard from './GalleryCard';
import { Grid, TextField, Button } from '@mui/material';

export default function Gallery() {
  const gallery = useSelector(s => s.gallery.items);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    // convert to data URL
    const reader = new FileReader();
    reader.onload = () => setFile({ dataUrl: reader.result, name: f.name });
    reader.readAsDataURL(f);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return alert('Select an image');
    dispatch(addImage({ title: title || file.name, dataUrl: file.dataUrl }));
    setTitle(''); setFile(null);
    document.getElementById('gallery-file').value = '';
  };

  return (
    <>
      <h2>Gallery</h2>
      <form onSubmit={handleUpload} className="mb-3">
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{mr:2}} />
        <input id="gallery-file" type="file" accept="image/*" onChange={handleFile} className="form-control d-inline-block" style={{width: '40%'}} />
        <Button variant="contained" type="submit" sx={{ml:2}}>Upload</Button>
        <Button variant="outlined" color="error" onClick={() => dispatch(clearGallery())} sx={{ml:2}}>Clear All</Button>
      </form>

      <Grid container spacing={2}>
        {gallery.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <GalleryCard item={item} onDelete={(id) => dispatch(deleteImage(id))} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

*/
