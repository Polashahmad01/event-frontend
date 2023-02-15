import { Box } from "@mui/system"
import { Formik, Form } from "formik"
import Grid2 from "@mui/material/Unstable_Grid2"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

import { useCreateNewEventForm } from "./hooks/useCreateNewEventForm"
import { TextFieldWrapper } from "../../../../components/form/TextField"

export const CreateNewEventForm = () => {
  const {
    INITIAL_FORM_STATE,
    FORM_VALIDATION
        } = useCreateNewEventForm()

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
          ...INITIAL_FORM_STATE
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={value => console.log(value)}
      >
        <Form>
        
          <Grid2 container rowSpacing={2}>
            <Grid2 xs={12} sm={4} md={4} lg={4}>
              <Stack>
                <Typography
                  variant="h5"
                >
                  Heading
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 400
                  }}
                >
                  What is your event all about?
                </Typography>
              </Stack>
            </Grid2>

            <Grid2 xs={12} sm={8} lg={8}>
              <Grid2 container spacing={2}>

                <Grid2 xs={12}>
                  <TextFieldWrapper
                    name="title"
                    label="Title"
                  />
                </Grid2>

                <Grid2 xs={6}>
                  <TextFieldWrapper
                    name="author"
                    label="Author"
                  />
                </Grid2>

                <Grid2 xs={6}>
                  <TextFieldWrapper
                    name="contentType"
                    label="Content Type"
                  />
                </Grid2>

                <Grid2 xs={12}>
                  <TextFieldWrapper
                    name="tag"
                    label="Tags"
                  />
                </Grid2>

              </Grid2>
            </Grid2>


            <Grid2 xs={12} sm={4} md={4} lg={4}>
              <Stack>
                <Typography
                  variant="h5"
                >
                  Content
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 400
                  }}
                >
                  Please provide some details about your event
                </Typography>
              </Stack>
            </Grid2>

            <Grid2 xs={12} sm={8} lg={8}>
              
              <Grid2 xs={12}>
                <TextFieldWrapper
                  name="contentUrl"
                  label="Content URL"
                />
              </Grid2>

              <Grid2 xs={12}>
                <TextFieldWrapper
                  name="summary"
                  label="Summary"
                />
              </Grid2>

              <Grid2 xs={12}>
                <TextFieldWrapper
                  name="description"
                  label="Description"
                  multiline={true}
                  rows={4}
                />
              </Grid2>

          {/* <Grid2 container rowSpacing={3}>
                <Grid2 xs={12} sm={4} md={4} lg={4} pr={3}></Grid2>
                <Grid2 xs={12} sm={8} md={8} lg={8}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Button variant="text">
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit">
                      Save
                    </Button>
                  </Stack>
                </Grid2>
              </Grid2> */}

              {/* <Divider /> */}
              <Grid2 mt={2} xs={12} sm={12} md={12} lg={12}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button variant="contained">
                      Publish
                    </Button>
                    <Button variant="contained">
                      Unpublish
                    </Button>
                  </Stack>
                </Stack>
              </Grid2>

            </Grid2>

          </Grid2>

        </Form>
      </Formik>
    </Box>
  )
}
