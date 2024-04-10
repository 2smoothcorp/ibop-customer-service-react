import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function HeaderNavbar({
    title
}: HeaderNavbarProps) {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#1F346B",
            }}
        >
            <Toolbar>
                <Typography component="span" className="font-db-helvethaica text-[30px]">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

interface HeaderNavbarProps {
    title: string;
}

