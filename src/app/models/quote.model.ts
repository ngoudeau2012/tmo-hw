// set up a quote model that reflects the expected quote object we get from the api
export interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

// set up a search response model that reflects the expected response we get from the api. Include an array of the quote model
export interface SearchResponse {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Quote[];
}
