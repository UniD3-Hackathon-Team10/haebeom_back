export default class PostDto {
  id?: number;
  userId: number;
  type: number;
  title: string;
  content: string;
  time?: Date;
  country: string;
  city: string;
  latitude: number;
  longitude: number;
  picture?: string;
  likeCount?: number;
  createdAt?: Date;
}
