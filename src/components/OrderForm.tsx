import React, { useState, useEffect } from 'react';
import { createOrder, getOrders, updateOrderStatus, OrderData } from '../services/api';

interface FormData {
  quantity: number;
  partNumber: string;
  productUrl: string;
  expectedCost: number;
  deliveryAddress: string;
  additionalNotes?: string;
}

const initialFormData: FormData = {
  quantity: 1,
  partNumber: '',
  productUrl: '',
  expectedCost: 0,
  deliveryAddress: '',
  additionalNotes: '',
};

export function OrderForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await getOrders();
      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.quantity || formData.quantity < 1) {
      newErrors.quantity = 1;
    }
    if (!formData.partNumber.trim()) {
      newErrors.partNumber = '';
    }
    if (!formData.productUrl.trim()) {
      newErrors.productUrl = '';
    }
    if (!formData.expectedCost || formData.expectedCost <= 0) {
      newErrors.expectedCost = 0;
    }
    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = '';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await createOrder(formData);
        setFormData(initialFormData);
        fetchOrders();
      } catch (error) {
        console.error('Failed to submit order:', error);
        alert('Failed to submit order. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let processedValue: string | number = value;

    if (type === 'number') {
      processedValue = value ? parseFloat(value) : 0;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  const toggleOrderComplete = async (orderId: string, currentStatus: boolean) => {
    try {
      await updateOrderStatus(orderId, !currentStatus);
      fetchOrders();
    } catch (error) {
      console.error('Failed to update order status:', error);
      alert('Failed to update order status. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity *
          </label>
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.quantity ? 'border-red-500' : ''
            }`}
          />
          {errors.quantity && (
            <p className="mt-1 text-sm text-red-600">Quantity is required and must be at least 1</p>
          )}
        </div>

        <div>
          <label htmlFor="partNumber" className="block text-sm font-medium text-gray-700">
            Part Number/Description *
          </label>
          <input
            type="text"
            id="partNumber"
            name="partNumber"
            value={formData.partNumber}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.partNumber ? 'border-red-500' : ''
            }`}
          />
          {errors.partNumber && (
            <p className="mt-1 text-sm text-red-600">Part Number/Description is required</p>
          )}
        </div>

        <div>
          <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700">
            Product URL *
          </label>
          <input
            type="url"
            id="productUrl"
            name="productUrl"
            value={formData.productUrl}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.productUrl ? 'border-red-500' : ''
            }`}
          />
          {errors.productUrl && (
            <p className="mt-1 text-sm text-red-600">Product URL is required</p>
          )}
        </div>

        <div>
          <label htmlFor="expectedCost" className="block text-sm font-medium text-gray-700">
            Expected Total Cost *
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              $
            </span>
            <input
              type="number"
              inputMode="decimal"
              id="expectedCost"
              name="expectedCost"
              min="0.01"
              step="0.01"
              value={formData.expectedCost}
              onChange={handleInputChange}
              className={`pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                errors.expectedCost ? 'border-red-500' : ''
              }`}
            />
          </div>
          {errors.expectedCost && (
            <p className="mt-1 text-sm text-red-600">Expected Cost must be greater than $0</p>
          )}
        </div>

        <div>
          <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700">
            Delivery Address *
          </label>
          <input
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              errors.deliveryAddress ? 'border-red-500' : ''
            }`}
          />
          {errors.deliveryAddress && (
            <p className="mt-1 text-sm text-red-600">Delivery Address is required</p>
          )}
        </div>

        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows={4}
            value={formData.additionalNotes}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit Order'}
          </button>
        </div>
      </form>

      {orders.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Status</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={order.completed}
                        onChange={() => toggleOrderComplete(order.id, order.completed)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.orderDate).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.id.slice(0, 8)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {order.quantity}x {order.partNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
