// frontend/src/pages/ProductPage.styles.ts

import styled from '@emotion/styled';
import { Box, Button, Typography, Paper } from '@mui/material';

export const Container = styled(Box)({
    display: 'flex',
    height: '100vh',
    padding: '32px',
});

export const LeftSection = styled(Box)({
    flex: 8,
    paddingRight: '32px',
});

export const RightSection = styled(Box)({
    flex: 4,
    paddingLeft: '32px',
    borderLeft: '1px solid',
    borderColor: 'divider',
    display: 'flex',
    flexDirection: 'column',
});

export const SectionTitle = styled(Typography)({
    marginBottom: '16px',
});

export const GenerateButton = styled(Button)({
    width: 'fit-content',
    marginTop: '16px',
});

export const ImageContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Arrange images in a grid
    gap: '16px',
    marginTop: '16px',
});

export const LogRow = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px',
});

export const LogTextRow = styled(Paper)({
    padding: '8px',
    backgroundColor: '#e3f2fd',
    marginBottom: '4px',
});

export const LogFileRow = styled(Paper)({
    padding: '8px',
    backgroundColor: '#fff3e0',
    marginBottom: '4px',
});

export const FileInputBox = styled(Box)({
    border: '2px dashed #1976d2',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '16px',
    '&:hover': {
        backgroundColor: '#f0f0f0',
    },
});

export const SliderContainer = styled(Box)({
    marginTop: '16px',
    marginBottom: '16px',
});

export const UploadedFilesContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '16px',
    maxHeight: '160px',
    overflowY: 'auto',
    marginBottom: '16px',
});

export const LogContainer = styled(Box)({
    overflowY: 'auto',
});

export const FilePreview = styled(Paper)({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    marginBottom: '8px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

export const FileThumbnail = styled('img')({
    width: '40px',
    height: '40px',
    marginRight: '8px',
    objectFit: 'cover',
    borderRadius: '4px',
});

export const FileName = styled(Typography)({
    flex: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
});
