import Box from "@mui/system/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/system/Stack"

export const HomeEventBanner = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#F6694D",
        marginTop: "2rem",
        borderRadius: "5px",
        color: "white",
        padding: "2rem 1.5rem"
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography 
            variant="h6"
            component="h2"
            sx={{
              letterSpacing: "0.03rem",
              marginBottom: "0.3rem"
            }}
          >
            Nice to meet you, Anonymous
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontWeight: 300
            }}
          >
            Explore the event list & share it with your friends
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              backgroundColor: "#F79B67",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px"
            }}
          >
            <Typography
              component="p"
              variant="caption"
              fontWeight={300}
              sx={{
                marginBottom: "0.5rem",
                padding: "0.5rem 1rem"
              }}
            >
              👋 Welcome, Anonymous
            </Typography>
          </Box>
          <Box
             sx={{
              backgroundColor: "#F79B67",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px"
            }}
          >
            <Typography
              component="p"
              variant="caption"
              fontWeight={300}
              sx={{
                padding: "0.5rem 1rem"
              }}
            >
              Explore the events
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
