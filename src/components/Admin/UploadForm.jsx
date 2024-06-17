// src/components/AdminForm.js
import React, { useState } from 'react';
import { TextField, Button, Alert, InputAdornment, IconButton } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const UploadForm = () => {
  const [adminID, setAdminID] = useState('');
  const [version, setVersion] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminID === '' || version === '' || !file) {
      setError('All fields are required.');
      return;
    }
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      return;
    }
    setError('');
    setSuccess('Form submitted successfully!');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-primary">Upload Documentation</h1>
        {error && <Alert severity="error" className="mb-4">{error}</Alert>}
        {success && <Alert severity="success" className="mb-4">{success}</Alert>}
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <TextField
            label="AdminID"
            variant="outlined"
            fullWidth
            required
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
            autoComplete="off"
          />
          <TextField
            label="Version"
            variant="outlined"
            fullWidth
            required
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            autoComplete="off"
          />
          <div>
            <input
              accept="application/pdf"
              style={{ display: 'none' }}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUpload />}
                fullWidth
              >
                Upload PDF
              </Button>
            </label>
            {file && <p className="mt-2 text-sm">{file.name}</p>}
          </div>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
