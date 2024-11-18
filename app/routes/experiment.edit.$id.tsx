import { useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";
import ExperimentForm from "~/components/common/ExperimentForm";
import useForm from "~/hooks/useForm";
import { useExperiments } from "~/context/experimentContext";

export default function EditExperiment() {
  const {
    title,
    setTitle,
    description,
    setDescription,
    gitUrl,
    setGitUrl,
    expIcon,
    setExpIcon,
    handleIconChange,
    inputRef,
  } = useForm();

  const { getExperiment, editExperiment } = useExperiments();
  const params = useParams();
  const navigate = useNavigate()

  // Fetch the experiment data using the ID from the URL
  useEffect(() => {
    if (params.id) {
      const experimentId = Number(params.id);
      const experiment = getExperiment(experimentId);


      if (experiment) {
        setTitle(experiment.title);
        setDescription(experiment.description);
        setGitUrl(experiment.gitUrl);
        setExpIcon(experiment.icon || "/icons/default-exp.png");
      }
    }
  }, [params.id, getExperiment, setTitle, setDescription, setGitUrl, setExpIcon]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (params.id) {
      const updatedExperiment = {
        id: Number(params.id),
        title,
        description,
        gitUrl,
        icon: expIcon,
      };
      editExperiment(Number(params.id), updatedExperiment);
      alert("Experiment updated successfully!");
      navigate("/")
    }
  };

  return (
    <ExperimentForm
      submitHandler={handleSubmit}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      gitUrl={gitUrl}
      setGitUrl={setGitUrl}
      expIcon={expIcon}
      handleIconChange={handleIconChange}
      inputRef={inputRef}
    />
  );
}
