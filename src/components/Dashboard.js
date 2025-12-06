import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardList from './DashboardList';
// import { deleteImage } from '../features/gallery/gallerySlice';
import { deleteJob, clearJobs } from '../features/jobs/jobsSlice';
import { deleteContact, clearContacts } from '../features/contacts/contactsSlice';
import { Grid, Paper, Typography, Button } from '@mui/material';

export default function Dashboard() {
  const gallery = useSelector(s => s.gallery.items);
  const jobs = useSelector(s => s.jobs.items);
  const contacts = useSelector(s => s.contacts.items);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Admin Dashboard</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{p:2}}>
            <Typography variant="h6">Gallery</Typography>
            <Typography variant="h4">{gallery.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{p:2}}>
            <Typography variant="h6">Job Applications</Typography>
            <Typography variant="h4">{jobs.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{p:2}}>
            <Typography variant="h6">Contact Messages</Typography>
            <Typography variant="h4">{contacts.length}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <hr />

      <DashboardList
        title="Applications"
        items={jobs}
        onDelete={(id) => dispatch(deleteJob(id))}
        extraRender={(j) => (
          <div>
            <Typography variant="body1">{j.name} — {j.position}</Typography>
            <Typography variant="body2">{j.email}</Typography>
            <a href={j.cvDataUrl} target="_blank" rel="noreferrer">Open CV ({j.cvName})</a>
          </div>
        )}
      />
      <Button color="error" onClick={() => dispatch(clearJobs())} sx={{mt:1}}>Clear All Applications</Button>

      <hr />

      <DashboardList
        title="Contacts"
        items={contacts}
        onDelete={(id) => dispatch(deleteContact(id))}
      />
      <Button color="error" onClick={() => dispatch(clearContacts())} sx={{mt:1}}>Clear All Contacts</Button>

      <hr />
      {/* <DashboardList
        title="Gallery Items"
        items={gallery}
        onDelete={(id) => dispatch(deleteImage(id))}
        extraRender={(g) => (
          <div>
            <Typography variant="body1">{g.title}</Typography>
            <a href={g.dataUrl} target="_blank" rel="noreferrer">Open Image</a>
          </div>
        )}
      /> */}
    </>
  );
}
