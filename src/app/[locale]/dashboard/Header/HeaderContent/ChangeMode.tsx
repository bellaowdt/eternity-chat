import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import IconButton from "@/components/@extended/IconButton";

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useDispatch } from "@/store";
import { onChangeMode } from "@/store/reducers/config";

const ChangeMode = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(onChangeMode(mode === "dark" ? "light" : "dark"));
  };

  const iconBackColor = mode === "dark" ? "background.default" : "grey.100";
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{
          color: "text.primary",
          bgcolor: iconBackColor,
        }}
        aria-label="change theme mode"
        aria-haspopup="false"
        onClick={handleClick}
      >
        {mode === "dark" ? <MoonOutlined /> : <SunOutlined />}
      </IconButton>
    </Box>
  );
};

export default ChangeMode;
