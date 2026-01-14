import TeamCard from "@/entities/team-card";
import { teamList } from "../model/data";

const Team = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-6">
      {teamList.map((team, index) => (
        <TeamCard key={index} {...team} centered={index === 2} />
      ))}
    </div>
  );
};

export default Team;
