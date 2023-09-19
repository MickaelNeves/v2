export interface Experience {
  id: string;
  period: string;
  metadata: {
    skills: string[];
    positions: string[];
  };
  description: string;
  descriptionBlock: {
    raw: {
      children: [type: string, children: any];
    };
  };
  company: string;
  url: string;
}

export interface Project {
  id: string;
  period: string;
  title: string;
  isFeatured: boolean;
  metadata: {
    skills: string[];
  };
  description: string;
  company: string;
  image: {
    id: string;
    url: string;
  };
  url: string;
  isShown: boolean;
}
