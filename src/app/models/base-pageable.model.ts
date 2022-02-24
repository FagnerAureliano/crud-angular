export interface BasePageable<T> {
  content?: T[];
  totalElements?: number;
  size?: number;
}
