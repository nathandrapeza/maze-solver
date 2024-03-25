/**
 * Used for returning the file extension of a file.
 */
const getFileExtension = (filename) => {

  let fileExtension = "";

  for (let i = filename.length - 1; i >= 0; i--) {
    if (filename[i]===".") {
      fileExtension = filename.substring(i + 1);
      return fileExtension;
    }
  }

  return null
}

const mazeUploadValidation = (file) => {
  const fileName = file.name;
  const fileExtension = getFileExtension(fileName)

  if (fileExtension === null) {
    return false;
  }

  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

  if (!imageExtensions.includes(fileExtension.toLowerCase())) {
    console.log("wrong file type")
    return false;
  }

  return true;
}

export default mazeUploadValidation