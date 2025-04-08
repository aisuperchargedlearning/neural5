import { post, get, put } from '@aws-amplify/api';

export interface OrderData {
  id: string;
  quantity: number;
  partNumber: string;
  productUrl: string;
  expectedCost: number;
  deliveryAddress: string;
  additionalNotes?: string;
  completed: boolean;
  orderDate: string;
}

export async function createOrder(orderData: Omit<OrderData, 'id' | 'completed' | 'orderDate'>) {
  try {
    const response = await post({
      apiName: 'OrdersAPI',
      path: '/orders',
      options: {
        body: orderData,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    return response;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function getOrders() {
  try {
    const response = await get({
      apiName: 'OrdersAPI',
      path: '/orders',
      options: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    return response as OrderData[];
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}

export async function updateOrderStatus(orderId: string, completed: boolean) {
  try {
    const response = await put({
      apiName: 'OrdersAPI',
      path: `/orders/${orderId}`,
      options: {
        body: { completed },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    return response;
  } catch (error) {
    console.error('Error updating order status:', error);
    throw error;
  }
}