import { Formik, Form } from "formik"
import { Box } from "@mui/system"
import Grid2 from "@mui/material/Unstable_Grid2"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Typography } from "@mui/material"

import { useCreateTagForm } from "./hooks/useCreateTagForm"
import { TextFieldWrapper } from "../../../components/form/TextField"

export const CreateTagForm = () => {
  const { initialTagFormState, tagFormValidation, tagsFormHandler } = useCreateTagForm()

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        marginTop: "2rem",
        borderRadius: "5px",
        padding: "2rem 1.5rem"
      }}
    >
      <Formik
        initialValues={{
          ...initialTagFormState
        }}
        validationSchema={tagFormValidation}
        onSubmit={tagsFormHandler}
      >
        <Form>
          <Grid2 container rowSpacing={2}>

            <Grid2 xs={12} sm={4} md={4} lg={4}>
              <Stack>
                <Typography
                  variant="h5"
                >
                  Add
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 400
                  }}
                >
                  Add Tags to your Event
                </Typography>
              </Stack>
            </Grid2>

            <Grid2 xs={12} sm={8} lg={8}>
              <Grid2 xs={12}>
                <TextFieldWrapper
                  name="tagName"
                  label="Add new tags..."
                />
              </Grid2>
              <Grid2 xs={12}>
                <TextFieldWrapper
                  name="tagDescription"
                  label="Add description to your tag"
                  multiline={true}
                  rows={4}
                />
              </Grid2>
              <Grid2 xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="flex-end" flexWrap="wrap">
                  <Button
                    fullWidth={false}
                    type="submit"
                    sx={{
                      cursor: "pointer",
                      padding: "0.3rem 1rem",
                      borderRadius: "4px",
                      border: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                      backgroundColor: "black",
                      textTransform: "initial",
                      color: "white",
                      transition: "all 0.3s ease-in",
                      '&:hover': {
                        backgroundColor: "#F79B67",
                        color: "white"
                      }
                    }}
                  >
                    Add Tag
                  </Button>
                </Stack>
              </Grid2>
            </Grid2>

          </Grid2>
        </Form>
      </Formik>
    </Box>
  )
}
