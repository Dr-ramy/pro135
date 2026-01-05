import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type AccordionItem = {
  id: string;
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  customComponent?: React.ReactNode; // NEW: Optional custom JSX (e.g., modal trigger)
};

type Props = {
  title: string;
  icon?: React.ReactNode;
  items: AccordionItem[];
};

export default function CustomAccordion({ title, icon, items }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      <Button
        variant="outline"
        className="w-full justify-between text-right px-4 py-2 rounded-xl flex items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </Button>

      {expanded && (
        <div className="mt-2 space-y-2">
          {items.map((item) =>
            item.customComponent ? (
              <div key={item.id}>{item.customComponent}</div>
            ) : (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start text-right px-4 py-2 rounded-md flex items-center gap-2"
                onClick={item.onClick}
              >
                {item.icon}
                <span className="text-sm truncate">{item.text}</span>
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
}
