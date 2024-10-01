import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    return (
        <>
            <div role="presentation">
                <Breadcrumbs separator=">" aria-label="breadcrumb">
                    <Link style={{color:"#E8CA67", fontSize: 20,}} path="/">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    </Link>
                    {pathSegments.map((segment, index) => {
                        // Create a path for each segment
                        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

                        // If it's the last segment, render it as Typography
                        if (index === pathSegments.length - 1) {
                            return (
                                <Typography key={path} sx={{ color: 'text.primary' }}>
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize the first letter */}
                                </Typography>
                            );
                        }

                        return (
                            <Link key={path} style={{color:"gray", fontSize: 18, textDecoration: "none"}} path={path}>
                                {segment.charAt(0).toUpperCase() + segment.slice(1)} {/* Capitalize the first letter */}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </div>
        </>
    )
}

export default Breadcrumb