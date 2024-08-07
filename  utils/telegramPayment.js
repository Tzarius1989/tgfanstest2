import { WebApp } from '@twa-dev/sdk';

export function createInvoice(product) {
  return {
    title: product.name,
    description: product.description,
    currency: 'XTR',
    prices: [{label: product.name, amount: Math.round(product.price * 100)}],
    payload: JSON.stringify({product_id: product.id})
  };
}

export function requestPayment(invoice) {
  WebApp.showPopup({
    title: 'Подтверждение покупки',
    message: `Вы хотите купить ${invoice.title} за ${invoice.prices[0].amount / 100} Stars?`,
    buttons: [
      {id: 'pay', type: 'ok', text: 'Оплатить'},
      {type: 'cancel'},
    ]
  }, (buttonId) => {
    if (buttonId === 'pay') {
      WebApp.openInvoice(invoice, (status) => {
        if (status === 'paid') {
          console.log('Оплата прошла успешно');
          // Здесь можно добавить логику для обновления состояния приложения
        }
      });
    }
  });
}