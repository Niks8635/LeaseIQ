/**
 * DEMO DATA — FOR DEVELOPMENT AND MARKETING VISUALIZATION ONLY
 * Replace with real data from API in production
 */

export interface DashboardKPIs {
  totalUnits: number;
  activeResidents: number;
  collectionRate: number;
  pendingDues: number;
  openComplaints: number;
  visitorsToday: number;
  facilityUtilization: number;
  societyHealth: number;
}

export const dashboardKPIs: DashboardKPIs = {
  totalUnits: 450,
  activeResidents: 1247,
  collectionRate: 94.2,
  pendingDues: 847500,
  openComplaints: 12,
  visitorsToday: 38,
  facilityUtilization: 78,
  societyHealth: 92,
};

export const monthlyCollectionData = [
  { month: 'Jan', billed: 1200000, collected: 1150000 },
  { month: 'Feb', billed: 1200000, collected: 1120000 },
  { month: 'Mar', billed: 1200000, collected: 1180000 },
  { month: 'Apr', billed: 1250000, collected: 1200000 },
  { month: 'May', billed: 1250000, collected: 1220000 },
  { month: 'Jun', billed: 1250000, collected: 1190000 },
  { month: 'Jul', billed: 1250000, collected: 1210000 },
  { month: 'Aug', billed: 1300000, collected: 1250000 },
  { month: 'Sep', billed: 1300000, collected: 1280000 },
  { month: 'Oct', billed: 1300000, collected: 1270000 },
  { month: 'Nov', billed: 1300000, collected: 1290000 },
  { month: 'Dec', billed: 1300000, collected: 1240000 },
];

export const expenseBreakdown = [
  { category: 'Security', amount: 350000, percentage: 35 },
  { category: 'Cleaning', amount: 200000, percentage: 20 },
  { category: 'Maintenance', amount: 150000, percentage: 15 },
  { category: 'Utilities', amount: 150000, percentage: 15 },
  { category: 'Admin', amount: 100000, percentage: 10 },
  { category: 'Reserve', amount: 50000, percentage: 5 },
];

export const complaintsTrend = [
  { month: 'Jul', open: 15, resolved: 42 },
  { month: 'Aug', open: 12, resolved: 38 },
  { month: 'Sep', open: 18, resolved: 45 },
  { month: 'Oct', open: 8, resolved: 52 },
  { month: 'Nov', open: 14, resolved: 40 },
  { month: 'Dec', open: 12, resolved: 48 },
];

export const visitorsTrend = [
  { day: 'Mon', visitors: 45, deliveries: 62 },
  { day: 'Tue', visitors: 38, deliveries: 55 },
  { day: 'Wed', visitors: 42, deliveries: 58 },
  { day: 'Thu', visitors: 35, deliveries: 60 },
  { day: 'Fri', visitors: 50, deliveries: 75 },
  { day: 'Sat', visitors: 85, deliveries: 90 },
  { day: 'Sun', visitors: 95, deliveries: 85 },
];

export const facilityUsage = [
  { facility: 'Clubhouse', bookings: 45, utilization: 85 },
  { facility: 'Badminton', bookings: 120, utilization: 92 },
  { facility: 'Tennis Court', bookings: 60, utilization: 75 },
  { facility: 'Party Hall', bookings: 12, utilization: 40 },
  { facility: 'Swimming Pool', bookings: 250, utilization: 65 },
];

export const recentVisitors = [
  { name: 'Ramesh Kumar', flat: 'A-402', time: '10:15 AM', status: 'Inside', type: 'Guest' },
  { name: 'Amazon Delivery', flat: 'B-105', time: '10:05 AM', status: 'Left', type: 'Delivery' },
  { name: 'Suresh Plumber', flat: 'C-701', time: '09:45 AM', status: 'Inside', type: 'Service' },
  { name: 'Swiggy', flat: 'A-204', time: '09:30 AM', status: 'Left', type: 'Delivery' },
  { name: 'Neha Sharma', flat: 'B-502', time: '09:15 AM', status: 'Left', type: 'Guest' },
];

