import type { MetaFunction } from "@remix-run/node";
import ExperimentCard from "~/components/ExperimentCard";
import AddExperiment from "~/components/AddExperiment";
import { useExperiments } from "~/context/experimentContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Experiments" },
    { name: "description", content: "Welcome to Experiments!" },
  ];
};

export default function Index() {
  const {experiments} = useExperiments()

  return (
    <>
      <p className="text-2xl m-4">
        Experiments:
      </p>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {experiments.map((experiment) => {
          return (
            <ExperimentCard
              key={experiment.id}
              id={experiment.id}
              title={experiment.title}
              description={experiment.description}
              icon={experiment.icon}
            />
          )
        })}
      </div>
      <AddExperiment/>
    </>
  );
}

