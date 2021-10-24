import { ImageProductProps } from './ImageProductProps.dto';

export interface ProductProps {
    id: number;
    product_name: string;
    brand: string;
    color: string;
    reference: string;
    bar_code: string;
    height: string;
    category_id: number;
    width: string;
    weight: string;
    especification: string;
    images: Array<ImageProductProps>;
  }