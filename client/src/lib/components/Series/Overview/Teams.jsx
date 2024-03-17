import React from "react";

const Teams = () => {
  const teams = [
    { name: "PSZ", src: "/team.png" },
    { name: "LHQ", src: "/team.png" },
    { name: "QTG", src: "/team.png" },
    { name: "MS", src: "/team.png" },
    { name: "KRK", src: "/team.png" },
    { name: "ISU", src: "/team.png" },
  ];

  return (
    <div className="mt-12 dark:text-[#CFD1D3] text-[#4A4A4A]">
      <p className="text-[18px]  font-medium">Team Squads</p>

      <div className="flex items-center my-10 gap-x-12">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img width={72} height={72} alt={team.name} src={team.src} />
            <p>{team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
