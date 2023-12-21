import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ product }) => {
  const subTotal = product.reduce((sum, p) => sum + p.price * p.amount, 0);
  const tax = taxRate * subTotal;
  const total = subTotal + tax + shipping;

  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax"></span>
            {tax.toFixed(2)}
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $<span className="total">{total.toFixed(2)}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
