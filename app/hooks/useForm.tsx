import { useState, useRef, ChangeEvent } from "react";
import useImageHook from "~/hooks/useImageHook";

export default function useExperimentForm() {
  // State for the form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gitUrl, setGitUrl] = useState("");

  // State and handlers for the experiment icon
  const { expIcon, setExpIcon, handleIconChange } = useImageHook();

  // Reference to the hidden file input
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to handle clicking the edit button to open the file input
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // Function to handle changes in the text inputs
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "gitUrl":
        setGitUrl(value);
        break;
      default:
        break;
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    gitUrl,
    setGitUrl,
    expIcon,
    setExpIcon,
    handleIconChange,
    handleClick,
    handleInputChange,
    inputRef,
  };
}
