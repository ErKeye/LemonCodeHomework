export interface ShoppingCart {
  visible: boolean;
  setVisible: (value: boolean) => void;
  cartElementsIds: string[];
  addToCart: (elementId: string) => void;
  removeFromCart: (elementId: string) => void;
  emptyCart: ()=>void;
}
