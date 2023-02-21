import { useDropzone } from "react-dropzone"

export const FileUpload = ({ setUploadFile }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'application/pdf': ['.pdf']
    },
    onDrop: (acceptedFile) => {
      setUploadFile(acceptedFile[0])
    }
  })

  return (
    <div {...getRootProps()}>
      <input
        {...getInputProps()}
      />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <h4>Files</h4>
      <ul>{acceptedFiles[0]?.name}</ul>
    </div>
  )
}
