import { Box } from "@mui/system"
import { Formik, Form } from "formik"
import Grid2 from "@mui/material/Unstable_Grid2"
import Stack from "@mui/material/Stack"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { Link } from "react-router-dom"

import { useCreateNewEventForm } from "./hooks/useCreateNewEventForm"
import { TextFieldWrapper } from "../../../../components/form/TextField"
import { SelectField } from "../../../../components/form/SelectField"
import { TagsField } from "../../../../components/form/TagsField"
import { FileUpload } from "../../../../components/form/FileUpload"

export const CreateNewEventForm = () => {
  const {
    initialFormState,
    formValidation,
    contentTypes,
    tags,
    isShowFileUpload,
    progress,
    isPublishEnable,
    isUnPublishEnable,
    publishEventButtonHandler,
    unPublishEventButtonHandler,
    eventFormHandler,
    showFileUploadHandler,
    setUploadFile,
    setHasValidFileType
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
          ...initialFormState
        }}
        validationSchema={formValidation}
        onSubmit={eventFormHandler}
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
                  <SelectField
                    name="eventType"
                    label="Event Type"
                    options={contentTypes}
                    onClick={showFileUploadHandler}
                  />
                </Grid2>

                <Grid2 xs={12}>
                  <TagsField
                    name="tags"
                    label="Tags"
                    tags={tags}
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

              <Grid2 xs={12}>
                  {isShowFileUpload && 
                    <FileUpload 
                      setUploadFile={setUploadFile} 
                      progress={progress}
                      setHasValidFileType={setHasValidFileType}
                  />}
              </Grid2>

              <Grid2 container rowSpacing={3}>
                <Grid2 xs={12} sm={4} md={4} lg={4} pr={3}></Grid2>
                <Grid2 xs={12} sm={12} md={12} lg={12}>
                  <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                    <Link to="/event">
                      <Button
                        size="small"
                        variant="string"
                        disableRipple={true}
                        sx={{
                          cursor: "pointer",
                          padding: "0.3rem 1rem",
                          borderRadius: "4px",
                          border: "none",
                          fontWeight: "500",
                          fontSize: "0.8rem",
                          textTransform: "revert",
                          backgroundColor: "black",
                          color: "white",
                          transition: "all 0.3s ease-in",
                          '&:hover': {
                            backgroundColor: "#F79B67",
                            color: "white"
                          }
                        }}
                      >
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      type="submit"
                      disableRipple={true}
                      sx={{
                        cursor: "pointer",
                        padding: "0.3rem 1rem",
                        borderRadius: "4px",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        textTransform: "revert",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                          backgroundColor: "#F79B67",
                          color: "white"
                        }
                      }}
                    >
                      Save
                    </Button>
                  </Stack>
                </Grid2>
              </Grid2>


              <Divider sx={{ marginY: "2rem"}} />

            </Grid2>

              <Grid2 xs={12} sm={12} md={12} lg={12}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
                    <Button
                      variant="contained"
                      type="button"
                      disableRipple={true}
                      onClick={publishEventButtonHandler}
                      disabled={!isPublishEnable}
                      sx={{
                        cursor: "pointer",
                        padding: "0.3rem 1rem",
                        borderRadius: "4px",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        textTransform: "revert",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                          backgroundColor: "#F79B67",
                          color: "white"
                        }
                      }}
                    >
                      Publish
                    </Button>
                    <Button
                      variant="contained"
                      type="button"
                      disableRipple={true}
                      disabled={!isUnPublishEnable}
                      onClick={unPublishEventButtonHandler}
                      sx={{
                        cursor: "pointer",
                        padding: "0.3rem 1rem",
                        borderRadius: "4px",
                        border: "none",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        textTransform: "revert",
                        backgroundColor: "black",
                        color: "white",
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                          backgroundColor: "#F79B67",
                          color: "white"
                        }
                      }}
                    >
                      Unpublish
                    </Button>
                  </Stack>
                </Stack>
              </Grid2>

          </Grid2>
        </Form>
      </Formik>
    </Box>
  )
}
