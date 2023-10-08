export type Catgeory = {
  _id: string;
  name: string;
  slug: Slug;
};
export type Card = {
  _id: string;
  name: string;
  description: string;
  image: TImage;
  date: string;
  slugs: Slug;
  keyword:[];
  slug: string;
  author:Author;
  popular: boolean;
  related:Related[]
  body:[]
  tag: Catgeory[]
}
export type Related = {
  _id: string;
  name: string;
  description: string;
  image: TImage;
  date: string;
  slugs: Slug;
  slug: string;
  author:Author;
};
export type Author = {
  _id: String;
  name: string;
  description: string;
  date: string;
  slug: Slug;
  image: TImage;
};

//   slug

export type Slug = {
  _type: string;
  current: string;
};
// image
export type TImage = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};
