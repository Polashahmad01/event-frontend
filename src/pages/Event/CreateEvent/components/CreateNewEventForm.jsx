import { Box } from "@mui/system"
import { Formik, Form } from "formik"
import Grid2 from "@mui/material/Unstable_Grid2"

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
        // color: "white",
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

          Heading
          <Grid2 xs="12">
            <TextFieldWrapper
              name="title"
              label="Title"
            />
          </Grid2>
          <p>.</p>
          <Grid2 xs="12">
            <TextFieldWrapper
              name="author"
              label="Author"
            />
          </Grid2>
          <p>.</p>
          <Grid2 xs="12">
            <TextFieldWrapper
              name="contentType"
              label="Content Type"
            />
          </Grid2>

          <p>.</p>
          <Grid2 xs="12">
            <TextFieldWrapper
              name="tag"
              label="Tags"
            />
          </Grid2>
          Content


          <Grid2>
            <TextFieldWrapper
              name="contentUrl"
              label="Content URL"
            />
          </Grid2>
          <p>.</p>
          <Grid2>
            <TextFieldWrapper
              name="summary"
              label="Summary"
            />
          </Grid2>
          <p>.</p>
          <Grid2>
            <TextFieldWrapper
              name="description"
              label="Description"
              multiline={true}
              rows={6}
            />
          </Grid2>

          Action
          <p>Cancel Button</p>
          <p>Save Button</p>

          Submit
          <p>Publish</p>
          <p>Unpublish</p>

        </Form>
      </Formik>
    </Box>
  )
}
