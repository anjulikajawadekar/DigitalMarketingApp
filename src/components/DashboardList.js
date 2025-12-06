import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function DashboardList({ title, items, onDelete, extraRender }) {
  return (
    <>
      <h3>{title}</h3>
      {items.length === 0 && <Typography variant="body2">No items</Typography>}
      {items.map(item => (
        <Card key={item.id} sx={{mb:1}}>
          <CardContent>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                {extraRender ? extraRender(item) : <Typography variant="body1">{item.name || item.title}</Typography>}
                <Typography variant="caption">{new Date(item.createdAt).toLocaleString()}</Typography>
              </div>
              <div>
                <Button size="small" onClick={() => onDelete(item.id)}>Delete</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
