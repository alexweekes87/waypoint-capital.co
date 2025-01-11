import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessCardProps {
  title: string;
  content: React.ReactNode;
}

const ProcessCard = ({ title, content }: ProcessCardProps) => (
  <Card className="bg-navy/5 border-none">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>{content}</CardContent>
  </Card>
);

interface ProcessSectionProps {
  title: string;
  description: string;
  cards: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  columns?: 2 | 3;
}

const ProcessSection = ({ title, description, cards, columns = 3 }: ProcessSectionProps) => {
  return (
    <div>
      <h2 className="text-3xl font-display font-semibold mb-8">{title}</h2>
      <p className="text-lg mb-6">{description}</p>
      <div className={`grid md:grid-cols-${columns} gap-6`}>
        {cards.map((card, index) => (
          <ProcessCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;