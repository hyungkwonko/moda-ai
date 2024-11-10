// frontend/src/pages/ProductPage.tsx

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ProductPage: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [parameter, setParameter] = useState('');
    const [images, setImages] = useState<string[]>([]);

    const handleGenerate = () => {
        // Placeholder logic: Replace with real image generation based on inputText and parameter
        setImages([
            "https://via.placeholder.com/150?text=Image+1",
            "https://via.placeholder.com/150?text=Image+2",
            "https://via.placeholder.com/150?text=Image+3"
        ]);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Product Generation
            </Typography>
            <TextField
                label="Enter Text"
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                sx={{ mt: 2, width: '300px' }}
            />
            <TextField
                label="Additional Parameter"
                variant="outlined"
                value={parameter}
                onChange={(e) => setParameter(e.target.value)}
                sx={{ mt: 2, width: '300px' }}
            />
            <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ mt: 2 }}>
                Generate Images
            </Button>
            <Grid container spacing={2} sx={{ mt: 4 }}>
                {images.map((image, index) => (
                    <Grid item key={index} xs={4}>
                        <Card>
                            <CardMedia component="img" height="150" image={image} alt={`Generated ${index + 1}`} />
                            <CardContent>
                                <Typography variant="body2">Generated Image {index + 1}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductPage;
