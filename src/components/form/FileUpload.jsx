import { useDropzone } from "react-dropzone"
import { Stack } from "@mui/system"
import { Typography } from "@mui/material"

export const FileUpload = ({ setUploadFile, progress, setHasValidFileType }) => {
  const { acceptedFiles, fileRejections, isFocused, isDragAccept, isDragReject, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'application/pdf': ['.pdf']
    },
    onDrop: (acceptedFile) => {
      setUploadFile(acceptedFile[0])
      setHasValidFileType(true)
    }
  })

  let borderColor = "#eeeeee"

  if(isFocused) {
    borderColor = "#2196f3"
  } else if (isDragAccept) {
    borderColor = '#00e676'
  } else if (isDragReject) {
    borderColor = '#ff1744'
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      padding={4}
      sx={{
        borderStyle: "dashed",
        borderWidth: "2px",
        borderColor: borderColor,
        borderRadius: '9px',
        backgroundImage: `url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='9' ry='9' stroke=' : '%2339A0FDFF'
        }' stroke-width='4' stroke-dasharray='10' stroke-dashoffset='8' stroke-linecap='butt'/%3e%3c/svg%3e\")`,
        backgroundColor: "transparent"
      }}
      {...getRootProps()}
    >
      <input
        {...getInputProps()}
      />
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack alignItems="center">
          <Typography variant="body1" color="grey.400">
            {acceptedFiles.length === 0 && fileRejections.length === 0 && "Drag 'n' drop your file here, or"}
          </Typography>

          <Typography component="em" variant="body2" color="grey.400">
            {acceptedFiles.length === 0 && fileRejections.length === 0 && "(Only *.pdf files will be accepted)"}
          </Typography>
          <Typography component="em" variant="body2" color="grey.400">
            {acceptedFiles && acceptedFiles.length !== 0 && `${acceptedFiles[0]?.name}`}
          </Typography>
          <Typography component="em" variant="body2" color="grey.400">
            {progress && `Uploaded ${progress}%`}
          </Typography>
          <Typography component="em" variant="body2" color="grey.400">
            {fileRejections.length > 0 && "Unsupported file type. Please choose pdf file only."}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
