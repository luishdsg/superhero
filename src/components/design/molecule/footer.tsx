import React from 'react';
import Typography from '@mui/material/Typography';
import { bebas } from '../../styles/style';
import Link from '@mui/material/Link';
import { AiFillGithub } from "react-icons/ai";
export default function Footer() {
    return (
        <div className="border-top px-5 py-3 border-warning container bg-dark d-flex align-items-center justify-content-between">
            <Typography sx={{ ...bebas }} variant="h2" className="text-warning">
                Build with ❤️ by Luis H
            </Typography>

            <Link href="https://github.com/luishdsg/superhero" underline="none">
            <AiFillGithub style={{fontSize: '40px'}} className="text-warning"/>
            </Link>
        </div>
    );
}