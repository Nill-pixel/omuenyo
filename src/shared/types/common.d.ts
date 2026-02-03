// Common types used across the application

type NavItem = {
  label: string;
  href: string;
  onClick?: (id: string) => void;
};

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

type Problem = {
  title: string;
  desc: string;
};

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

type RequestStatus = "idle" | "loading" | "success" | "error";
