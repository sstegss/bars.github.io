export interface IBlock {
  blockNumber: number;
  theme: string;
  chilren: subtheme[];
  additions: IAddition[];
}
export interface subtheme {
  name: string;
  link: string;// можно будет добавить сюда ссылку на нужную страницу
  content?: string;
}

export interface IAddition{
  text: string;
  image: string;
  link: string;
}


export interface IPage{
  markdownContent: string | '';
  additions: IAddition[];
}

export interface ICheckBox{
  title: string;
  children: string;
}