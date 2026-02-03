// Feature-specific types (Landing Page, Auth, etc.)

type LandingPageFeature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

type ProblemPoint = {
  title: string;
  desc: string;
};

type EmailSubscription = {
  email: string;
  subscribedAt?: Date;
  source?: string;
};

type AuthFormData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

type UserProfile = {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
};

type DiagnosisResult = {
  id: string;
  plantHealth: number;
  disease?: string;
  severity: "low" | "medium" | "high";
  recommendations: string[];
  imageUrl?: string;
};
