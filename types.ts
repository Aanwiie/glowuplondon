export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  note?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}
