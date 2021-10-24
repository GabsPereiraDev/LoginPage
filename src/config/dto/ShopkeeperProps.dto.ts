import { OccupationAreaProps } from './OccupationArea.dto';
export interface ShopkeeperProps {
    id: number;
    document: string;
    name: string;
    email: string;
    occupation_area: Array<OccupationAreaProps>;
  }
  