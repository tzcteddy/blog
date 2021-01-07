export interface UserProps {

}
export interface RecommendItemProps {
  imageUrl:string,
  title:string,
  link:string
}
export interface RecommendProps {
  bgImageUrl:string,
  title:string,
  list:RecommendItemProps[]
}
export interface ArtItemProps {
  imageUrl:string,
  id:number,
  type?:number[],
  title:string,
  content:string,
  createTime:string
}
