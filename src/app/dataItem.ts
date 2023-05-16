export default interface DataItem {
  name: string;
  type: 'person' | 'company';
  email: string;
  phoneNo: string;
  companyName: string;
  address: string;
  children?: DataItem[];
  isSelected?: boolean;
  expanded?: boolean;
  hover?: boolean;
}
