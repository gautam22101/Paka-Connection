export type Review = {
  id: number;
  client_name: string;
  designation: string;
  company: string;
  rating: number;
  review_text: string;
  service: 'Web Development' | 'Digital Marketing' | 'ERP Solutions';
};

export const companyProfile = {
  name: 'Pakaconnection',
  shortName: 'PC',
  tagline: 'Connecting Technology, Marketing & Business Growth',
  about: 'Pakaconnection helps ambitious businesses transform fragmented operations into connected growth engines through digital strategy, web experiences, campaign performance, and ERP systems.',
  address: 'Remote / Pan India • Serving clients online and on-site as needed',
  phone: '+91 9313156136',
  email: 'nextconnectiondwe@gmail.com',
  whatsappNumber: '919313156136',
  businessHours: 'Mon - Fri: 9:00 AM - 6:30 PM',
};

export const teamMembers = [
  { name: 'Shivam Panday', role: 'Digital Marketing Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Anand Prajapati', role: 'ERP Solutions Lead', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80' },
  { name: 'Gautam Thakur', role: 'Website Development Lead', image: 'https://avatars.githubusercontent.com/u/153732306?v=4?s=400' },
];

export const siteReviews: Review[] = [
  {
    id: 1,
    client_name: 'Srinivasan R.',
    designation: 'Operations Head',
    company: 'Aarav Foods',
    rating: 5,
    review_text: 'Pakaconnection redesigned our sales and order workflow, and the new system helped us reduce delays by nearly 30% in under three months.',
    service: 'ERP Solutions',
  },
  {
    id: 2,
    client_name: 'Meera Shah',
    designation: 'Founder',
    company: 'NovaNest Interiors',
    rating: 5,
    review_text: 'Their team built a premium website that finally reflects the quality of our design work. We saw stronger enquiries and better lead conversion within weeks.',
    service: 'Web Development',
  },
  {
    id: 3,
    client_name: 'Vikram Rao',
    designation: 'Marketing Manager',
    company: 'TriStar Health',
    rating: 5,
    review_text: 'We were struggling with low-quality leads. Their digital campaign strategy improved our acquisition quality and added measurable growth across Google and Meta.',
    service: 'Digital Marketing',
  },
  {
    id: 4,
    client_name: 'Ananya Kulkarni',
    designation: 'Director',
    company: 'KhetiCare Logistics',
    rating: 5,
    review_text: 'The combination of ERP planning and business dashboards gave our leadership team full visibility across production and inventory decisions.',
    service: 'ERP Solutions',
  },
  {
    id: 5,
    client_name: 'Harish Menon',
    designation: 'Managing Partner',
    company: 'Beacon Retail',
    rating: 5,
    review_text: 'From strategy to execution, the team felt like an extension of our business. Their marketing plans were practical, measurable, and well aligned with our goals.',
    service: 'Digital Marketing',
  },
  {
    id: 6,
    client_name: 'Priya Natarajan',
    designation: 'COO',
    company: 'Urbanly Living',
    rating: 5,
    review_text: 'We needed a digital platform that could support both engagement and transactions. Pakaconnection delivered a polished experience with strong conversion focus.',
    service: 'Web Development',
  },
];
