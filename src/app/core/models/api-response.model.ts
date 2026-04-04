export interface ApiResponse<T> {
  data: T;
  message: string;
  timestamp: string;
  success: boolean;
}
 
export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
 