import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: (val: string) => void;
}

const TextEditor = (props: TextEditorProps) => {
  const { value, setValue } = props;

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};

export default TextEditor;
