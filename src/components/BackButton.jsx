import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {/* -1 in the navigate function means that we will go back one step */}
      &larr; Back
    </Button>
  );
}

export default BackButton;
