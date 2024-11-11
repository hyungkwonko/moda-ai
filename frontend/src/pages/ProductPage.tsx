// frontend/src/pages/ProductPage.tsx

import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardMedia, CardContent, Divider, Slider } from '@mui/material';
import { Container, LeftSection, RightSection, SectionTitle, GenerateButton, ImageContainer, LogContainer, FileInputBox, UploadedFilesContainer, LogRow, LogTextRow, LogFileRow, FilePreview, FileThumbnail, FileName, SliderContainer } from './ProductPage.styles';

const ProductPage: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [similarity, setSimilarity] = useState(0.5);
    const [images, setImages] = useState<string[]>([]);
    const [log, setLog] = useState<{ type: 'text' | 'file'; content: string }[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleGenerate = () => {
        let newImages: string[] = [];

        if (inputText.toLowerCase() === 'tote bag' && uploadedFiles.length === 0) {
            newImages = ["/images/image1.jpg"];
        } else if (inputText.toLowerCase() === 'purple tote bag' && uploadedFiles.some(file => file.name === 'image2.jpeg')) {
            newImages = ["/images/image3.webp"];
        } else {
            newImages = ["https://via.placeholder.com/300?text=Default+Image"];
        }
        
        setImages(newImages);
        setLog((prevLog) => [
            ...prevLog,
            { type: 'text', content: `Text Prompt: "${inputText}", Similarity: ${similarity.toFixed(1)}` },
        ]);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files ? e.target.files[0] : null;
        if (uploadedFile) {
            setUploadedFiles((prevFiles) => [...prevFiles, uploadedFile]);
            setLog((prevLog) => [...prevLog, { type: 'file', content: `Uploaded file: ${uploadedFile.name}` }]);
        }
    };

    const handleSimilarityChange = (event: Event, newValue: number | number[]) => {
        const value = Array.isArray(newValue) ? newValue[0] : newValue;
        setSimilarity(value);
    };

    const handleExport = () => {
        if (images.length > 0) {
            const link = document.createElement('a');
            link.href = images[0];
            link.download = 'generated-image.png';
            link.click();
        }
    };

    return (
        <Container>
            <LeftSection>
                {/* <SectionTitle variant="h4">Text to Image Generation</SectionTitle> */}
                <TextField
                    label="Enter Text"
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                />
                <FileInputBox onClick={() => document.getElementById('file-input')?.click()}>
                    <input 
                        id="file-input" 
                        type="file" 
                        hidden 
                        onChange={handleFileUpload}
                    />
                    <Typography variant="body2">
                        {uploadedFiles.length > 0 ? `${uploadedFiles.length} files uploaded` : 'Drag and drop or click to upload a file'}
                    </Typography>
                </FileInputBox>

                {/* Similarity Slider */}
                <SliderContainer>
                    <Typography variant="body2" gutterBottom>
                        Similarity to References
                    </Typography>
                    <Slider
                        value={similarity}
                        onChange={handleSimilarityChange}
                        min={0}
                        max={1}
                        step={0.1}
                        aria-labelledby="similarity-slider"
                    />
                    <Typography variant="body2" color="textSecondary">
                        Selected Similarity: {similarity.toFixed(1)}
                    </Typography>
                </SliderContainer>

                <GenerateButton variant="contained" color="primary" onClick={handleGenerate}>
                    Generate Image
                </GenerateButton>
                <ImageContainer>
                    {images.map((image, index) => (
                        <Card key={index} sx={{ width: '100%', maxWidth: '450px', height: 'auto', overflow: 'hidden', mx: 'auto' }}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={`Generated ${index + 1}`}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="body2" align="center">Generated Image {index + 1}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </ImageContainer>
                {images.length > 0 && (
                    <Button variant="contained" color="secondary" onClick={handleExport} sx={{ marginTop: '16px' }}>
                        Export Image
                    </Button>
                )}
            </LeftSection>

            <RightSection>
                <SectionTitle variant="h5">Uploaded Files</SectionTitle>
                <UploadedFilesContainer>
                    {uploadedFiles.length > 0 ? (
                        uploadedFiles.map((file, index) => (
                            <FilePreview key={index}>
                                {file.type.startsWith("image/") ? (
                                    <FileThumbnail src={URL.createObjectURL(file)} alt={file.name} />
                                ) : null}
                                <FileName variant="body2">{file.name}</FileName>
                            </FilePreview>
                        ))
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            No files uploaded yet.
                        </Typography>
                    )}
                </UploadedFilesContainer>

                <SectionTitle variant="h5">Action Log</SectionTitle>
                <Divider sx={{ marginBottom: '16px' }} />
                <LogContainer>
                    {log.length > 0 ? (
                        log.map((entry, index) => (
                            <LogRow key={index}>
                                {entry.type === 'text' ? (
                                    <LogTextRow>{entry.content}</LogTextRow>
                                ) : (
                                    <LogFileRow>{entry.content}</LogFileRow>
                                )}
                            </LogRow>
                        ))
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            No actions logged yet.
                        </Typography>
                    )}
                </LogContainer>
            </RightSection>
        </Container>
    );
};

export default ProductPage;
