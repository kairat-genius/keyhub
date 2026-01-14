import { cn } from "@/shared/utils/clsx";

interface TeamCardProps {
  id: number;
  name: string;
  role: string;
  centered?: boolean;
}

const TeamCard = ({ id, name, role, centered }: TeamCardProps) => {
  return (
      <div className={cn("flex flex-row items-center gap-4 md:flex-col md:items-center md:gap-0 md:text-center md:col-span-2 lg:col-span-2", centered && "md:col-start-2",)}>
        <div className="size-24 shrink-0 overflow-hidden rounded-lg md:mb-4 md:size-48">
          <img
            alt={name}
            src={`/team/${id}.webp`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 md:flex-initial">
          <h3 className="text-foreground text-lg font-semibold md:mb-1 md:text-xl">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm font-medium md:mb-3">
            {role}
          </p>
        </div>
      </div>
  );  
};

export default TeamCard;