export const recentPayments = [
  { resident: 'Anil Kapoor', unit: 'A-101', amount: 4500, date: 'Today', status: 'Success' },
  { resident: 'Sunita Rao', unit: 'B-205', amount: 4500, date: 'Today', status: 'Success' },
  { resident: 'Vikram Singh', unit: 'C-304', amount: 4500, date: 'Yesterday', status: 'Pending' },
  { resident: 'Meera Patel', unit: 'A-502', amount: 5000, date: 'Yesterday', status: 'Success' },
  { resident: 'Rahul Verma', unit: 'B-801', amount: 4500, date: '2 days ago', status: 'Failed' },
];

export const recentComplaints = [
  { title: 'Water leaking in bathroom', unit: 'A-405', category: 'Plumbing', priority: 'High', status: 'Open', date: 'Today' },
  { title: 'Corridor light not working', unit: 'B-302', category: 'Electrical', priority: 'Low', status: 'In Progress', date: 'Yesterday' },
  { title: 'Lift noise', unit: 'Tower C', category: 'Maintenance', priority: 'Medium', status: 'Open', date: 'Yesterday' },
  { title: 'Garbage not collected', unit: 'A-201', category: 'Housekeeping', priority: 'Medium', status: 'Resolved', date: '2 days ago' },
  { title: 'Gym AC malfunctioning', unit: 'Clubhouse', category: 'Electrical', priority: 'High', status: 'Resolved', date: '3 days ago' },
];

export const floatingNotifications = [
  'Visitor Approved — A-402',
  'Payment Received — ₹4,500',
  'Complaint Resolved — Plumbing',
  'AI Insight Available',
  'Invoice Matched — Vendor #12',
];

export interface AIInsight {
  type: 'improvement' | 'warning' | 'info' | 'prediction';
  title: string;
  description: string;
  metric: string;
  source: string;
}

export const aiInsights: AIInsight[] = [
  {
    type: 'warning',
    title: 'Unusual Water Consumption',
    description: 'Tower B is showing 25% higher water usage compared to historical averages for this month.',
    metric: '+25% usage',
    source: 'Utility Sensors',
  },
  {
    type: 'prediction',
    title: 'Maintenance Due',
    description: 'Lift #2 in Tower A is predicted to require maintenance in the next 14 days based on usage patterns.',
    metric: '92% probability',
    source: 'Equipment Logs',
  },
  {
    type: 'improvement',
    title: 'Optimize Security Shifts',
    description: 'Reallocating 2 guards from Night to Evening shift could reduce visitor processing time by 30%.',
    metric: '-30% wait time',
    source: 'Visitor Analytics',
  },
  {
    type: 'info',
    title: 'Expense Anomaly Detected',
    description: 'Cleaning supplies expense is 15% higher than the monthly average for Q3.',
    metric: '₹12,500 variance',
    source: 'Financial Records',
  },
];

// Aliases for uppercase naming convention
export const DEMO_DASHBOARD_KPIS = dashboardKPIs;
export const DEMO_MONTHLY_COLLECTION = monthlyCollectionData;
export const DEMO_EXPENSE_BREAKDOWN = expenseBreakdown;
export const DEMO_COMPLAINTS_TREND = complaintsTrend;
export const DEMO_VISITORS_TREND = visitorsTrend;
export const DEMO_FACILITY_USAGE = facilityUsage;
export const DEMO_RECENT_VISITORS = recentVisitors;
export const DEMO_RECENT_PAYMENTS = recentPayments;
export const DEMO_RECENT_COMPLAINTS = recentComplaints;
export const DEMO_FLOATING_NOTIFICATIONS = floatingNotifications;
export const DEMO_AI_INSIGHTS = aiInsights;

