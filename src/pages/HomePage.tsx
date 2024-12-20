import { Box, Container } from "@mui/material";
import { STYLE_VARIABLE } from "../constants/style-variable";

export function HomePage() {
    return (
      <div>
        <Box sx={{height: STYLE_VARIABLE.SIZE.NAVBAR_HEIGHT}}/>
        <Container>
          {Array.from({ length: 100 }).map((_, i) => (
            <h1>Home Page</h1>
          ))}
        </Container>
      </div>
    );
}