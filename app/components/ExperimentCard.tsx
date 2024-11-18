import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import ExperimentIcon from "./ExperimentIcon";

interface CardProps {
  id: number;
  title: string;
  description: string;
  icon: string | null;
}

export default function ExperimentCard({ id, title, description, icon }: CardProps) {
  const [seeInfo, setSeeInfo] = useState(false);
  const navigate = useNavigate();

  const handleDetails = (id: number) => {
    navigate(`details/${id}`);
  };

  const handleInfo = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setSeeInfo(!seeInfo);
  };

  const currentIcon = seeInfo ? "/icons/close.svg" : "/icons/info.svg"

  return (
    <div
      className="
        relative
        flex
        flex-col
        items-center
        w-48
        h-48
        max-h-48
        border
        border-gray-300
        rounded-lg
        shadow-lg
        p-2
        cursor-pointer
        overflow-hidden
      "
      onClick={() => handleDetails(id)}
    >
      {/* Info Icon */}
      <div
        className="
          absolute
          top-2
          right-2
          w-8
          h-8
          flex
          items-center
          justify-center
          cursor-pointer
          z-1
        bg-gray-300
          rounded-full
        "
        onClick={handleInfo}
      >
        <img alt="info icon" src={currentIcon} />
      </div>

      {!seeInfo ? (
        <>
          {/* Experiment Icon */}
          <ExperimentIcon icon={icon} size="md"/>
          <h2 className="
            mt-2
            text-xl
            font-bold
            text-center
            text-primary-text
            overflow-hidden
            whitespace-nowrap
            text-ellipsis
            w-full
          ">{title}</h2>
        </>
      ) : (
        <p className="
          text-center
          text-primary-text
          text-sm
          text-ellipsis
        ">{description}</p>
      )}
    </div>
  );
}
