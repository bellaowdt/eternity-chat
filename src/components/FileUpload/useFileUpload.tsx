import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const maxDefaultSize = 5242880;
const baseDefaultSize = 1048576;

interface UseFileUploadProps {
  accept?: any;
  maxSize?: number;
  onFileUpload?: (files: File[]) => void;
}

export const useFileUpload = ({
  accept = { images: ["image/*"] },
  maxSize = maxDefaultSize,
  onFileUpload,
}: UseFileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const updateParentFiles = (updatedFiles: File[]) => {
    if (onFileUpload) {
      onFileUpload(updatedFiles);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: any) => {
      setError(null);

      // Validate rejected files
      if (rejectedFiles.length > 0) {
        const file = rejectedFiles[0];
        if (file.errors[0].code === "file-too-large") {
          setError(
            `errorMaxSize ${(maxSize / baseDefaultSize).toFixed(2)} MB.`
          );
        } else if (file.errors[0].code === "file-invalid-type") {
          setError("errorWrongType");
        }
        return;
      }

      // Update files state
      const updatedFiles = [...files, ...acceptedFiles];
      setFiles(updatedFiles);
      updateParentFiles(updatedFiles);
    },
    [files, maxSize, onFileUpload, t]
  );

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = files.filter((file) => file !== fileToRemove);
    setFiles(updatedFiles);
    updateParentFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    multiple: true,
  });

  return {
    files,
    error,
    getRootProps,
    getInputProps,
    isDragActive,
    removeFile,
  };
};
