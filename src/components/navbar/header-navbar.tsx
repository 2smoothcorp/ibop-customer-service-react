import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function HeaderNavbar({
    title,
    className
}: HeaderNavbarProps) {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1F346B",
            }}
            className={`${className}`}
        >
            <Toolbar>
                <Typography component="span" className="font-db-helvethaica text-[30px] tracking-wide">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

interface HeaderNavbarProps {
    title: string;
    className?: string;
}

