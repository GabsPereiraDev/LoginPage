import { ShopkeeperProps } from './ShopkeeperProps.dto';
import { ProductProps } from './ProductProps.dto';

export interface ProductManagerProps {
    id: number;
    quantity: number;
    original_price: string;
    actual_price: string;
    mounting_option: string;
    parcelNumber: number;
    product: ProductProps;
    shopkeeper: ShopkeeperProps;
    isPromotion: boolean;
    promotion_start ?: string;
    promotion_end ?: string;
}