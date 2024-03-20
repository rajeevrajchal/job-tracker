import { useFormik } from "formik";

const ApplyForm = () => {
  const applyForm = useFormik({
    initialValues: {
      job: {
        title: "",
        description: "",
      },
      resume: {
        id: "",
        experience: "",
      },
      cover_letter: "",
    },
    onSubmit: (values) => {
      console.log("the values are", values);
    },
  });
  return <div>ApplyForm</div>;
};

export default ApplyForm;
