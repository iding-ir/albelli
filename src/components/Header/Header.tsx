import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import FileUploader from "../FileUploader/FileUploader";
import JsonUploader from "../JsonUploader/JsonUploader";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Albelli
          </Typography>

          <FileUploader />

          <JsonUploader />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
