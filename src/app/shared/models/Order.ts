export interface Order {
  orderId: string;
  subscriptionId: string;
  // products: [{ product: string; quantity: number }];
  products: string;
  paymentMethod: string;
  deliveryDate: string;
  totalAmount: number;
  status: string;
}
