import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function GalleryCard({ item }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={item.url}
        alt={item.title}
      />

      <CardContent>
        <Typography variant="subtitle1">{item.title}</Typography>
      </CardContent>
    </Card>
  );
}



/*
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

export default function GalleryCard({ item, onDelete }) {
  return (
    <Card>
      <CardMedia component="img" height="160" image={item.dataUrl} alt={item.title} />
      <CardContent>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography variant="caption">{new Date(item.createdAt).toLocaleString()}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(item.id)}>Delete</Button>
        <Button size="small" href={item.dataUrl} target="_blank" rel="noreferrer">Open</Button>
      </CardActions>
    </Card>
  );
}
*/