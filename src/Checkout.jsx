import React, { useEffect } from 'react';

const Checkout = ({ totalAmount }) => {

  useEffect(() => {
    if (window.google) {
      onGooglePayLoaded();
    }
  }, [totalAmount]); // Re-run when totalAmount changes

  const onGooglePayLoaded = () => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Change to 'PRODUCTION' for live environment
    });

    // Remove the existing button if already present
    const existingButton = document.getElementById('googlePayButton');
    if (existingButton) {
      existingButton.remove();
    }

    const button = paymentsClient.createButton({
      onClick: onGooglePayButtonClicked,
    });

    document.getElementById('googlePayContainer').appendChild(button);
    button.id = 'googlePayButton'; // Add an ID to the button for reference
  };

  const onGooglePayButtonClicked = () => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleMerchantId', // Replace with real ID
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: 'YOUR_MERCHANT_ID', // Replace with your real merchant ID
        merchantName: 'Your Store Name',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: totalAmount.toString(), // Pass the correct total amount here
        currencyCode: 'INR',
        countryCode: 'IN',
      },
    };

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });

    paymentsClient.loadPaymentData(paymentDataRequest)
      .then(paymentData => {
        // Process the paymentData, e.g., send it to your server for verification
        console.log(paymentData);
      })
      .catch(error => {
        console.error('Payment failed:', error);
      });
  };

  return (
    <div id="googlePayContainer"></div>
  );
};

export default Checkout;
