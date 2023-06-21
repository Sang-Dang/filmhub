import React from 'react'
import FilmFrameTemplate from '../components/template/FilmFrameTemplate'
import { Box } from '@mui/material'

type Props = {}

export default function ViewFilm({}: Props) {
    return (
        <Box height="95vh" width="95vw" mt={3}>
            <FilmFrameTemplate link='https://hd1080.opstream2.com/share/3648d0f7a719a39f363f6748ecb90918'/> 
        </Box>
    )
}